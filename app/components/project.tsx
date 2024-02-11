import React from 'react'
import Image from 'next/image'
import ProjectOne from '../../public/images/projects/ui-ux-1.jpg'
import { Button } from '../../components/ui/button';
import Link from 'next/link';
import './project.css'


const Project = ({link,image}) => {
  return (


          <div className="project relative overflow-hidden">
            <div className="project-overlay absolute w-full md:w-[450px] h-full bg-black opacity-70 flex justify-center items-center left-0 -bottom-full">
                
                 {
                    link&&(<Link href={link} target='blanck'>
                    <Button className='px-10 oy-2 rounded-md bg-primary text-white'>
                        Go
                    </Button>
             </Link>)
                 }
            </div>
             <Image
              src={image}
              className='w-full md:w-[450px] h-[450px] md:h-[450px]'
              alt='not found imagecls
              '
             />
             </div> 
             )
}

export default Project