import React from 'react'
import ServiceCard from './serviceCard'
import ContainerWrapper from './containerWrapper'
import { Figma, ScreenShare, Smartphone } from 'lucide-react'
import { AlignVerticalDistributeEnd } from 'lucide-react'
import ServiceAnimation from './services.animation'
import HeroBg from '../../public/images/bg.png'
import Image from 'next/image'

const Services = async () => {
  return (
    <section className="services relative">
      
      
        <ServiceAnimation>
            

            <ContainerWrapper className='services  w-full pt-20 md:pt-14 dark:bg-black text-white'>

<h2 className="text-center text-blue-700 dark:text-white text-4xl capitalize font-semibold" id="our-works">
     Lets make Your Task
</h2>
<section className="cards flex justify-between items-center w-full font-bold mt-0 md:mt-10 flex-wrap md:space-x-2 pb-20">

        <ServiceCard title='web development' description='' Icon={AlignVerticalDistributeEnd}/>
        <ServiceCard title='mobile development' description='' Icon={Smartphone}/>
        <ServiceCard title='ui ux design' description='' Icon={Figma}/>
        <ServiceCard title='web hosting' description='' Icon={ScreenShare}/>
        
        
</section>
</ContainerWrapper>
    </ServiceAnimation>
    </section>
  )
}

export default Services