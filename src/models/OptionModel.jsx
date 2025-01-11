import React from 'react';
import './OptionModel.css';

const OptionModel = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className='Option-Wrapper' onClick={onClose}>
      <div className='option-model'>
       
        <p>Option Model Content Here</p>
      </div>
    </div>
  );
};

export default OptionModel;
