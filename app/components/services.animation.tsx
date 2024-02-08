'use client'
import React from 'react'
import {motion} from 'framer-motion'
const ServiceAnimation = ({children}) => {
  return (
   <div>
        <motion.div className='overflow-hidden' initial={{
             translateX:"-400px"
        }}
        whileInView={{
             translateX:0,
             
        }}
        transition={{
             duration:0.9
        }}
        >
         {children}
    </motion.div>
   </div>
  )
}

export default ServiceAnimation