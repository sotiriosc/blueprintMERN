// resolvers.js
const { typeDefs } = require('./typeDefs');

const resolvers = {
    Query: {
      blogs: async () => await Blog.find(),
    },
    Mutation: {
      addBlog: async (_, { title, content, author }) => {
        const newBlog = new Blog({ title, content, author });
        return await newBlog.save();
      },
      addComment: async (_, { blogId, content, author }) => {
        return await Blog.findByIdAndUpdate(blogId, { $push: { comments: { content, author } } }, { new: true });
      },
    },
  };
  
  module.exports = resolvers;