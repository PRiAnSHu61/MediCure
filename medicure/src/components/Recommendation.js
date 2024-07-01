import React, { useContext } from 'react';
import TestImage1 from '../assets/stomachache.jpg';
import TestImage2 from '../assets/migrainetablets.jpg';
import TestImage3 from '../assets/paracetamol.jpg';
import TestImage4 from '../assets/chestoncold.jpg';
import './Css/Recommendation.css';
import { CartContext } from '../context/cartContext';
import RecommendationCard from './recommendationCard';

const imageSources = [TestImage1, TestImage2, TestImage3, TestImage4];
const medicineNames = [
  'Paracetamol',
  'Aspirin',
  'Ibuprofen',
  'Amoxicillin',
  'Loratadine',
  'Omeprazole',
  'Metformin',
  'Ciprofloxacin',
  'Azithromycin',
  'Doxycycline',
  'Fluconazole',
  'Levofloxacin',
  'Hydrochlorothiazide',
  'Amlodipine',
  'Metoprolol',
  'Losartan',
  'Gabapentin',
  'Lisinopril',
  'Simvastatin',
  'Atorvastatin'
];
const getRandomImage = () => {
  return imageSources[Math.floor(Math.random() * imageSources.length)];
};

const getRandomPrice = () => {
  const min = 10;
  const max = 50;
  return `$${(Math.floor(Math.random() * (max - min + 1)) + min).toFixed(2)}`;
};

const getRandomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const Recommendation = () => {
  const { addToCart } = useContext(CartContext);

  const recommendations = Array(20).fill().map((_, index) => ({
    id: index.toString(),
    imageSrc: getRandomImage(),
    price: getRandomPrice(),
    description: `${getRandomElement(medicineNames)}`,
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
