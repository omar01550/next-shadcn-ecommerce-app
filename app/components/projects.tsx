import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import ContainerWrapper from './containerWrapper'
import Image from 'next/image';
import abdaldayem from '../../public/images/projects/abdeldayem.png'
import ProjectTwo from '../../public/images/projects/ui-ux-1.jpg';
import project3 from '../../public/images/projects/rehab-2.png'
import Project from './project';



const projects = [
     {
         link:"https://abdaldayem.com/",
         image:abdaldayem

     },
     {
         link:"",
         image:ProjectTwo
     },
     {
        link:"https://nadaaliatf.github.io/EL-REHAB-JV/",
        image:project3
    },
    

]


const Projects = () => {
  return (
    <section className="our-works">
    <ContainerWrapper className='w-full bg-gray-200 py-10'>

    <h2 className="text-center text-blue-900 text-4xl capitalize font-semibold mt-4" id="our-works">
            Our Works
     </h2>       

     <Carousel className='mt-16'>
       <CarouselContent className="cursor-pointer">

       {
         projects.map((project) => {
            return (
             <CarouselItem className=' md:basis-1/2 relative'>
                    <Project link={project.link} image={project.image}/>
             </CarouselItem>
   
            )
         })
       }
          

       </CarouselContent>
       <CarouselNext className="-translate-x-10"/>
       <CarouselPrevious className='translate-x-10'/>
       
     </Carousel>
    </ContainerWrapper>
</section>
  )
}

export default Projects