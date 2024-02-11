import React from 'react'
import ContainerWrapper from '../components/containerWrapper';
import abdaldayem from '../../public/images/projects/4.png'
import ProjectTwo from '../../public/images/projects/8.webp'
import project3 from '../../public/images/projects/7.png'
import Project7 from '../../public/images/projects/6.png'
import Project8 from '../../public/images/projects/5.png'
import Project from '../components/project';



const Page = () => {

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
   {
     link:"https://nadaaliatf.github.io/EL-REHAB-JV/",
     image:Project7
 },
 {
   link:"https://nadaaliatf.github.io/EL-REHAB-JV/",
   image:Project8
},
{
  link:"https://nadaaliatf.github.io/EL-REHAB-JV/",
  image:Project8
},
   

]



  return (
    <main className="our-works w-full min-h-[70vh]">
      <ContainerWrapper className='w-full py-8 dark:bg-black dark:text-white '>
      <h2 className="text-center text-primary dark:text-white text-4xl capitalize font-semibold mt-4" id="our-works">
            Our Works
     </h2>       


     <section className="project flex justify-between items-center flex-wrap pt-14 relative">
         {
           projects.map((project) => {
            return (
              
                 <div className="relative  md:basis-1/3 ">
                     <Project link={project.link} image={project.image} />
                 </div>
              
            )
           })
         }
     </section>
      
      </ContainerWrapper>
    </main>
  )
}

export default Page