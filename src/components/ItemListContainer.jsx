import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getDocs, collection , query , where} from 'firebase/firestore';
import {db} from '../firebase/firebase';
import Carrusel from './Carrusel';
import ItemDetail from './ItemDetail';

function ItemListContainer() {

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
     
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-4 bg-[#e6e6e6] p-10 pt-20 min-h-[92vh]'>
      <h1 className='text-4xl text-center pt-4 font-bold col-span-1 sm:col-span-2 lg:col-span-4'>Hace tu pedido</h1>
      {
        products.map( (p) => ( <ItemDetail p={p} />
        ) 
         
        )
      }
    </div>
    
    </>
  )
}

export default ItemListContainer
