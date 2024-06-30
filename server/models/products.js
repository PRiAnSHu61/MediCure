const { default: mongoose } = require("mongoose");
const productSchema = new mongoose.Schema({
    quantity: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    expiryDate: {
      type: Date,
      required: true
    },
    productName: {
      type: String,
      required: true
    }
  });
  
  const Product = mongoose.model('Product', productSchema);