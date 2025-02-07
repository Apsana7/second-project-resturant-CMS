import React from 'react'
import { IoGlobeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";


function Header() {
  return (
    <div className='w-full bg-gray-300 h-20 flex items-center justify-center'>
      <div className='w-10/12 mx-auto flex items-center justify-between '>
        <div className='text-2xl  text-black'>
        Cozy Bean
        </div>

        <div className='grid grid-cols-2 gap-4'>
        <div className='flex gap-1 items-center'>
          <div className='text-2xl'><IoGlobeOutline /></div>
          <div className='cursor-pointer'>Visit site</div>
        </div>
        <div className='flex gap-1 items-center'>
          <div className='text-2xl'><CgProfile /></div>
          <div>Feliciano Resturant</div>
        </div>
        
        </div>

      </div>
    </div>
  )
}

export default Header
