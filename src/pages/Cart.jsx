import React, { useContext, useState } from 'react';
import { StoreContext } from '../context/StoreContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cardItems, removeFromCard, food_list, getTotalAmmount } = useContext(StoreContext);
  const [promoCode, setPromoCode] = useState("");

  return (
    <div className='p-4 mt-20 container mx-auto'>
      <div className='overflow-x-auto'>
        <table className='w-full border border-orange-500 text-center shadow-lg rounded-lg overflow-hidden'>
          <thead className='bg-orange-500 text-white'>
            <tr>
              <th className='md:p-3 p-2 text-sm'>Item</th>
              <th className='md:p-3 p-2 text-sm'>Title</th>
              <th className='md:p-3 p-2 text-sm'>Price</th>
              <th className='md:p-3 p-2 text-sm'>Quantity</th>
              <th className='md:p-3 p-2 text-sm'>Total</th>
              <th className='md:p-3 p-2 text-sm'>Remove</th>
            </tr>
          </thead>
          <tbody className='bg-orange-100'>
            {food_list.map((item, index) => {
              if (cardItems[item._id]) {
                return (
                  <tr key={index} className='border-b border-orange-300'>
                    <td className='p-3 text-center '><img width={80} className='rounded-lg' src={item.image} alt={item.name} /></td>
                    <td className='p-3 text-center text-sm'>{item.name}</td>
                    <td className='text-center'>${item.price}</td>
                    <td className='text-center'>{cardItems[item._id]}</td>
                    <td className=' text-center'>${(item.price * cardItems[item._id]).toFixed(2)}</td>
                    <td className=' text-center'>
                      <button onClick={() => removeFromCard(item._id)} 
                        className=' text-white px-3 py-1 rounded transition'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="#e11d48" fill-rule="evenodd" d="M5.75 3V1.5h4.5V3zm-1.5 0V1a1 1 0 0 1 1-1h5.5a1 1 0 0 1 1 1v2h2.5a.75.75 0 0 1 0 1.5h-.365l-.743 9.653A2 2 0 0 1 11.148 16H4.852a2 2 0 0 1-1.994-1.847L2.115 4.5H1.75a.75.75 0 0 1 0-1.5zm-.63 1.5h8.76l-.734 9.538a.5.5 0 0 1-.498.462H4.852a.5.5 0 0 1-.498-.462z" clip-rule="evenodd"/></svg>
                      </button>
                    </td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
      </div>
      
      <div className='flex flex-col md:flex-row mt-5 gap-5'>
        <div className='md:w-1/2 w-full'>
          <p className='text-2xl font-bold my-2'>Cart Total</p>
          <div className='flex justify-between py-1 px-2'>
            <p>Subtotal</p>
            <p>${getTotalAmmount()}</p>
          </div>
          <hr />
          <div className='flex justify-between py-2 px-2'>
            <p>Delivery Fee</p>
            <p>${getTotalAmmount() === 0 ? 0 : 2}</p>
          </div>
          <hr />
          <div className='flex justify-between py-2 px-2 font-bold'>
            <p>Total</p>
            <p>${getTotalAmmount() === 0 ? 0 : getTotalAmmount() + 2}</p>
          </div>
          <hr />
          <br />
          <Link to="/order">
            <button className='w-full p-3 cursor-pointer font-bold rounded-lg hover:bg-orange-600 bg-orange-500'>Proceed To Checkout</button>
          </Link>
        </div>
        
        <div className='md:w-1/2 w-full'>
          <p className='py-2'>If You Have a Promo Code Enter It Here</p>
          <div className='flex gap-2'>
            <input className='border border-orange-600 rounded-lg p-2 outline-none w-full' 
                   type='text' 
                   placeholder='Enter Your Promo Code' 
                   value={promoCode} 
                   onChange={(e) => setPromoCode(e.target.value)} />
            <button className='px-3 py-1 bg-black text-orange-500 rounded-lg cursor-pointer'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
