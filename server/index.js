// Import the express module
const express = require('express');
var cors = require('cors');
const mongoose = require('mongoose');

// Create an instance of an Express app
const app = express();

// Define a port number
const port = 4000;
app.use(cors());

mongoose.connect('mongodb+srv://prianshusharma993:cQ8rWPQ1kqmBgQep@medicure.gp2lbji.mongodb.net/?retryWrites=true&w=majority&appName=medicure')
  .then(() => console.log('Connected!'));


// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//     host     : '127.0.0.1',
//     port     : '5000',
//     user     : 'medicure',
//     password : 'medicure@1234',
//     database: 'sys'
// });
 
// connection.connect(function(err) {
//     if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
// }
 
// console.log('connected as id ' + connection.threadId);
// });

// Define a route for the root URL
app.post('/', async (req, res) => {
    const { quantity, description, expiryDate, productName } = req.body;
    const randomProduct = new Product({
        quantity,
        description,
        expiryDate,
        productName
      });
    
      try {
        const result = await randomProduct.save();
        res.status(201).json({ message: 'Product data inserted', result });
      } catch (error) {
        res.status(500).json({ message: 'Error inserting data', error });
      }
});
app.get('/', (req, res) => {
  res.send('Hello, world from get!');
});

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
