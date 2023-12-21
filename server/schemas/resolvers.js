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
            return { token, user: { ...user.toObject(), password: undefined } };
        },

        addOrder: async (parent, { products }, context) => {
            if (!context.user) {
                throw new AuthenticationError('Not logged in');
            }
            const order = new Order({ products });
            await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });
            return order;
        },

        sendChatGptQuery: async (_, { prompt }, context) => {
            if (!context.user) {
                throw new Error('You must be logged in to use this feature');
            }
            const chatResponse = await chatGpt(prompt);
            const search = new Search({
              query: prompt,
              response: chatResponse,
              userId: context.user._id
            });
            await search.save();
            return { reply: chatResponse };
        },

        updateUser: async (parent, args, context) => {
            if (!context.user) {
                throw new AuthenticationError('Not logged in');
            }
            return await User.findByIdAndUpdate(context.user._id, args, { new: true, select: '-password' });
        },

        updateProduct: async (parent, { _id, quantity }) => {
            const decrement = Math.abs(quantity) * -1;
            return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
        },

        login: async (parent, { email, password }) => {
            email = email.toLowerCase();
            const user = await User.findOne({ email }).select('+password');
            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return { token, user: { ...user.toObject(), password: undefined } };
        },

        deleteUserResponse: async (_, { responseId }, context) => {
            if (!context.user) {
                throw new Error('Not authenticated');
            }
            await Search.findByIdAndDelete(responseId);
            return 'Response deleted successfully';
        },

        fetchUserProfile: async (_, args, context) => {
            if (!context.user) {
                throw new AuthenticationError('Not authenticated');
            }
            return await User.findById(context.user._id).select('-password');
        },

        createSubscription: async (_, { customerId, priceId }, context) => {
            if (!context.user) {
                throw new AuthenticationError('You must be logged in to create a subscription');
            }
            const subscription = await stripe.subscriptions.create({
              customer: customerId,
              items: [{ price: priceId }]
            });
            const updatedUser = await User.findByIdAndUpdate(
              context.user._id,
              { isSubscribed: true },
              { new: true }
            );
            return updatedUser;
        },

        addComment: async (parent, { firstName, commentText, blogId, userId }, context) => {
            const comment = new Comment({
                firstName,
                commentText,
                blogId,
                userId
            });
            await comment.save();
            const blog = await Blog.findById(blogId);
            blog.comments.push(comment);
            await blog.save();
            return comment;
        },

        submitContactForm: async (parent, { name, email, message }) => {
            const contact = new Contact({ name, email, message });
            await contact.save();
            return contact;
        },

        // ... (Any other mutations you might have)
    },

    // ... (Other types like Subscription if you have them)
};

module.exports = resolvers;




    