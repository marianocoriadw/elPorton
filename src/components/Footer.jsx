import React from 'react';
import {BsFillTelephoneFill, BsWhatsapp , BsFacebook} from "react-icons/bs";


function Footer() {
  return (
   <footer className=' bg-black flex justify-between items-center p-3 bottom-0 w-full'>
      <div className='flex gap-1 md:gap-3 items-center'>
        <BsFillTelephoneFill className='text-white text-1xl'/>
        <span className='text-white md:text-1xl text-center'>2477 499155</span>
      </div>
      <div>
        <h1 className='text-white md:text-1xl text-center'>© Todos los derechos reservados</h1>
      </div>
      <div className='text-white md:text-3xl flex gap-2'>
        < BsWhatsapp />
        < BsFacebook />
      </div>
   </footer>
  )
}

export default Footer
