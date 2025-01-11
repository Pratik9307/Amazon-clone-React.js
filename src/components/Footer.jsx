import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="footer-column">
          <p><a href="#">AbeBooks</a><br />Books, art<br />& collectibles</p>
          <p><a href="#">Amazon Web Services</a><br />Scalable Cloud<br />Computing Services</p>
          <p><a href="#">Audible</a><br />Download<br />Audio Books</p>
        </div>
        <div className="footer-column">
          <p><a href="#">Shopbop</a><br />Designer<br />Fashion Brands</p>
          <p><a href="#">Amazon Business</a><br />Everything For<br />Your Business</p>
          <p><a href="#">Prime Now</a><br />2-Hour Delivery<br />on Everyday Items</p>
        </div>
        <div className="footer-column">
          <p><a href="#">IMDb</a><br />Movies, TV<br />& Celebrities</p>
          <p><a href="#">Amazon Prime Music</a><br />100 million songs, ad-free<br />Over 15 million podcast episodes</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          <a href="#">Conditions of Use & Sale</a> &nbsp;|&nbsp; 
          <a href="#">Privacy Notice</a> &nbsp;|&nbsp; 
          <a href="#">Interest-Based Ads</a>
        </p>
        <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
      </div>
    </footer>
  );
};

export default Footer;
