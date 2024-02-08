'use client'
import React from 'react'
import {motion} from 'framer-motion'
const HeroAnimation = ({children}) => {
  return (
   <div>
        <motion.div initial={{
             scale:1
        }}
        whileInView={{
             scale:1
        }}
        >
         {children}
    </motion.div>
   </div>
  )
}

export default HeroAnimation