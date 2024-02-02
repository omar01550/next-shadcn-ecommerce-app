import React from 'react'
import ContainerWrapper from './containerWrapper'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section className="">
         <ContainerWrapper className='w-full flex justify-center items-center min-h-96'>
                <div className="content w-10/12 md:w-8/12 lg:w-6/12 text-center">
                    <h1 className='text-4xl lg:text-4xl font-bold vcapitalize'>
                    At Al Alalmiya Al Hura We Turn Your Ideas Into Reality


                    </h1>
                    <p className="mt-8 text-gray-700">
                    Through creativity and technology, we make your ideas a reality. Join us and turn your project into an exceptional digital experience!


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