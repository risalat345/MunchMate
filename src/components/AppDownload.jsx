import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const AppDownload = () => {
  return (
    <div id='app' className='m-10 flex flex-col items-center justify-center text-center'>
      <p className="md:text-2xl font-bold mb-4">
        For Better Experience Download <br /> Our App
      </p>
      <div className="flex md:gap-6">
        <img
          className="w-30 m-4 cursor-pointer transition-transform duration-500 hover:scale-100 hover:rotate-5 hover:shadow-lg"
          src={assets.app_store}
          alt="App Store"
        />
        <img
          className="w-30 m-4 cursor-pointer transition-transform duration-500 hover:scale-100 hover:-rotate-5 hover:shadow-lg"
          src={assets.play_store}
          alt="Play Store"
        />
      </div>
    </div>
  )
}

export default AppDownload
