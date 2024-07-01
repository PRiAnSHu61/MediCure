const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const ProductModel = require('./models/products'); // Import ProductModel
const OrderModel = require('./models/order'); // Import OrderModel

const app = express();
const port = 4001;

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://prianshusharma993:cQ8rWPQ1kqmBgQep@medicure.gp2lbji.mongodb.net/medicure?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Route to handle adding product to cart
app.post('/addToCart', async (req, res) => {
    const { price, quantity, description } = req.body;
    const newProduct = new ProductModel({ price, quantity, description });

    try {
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        console.error('Error adding product to cart:', error);
        res.status(500).json({ error: 'Failed to add product to cart' });
    }
});

// Route to handle creating a new order
app.post('/createOrder', async (req, res) => {
    const { items, total } = req.body;

    console.log('Received Order Data:', req.body); // Debugging line

    const newOrder = new OrderModel({ items, total });

    try {
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        console.error('Error creating order:', error.message);
        console.error(error.stack);
        res.status(500).json({ error: 'Failed to create order', details: error.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
