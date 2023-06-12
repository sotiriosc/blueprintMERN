const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
  },
});

const Product = model('Product', ProductSchema);

module.exports = Product;
