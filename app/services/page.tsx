import React from 'react'
import ServiceAnimation from '../components/services.animation'
import ServiceSection from './components/ServiceSection'
import { IService } from './components/ServiceSection'
import ServiceImage from '../../public/images/service-2.png'
import image2 from '../../public/images/service.png'
import ContainerWrapper from '../components/containerWrapper'

const ServicesPage = () => {

   const Services :IService[]=[
     {
      title:"A complete software team to provide the service",
      description:"We provide you with a professional team of the best technical competencies available to us, to devote yourself to providing solutions for you to implement your ideas and develop your project and to be your technical arm that turns your ideas and dreams into reality, thus saving you the trouble of searching, choosing, managing and following up so that your mission becomes a dream and our mission is implementation with the best possible technical solutions.",
      image:ServiceImage,
      dir:"left"
     },
     {
      title:"A complete software team to provide the service",
      description:"We provide you with a professional team of the best technical competencies available to us, to devote yourself to providing solutions for you to implement your ideas and develop your project and to be your technical arm that turns your ideas and dreams into reality, thus saving you the trouble of searching, choosing, managing and following up so that your mission becomes a dream and our mission is implementation with the best possible technical solutions.",
      image:image2,
      dir:"right"
     },
     {
      title:"A complete software team to provide the service",
      description:"We provide you with a professional team of the best technical competencies available to us, to devote yourself to providing solutions for you to implement your ideas and develop your project and to be your technical arm that turns your ideas and dreams into reality, thus saving you the trouble of searching, choosing, managing and following up so that your mission becomes a dream and our mission is implementation with the best possible technical solutions.",
      image:ServiceImage,
      dir:"left"
     },
     {
      title:"A complete software team to provide the service",
      description:"We provide you with a professional team of the best technical competencies available to us, to devote yourself to providing solutions for you to implement your ideas and develop your project and to be your technical arm that turns your ideas and dreams into reality, thus saving you the trouble of searching, choosing, managing and following up so that your mission becomes a dream and our mission is implementation with the best possible technical solutions.",
      image:image2,
      dir:"right"
     },
   ]


  return (
    <main className="services-page">
         <ContainerWrapper className='py-8'>
         
              {
                 Services.map((service:IService) => {
                    return (
                        <ServiceAnimation>
                             <ServiceSection title={service.title} description={service.description} dir={service.dir} image={service.image}/>
                        </ServiceAnimation>
                    )
                 })
              }
              
         

         </ContainerWrapper>
    </main>
  )
}

export default ServicesPage
