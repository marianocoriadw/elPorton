import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import imagen1 from '../assets/bannerpizza.png'
import imagen2 from '../assets/bannerempanada.png'
import imagen3 from '../assets/bannersandwich.png'



function Carrusel() {
  return (
    <div className='pt-20 w-full md:h-[90vh]'>
      <Swiper
       className='h-full'
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
        <SwiperSlide><img src={imagen1} alt="bannerpizza" className='w-full h-full' /></SwiperSlide>
        <SwiperSlide><img src={imagen2} alt="bannerempanadas" className='w-full h-full'/></SwiperSlide>
        <SwiperSlide><img src={imagen3} alt="bannersandich" className='w-full h-full' /></SwiperSlide>
        
        
      </Swiper>
    </div>
  )
}

export default Carrusel
