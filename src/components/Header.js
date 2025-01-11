import React, { useState } from 'react';
import './Header.css';
import image from '../components/Pratik1.png';
import { SlLocationPin } from "react-icons/sl";
import { IoMdSearch, IoMdArrowDropdown } from "react-icons/io";
import india from '../components/india.png';
import { PiShoppingCartLight } from "react-icons/pi";
import { Link } from 'react-router-dom';
import LocationModal from '../models/LocationModal';
import SignInModal from '../models/SignInModal';
import Language from '../models/Language';
import OptionModel from '../models/OptionModel';

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);
  const [isLanguageModelOpen, setLanguageModelOpen] = useState(false);
  const [isOptionModelOpen, setOptionModelOpen] = useState(false); // State for OptionModel

  const openLocationModal = () => setModalOpen(true);
  const closeLocationModal = () => setModalOpen(false);

  const openSignInModal = () => setSignInModalOpen(true);
  const closeSignInModal = () => setSignInModalOpen(false);
  
  const openLanguageModal = () => setLanguageModelOpen(true);
  const closeLanguageModal = () => setLanguageModelOpen(false);

  const openOptionModel = () => setOptionModelOpen(true);
  const closeOptionModel = () => setOptionModelOpen(false);

  const options = Array.from({ length: 100 }, (_, i) => `Option ${i + 1}`);

  return (
    <div className='Header-Wrapper flex flex-row gap-4'>
      <Link to="/home">
        <div className='Image-container'>
          <img src={image} alt="Logo" />
        </div>
      </Link>

      <div className='child-wrapper flex justify-center flex-col px-2 py-1 cursor-pointer'>
        <button onClick={openLocationModal}>
          <div className='text-white'>
            <p className='text-sm'>Delivering to Chhindwara 480001</p>
          </div>
          <div className='flex'>
            <span><SlLocationPin /></span>
            <b className='text-white'>Update Location</b>
          </div>
        </button>
        <LocationModal isOpen={isModalOpen} onClose={closeLocationModal} />
      </div>

      <div className='border flex rounded-sm'>
        <div className='flex gap-1 bg-gray-200'>
          <div className='bg-gray-200'>
            <label className='px-2 py-2 flex justify-center items-center' htmlFor='bar'>All</label>
          </div>
          <button onClick={openOptionModel} className='bg-gray-200'><IoMdArrowDropdown /></button>
          {/* OptionModel modal */}
          <OptionModel isOpen={isOptionModelOpen} onClose={closeOptionModel}  options={options} />
        </div>
        <div className='w-[675px] bg-orange-300'>
          <input className='border px-2 py-2 text-black w-full' type='text' placeholder='search Amazon.in' id='bar' name='bar' required />
        </div>
        <button className="flex justify-center items-center w-12 bg-orange-300"><IoMdSearch /></button>
      </div>

      <div className='header-child flex flex-row'
         onMouseEnter={openLanguageModal}
         onMouseLeave={closeLanguageModal}
        >
        <div>
          <img className='india-image h-[15px] w-[15px] mt-2 flex gap-2' src={india} alt="India Flag" />
        </div>
        <div className='hello flex flex-row'>
          <b className='text-white'>EN</b>
          <button><IoMdArrowDropdown /></button>
        </div>
        <Language isOpen={isLanguageModelOpen} onClose={closeLanguageModal}/>
      </div>

      <div
        className='header-child1 flex flex-col'
        onMouseEnter={openSignInModal}
        onMouseLeave={closeSignInModal}
      >
        <button>
          <p className='text-white'>Hello, sign in</p>
        </button>
        <b className='text-white'>Accounts & Lists</b>
        <SignInModal isOpen={isSignInModalOpen} onClose={closeSignInModal} />
      </div>

      <div className='header-child2 flex flex-col'>
        <p className='text-white'>Returns</p>
        <b className='text-white'>& Order</b>
      </div>

      <div className='header-child3 flex gap-2'>
        <div className='cart mt-2 text-white size-3 w-[9px] h-[7px]'>
          <PiShoppingCartLight />
        </div>
        <div className='text-white'>
          <b>Cart</b>
        </div>
      </div>
    </div>
  );
};

export default Header;
