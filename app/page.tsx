import React from 'react'
import { products } from '@/public/data'
import Product from './components/products'

const Page = () => {
  return (
   <main className="w-full px-5 py-2 flex justify-between items-center flex-wrap">
{
products.map((product) => {
    return (
         <Product product={product}/>
    )
   })}
   </main>
  )
}

export default Page