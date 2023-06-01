import React from 'react'

const CardOne = () => {
  return (
    <div>
      <div className=' px-8 md:mx-auto lg::px-36 my-16'>
        <div className='h-[754px] w-full'>
          <div className='md:flex md:gap-5 lg:justify-around'>
            <div>
              <h1 className='text-5xl md:text-4xl lg:text-7xl font-semibold text-dark-blue'>Welcome</h1>
              <div className='mt-10 md:w-80 lg:w-80'>
                <h6 className='md:text-sm lg:text-lg text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam reiciendis ea, facilis incidunt perferendis repudiandae, provident laboriosam minima dicta maxime dolorem dolor. Ipsum sint quam officia facere beatae, nobis deserunt.</h6>
              </div>
              <div className='flex justify-center md:block'>
                <div className='mt-10 w-72'>
                  <h2 className='text-gold font-serif'>“In Him there is plentiful redemption” (Psalm 130:7).</h2>
                </div>
              </div>
              <div className='my-10 md:w-80 lg:w-80'>
                <h6 className='md:text-sm lg:text-lg text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam reiciendis ea, facilis incidunt perferendis repudiandae, provident laboriosam minima dicta maxime dolorem dolor. Ipsum sint quam officia facere beatae, nobis deserunt.</h6>
              </div>
            </div>
            <div className=' md:h-72 lg:h-[487px] lg:w-[750px]'>
              <img 
              src='https://katedralbandung.org/wp-content/uploads/2022/02/test-297-1536x943.jpg'
              className='w-full h-full'
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CardOne