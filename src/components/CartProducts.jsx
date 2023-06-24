import React,{useState, useContext} from 'react';
import { Context } from '../context/Context';
import { Link } from 'react-router-dom';
import { RiShoppingCartLine } from "react-icons/ri";

function CartProducts() {
const {cart, eliminar , total} = useContext(Context)




  return (
    <>
    <div className='pt-12 w-full bg-gray-200 rounded-xl shadow-xl'>
     <div className='w-full md:w-[60%] h-auto bg-gray-300 mx-auto mt-10 rounded-xl'>
      <div className='grid lg:grid-cols-3'>
        <h1 className='grid col-span-3 text-center text-3xl lg:text-5xl text-black p-5 border-b border-black font-bold'>Tu compra</h1>
        <div className='grid col-span-3 gap-1'>
          { cart.length === 0 
          ? 
          <div className='grid col-span-3 text-3xl text-black m-5'>
            <div className='flex justify-center items-center gap-3'>
              <h1 >Vacio, ir a comprar</h1>
              <Link to='/products'>
                <button className='bg-[#eed763] py-1 p-2 rounded-xl'><RiShoppingCartLine /> </button>
              </Link>
            </div>
          </div>
          :
           cart.map((p) => (
              <div key={p.id} className='grid grid-cols-1 md:grid-cols-2 justify-center items-center p-3 lg:p-10 rounded-3xl bg-white m-5 col-span-3'>
                <div className='grid col-span-1 justify-center'>
                  <img src={p.imagen} alt=""  />
                </div>
                <div className='grid col-span-1 '>
                  <h1 className='text-center text-xl lg:text-2xl font-bold text-black'>{p.name.toUpperCase()}</h1>
                  <p className='text-center text-xl lg:text-2xl font-bold text-black'>Precio: ${p.price}</p>
                  <p className='text-center text-xl lg:text-2xl font-bold text-black'>Cantidad: 1 </p>
                  <div className='flex justify-center p-3 '>
                  <button id={p.id} className='text-xl  lg:text-2xl font-bold text-white text-center rounded-xl bg-red-600 px-5 py-2' onClick={()=> eliminar(p)}>Eliminar</button>
                  </div>
                </div>
                
              </div>
            )
            )
          }
          <div className='flex justify-end col-span-3  rounded-xl w-full bg-gray-300  p-3 gap-2' >
          <Link to='/products'>
          <div className='flex text-xl lg:text-2xl rounded-xl bg-[#eed763] p-2 text-black font-bold items-center gap-2'>
          <p>Seguir </p>
          < RiShoppingCartLine className='text-2xl'/>
          </div>
          </Link>
          <p className='text-xl lg:text-2xl rounded-xl bg-red-600 p-2  text-white'>Finalizar</p>
          <p className='text-xl lg:text-2xl rounded-xl bg-[#eed763] p-2 font-bold'>Total:${total}</p>
        </div>
           
        </div>
      </div>
     </div>
    </div>
    </>
  )
}

export default CartProducts
