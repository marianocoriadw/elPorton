import React from 'react'
import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

function Cart() {

  
  return (
    <>
    <Link to={'/pedido'}>
    <div className='flex gap-2 bg-[#eed763] py-2 px-4 rounded-lg text-black font-bold'>
      <h1 className='hidden lg:block'>Tu Pedido</h1> 
      < RiShoppingCartLine className='text-2xl'/>
    </div>
    </Link>
    </>
  )
}

export default Cart
