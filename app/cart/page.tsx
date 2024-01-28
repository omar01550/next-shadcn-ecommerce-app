'use client'

import React, { useContext } from 'react'
import { CartContext } from '../layout'
import Product from '../components/products'

const Cart = () => {

const [cart,setCart] = useContext(CartContext)

console.log(cart);


  return (
    <div>Cart
<div className="flex hustify-between items-center">
  {
     cart.map((product) => {
       return (
         <Product product={product}/>
       )
     })
  }
</div>

    </div>
  )
}

export default Cart