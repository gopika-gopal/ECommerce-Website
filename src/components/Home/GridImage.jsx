import React from 'react';
import { products } from '../../data/localization'; // Assuming 'products' is an array of objects with 'image' properties

const GridImage = () => {
  // Slice the products array to get the first 6 items
  const gridItems = products.slice(0, 6);

  return (
    <div className="grid-img-container">
      {gridItems.map((item, index) => (
        <div key={index} className="grid-img-item">
          <a href="#">
            <div className="grid-img" style={{ backgroundImage: `url(${item.image})` }} />
          </a>
          <div className="button-container">
          <a href="#" className="btn">Explore</a>
          </div>          
        </div>
      ))}
    </div>
  );
};

export default GridImage;

