import React from 'react';
import Empanadas from '../assets/empanadas.png'
import { RiShoppingCartLine } from "react-icons/ri";
import { products } from '../productos/products';
import { useParams } from 'react-router-dom';


function ItemFilter() {
    const {id} = useParams()
    let producto = products.filter(product => product.category === id)
  
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-4 bg-[#e6e6e6] p-10'>
      <h1 className='text-4xl text-center pt-20 font-bold col-span-1 sm:col-span-2 lg:col-span-4'>Hace tu pedido</h1>
      {
        producto.map( (p) => (
          <div key={p.id} className='grid col-span-1 justify-center items-center border rounded-3xl bg-[#fff] collapse-full mt-10 p-4 gap-1 shadow-2xl text-center text-gray-900 w-full'>
            {/* Logo */}
          <img src={Empanadas} alt="" className=''/>
          {/* contador */}
          <div className='flex justify-center items-center gap-2 text-2xl'>
            <button className='rounded-md border px-3 pb-1 text-center bg-gray-400 text-white'>-</button>
            <strong>1</strong>
            <button className='rounded-md border px-2 pb-1 text-center bg-gray-400 text-white'>+</button >
          </div>
          {/* Titulo de producto */}
          <h1 className='text-2xl font-bold'>{p.name.toUpperCase()}</h1>
          {/* Precio del producto */}
          <strong>Precio: ${p.price}</strong>
          {/* Boton de compra */}
          <button className='flex gap-2 bg-[#eed763] py-2 px-4 rounded-lg text-black font-bold justify-center'>
            <h1>AGREGAR</h1> 
            < RiShoppingCartLine className='text-2xl'/>
          </button>

          </div>
        ) 
         
        )
      }
    </div>
  )
}

export default ItemFilter
