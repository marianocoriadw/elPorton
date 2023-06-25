import React from 'react';
import {createContext, useState, useEffect} from 'react';
import Swal from 'sweetalert2';
import { db } from '../firebase/firebase';
import {collection , addDoc , serverTimestamp , doc , updateDoc} from "firebase/firestore";

// exportacion de context
export const Context = createContext()

// Export de customproviders
export const CustomProviders = ({children}) => {
  // Declaracion de estado
    const [cart , setCart] = useState([])
    const [total , setTotal] = useState(0)
// FUncion para actualizar el total de la cart
    useEffect(() => {
      setTotal(cart.reduce((total, item) => total + ( item.price * item.cantidad), 0))
    }, [cart])
    // Funcion para agregar un producto
    const agregar = (p, count) =>{
      p.cantidad = count
      setCart([...cart, p])
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Producto agregado',
        showConfirmButton: false,
        timer: 1500
      })
    }
    // Funcion para eliminar un producto
    const eliminar = (producto) =>{
      let filtrado = cart.filter(product => product.id !== producto.id)
      setCart(filtrado)
    }
 // Funcion para finalizar la compra
    const finalizarCompra = (data) => {
      const ventasCollection = collection(db , "ventas")
      addDoc(ventasCollection, {
        data,
        items:cart.map(p => {
          const pedido = {
            name : p.name,
            cantidad: p.cantidad
          }
          return pedido
        }),
        total: total,
        date: serverTimestamp()
      })
      .finally(actualizarStock)
      clear()
     }
     //Funcion para actualizar el stock
     const actualizarStock = () =>{
      cart.forEach( producto => { 
      const cambiarStock = doc(db, "productos", producto.id )
      updateDoc(cambiarStock, { stock: producto.stock - producto.cantidad})  
    })
      }
    //Funcion para limpiar el carrito
    const clear = () => {
      setCart([])
      setTotal(0)
    }
  return (
    <Context.Provider value={{ cart , agregar, eliminar , total , finalizarCompra} }>
        {children}
    </Context.Provider>
  )
}
