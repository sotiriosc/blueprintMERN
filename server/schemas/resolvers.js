const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category, Order, Comment, Blog, Contact} = require('../models');
const Search = require('../models/Search'); // Import the Search model
const chatGpt = require('../utils/chatGpt');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const resolvers = {
    Query: {
      categories: async () => {
        return await Category.find();
      },
      products: async (parent, { category, name }) => {
        const params = {};
  
        if (category) {
          params.category = category;
        }
  
        if (name) {
          params.name = {
            $regex: name
          };
        }
  
        return await Product.find(params).populate('category');
      },
      product: async (parent, { _id }) => {
        return await Product.findById(_id).populate('category');
      },
      user: async (parent, args, context) => {
        if (context.user) {
          const user = await User.findById(context.user._id).populate({
            path: 'orders.products',
            populate: 'category'
          });
  
          user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
  
          return user;
        }
  
        throw new AuthenticationError('Not logged in');
      },
      order: async (parent, { _id }, context) => {
        if (context.user) {
          const user = await User.findById(context.user._id).populate({
            path: 'orders.products',
            populate: 'category'
          });
  
          return user.orders.id(_id);
        }
  
        throw new AuthenticationError('Not logged in');
      },
      checkout: async (parent, args, context) => {
        const url = new URL(context.headers.referer).origin;
        const order = new Order({ products: args.products });
        const line_items = [];
  
        const { products } = await order.populate('products');
  
        for (let i = 0; i < products.length; i++) {
          const product = await stripe.products.create({
            name: products[i].name,
            description: products[i].description,
            images: [`${url}/images/${products[i].image}`]
          });
  
          const price = await stripe.prices.create({
            product: product.id,
            unit_amount: products[i].price * 100,
            currency: 'cad',
          });
  
          line_items.push({
            price: price.id,
            quantity: 1
          });
        }
  
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items,
          mode: 'payment',
          success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${url}/`
        });
  
        return { session: session.id };
      },
      blog: async (parent, { _id }) => {
        const blog = await Blog.findById(_id).populate('comments');
      
        // Convert to a regular JavaScript object
        let blogObj = blog.toObject();
      
        // Modify comments
        blogObj.comments = blogObj.comments.map(comment => ({
          ...comment,
          createdAt: new Date(comment.createdAt).toISOString(),
        }));
      
        return blogObj;
      }
      
      
    },
    Mutation: {
        
        addUser: async (parent, args) => {
          const user = await User.create(args);
          const token = signToken(user);
    
          return { token, user };
        },
        addOrder: async (parent, { products }, context) => {
          console.log(context);
          if (context.user) {
            const order = new Order({ products });
    
            await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });
    
            return order;
          }
    
          throw new AuthenticationError('Not logged in');
        },

        sendChatGptQuery: async (_, { prompt }, context) => {
          if (!context.user) {
            throw new Error('You must be logged in to use this feature');
          }
        
          const user = await User.findById(context.user._id);
        

        
          // Check if the lastApiCallDate is today
          const today = new Date();
          today.setHours(0, 0, 0, 0);
        
          if (!user.lastApiCallDate || user.lastApiCallDate < today) {
            // Reset count if the last call was before today
            user.apiCallCount = 0;
            user.lastApiCallDate = today;
          }
        
          // Check if the user has exceeded the limit
          if (user.apiCallCount >= 3) {
            throw new Error('API call limit reached. Please wait until tomorrow.');
          }
        
          try {
            const chatResponse = await chatGpt(prompt);
        
            // Create a new Search document
            console.log("Prompt:", prompt);
            const search = new Search({ query: prompt });
            await search.save();

        
            // Update the user's API call count, last call date, and add the search ID
            await User.findByIdAndUpdate(context.user._id, {
              $push: { searches: search._id }, // Corrected to search._id
              $inc: { apiCallCount: 1 },
              lastApiCallDate: new Date()
            });
        
            return { reply: chatResponse };
          } catch (error) {
            if (error.response) {
              // Log the full error response from the ChatGPT API
              console.error('ChatGPT API Error:', error.response.data);
            } else {
              // Log other types of errors
              console.error('Error:', error.message);
            }
            throw error;
          }
          
          
          
          
        },

        updateUser: async (parent, args, context) => {
          if (context.user) {
            return await User.findByIdAndUpdate(context.user._id, args, { new: true });
          }
    
          throw new AuthenticationError('Not logged in');
        },
        updateProduct: async (parent, { _id, quantity }) => {
          const decrement = Math.abs(quantity) * -1;
    
          return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
        },
        login: async (parent, { email, password }) => {
          const user = await User.findOne({ email });
    
          if (!user) {
            throw new AuthenticationError('Incorrect credentials');
          }
    
          const correctPw = await user.isCorrectPassword(password);
    
          if (!correctPw) {
            throw new AuthenticationError('Incorrect credentials');
          }
    
          const token = signToken(user);
    
          return { token, user };
        },
        addComment: async (parent, { firstName, commentText, blogId, userId }, context, info) => {
          // create a new comment
          const comment = new Comment({
              firstName,
              commentText,
              blogId,
              userId,
          });
          // save the comment to the database
          await comment.save();
        
          // find the blog by its id and push the new comment to its comments array
          const blog = await Blog.findById(blogId);
          if (!blog) {
            throw new Error('Blog not found');
          }
          blog.comments.push(comment);
          await blog.save();
        
          const user = await User.findById(context.user._id);
          if (!user) {
            throw new Error('User not found');
          }
          user.comments.push(comment);
          await user.save();
        
          // return the new comment
          return comment;
        }
        ,
      submitContactForm: async (parent, { name, email, message }) => {
        const contact = new Contact({ name, email, message });
        await contact.save();
        return contact;
      }
      
    },

    
  };

module.exports = resolvers;
    