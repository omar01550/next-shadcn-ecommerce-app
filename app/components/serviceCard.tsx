import React from 'react'
import { AlignVerticalDistributeEnd } from 'lucide-react'
interface IServiceCard {
     title:string,
     icon:React.ReactNode,
     description:string
}

const ServiceCard = () => {
  return (
    <div className="service-card w-full md:w-[300px] h-[250px] bg-gray-100 p-4 mt-10 hover:bg-blue-600 hover:text-white">
         <div className="icon-container w-14 h-14 bg-blue-900 flex justify-center items-center rounded-full">
         <AlignVerticalDistributeEnd className='text-white'/>
         </div>
         <h3 className="mt-4 text-blue-900 font-bold capitalize text-2xl">
             web development
         </h3>
         <p className='text-gray-600 mt-4'>
         Suppose your goal is to have a mobile application for your business

         </p>
         
         
    </div>
  )
}

export default ServiceCard