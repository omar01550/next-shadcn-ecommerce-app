import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LogoImage from '../../public/images/large.png';
import ContainerWrapper from './containerWrapper';
import NavigationMenuDemo from './navmenu';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md flex justify-between items-center">
         <ContainerWrapper className='py-4 flex justify-between items-center w-full'>
                <Link href={"/"} className='flex justify-start items-center font-bold capitalize'>
                    <Image 
                    className="w-12  h-12 rounded-full"
                    src={LogoImage}
                    alt=""
                    />
                    <h3 className='text-blue-900 capitalize text-4xl px-2'>
                        iforward
                    </h3>
                </Link>

                {/* nav links */}
                {/* <NavigationMenuDemo/> */}
                <Menu className=' cursor-pointer' />
                {/* end nav links */}


         </ContainerWrapper>
    </header>
  )
}

export default Header