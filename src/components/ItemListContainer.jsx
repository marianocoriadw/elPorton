import React,{useState, useEffect, useContext} from 'react';
import { Context } from '../context/Context';
import {useParams} from 'react-router-dom';
import {getDocs, collection , query , where} from 'firebase/firestore';
import { RiShoppingCartLine } from "react-icons/ri";
import Carrusel from './Carrusel';
import {db} from '../firebase/firebase';

function ItemListContainer() {
  const {agregar} = useContext(Context)
  const [products, setProducts] = useState([])
  const {id} = useParams()




  useEffect(() =>{
  const productCollection = collection( db , 'productos')
  const q = id ? query(productCollection, where ('category', '==', `${id}`)) : productCollection 
   const getProducts = async () =>{
    try {
      const datos  = await getDocs(q)
      const dataDatos = datos.docs.map(doc => {
        return {...doc.data(), id: doc.id}
      } ) 
      setProducts(dataDatos)
    }
    catch{(e) => { console.log(e); }}
   } 
   getProducts()
 

  }, [id])


  return (
    <> 
    { !id ?< Carrusel /> : null }
    {/* Contenedor de los productos */}
     
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-4 bg-[#e6e6e6] p-10 pt-20'>
      <h1 className='text-4xl text-center pt-4 font-bold col-span-1 sm:col-span-2 lg:col-span-4'>Hace tu pedido</h1>
      {
        products.map( (p) => (
          <div key={p.id} className='grid col-span-1 justify-center items-center border rounded-3xl bg-[#fff] collapse-full mt-5 p-4 gap-1 shadow-2xl text-center text-gray-900 w-full'>
            {/* Logo */}
          <img src={p.imagen} alt="" className=''/>
          {/* Titulo de producto */}
          <h1 className='text-2xl font-bold'>{p.name.toUpperCase()}</h1>
          {/* Precio del producto */}
          <strong>Precio: ${p.price}</strong>
          {/* Boton de compra */}
          <button className='flex gap-2 bg-[#eed763] py-2 px-4 rounded-lg text-black font-bold justify-center' onClick={() => agregar(p)}>
            <h1>AGREGAR</h1> 
            < RiShoppingCartLine className='text-2xl'/>
          </button>
          </div>
        ) 
         
        )
      }
    </div>
    
    </>
  )
}

export default ItemListContainer
