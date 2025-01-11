import React from 'react';
import './SignInModal.css'; // Add custom styles here

const SignInModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onMouseLeave={onClose}>
      <div className="modal-content">
        <button className="sign-in-button">Sign In</button>
        <p className="new-customer">
          New customer? <a href="#">Start here.</a>
        </p>
        <hr />

        <div className="modal-sections">
          <div className="modal-section">
            <h3>Your Lists</h3>
            <ul>
              <li>Create a Wish List</li>
              <li>Wish from Any Website</li>
              <li>Baby Wishlist</li>
              <li>Discover Your Style</li>
              <li>Explore Showroom</li>
            </ul>
          </div>
          <div className="modal-section">
            <h3>Your Account</h3>
            <ul>
              <li>Your Account</li>
              <li>Your Orders</li>
              <li>Your Wish List</li>
              <li>Your Recommendations</li>
              <li>Your Prime Membership</li>
              <li>Your Prime Video</li>
              <li>Your Subscribe & Save Items</li>
              <li>Memberships & Subscriptions</li>
              <li>Your Seller Account</li>
              <li>Manage Your Content and Devices</li>
              <li>Your Free Amazon Business Account</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
