import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';

import imagen1 from '../assets/bannerpizza.png'
import imagen2 from '../assets/bannerempanada.png'
import imagen3 from '../assets/bannersandwich.png'
import { RiArrowLeftSLine,RiArrowRightSLine } from "react-icons/ri";;


function Carrusel() {
  return (
    <div className='pt-20 w-full'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide><img src={imagen1} alt="bannerpizza" className='w-full' /></SwiperSlide>
        <SwiperSlide><img src={imagen2} alt="bannerempanadas" className='w-full'/></SwiperSlide>
        <SwiperSlide><img src={imagen3} alt="bannersandich" className='w-full' /></SwiperSlide>
        
        
      </Swiper>
    
    {/* <div className='w-full bg-gray-200'>
     <div className='w-[300%] flex flex-nowrap justify-start pt-20'>
     <div className='w-[100%] flex justify-between items-center text-5xl text-black absolute'>
        <RiArrowLeftSLine/>
        <RiArrowRightSLine/>
    </div>
      <div className='w-full'>
        <img src={imagen1} alt=""  className='w-full h-[70%]'/>
      </div>
      <div className='w-full'>
        <img src={imagen2} alt=""  className='w-full h-[70%]'/>
      </div> <div className='w-full'>
        <img src={imagen3} alt=""  className='w-full h-[70%]'/>
      </div>
     </div>
     
    </div> */}
    </div>
  )
}

export default Carrusel
