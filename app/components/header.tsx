
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LogoImage from '../../public/images/large.png';
import ContainerWrapper from './containerWrapper';
import NavigationMenuDemo from './navmenu';
import { Menu } from 'lucide-react';
import ThemeToggler from './toggler';
import SideBar from './SideBar';

const Header = () => {
  return (
    <header className="w-full bg-white text-black shadow-md flex justify-between items-center  dark:bg-black dark:text-white">
         <ContainerWrapper className='py-4 flex justify-between items-center w-full'>
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

                {/* nav links */}
                {/* <NavigationMenuDemo/> */}
                <div className="flex justify-center items-center space-x-4">
                  <ThemeToggler/>
                <SideBar/>
                </div>
                {/* end nav links */}


         </ContainerWrapper>
    </header>
  )
}

export default Header