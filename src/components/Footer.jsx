import React from 'react'
import logo from "../assets/logo.png"
const Footer = () => {
  return (
    <div id='contact' className='bg-gray-700 text-white p-5 md:flex mt-10'>
      <div className="md:w-6/12 w-full">
      <div className="absolute md:left-6 left-30">
      <img className='w-40' src={logo} alt="" />
      </div>
      <p className='text-sm pt-10 py-3 md:w-10/12'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam cum necessitatibus nobis nihil asperiores obcaecati magnam quas dignissimos nemo assumenda.</p>
      <div className='flex gap-2 my-2'>
        <div className="h-10 w-10 border border-white rounded-full flex justify-center items-center hover:text-orange-600 hover:border-orange-600 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M9.602 21.026v-7.274H6.818a.545.545 0 0 1-.545-.545V10.33a.545.545 0 0 1 .545-.545h2.773V7a4.547 4.547 0 0 1 4.86-4.989h2.32a.556.556 0 0 1 .557.546v2.436a.557.557 0 0 1-.557.545h-1.45c-1.566 0-1.867.742-1.867 1.833v2.413h3.723a.533.533 0 0 1 .546.603l-.337 2.888a.545.545 0 0 1-.545.476h-3.364v7.274a.96.96 0 0 1-.975.974h-1.937a.96.96 0 0 1-.963-.974"/></svg></div>
        <div className="h-10 w-10 border border-white rounded-full flex justify-center items-center hover:text-orange-600 hover:border-orange-600 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"/></svg></div>
        <div className="h-10 w-10 border border-white rounded-full flex justify-center items-center hover:text-orange-600 hover:border-orange-600 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M13 21H9V9h4v2a4.618 4.618 0 0 1 3.525-1.763A4.5 4.5 0 0 1 21 13.75V21h-4v-6.75a2.265 2.265 0 0 0-2.247-1.944A1.815 1.815 0 0 0 13 14.25V21Zm-6 0H3V9h4v12ZM5 7a2 2 0 1 1 0-4a2 2 0 0 1 0 4Z"/></svg></div>
      </div>
      </div>
      <div className="md:w-3/12">
      <h1 className='my-2 font-bold text-lg'>Company</h1>
      <p>Home</p>
      <p>About</p>
      <p>Delivery</p>
      <p>Privacy Policy</p>
      </div>
      <div className="md:w-3/12 mx-auto">
      <h1 className='my-2 font-bold text-lg'>Get In Touch</h1>
      <p>+993489089012</p>
      <p>munchmate@gmail.com</p>
      </div>
    </div>
  )
}

export default Footer
