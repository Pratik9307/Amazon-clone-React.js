import React, { useState } from 'react';
import './LocationModal.css';

const LocationModal = ({ isOpen, onClose }) => {
  const [pincode, setPincode] = useState('');

  if (!isOpen) return null;

  const handleApply = () => {
    console.log("Pincode:", pincode);
    // Perform action with the selected pincode or field value
    onClose(); // Close the modal after applying
  };

  return (
    <div className="modal-overlay1">
      <div className="modal-content2">
        <div className="modal-header">
          <h2>Choose your location</h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <p>Select a delivery location to see product availability and delivery options</p>
          <button className="sign-in-button">Sign in to see your addresses</button>
          <p className="or-text">or enter an Indian pincode</p>
          <div className="pincode-input">
            <input 
              type="text" 
              placeholder="Enter pincode" 
              value={pincode} 
              onChange={(e) => setPincode(e.target.value)} 
            />
            <button className="apply-button" onClick={handleApply}>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
