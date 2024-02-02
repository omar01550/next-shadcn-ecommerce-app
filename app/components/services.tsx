import React from 'react'
import ServiceCard from './serviceCard'
import ContainerWrapper from './containerWrapper'


const Services = () => {
  return (
    <ContainerWrapper className='services  w-full pt-20 md:pt-0'>

        <h2 className="text-center text-blue-900 text-4xl capitalize font-semibold" id="our-works">
            Our services
        </h2>
<section className="cards flex justify-between items-center w-full font-bold mt-0 md:mt-10 flex-wrap md:space-x-2 pb-20">
   
                <ServiceCard title='web development' description=''/>
                <ServiceCard title='mobile development' description=''/>
                <ServiceCard title='ui ux design' description=''/>
                <ServiceCard title='web hosting' description=''/>
                
                
</section>
       </ContainerWrapper>
  )
}

export default Services