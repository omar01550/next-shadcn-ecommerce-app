'use client'
import React from 'react'
import {motion} from 'framer-motion'
const ServiceSectionAnimation = ({children}) => {
  return (
   <div>
        <motion.div className='overflow-hidden' initial={{
             scale:0.5
        }}
        
       

        whileInView={{
             scale:1
             
        }}
        transition={{
             duration:0.7
        }}
        >
         {children}
    </motion.div>
   </div>
  )
}

export default ServiceSectionAnimation