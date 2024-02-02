import React from 'react'
import ContainerWrapper from './containerWrapper'
import Image from 'next/image'
import LogoImage from '../../public/images/large.png'

const About = () => {
  return (
<section>
<ContainerWrapper className='py-14'>
            <h2 className="text-center text-blue-900 text-4xl capitalize font-semibold" id="our-works">
              About IForward
            </h2>


<div className="flex justify-between items-start mt-14 flex-wrap">
     
<Image
                 src={LogoImage}
                 alt='not found'
                 className=' w-full lg:w-6/12'
                 
                />



            <div className="about-content w-full lg:w-6/12 p-5">
                 <h2 className='text-3xl  font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laudantium l</h2>
                 <p className="text-gray-700 mt-5">
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem dolor accusantium qui deserunt temporibus. Soluta, minima vitae doloribus ipsa dolore dolorum sint deserunt dolorem rerum dolor voluptate id nihil distinctio!
                 </p>
            </div>

</div>

       </ContainerWrapper>
</section>
  )
}

export default About