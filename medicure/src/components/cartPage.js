import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './Css/cartPage.css';
import { CartContext } from '../context/cartContext';

const CartPage = () => {
  const { cartItems, clearCart } = useContext(CartContext);

  useEffect(() => {
    console.log('Cart Items:', cartItems); // Debugging line
  }, [cartItems]);

  const handleBuyNow = async () => {
    try {
      const total = cartItems.reduce((total, item) => {
        const itemPrice = parseFloat(item.price.replace('$', '')); // Remove $ sign and parse as float
        return total + itemPrice * item.quantity;
      }, 0);
  
      const orderData = {
        items: cartItems.map(item => ({
          name: item.name,
          price: parseFloat(item.price.replace('$', '')), // Ensure price is parsed as a number
          quantity: item.quantity,
          description: item.description
        })),
        total: total.toFixed(2),
      };
    
      console.log('Order Data:', orderData); // Debugging line

      const response = await axios.post('http://localhost:4001/createOrder', orderData);

      console.log('Order created:', response.data);
      alert('Order placed successfully!');
      clearCart();
    } catch (error) {
      console.error('Error creating order:', error.response ? error.response.data : error.message);
      alert('Failed to place order');
    }
  };

  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice = parseFloat(item.price.replace(/[^0-9.-]+/g, "")); // Remove currency symbols
    return total + itemPrice * item.quantity;
  }, 0);

  return (
    <div>
      <Navbar />
      <div className="cart-page">
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  <img src={item.imageSrc} alt={item.description} />
                  <div>
                    <p>{item.description}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: {item.price}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="Order_Total">
              <p>Total: ${totalPrice.toFixed(2)}</p>
            </div>
            <button className="Clear_Cart_Button" onClick={clearCart}>
              Clear Cart
            </button>
            <button className="Buy_Now_Button" onClick={handleBuyNow}>
              Buy Now
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
