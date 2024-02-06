import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import ContainerWrapper from './containerWrapper'
import Image from 'next/image';
import abdaldayem from '../../public/images/projects/abdeldayem.jpg'
import ProjectTwo from '../../public/images/projects/ui-ux-1.jpg';
import project3 from "../../public/images/projects/rehab-2.jpg"
import Project from './project';

const z:number=10;

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
    <ContainerWrapper className='w-full bg-gray-200 py-20 dark:bg-black dark:text-white '>

    <h2 className="text-center text-primary dark:text-white text-4xl capitalize font-semibold mt-4" id="our-works">
            Our Works
     </h2>       

     <Carousel className='mt-16'>
       <CarouselContent className="cursor-pointer">

       {
         projects.map((project) => {
            return (
             <CarouselItem className=' md:basis-1/3 relative'>
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