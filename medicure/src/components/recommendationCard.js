import React, { useState, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../context/cartContext'; // Assuming you have a CartContext for managing the cart state

const RecommendationCard = ({ item }) => {
    const [quantity, setQuantity] = useState(0);
    const { addToCart } = useContext(CartContext); // Use context to manage cart state

    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

    const handleAddToCart = async () => {
        if (quantity > 0) {
            try {
                const response = await axios.post('http://localhost:4001/addToCart', {
                    price: parseFloat(item.price.replace(/[^0-9.-]+/g, "")), // Remove currency symbols
                    quantity: quantity,
                    description: item.description
                });
                console.log('Product added to cart:', response.data);
                alert('Product added to cart successfully!');
                addToCart({ ...item, quantity });
                setQuantity(0);
            } catch (error) {
                console.error('Error adding product to cart:', error);
                alert('Failed to add product to cart');
            }
        }
    };

    return (
        <div className='Recommendation_Card'>
            <div className='Recommendation_Card_Icon'>
                <img src={item.imageSrc} alt='Product' />
            </div>
            <div className='Recommendation_Card_Description'>
                <div className='Price'>{item.price}</div>
                <div className='Job_Description'>{item.description}</div>
            </div>
            {quantity === 0 ? (
                <button className='Add_To_Cart_Button' onClick={incrementQuantity}>
                    Add to Cart
                </button>
            ) : (
                <div className='Quantity_Selector'>
                    <button className='Quantity_Button' onClick={decrementQuantity}>-</button>
                    <span className='Quantity'>{quantity}</span>
                    <button className='Quantity_Button' onClick={incrementQuantity}>+</button>
                    <button className='Add_To_Cart_Button' onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                </div>
            )}
        </div>
    );
};

export default RecommendationCard;



