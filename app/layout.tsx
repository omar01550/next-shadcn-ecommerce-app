import React, { useState } from 'react'
import './globals.css'
import Header from './components/header'
import Footer from './components/footer'
import { ThemeWrapper } from './context/theme'

const Layout = ({ children}) => {


  return (
    <html>
       
       
   <ThemeWrapper>
        <Header/>       
              { children}
      <Footer/>
        

       
   </ThemeWrapper>
    </html>
  )
}

export default Layout