import React from 'react'
import "./Card.css"


function Card ({  title,image1,image2,image3,image4,para1,para2,para3,para4}) {  
  return (
   
   
         <div className='P-Container border'>
            <div className='class'>
                 <h1 className='title-name '>
                    <b className=' justify-center'> {title}</b> 
                 </h1>
            </div>
           

            <div className='image-wrapper '>
              <div className='flex img-container'>
                   <div className='image1'>
                     <img className='img' src={image1}></img>
                      <p className='para-name text-sm'> {para1}</p>
                   </div> 

                   <div className='image2'>
                      <img src={image2}></img>
                      <p className='para-name text-sm'> {para2}</p>
                   </div> 
               </div>


                <div className='flex img-container'>
                   <div className='image3'>
                      <img src={image3}></img>
                      <p className='para-name text-sm'> {para3}</p>
                   </div> 

                   <div className='image4'>
                      <img src={image4}></img>
                      <p className='para-name text-sm'> {para4}</p>
                   </div> 
                </div>  

                <div className='para1'>
                  <button>
                     See more
                  </button>
                </div>
            </div>
       </div>
       

   
       

    
  )
}

export default Card;
