import React from 'react';
import {createContext, useState, useEffect} from 'react';

export const Context = createContext()
export const CustomProviders = ({children}) => {
    const [cart , setCart] = useState([])
    const [total , setTotal] = useState(0)

    useEffect(() => {
      setTotal(cart.reduce((total, item) => total + item.price, 0))
    }, [cart])
    
    const agregar = (p) =>{
      setCart([...cart, p])
    }
    const eliminar = (producto) =>{
      let filtrado = cart.filter(product => product.id !== producto.id)
      setCart(filtrado)
    }

   
  return (
    <Context.Provider value={{ cart , agregar, eliminar , total} }>
        {children}
    </Context.Provider>
  )
}
