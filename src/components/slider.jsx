import React, { useState } from 'react'
import "./slider.css"
import image1 from '../assets/img1.jpg'
import image2 from '../assets/img2.jpg'
import image3 from '../assets/img3jpg.jpg'
import image4 from '../assets/img4.jpg'
import image5 from '../assets/img5.jpg'
import image6 from '../assets/img6.jpg'
import image7 from '../assets/img7.jpg'

// import { MdArrowBackIosNew } from "react-icons/md";
// import { MdArrowForwardIos } from "react-icons/md";




const images = [image1, image2, image3,image4, image5, image6,image7];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };



  return (
    <div className="slider-container">
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="slider-image"
          />
        ))}
      </div>
      <button className="slider-button left" onClick={prevImage}>❮</button>
      <button className="slider-button right" onClick={nextImage}>❯</button>
      
    </div>
  );
};

export default Slider;














 

    
 
  

  



 
       

     
    
   
   

