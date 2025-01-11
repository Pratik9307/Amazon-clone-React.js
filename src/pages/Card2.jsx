import React from 'react'
import "./Card2.css"
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

 const Card2 = ({title,image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12}) => {
  return (
    <div className='wpp'>
            <div className='Wrapper '>
               <div className=' child-w flex '>
                <b className='card-title'>{title}</b>
                <p className='card-Para'>See all offer</p> 
               </div>
   
        <div className=' img-container'>
        <img src={image1}></img>
        <img src={image2}></img>
          <img src={image3}></img>
          <img src={image4}></img>
          <img src={image5}></img>
          <img src={image6}></img>
          <img src={image7}></img>
          <img src={image8}></img>
        <img src={image9}></img>
        <img src={image10}></img>
        <img src={image11}></img>
        <img src={image12}></img>
        </div>

        <div className='btn-wrapper'>
        <button className="btn-container"  >
          <MdArrowBackIosNew />
        </button>

        <button className='btn-container1'>
          <MdArrowForwardIos />
        </button>
        </div>
        
        
      </div>
    </div>

   
  )
}
export default Card2;  
