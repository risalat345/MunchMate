import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodList from './FoodList'

const FoodDisplay = ({category}) => {
    const {food_list}=useContext(StoreContext)
  return (
    <div>
        <h1 className='font-bold text-2xl my-3 text-center'>Top Dishes Near You</h1>
      <div className='flex flex-wrap mx-5'>
        {food_list.map((item,index)=>{
           if(category==="All" || category===item.category){
            return <FoodList key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image}/>
           }
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
