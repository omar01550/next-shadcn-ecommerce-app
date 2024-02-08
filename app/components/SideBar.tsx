import { SheetTrigger,Sheet,SheetClose,SheetContent,SheetHeader,SheetFooter,SheetOverlay,SheetTitle,SheetDescription } from '@/components/ui/sheet'
import Link from 'next/link'
import Image from 'next/image'
import LogoImage from '../../public/images/large.png'
import React from 'react'
import { Facebook, Instagram, Linkedin, Menu, MessageCircleCodeIcon, SnailIcon } from 'lucide-react'


const SideBar = () => {
  return (
    <Sheet>
         <SheetTrigger>
             <Menu/>
         </SheetTrigger>
         <SheetContent side={'left'}>
              <SheetHeader>
                 <SheetTitle className='py-8'>
                 <Link href={"/"} className='flex justify-start items-center font-bold capitalize'>
                    <Image 
                    className="w-10 h-10 md:w-12  md:h-12 rounded-full"
                    src={LogoImage}
                    alt=""
                    />
                    <h3 className='text-blue-900 capitalize text-3xl md:text-4xl px-2 dark:text-white'>
                        iforward
                    </h3>
                </Link>
                 </SheetTitle>
              </SheetHeader>
              <SheetDescription className='flex flex-col items-start space-y-3 text-2xl'>
                  
                    <Link href="/" className='hover:text-blue-900'>
                        <SheetClose>
                               Home
                        </SheetClose>
                    </Link>
                  
                  
                        <Link href="contact" className='hover:text-blue-900'>
                                <SheetClose>
                                        Services
                                </SheetClose>
                        </Link>
                  
                  <SheetClose>
                    <Link href="contact" className='hover:text-blue-900'>
                    <SheetClose>
                                        Our Works
                   </SheetClose>
                    </Link>
                  </SheetClose>
                  
                  <Link href="contact" className='hover:text-blue-900'>
                        <SheetClose>
                                About
                        </SheetClose>
                  </Link>
                  
                  
                        <Link href="contact" className='hover:text-blue-900'>
                                <SheetClose>
                                        Contact
                                </SheetClose>
                        </Link>   
                  
                    <div className="pt-10 flex justify-around items-center w-full">
                         <Facebook className='cursor-pointer hover:text-blue-900'/>
                         <Facebook/>
                         <Instagram/>
                         <Linkedin/>
                         <MessageCircleCodeIcon/>
                         <SnailIcon/>
                    </div>
                  
              </SheetDescription>
         </SheetContent>
    </Sheet>
  )
}

export default SideBar