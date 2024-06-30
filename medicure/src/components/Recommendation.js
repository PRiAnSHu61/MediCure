import React, { useContext } from 'react';
import TestImage from '../assets/TestImage.png';
import './Css/Recommendation.css';
import { CartContext } from '../context/cartContext';
import RecommendationCard from './recommendationCard';

const Recommendation = () => {
  const { addToCart } = useContext(CartContext);

  const recommendations = Array(20).fill().map((_, index) => ({
    id: index.toString(), // Ensure each item has a unique ID
    imageSrc: TestImage,
    price: '$10',
    description: 'Medicine for -------',
    location: 'Location',
    company: 'Company -----',
  }));

  return (
    <div className='Recomendation_Section'>
      <div className='Recommendation_Section_Heading'>
        Fresh Recommendations
      </div>
      <div className='Recommendation_Section_Container'>
        {recommendations.map((item, index) => (
          <RecommendationCard
            key={index}
            item={item}
            addToCart={addToCart}
          />
        ))}
      </div>
      <div className='Recommendation_Section_ViewAll'>
        More
      </div>
      <div className='SeprationLine'></div>
    </div>
  );
};

export default Recommendation;
