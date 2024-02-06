import React from 'react'
import LogoImage from '../../public/images/large.png'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook ,Instagram} from 'lucide-react'

const Footer = () => {  
  return (
    <footer className="flex justify-center items-center flex-col bg-gradient-to-r from-primary  to-black w-full h-40 text-white text-3xl bg-gra">
         
         <Link href={"/"} className='flex justify-start items-center font-bold capitalize'>
                    <Image 
                    className="w-10 h-10 md:w-12  md:h-12 rounded-full"
                    src={LogoImage}
                    alt=""
                    />
                    <h3 className='text-white capitalize text-3xl md:text-4xl px-2 dark:text-white'>
                        iforward
                    </h3>
                </Link>

                <div className="flex justify-center items-center space-x-3 sociallinks">
                   <Facebook className='cursor-pointer'/>
                   <Instagram className='cursor-pointer'/>
                </div>

    </footer>
  )
}

export default Footer