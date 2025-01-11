import React from 'react'
import "./Language.css"
import india from '../components/india.png';

 const Language = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  return (
    <div className='wrapper' onMouseLeave={onClose}>
        <div className='language-wrapper'>
        <div className='language-option'>
          <input type='radio' id='en' name='language' value='EN' defaultChecked />
          <label htmlFor='en'>English - EN</label>
        </div>
        <div className='underline'>
        <hr />
        </div>


        <div className='language-option '>
          <input type='radio' id='hi' name='language' value='HI' />
          <label htmlFor='hi'>हिन्दी - HI</label>
        </div>

        <div className='language-option'>
          <input type='radio' id='ta' name='language' value='TA' />
          <label htmlFor='ta'>தமிழ் - TA</label>
        </div>

        <div className='language-option'>
          <input type='radio' id='te' name='language' value='TE' />
          <label htmlFor='te'>తెలుగు - TE</label>
        </div>

        <div className='language-option'>
          <input type='radio' id='kn' name='language' value='KN' />
          <label htmlFor='kn'>ಕನ್ನಡ - KN</label>
        </div>

        <div className='language-option'>
          <input type='radio' id='ml' name='language' value='ML' />
          <label htmlFor='ml'>മലയാളം - ML</label>
        </div>

        <div className='language-option'>
          <input type='radio' id='bn' name='language' value='BN' />
          <label htmlFor='bn'>বাংলা - BN</label>
        </div>

        <div className='language-option'>
          <input type='radio' id='mr' name='language' value='MR' />
          <label htmlFor='mr'>मराठी - MR</label>
        </div>

        <div className='language-learn-more'>
          <a href='#'>Learn more</a>
        </div>

        <hr />

        <div className='language-footer'>
          <div className='language-shopping'>
            <img src={india} alt="India Flag" className='flag-icon' />
            You are shopping on Amazon.in
          </div>
          <div className='language-change-region'>
            <a href='#'>Change country/region.</a>
          </div>
        </div>
        </div>

    </div>
  )
}
export default Language;
