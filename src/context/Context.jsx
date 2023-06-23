import React from 'react'
import {createContext, useState } from 'react'

export const Context = createContext()
export const CustomProviders = ({children}) => {
    const [cart , setCart] = useState([])

  return (
    <Context.Provider value={ cart }>
        {children}
    </Context.Provider>
  )
}
