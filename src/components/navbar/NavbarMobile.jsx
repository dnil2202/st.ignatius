import Image from 'next/image';
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaRegWindowClose } from 'react-icons/fa';
import logo from '../../../public/images-removebg-preview.png'
import { navMenu } from './data';

const NavbarMobile = () => {
  const [openMenu, setOpenMenu]=useState(false)

  return (
    <div className='md:hidden'>
      <div className='w-full h-12 bg-dark-blue px-3'>
        {
          !openMenu ?
          <>
            <GiHamburgerMenu 
            size={45} 
            className='fill-white'
            onClick={()=>setOpenMenu(true)}
            />
          </>
          :
          <>
            <FaRegWindowClose
            size={45} 
            className='fill-white'
            onClick={()=>setOpenMenu(false)}
            />
          </>
        }
      </div>
      <div>
      <ul className={`${openMenu?'absolute z-10':'hidden'} top-[50px]  bg-dark-blue w-full`}>
        {
          navMenu.map((item,index)=>
          <div key={index}>
          <li
          className='text-center border-b border-white text-white hover:text-gold py-3'
          >
            {item}
          </li>
          </div>
          )
        }
      </ul>
      <div className='h-36 w-full'>
        <div className='flex gap-5 mt-2 justify-center py-5'>
          <Image
          src={logo}
          height={70}
          />
          <div>
          <h4 className='bg-dark-blue text-transparent font-extrabold bg-clip-text'>St.Ignatius</h4>
          <div className='flex gap-2 '>
            <div className='w-12 border-t mt-4 border-gold '>
            </div>
            <h5 className=' bg-gold text-transparent bg-clip-text'>Cimahi</h5>
          </div>
          </div>
        </div>
      </div>
      </div>

      
    </div>
  )
}

export default NavbarMobile