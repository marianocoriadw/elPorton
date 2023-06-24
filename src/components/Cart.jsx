import React,{useContext} from 'react';
import { Context } from '../context/Context';
import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

function Cart() {
  const {cart } = useContext(Context)

  
  return (
    <>
    <Link to={'/pedido'}>
    <div className='flex gap-2 bg-[#eed763] py-2 px-4 rounded-lg text-black font-bold relative'>
      <h1 className='hidden lg:block'>Tu Pedido</h1> 
      < RiShoppingCartLine className='text-2xl'/>
      {cart.length > 0 ? <h2 className='absolute -right-2 -top-2 rounded-full bg-red-600 text-white text-md px-2'>{cart.length}</h2> : null}
      
    </div>
    </Link>
    </>
  )
}

export default Cart
