'use client'
import React, { useEffect, useState } from 'react'
import WhatsAppImage from '../../public/images/download.png';
import { Link } from 'lucide-react';
import Image from 'next/image';

const WhatsApp = () => {
  const [hidden,setHidden] = useState(true);

  useEffect(() => {
    window.onscroll= () => {
       if (window.scrollY >= 500) {
          setHidden(false)
       }else{
        setHidden(true)
       }
    }
  },[])
if (!hidden) {
  
  return (
    

    <Image
      src={WhatsAppImage}
      alt='not found image '
      className="w-10 h-10 fixed rounded-full z-50 left-[90%] bottom-0 cursor-pointer"
    />
    


)
}
}

export default WhatsApp