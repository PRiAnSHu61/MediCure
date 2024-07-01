import React, { useEffect, useState } from 'react';
import TestImage1 from '../assets/stomachache.jpg';
import TestImage2 from '../assets/migrainetablets.jpg';
import TestImage3 from '../assets/paracetamol.jpg';
import TestImage4 from '../assets/chestoncold.jpg';
import NavBar from './Navbar';
import Star from '../assets/Star.svg';
import Loc from '../assets/Loc.svg';
import './Css/Product.css';
import { Link } from 'react-router-dom';

const images = [TestImage1, TestImage2, TestImage3, TestImage4];
const medicineNames = ['Paracetamol', 'Aspirin', 'Ibuprofen', 'Amoxicillin', 'Cetirizine'];
const companyNames = ['PharmaCorp', 'MediHealth', 'Wellness Labs', 'BioPharm', 'HealthPlus'];
const locations = ['New York, NY', 'Los Angeles, CA', 'Chicago, IL', 'Houston, TX', 'Phoenix, AZ'];

const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];
const getRandomPrice = () => `$${(Math.floor(Math.random() * 41) + 10).toFixed(2)}`;

const ProductDescription = ({ imageSrc, price, medicineName, companyName, location }) => {
  const [image, setImage] = useState(imageSrc);
  const [randomPrice, setRandomPrice] = useState(price);
  const [randomMedicineName, setRandomMedicineName] = useState(medicineName);
  const [randomCompanyName, setRandomCompanyName] = useState(companyName);
  const [randomLocation, setRandomLocation] = useState(location);

  useEffect(() => {
    if (!imageSrc) {
      setImage(getRandomElement(images));
    }
    if (!price) {
      setRandomPrice(getRandomPrice());
    }
    if (!medicineName) {
      setRandomMedicineName(getRandomElement(medicineNames));
    }
    if (!companyName) {
      setRandomCompanyName(getRandomElement(companyNames));
    }
    if (!location) {
      setRandomLocation(getRandomElement(locations));
    }
  }, [imageSrc, price, medicineName, companyName, location]);

  return (
    <div>
        <NavBar />
    <div className='Product_Description'>
      <Link to="/" className='Close'>X</Link>
      <div className='Section1'>
        <div className='Product_Image'>
          <img src={image} alt='Product' />
        </div>
        <div className='Product_Contact'>
          <div className='Product_Name'>{randomMedicineName}</div>
          <div className='Rating'>
            <div className='Stars'>
              <img src={Star} alt='stars' />
              <img src={Star} alt='stars' />
              <img src={Star} alt='stars' />
              <img src={Star} alt='stars' />
            </div>
            <div className='SubHeading'>Rating</div>
          </div>
        </div>
      </div>
      <div className='Section2'>
        <div className='Location'>
          <img src={Loc} alt='' />
          <span>{randomLocation}</span>
        </div>
        <div className='Price'>{randomPrice}</div>
        <div className='JobType'>{randomCompanyName}</div>
      </div>
      <div className='Section3'>
        <div className='Description'>Medicine Description</div>
        <div className='ExplainedDescription'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a tempor nulla, id vehicula nibh. Nulla eu magna nisl. Etiam ut vestibulum sapien, vitae ornare velit. Ut orci ligula, faucibus et dui mattis, maximus fermentum leo. Nunc porttitor elit quis purus cursus, nec consectetur justo imperdiet. Ut quis nibh id turpis suscipit congue a eu augue. Proin risus sapien, luctus non lorem non, interdum imperdiet metus. Etiam hendrerit dictum ipsum ac rutrum. Morbi ut odio non sapien dictum consequat vel vel dolor. Morbi consequat nibh vel libero conse
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductDescription;
