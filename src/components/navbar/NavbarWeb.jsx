import React, { useEffect, useState } from 'react'
import logo from '../../../public/pngwing.com.png'
import Image from 'next/image'
import MenuNavbar from './MenuNavbar'

const NavbarWeb = () => {

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

  return (
    <div className=''>
        <div className={`hidden md:block ${offset > 0 ? 'bg-white':'bg-transparent'} w-full h-24 shadow-2xl`}>
            <div className='mx-auto md:pl-3 lg:px-16 py-2 flex md:justify-normal lg:justify-between '>
                <div className='w-80'>
                    <div className='flex gap-5'>
                        <Image
                        src={logo}
                        height={70}
                        alt='logo'
                        />
                        <div className='mt-2'>
                            <h4 className='bg-dark-blue text-transparent font-extrabold bg-clip-text'>St.Ignatius</h4>
                            <div className='flex gap-2 '>
                                <div className='w-12 border-t mt-4 border-[#c7922b] '>
                                </div>
                                <h5 className=' bg-gold text-transparent bg-clip-text'>Cimahi</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <>
                <MenuNavbar/>
                </>
            </div>
        </div>
    </div>
  )
}

export default NavbarWeb