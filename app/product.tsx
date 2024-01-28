'use client'

import React, { useContext } from 'react'
import { cartContext } from './context'



const Product = () => {
const {cart,setCart} = useContext(cartContext)

  return (
    
    <div onClick={() => {
        console.log('clicked');
        
    }}>
        product

        <h1>{cart}</h1>
    </div>
  )
}


export default Product