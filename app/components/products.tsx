'use client'
import { Button } from '@/components/ui/button';
import React, { useContext } from 'react'
import { CartContext } from '../layout';


const Product = ({product}) => {
const [cart,setCart] = useContext(CartContext)

  return (
    <div onClick={() => {
        console.log('product clicked '+product.id);
        
    }}
     className="m-10 shadow-md"
    >
         <h1 className="product">
             Omar product {product.id}
         </h1>

         <Button onClick={() => {
            setCart([...cart,product])
         }}>
             add to cart
         </Button>
         
    </div>
  )
}

export default Product