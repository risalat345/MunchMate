import React from 'react'
import Banner from '../components/Banner'
import Menu from '../components/Menu'
import { useState } from 'react'
import FoodDisplay from '../components/FoodDisplay'
import AppDownload from "../components/AppDownload"
const Home = () => {
  const [category, setcategory] = useState("All")
  return (
    <div className='px-5'>
    <Banner/>
    <Menu  category={category} setcategory={setcategory}/>
    <FoodDisplay category={category}/>
    <AppDownload/>
    </div>
  )
}
export default Home
