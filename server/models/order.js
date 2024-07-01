const mongoose = require('mongoose');
const Product = require('./products'); // Ensure correct path if Product is imported here

const orderSchema = new mongoose.Schema({
  items: [
    {
      name: String,
      price: Number,
      quantity: Number,
      description: String
    }
  ],
  total: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
