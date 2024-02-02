import React from 'react'
import Hero from './components/hero'
import ContainerWrapper from './components/containerWrapper'
import ServiceCard from './components/serviceCard'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import ProjectOne from '../public/images/project-1.png'
import ProjectTwo from '../public/images/project-2.png'
import About from './components/about'

const HomePage = () => {
  return (
    <main className="w-full full">
       <Hero/>
       <ContainerWrapper className='services  w-full'>

        <h2 className="text-center text-blue-900 text-4xl capitalize font-semibold" id="our-works">
            Our services
        </h2>
<section className="cards flex justify-between items-center w-full font-bold mt-10 flex-wrap md:space-x-2 pb-20">
   
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
</section>
       </ContainerWrapper>

       {/* start our works */}
       
<section className="our-works">
    <ContainerWrapper className='w-full bg-gray-200 py-10'>

    <h2 className="text-center text-blue-900 text-4xl capitalize font-semibold mt-4" id="our-works">
            Our Works
     </h2>       

     <Carousel className='mt-16'>
       <CarouselContent>
          <CarouselItem className=' md:basis-1/2'>
             <Image
              src={ProjectOne}
             />
          </CarouselItem>


          <CarouselItem className='md:basis-1/2'>
             <Image
              src={ProjectTwo}
             />
          </CarouselItem>

          <CarouselItem className=' md:basis-1/2'>
             <Image
              src={ProjectOne}
             />
          </CarouselItem>


          <CarouselItem className='md:basis-1/2'>
             <Image
              src={ProjectTwo}
             />
          </CarouselItem>

          <CarouselItem className=' md:basis-1/2'>
             <Image
              src={ProjectOne}
             />
          </CarouselItem>


          <CarouselItem className='md:basis-1/2'>
             <Image
              src={ProjectTwo}
             />
          </CarouselItem>

          <CarouselItem className=' md:basis-1/2'>
             <Image
              src={ProjectOne}
             />
          </CarouselItem>


          <CarouselItem className='md:basis-1/2'>
             <Image
              src={ProjectTwo}
             />
          </CarouselItem>

          <CarouselItem className=' md:basis-1/2'>
             <Image
              src={ProjectOne}
             />
          </CarouselItem>


          <CarouselItem className='md:basis-1/2'>
             <Image
              src={ProjectTwo}
             />
          </CarouselItem>

          <CarouselItem className=' md:basis-1/2'>
             <Image
              src={ProjectOne}
             />
          </CarouselItem>


          <CarouselItem className='md:basis-1/2'>
             <Image
              src={ProjectTwo}
             />
          </CarouselItem>
       </CarouselContent>
     </Carousel>
    </ContainerWrapper>
</section>

       {/* end our works */}


       {/* techs */}
       <ContainerWrapper className='py-14'>
            <h2 className="text-center text-blue-900 text-4xl capitalize font-semibold" id="our-works">
            Technologies are we use
            </h2>

            <div className="tech w-full my-8 flex justify-around items-center p-4 flex-wrap bg-gray-200 ">
               {
                 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
                 .map(() => {
                  return (
                    <>
                    <Image
                    className='w-20 h-20 xs:mt-3 lg:mt-0'
                    src={ProjectOne}
                    alt='not found image tech'
                   />
                    </>
                  )
                 })
               }
            </div>
       </ContainerWrapper>
       {/* end of techs */}
       <About/>

    </main>
  )
}

export default HomePage