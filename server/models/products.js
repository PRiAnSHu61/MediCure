const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    price: Number,
    quantity: Number,
    description: String
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

