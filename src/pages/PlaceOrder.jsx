import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { Link } from 'react-router-dom'
const PlaceOrder = () => {
  const {getTotalAmmount}=useContext(StoreContext)
  return (
    <div className='md:flex mt-14'>
      <div className="left md:w-6/12 p-5 flex flex-col gap-3">
        <h1 className='font-bold text-2xl text-center'>Delievery Information</h1>
        <div className="flex gap-3">
          <input className='w-6/12 border border-gray-500 px-5 py-1' placeholder='First Name' type="text" />
          <input className='w-6/12 border border-gray-500 px-5 py-1' placeholder='Last Name' type="text" />
        </div>
      <input className='border border-gray-500 px-5 py-1 w-full' placeholder='Email Address' type="email" name="" id="" />
      <input className='border border-gray-500 px-5 py-1 w-full' placeholder='Street' type="text" />
      <div className="flex gap-3">
          <input className='w-6/12 border border-gray-500 px-5 py-1' placeholder='City' type="text" />
          <input className='w-6/12 border border-gray-500 px-5 py-1' placeholder='State' type="text" />
        </div>
      <div className="flex gap-3">
          <input className='w-6/12 border border-gray-500 px-5 py-1' placeholder='Zip Code' type="text" />
          <input className='w-6/12 border border-gray-500 px-5 py-1' placeholder='Country' type="text" />
        </div>
        <input className='border border-gray-500 px-5 py-1 w-full' placeholder='Phone' type='number' name="" id="" />
      </div>
      <div className="card-total md:w-6/12 p-5">
          <p className='text-2xl font-bold my-2'>Card Total</p>
          <div className='flex w-full justify-between py-1 px-2'>
            <p>Subtotal</p>
            <p>{getTotalAmmount()}$</p>
          </div>
          <hr />
          
          <div className='flex w-full justify-between py-2 px-2'>
            <p>Delievery Fee</p>
            <p>{2}$</p>
          </div>
          <hr />
          
          <div className='flex w-full justify-between py-2 px-2 font-bold'>
            <p>Total</p>
            <p>{getTotalAmmount()+2}$</p>
          </div>
          <hr />
          <br />
          <Link to="/order"><button className='md:w-6/12 p-3 cursor-pointer font-bold rounded-lg hover:bg-orange-600 bg-orange-500'>Proceed To Payment</button></Link>
        </div>
    </div>
  )
}

export default PlaceOrder
