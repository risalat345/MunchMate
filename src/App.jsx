import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from "../src/pages/Home"
import Cart from "../src/pages/Cart"
import PlaceOrder from "../src/pages/PlaceOrder"
import Footer from "./components/Footer"
import LoginPopUp from './components/LoginPopUp'
const App = () => {
  const [showSignIn, setshowSignIn] = useState(false)
  return (
    <div className='overflow-x-hidden'>
      {showSignIn?<LoginPopUp setshowSignIn={setshowSignIn}/>:<></>}
      <Navbar setshowSignIn={setshowSignIn}/>
      <Routes>
        <Route path='/MunchMate' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
