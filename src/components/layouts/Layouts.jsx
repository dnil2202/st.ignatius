import React, { Fragment } from 'react'
import { usePathname} from 'next/navigation'
import NavbarWeb from '../navbar/NavbarWeb'
import NavbarMobile from '../navbar/NavbarMobile'
import FooterWeb from '../footer/FooterWeb'

const Layouts = ({children}) => {
    const path = usePathname()
  return (
    <Fragment>
            <div className='fixed top-0 left-0 right-0 z-10' >
                <NavbarWeb />
            </div>
                <NavbarMobile/>
        {
            path !== '/' ?
        <div className=' mx-auto px-10 bg-[#393939]'>
            {children}
        </div>
        :
        <>
        {children}
        <FooterWeb/>
        </>
        }

    </Fragment>
  )
}

export default Layouts