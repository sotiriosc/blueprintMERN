const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;


{
  "name": "Buy me a Coffee",
  "description": "Show your support by buying me a coffee!",
  "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
  "price": 3.00,
  "quantity": 100000,
  "category": "64a17036a4fd44a00243ab01"
}
