'use client'
import { ArrowBigUp } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const ScrollToTop = () => {

     const [scroll,setScroll] = useState(window.screenY || undefined);
     
     window.onscroll= () => {
        setScroll(window.scrollY)
     }

     if (scroll >= 600) {
        

    return (
        <div className="scroll-to-top p-3 bg-primary text-white dark:text-white fixed right-5 md:right-10 bottom-16 cursor-pointer z-50 rounded-md" onClick={() => {
            window.scrollTo({
                top:"0",
                left:"0"
            })
        }}>
            <ArrowBigUp/>
        </div>
   )
     }
  
}

export default ScrollToTop