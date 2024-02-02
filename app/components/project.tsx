import React from 'react'
import Image from 'next/image'
import ProjectOne from '../../public/images/projects/ui-ux-1.jpg'

const Project = ({link,image}) => {
  return (


          <div className="project">
             <Image
              src={image}
              className='w-full h-[470px] md:h-[600px]'
             />
             </div> 
             )
}

export default Project