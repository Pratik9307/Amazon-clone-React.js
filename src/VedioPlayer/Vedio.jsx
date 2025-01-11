import React from 'react'
import ReactPlayer from 'react-player';
import "./Vedio.css"

const Vedio = ({url}) => {
  return (
    <div className="video-player">
    <ReactPlayer url={url} controls={true} /> 
  </div>
  )
}

export default Vedio;


