import NavbarMobile from '@/components/navbar/NavbarMobile'
import NavbarWeb from '@/components/navbar/NavbarWeb'
import React from 'react'
import Carousel from './carousel/Carousel'
import CardOne from './card/CardOne'
import CardTwo from './card/CardTwo'
import CardThree from './card/CardThree'

const LandingPages = () => {
  return (
    <div>
          <Carousel/>
          <CardOne/>
          <CardTwo/>
          <CardThree/>
    </div>
  )
}

export default LandingPages