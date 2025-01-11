import React from 'react'
import "./Card3.css"

const Card3 = ({title,image1,para,Rs,image2,image3,image4}) => {
  return (
    <div className='P-Container'>
        <div className='title-container '>
            <b>{title}</b>
        </div>
        <div className='img-wrapper'>
            <img src={image1}></img>
        </div>
        <div className='para-wrapper'>
            <p className='child-para'>
                {para}
            </p>
            <b className='child-Rs'>
                {Rs}
            </b>
        </div>
        <div className='button-wrapper'>
           <div className='common'>
             <button className='button-con'>
                 <img className='img-wrap' src={image1}></img>
              </button>
           </div>
           <div className='common'>
             <button className='button-con'>
                <img src={image2}></img>
              </button>
           </div>
           <div className='common'>
              <button className='button-con'>
                 <img src={image3}></img> 
              </button>
           </div>
           <div className='common'>
              <button className='button-con'>
                 <img src={image4}></img> 
               </button>
           </div>
           
           
           
            
        </div>
    </div>
  )
}

export default Card3;
