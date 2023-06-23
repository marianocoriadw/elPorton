import React,{useState} from 'react';
import Empanadas from '../assets/empanadas.png'
import { RiShoppingCartLine } from "react-icons/ri";

function CartProducts() {
  const productos = [
    {
      id:1,
      name : 'Muzzarela',
      imagen: '../assets/muzza.png',
      price: 1750,
      category: 'Pizzas',
  },
  {
      id:2,
      name : 'Muzzarela',
      imagen: '../assets/muzza.png',
      price: 1750,
      category: 'Pizzas',
  },
  {
      id:3,
      name : 'Muzzarela',
      imagen: "../assets/napolitana.png",
      price: 1750,
      category: 'Pizzas',
  },
  ]

  // funcion para el contador



  return (
    <div className='pt-12 w-full h-auto bg-gray-200'>
     <div className='w-full md:w-[60%] h-auto bg-gray-300 mx-auto mt-10 rounded-xl shadow-xl '>
      <div className='grid lg:grid-cols-3'>
        <h1 className='grid col-span-3 text-center text-3xl lg:text-5xl text-black p-5 border-b border-black font-bold'>Tu compra</h1>
        <div className='grid col-span-3 gap-2'>
          {
            productos.map((p) => (
              
              <div key={p.id} className='grid grid-cols-1 md:grid-cols-2 justify-center items-center p-3 lg:p-10 rounded-3xl bg-white m-5 col-span-3'>
                <div className='grid col-span-1 justify-center'>
                  <img src={Empanadas} alt="" />
                </div>
                <div className='grid col-span-1'>
                  <h1 className='text-center text-xl lg:text-2xl font-bold text-black'>{p.name}</h1>
                  <p className='text-center text-xl lg:text-2xl  font-bold text-black'>Precio: ${p.price}</p>
                  <p className='text-center text-xl lg:text-2xl  font-bold text-black'>Cantidad: 1 </p>
                  <div className='flex justify-center p-3'>
                  <button className='text-xl lg:text-2xl font-bold text-white text-center rounded-xl bg-red-600 px-5 py-2'>Eliminar</button>
                  </div>
                </div>
                
              </div>
            )
            )
          }
        </div>
        <div className='flex justify-end bottom-0 fixed rounded-l w-full md:w-[60%] bg-gray-300 p-3 gap-2' >
       
        <div className='flex text-xl lg:text-2xl rounded-xl bg-[#eed763] p-2 text-black font-bold items-center gap-2'>
        <p>Seguir </p>
        < RiShoppingCartLine className='text-2xl'/>
        </div>
        <p className='text-xl lg:text-2xl rounded-xl bg-red-600 p-2  text-white'>Finalizar</p>
        <p className='text-xl lg:text-2xl rounded-xl bg-[#eed763] p-2 font-bold'>Total: $1750 </p>
      
        </div>
      </div>
     </div>
    </div>

  )
}

export default CartProducts
