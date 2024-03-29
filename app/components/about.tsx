'use client';
import React from 'react'
import ContainerWrapper from './containerWrapper'
import Image from 'next/image'
import LogoImage from '../../public/images/large.png'
import { Button } from '../../components/ui/button.tsx'
import ServiceAnimation from './services.animation'

const About = () => {
  return (
<ServiceAnimation>
<section>
<ContainerWrapper className='py-14 dark:bg-black dark:text-white'>
            <h2 className="text-center text-primary dark:text-white dark:bg-black text-4xl capitalize font-semibold" id="our-works">
              About IForward
            </h2>


<div className="flex justify-between items-start mt-14 flex-wrap">
     
<Image
                 src={LogoImage}
                 alt='not found'
                 className=' w-full lg:w-5/12 h-[400px]'
                 placeholder='blur'

                 
                />



            <div className="about-content w-full lg:w-6/12 p-5">
                 <h2 className='text-3xl  font-bold capitalize text-primary dark:bg-black dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laudantium l</h2>
                 <p className="text-gray-600 dark:text-gray-400 capitalize text-lg mt-8 line font-semibold leading-8">
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem dolor accusantium qui deserunt temporibus. Soluta, minima vitae doloribus ipsa dolore dolorum sint deserunt dolorem rerum dolor voluptate id nihil distinctio!
                 </p>
                 <Button className='text-2xl rounded-full capitalize bg-primary text-white mt-8 hover:bg-primary px-8 py-6 '>
                         contact us
                    </Button>
                    
            </div>

</div>

       </ContainerWrapper>
</section>
</ServiceAnimation>
  )
}

export default About