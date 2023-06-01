import React from 'react'
import { navMenu } from './data'

const MenuNavbar = () => {


  return (
    <div className=' ml-32 w-full'>
        <div className=' grid grid-cols-3 py-2 lg:flex lg:justify-end gap-5 lg:py-4'>
            {
                navMenu.map((item, index)=>(
                    <div className='flex justify-center' key={index}>
                        <button className='font-medium text-lg hover:text-[#c7922b] cursor-pointer' key={index}>{item}</button>

                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default MenuNavbar