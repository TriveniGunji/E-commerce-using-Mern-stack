import React from 'react';
import './Breadcrum.css';
import Breadcrum_icon from '../Assets/Breadcrum_icon.png';

const Breadcrum = ({ products }) => {
  if (!products) return null; // Don't render if product is undefined

  return (
    <div className='breadcrum'>
      Home <img src={Breadcrum_icon} alt='' /> Shop <img src={Breadcrum_icon} alt='' />
      {products.category} <img src={Breadcrum_icon} alt='' /> {products.name}
    </div>
  );
};

export default Breadcrum;
