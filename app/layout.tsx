'use client'
import React, { useState } from 'react'
import Footer from './components/footer'
import './globals.css'
import Header from './components/header'
export const CartContext = React.createContext(null)


const Layout = ({children}:{children:React.ReactNode}) => {
const [cart,setCart] = useState([])

  return (
    <html dir='rtl'>
         <body>
          <CartContext.Provider value={[cart,setCart]}>
          <Header/>
             {
                 children
             }
             <Footer/>
          </CartContext.Provider>
         </body>
    </html>
  )
}

export default Layout