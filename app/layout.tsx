import React, { useState } from 'react'
import './globals.css'
import Header from './components/header'
import Footer from './components/footer'
import { ThemeWrapper } from './context/theme'
import SideBar from './components/SideBar'

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