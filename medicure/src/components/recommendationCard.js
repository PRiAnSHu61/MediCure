import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Location from '../assets/Location.svg';
import './Css/Recommendation.css';

const RecommendationCard = ({ item, addToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  const handleAddToCart = () => {
    if (quantity > 0) {
      console.log('handleAddToCart called with item:', item, 'Quantity:', quantity); // Debugging line
      addToCart({ ...item, quantity });
      setQuantity(0);
    }
  };

  return (
    <div className='Recommendation_Card'>
      <Link to="/ProductPage" className='Recommendation_Card_Link'>
        <div className='Recommendation_Card_Icon'>
          <img src={item.imageSrc} alt='Product' />
        </div>
        <div className='Recommendation_Card_Description'>
          <div className='Price'>{item.price}</div>
          <div className='Job_Description'>{item.description}</div>
          <div className='Job_Location'>
            <img src={Location} alt='Location' />
            <span>{item.company}</span>
          </div>
        </div>
      </Link>
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
