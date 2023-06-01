import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import { dataImages } from './data';

const Carousel = () => {
  return (
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {
            dataImages.map((item,index)=>
            <SwiperSlide key={index}>
                <div 
                className='w-full h-72 md:h-[700px] '
                >
                    <img
                    src={item}
                    className='w-full h-full'
                    />
                </div>

            </SwiperSlide>
            )
        }
      </Swiper>
  )
}

export default Carousel