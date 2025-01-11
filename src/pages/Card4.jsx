import React from 'react'
import "./Card4.css"

 const Card4 = ({id,image,Disc,RS,para}) => {
  return (
    <div className="card-wrapper">
        <div>
            <img src={image}></img>
        </div>
        <div>
            <p>
                {Disc}
            </p>

            <span> {RS}</span>

            <p>{para}</p>
        </div>
    </div>
  )
}
export default Card4;
