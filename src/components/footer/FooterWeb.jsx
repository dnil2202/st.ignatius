import React from 'react'
import { navMenu } from '../navbar/data'
import logo from '../../../public/pngwing.com.png'
import Image from 'next/image'

const FooterWeb = () => {
  return (
    <div className='bg-dark-blue pb-10 w-full'>
        <div className='pt-5'>
            <div className='md:flex justify-around  lg:center md:pt-10 '>
                <div className='flex justify-center'>
                    <Image 
                    src={logo}
                    className='w-24 h-24 lg:w-36 lg:h-36'
                    alt='logo'
                    />
                    <div className='flex justify-center mt-4 ml-2 lg:mt-8'>
                        <div>
                            <h4 className='bg-white text-transparent font-extrabold bg-clip-text'>St.Ignatius</h4>
                            <div className='flex gap-2 '>
                                <div className='w-12 border-t mt-4 border-white '>
                                </div>
                                <h5 className=' bg-white text-transparent bg-clip-text'>Cimahi</h5>
                            </div>
                        </div>
                    </div>  
                </div>
                <div className='mt-5 md:mt-0'>
                    {
                        navMenu.map((item,index)=>
                        <div key={index}>
                            <h5 className='py-1 lg:text-xl text-center text-white cursor-pointer md:text-xs'>{item}</h5>
                        </div>
                        )
                    }
                </div>
            </div>
            <div className='border-t border-slate-50 mx-10 mt-10 md:mx-0 lg:mx-60'>
            </div>
                <div className='mx-auto px-20 mt-10 md:px-0 lg:px-96'>
                    <div className='mt-5 md:flex justify-between px-5'>
                        <p className='text-white text-center text-xs'>@ Copyright 2023 St.Ignatius</p>
                        <p className='text-white text-center text-xs'>All Right Reserved</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default FooterWeb