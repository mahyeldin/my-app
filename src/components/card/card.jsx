import React from 'react'
import './card.css'
import { useState } from 'react';
import image1 from '../../img/a264d9400c9b7b0a6f1040c10c866ca2.jpeg'
import { Link } from 'react-router-dom';


function Card( {location , rating , desc , date ,price ,image , id}) {

  const images = [
    image,
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    image1,
    "https://images.unsplash.com/photo-1600585153840-668a6d52b0ae",
    "https://images.unsplash.com/photo-1600585154501-0c3a3aa4536c",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="card">
      <div className="card-image">
        <img src={images[activeIndex]} alt="Apartment" />
        <div className="heart">♡</div>

        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            ></span>
          ))}
        </div>
      </div>

      <div className="card-content">
        <div className="card-header">
         <Link to='/hotel/1'style={{ textDecoration: 'none' ,color:'black'}} ><h3> {location}</h3></Link> 
          <div className="rating">
            <span className="star">★</span>
            <span>{rating}</span>
          </div>
        </div>
        <p className="subtext">{desc}</p>
        <p className="subtext">{date}</p>
        <p className="price">{price} </p>
      </div>
    </div>
  );
};


export default Card