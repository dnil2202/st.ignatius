import React from 'react'

const CardThree = () => {
  return (
    <div>
        <div className=' md:hidden my-24 w-full h-[400px]'>
            <div className='px-5'>
                <h5 className='text-gold'>STAY IN TOUCH</h5>
                <h1 className='text-dark-blue font-bold'>Join Our Newsletter</h1>
                <div className='mt-10'>
                    <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptas voluptatem et   </h6>
                    <h6 className='mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptas voluptatem et   </h6>
                </div>
                <div className='mt-10'>
                    <button className='bg-dark-blue py-4 px-5 text-white'>Subscribe</button>
                </div>
            </div>
        </div>
        <div className=' hidden md:block mt-24 w-full h-[600px] bg-center bg-cover' style={{backgroundImage: `url(https://sites.georgetown.edu/missionandministry/wp-content/uploads/sites/21/2019/06/Ignatius-Window-for-OMM-Website-e1560353892811-1024x540.jpg)`}} >
            <div className='px-28 pt-5'>
                    <h5 className='text-white'>STAY IN TOUCH</h5>
                    <h1 className='text-white font-bold'>Join Our Newsletter</h1>
                    <div className='mt-10'>
                        <h6 className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptas voluptatem et   </h6>
                        <h6 className='mt-5 text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptas voluptatem et   </h6>
                    </div>
                    <div className='mt-10'>
                        <button className='bg-dark-blue py-4 px-5 text-white'>Subscribe</button>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default CardThree