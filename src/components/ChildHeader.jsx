import React, { useState } from 'react'
import './ChildHeader.css'
import { TfiAlignJustify } from "react-icons/tfi";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai"; // Import the close icon

const ChildHeader = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); 

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
};

  

  return (
    <div className='Header px-2 py-2 border'>
     <div className='childHeader text-white'>
        <button onClick={toggleSidebar} className={`baby-child flex gap-1 justify-center items-center ${sidebarOpen ? 'close' : 'open'}`}  >
          {sidebarOpen ? 'Close' : 'All'}
          <TfiAlignJustify />
        </button>
        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <span>Hello, sign in</span>
            <button className="close-button" onClick={toggleSidebar}>
              <AiOutlineClose /> {/* Close icon inside the sidebar */}
            </button>
          </div>
          <div className="sidebar-section">
            <h3>Trending</h3>
            <ul>
              <li>Best Sellers</li>
              <li>New Releases</li>
              <li>Movers and Shakers</li>
            </ul>
          </div>
          <div className="sidebar-section">
            <h3>Digital Content and Devices</h3>
            <ul>
              <li>Echo & Alexa</li>
              <li>Fire TV</li>
              <li>Kindle E-Readers & eBooks</li>
              <li>Audible Audiobooks</li>
              <li>Amazon Prime Video</li>
              <li>Amazon Prime Music</li>
            </ul>
          </div>
          <div className="sidebar-section">
            <h3>Shop by Category</h3>
            <ul>
              <li>Mobiles, Computers</li>
              <li>TV, Appliances, Electronics</li>
              <li>Men's Fashion</li>
            </ul>
          </div>
            </div>
            
        
        

        <div className='baby-child flex items-center gap-1 py-3'>
          <p className='justify-center'>Amazon</p>
        </div>
        <div className='baby-child flex items-center gap-1 py-3'>
          <p className='flex justify-center'>Sell</p>
        </div>
        <div className='baby-child flex items-center gap-1 py-3'>
          <p className='flex justify-center'>Best Seller</p>
        </div>
        <div className='baby-child flex items-center gap-1 py-3'>
          <p className='flex justify-center'>Today's Deals</p>
        </div>
        <div className='baby-child flex items-center gap-1 py-3'>
          <p className='flex justify-center'>Mobiles</p>
        </div>
        <div className='baby-child flex items-center gap-1 py-3'>
          <p className='flex justify-center'>Fashions</p>
        </div>
        <div className='baby-child flex items-center gap-1 py-3'>
          <p className='flex justify-center'>Electronics</p>
        </div>
        <div className='baby-child flex items-center gap-1 py-3'>
          <p className='flex justify-center'>Prime</p>
          <IoMdArrowDropdown />
        </div>
        <div className='baby-child flex items-center gap-1 py-3'>
          <p className='flex justify-center'>New Releases</p>
        </div>
        <div className='baby-child flex items-center gap-1 py-3'>
          <p className='flex justify-center'>Home & Kitchen</p>
        </div>
        <div className='baby-child flex items-center gap-1 py-3'>
          <p className='flex justify-center'>Amazon Pay</p>
        </div>
        <div className='baby-child flex items-center gap-1 py-3'>
          <p className='flex justify-center'>Customer Service</p>
        </div>
        <div className='baby-child flex items-center gap-1 py-3'>
          <p className='flex justify-center'>Computers</p>
        </div>
        <div className='baby-child flex items-center gap-1 py-3'>
          <p className='flex justify-center'>Books</p>
        </div>
        <div className='baby-child flex items-center gap-1 py-3'>
          <p className='flex justify-center'>Car & MotorBike</p>
        </div>
      </div>
    </div>
  );
};

export default ChildHeader;
