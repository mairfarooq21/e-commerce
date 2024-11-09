import React from 'react'
import {assets} from '../assets/assets.js'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
        <p className='text-xl font-medium mb-2'>ECOMMERCE</p>
        <p className='text-l font-medium mb-2'>Admin Panel</p>
        <button onClick={()=>setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar