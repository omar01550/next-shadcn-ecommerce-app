import React from 'react'
import ContainerWrapper from './containerWrapper'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section className="">
         <ContainerWrapper className='w-full flex justify-center items-center min-h-96'>
                <div className="content w-10/12 md:w-8/12 lg:w-6/12 text-center">
                    <h1 className='text-4xl lg:text-4xl font-bold vcapitalize'>
                    At Iforward, we turn your ideas into reality



                    </h1>
                    <p className="mt-8 text-gray-700">
                            We are your guide in the journey of digital transformation, a world of creativity in the field of software, web design, online stores, mobile applications, accounting and management systems.

                    </p>
                    <Button className='text-2xl rounded-full capitalize bg-blue-900 text-white mt-8 hover:bg-blue-800 px-8 py-6'>
                         contact us
                    </Button>
                </div>
         </ContainerWrapper>
    </section>
  )
}

export default Hero