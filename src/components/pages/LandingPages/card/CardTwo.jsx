import React from 'react'
import Fade from 'react-reveal/Fade';

const CardTwo = () => {
  return (
    <div className='mt-72 md:mt-0'>
      <div>
        <h1 className='text-center text-6xl text-dark-blue font-semibold'>Jadwal Misa</h1>
       </div>
      <div className='md:grid grid-cols-2 gap-5'>
          <div className='my-10'>
        <Fade left>
            <h6 className='text-center md:text-end font-bold'>Misa Harian, Jumat Pertama</h6>
            <h6 className='text-center md:text-end'>Misa Harian : Senin-Sabtu : 05.45</h6>
            <h6 className='text-center md:text-end'>Jumat Pertama : Jumat : 17:00</h6>
        </Fade>
          </div>
        <div className='my-10'>
          <Fade right>
            <h6 className='text-center md:text-start font-bold'>Misa Hari Sabtu dan Minggu</h6>
            <h6 className='text-center md:text-start'>Sabtu : 17:00</h6>
            <h6 className='text-center md:text-start'>Minggu : 06:00, 09:30, 17:00</h6>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default CardTwo