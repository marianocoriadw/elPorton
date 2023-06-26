import React,{useContext, useState} from 'react';
import { RiShoppingCartLine } from "react-icons/ri";
import { Context } from '../context/Context';
import Count from '../components/Count';

function ItemDetail({p}) {
    const {agregar} = useContext(Context)
    
    const [count , setCount] = useState(1)

    const incrementar = () =>{
      setCount (count + 1)
    }
    const restar = () =>{
      if(count > 1)
      setCount(count - 1)
    }
    



  return (
    <div key={p.id} className='grid col-span-1 justify-center items-center border rounded-3xl bg-[#fff] collapse-full mt-5 p-4 gap-1 shadow-2xl text-center text-gray-900 w-full'>
    {/* Logo */}
        <img src={p.imagen} alt="" className=''/>
  {/* Contador */}
    < Count  count = {count} restar={restar} incrementar={incrementar}/>
  {/* Titulo de producto */}
  <h1 className='text-2xl font-bold'>{p.name.toUpperCase()}</h1>
  {/* Precio del producto */}
  <strong>Precio: ${p.price}</strong>
  {/* Boton de compra */}
  <button className='flex gap-2 bg-[#eed763] py-2 px-4 rounded-lg text-black font-bold justify-center' onClick={() => agregar(p, count)}>
    <h1>AGREGAR</h1> 
    < RiShoppingCartLine className='text-2xl'/>
  </button>
  </div>
  )
}

export default ItemDetail
