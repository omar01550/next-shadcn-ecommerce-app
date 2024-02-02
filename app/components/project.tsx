import React from 'react'
import Image from 'next/image'
import ProjectOne from '../../public/images/projects/ui-ux-1.jpg'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import './project.css'

const Project = ({link,image}) => {
  return (


          <div className="project relative">
            <div className="project-overlay absolute w-full h-full bg-black opacity-70 flex justify-center items-center left-0 -bottom-full">
                
                 {
                    link&&(<Link href={link} target='blanck'>
                    <Button className='px-10 oy-2 rounded-md bg-blue-900'>
                        Go
                    </Button>
             </Link>)
                 }
            </div>
             <Image
              src={image}
              className='w-full h-[470px] md:h-[600px]'
              alt='not found image'
             />
             </div> 
             )
}

export default Project