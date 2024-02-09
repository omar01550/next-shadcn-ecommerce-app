import React from 'react'
import ContainerWrapper from './containerWrapper'
import { Button } from '@/components/ui/button'
import HeroAnimation from './hero.animation'
import './hero.css'
import Image from 'next/image'
import HeroBg from '../../public/images/bg.png';


const Hero = async() => {
  return (
    <section className="bg-hero hero relative ">
      <Image src={HeroBg} className='w-full h-full absolute left-0 top-0'/>
         <HeroAnimation>
            <ContainerWrapper className='w-full flex justify-center items-center min-h-96 dark:bg-black dark:text-white'>
                    <div className="content w-11/12 md:w-8/12 lg:w-9/12 text-center pt-8 md:pt-0 z-50">
                        <h1 className='text-3xl lg:text-6xl font-bold vcapitalize'>
                        At <span className='text-blue-700'>Iforward</span>, we turn your ideas into reality



                        </h1>
                        <p className="mt-8 text-gray-700 dark:text-gray-300 capitalize">
                                We are your guide in the journey of digital transformation, a world of creativity in the field of software, web design, online stores, mobile applications, accounting and management systems.

                        </p>
                        <Button className='text-2xl rounded-full capitalize bg-blue-700 text-white mt-8 hover:bg-primary px-8 py-6'>
                            contact us
                        </Button>
                    </div>
            </ContainerWrapper>
         </HeroAnimation>
    </section>
  )
}

export default Hero