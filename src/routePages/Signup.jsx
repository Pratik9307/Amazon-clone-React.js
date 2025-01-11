import React, { useState } from 'react';



const Signup = () => {
  const [inputValue, setInputValue] = useState('');
  
 

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

  };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//   }

  return (
    <div>
      <form >
      <div>
          <img src="https://www.amazon.in/ap/signin?openid.pape.max_auth_age=900&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fref%3Dnav_logo%3Fie%3DUTF8%26useRedirectOnSuccess%3D1%26ref_%3Ddex_glow_signin%26path%3D%2Fref%3Dnav_logo&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0#"></img>
      </div>
      <div>
         <h1>
            Sign in or Create Account
         </h1>
          <b>  
            Enter Mobile number or Email 
          </b>
           
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            
          />
       
      </div>
       <button type="submit" >
        Continue 
       </button>
       <p>
          By continuing, you agree to Amazon's <span>Conditions of Use</span> and <span>  Privacy Notice.</span>
       </p>
      
     </form>
     <div className=''>

     </div>
     <div>
        <p>
            Condition of Us
        </p>
        <p>
            Privacy Notice
        </p>
        <p>
            Help
        </p>
     </div>
     <div>
        <p>
           © 1996–2024, Amazon.com, Inc. or its affiliates
        </p>
     </div>
    </div>
  );
};

export default Signup;