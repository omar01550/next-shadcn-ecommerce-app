import React from 'react'
import Hero from './components/hero'
import ContainerWrapper from './components/containerWrapper'
import ServiceCard from './components/serviceCard'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import ProjectOne from '../public/images/projects/ui-ux-1.jpg'
import ProjectTwo from '../public/images/projects/rehab-2.png'
import About from './components/about'
import Services from './components/services'
import Projects from './components/projects'
import Jspage from '../public/images/techs/js.webp'
import Technologies from './components/technologies'
export const metadata = {
   title:"Iforward",
   description:"Iforward is a software company that helps you to get your degital solution At Iforward, we turn your ideas into reality We Are Your Guide In The Journey Of Digital Transformation, A World Of Creativity In The Field Of Software, Web Design, Online Stores, Mobile Applications, Accounting And Management Systems"



}

const HomePage = () => {
  return (
    <main className="w-full full">
       <Hero/>
       <Services/>

       {/* start our works */}
       
<Projects/>

       {/* end our works */}


       {/* techs */}
      <Technologies/>
       {/* end of techs */}
       <About/>

    </main>
  )
}

export default HomePage