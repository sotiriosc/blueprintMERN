const { User, Blog, Comment, Product } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { userId }) => {
      return User.findById(userId);
    },
    blogs: async () => {
      return Blog.find();
    },
    blog: async (parent, { blogId }) => {
      return Blog.findById(blogId);
    },
    comments: async () => {
      return Comment.find();
    },
    comment: async (parent, { commentId }) => {
      return Comment.findById(commentId);
    },
    products: async () => {
      return Product.find();
    },
    product: async (parent, { productId }) => {
      return Product.findById(productId);
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findById(context.user._id);
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
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
    addBlog: async (parent, { title, content }, context) => {
      if (context.user) {
        const blog = await Blog.create({
          title,
          content,
          author: context.user._id,
        });

        await User.findByIdAndUpdate(context.user._id, {
          $addToSet: { blogs: blog._id },
        });

        return blog;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addComment: async (parent, { blogId, content }, context) => {
      if (context.user) {
        const comment = await Comment.create({
          content,
          author: context.user._id,
          blog: blogId,
        });

        await User.findByIdAndUpdate(context.user._id, {
          $addToSet: { comments: comment._id },
        });

        await Blog.findByIdAndUpdate(blogId, {
          $addToSet: { comments: comment._id },
        });

        return comment;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addProduct: async (parent, { description, price, imageUrl }, context) => {
      if (context.user && context.user.admin) {
        const product = await Product.create({
          description,
          price,
          imageUrl,
        });

        return product;
      }

      throw new AuthenticationError('You need to be an admin!');
    },
  },
};

module.exports = resolvers;
