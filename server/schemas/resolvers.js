const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category, Order, Comment, Blog, Contact, Search} = require('../models');
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
      userResponses: async (_, args, context) => {
        // Check if the user is logged in
        if (!context.user) {
          throw new Error('You must be logged in to view responses');
        }
      
        // Fetch and return responses associated with the logged-in user
        try {
          const userSearches = await Search.find({ userId: context.user._id });
          return userSearches.map(search => {
            return {
              id: search._id.toString(), // Map MongoDB '_id' to GraphQL 'id'
              query: search.query,
              response: search.response,
              createdAt: search.createdAt.toISOString(),
            };
          });
        } catch (err) {
          console.error(err);
          throw new Error('Error fetching user responses');
        }
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
          // Check if the user is logged in
          if (!context.user) {
            throw new Error('You must be logged in to use this feature');
          }
        
          // Find the user in the database using the ID from the context
          const user = await User.findById(context.user._id);
          if (!user) {
            throw new Error('User not found');
          }
        
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
        
            // Create a new Search document with the user's ID
            const search = new Search({
              query: prompt,
              response: chatResponse,
              userId: user._id // Include the user ID
            });
            await search.save();
        
            // Update the user's API call count and last call date
            user.apiCallCount += 1;
            user.lastApiCallDate = new Date();
            await user.save();
        
            return { reply: chatResponse };
          } catch (error) {
            console.error('Error:', error.message);
            throw new Error('Error processing ChatGPT query');
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

          deleteUserResponse: async (_, { responseId }, context) => {
          if (!context.user) {
            throw new Error('Not authenticated');
          }
        
          const user = await User.findById(context.user._id);
          if (!user) {
            throw new Error('User not found');
          }
        
          // Assuming 'Search' is the model where responses are stored
          const response = await Search.findById(responseId);
          if (!response) {
            throw new Error('Response not found');
          }
        
          // Additional check if the response belongs to the user
          if (response.userId.toString() !== context.user._id.toString()) {
            throw new Error('User not found or user has no responses');
          }
        
          // Proceed with deletion
          await Search.findByIdAndDelete(responseId);
        
          // Return a success message or similar
          return 'Response deleted successfully';
        }
        
        ,

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
    