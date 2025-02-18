import React from 'react';
import { useState } from 'react';
const LoginPopUp = ({setshowSignIn}) => {
  const [user, setuser] = useState("Sign In") 
  return(
  <div className="login-popup md:mt-10">
      <form className='bg-white fadeIn popup-container p-3 rounded-2xl shadow-lg w-96 mx-auto text-center'>
      <div onClick={()=>setshowSignIn(false)} className="absolute right-75 cursor-pointer ">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#ea580c" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16M9.879 8.464L12 10.586l2.121-2.122a1 1 0 1 1 1.415 1.415l-2.122 2.12l2.122 2.122a1 1 0 0 1-1.415 1.415L12 13.414l-2.121 2.122a1 1 0 0 1-1.415-1.415L10.586 12L8.465 9.879a1 1 0 0 1 1.414-1.415"/></g></svg>
</div>
      <h1 className='text-2xl font-bold text-orange-600 mb-2'>Login</h1>
      <div className='flex flex-col gap-2'>
      {user==="Sign Up"?<input className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500' placeholder='Enter Your Name'
          type='text' required />:""}
        <input className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500' placeholder='Enter Your Email'
          type='email' required />
        <input className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
          placeholder='Enter Your Password' 
          type='password' 
          required />
          <div className="flex gap-2">
          <input type="checkbox" name="" id="" />
          <p className='text-[10px]'>I Agree To The Terms Of Use & Privacy Policy</p>
          </div>
         {user==="Sign In"? <p>New User? <span onClick={()=>setuser("Sign Up")} className='cursor-pointer hover:text-orange-500 underline'>Sign Up Now</span></p>: <p>Already Have An Account?<span onClick={()=>setuser("Sign In")} className='cursor-pointer underlinen hover:text-orange-500'>Log In</span></p>}
       {user==="Sign In"? <button 
          className='w-full cursor-pointer bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition duration-300'
        >
          Login
        </button>: <button 
          className='w-full cursor-pointer bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition duration-300'
        >
          Sign Up 
        </button>}
      </div>
      </form>
  </div>
  );
};

export default LoginPopUp;
