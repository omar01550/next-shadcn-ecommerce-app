import React from 'react'
import './globals.css'
import Header from './components/header'
import Footer from './components/footer'
import { ThemeWrapper } from './context/theme'
import SideBar from './components/SideBar'
import WhatsApp from './components/whatsApp'



const Layout = ({ children}) => {


  return (
    <html className="scroll-smooth">
       
       
   <ThemeWrapper>
        <Header/> 

        


              { children}
      <Footer/>
        

       
   </ThemeWrapper>
    </html>
  )
}

export default Layout