import React from 'react'
import { AlignVerticalDistributeEnd } from 'lucide-react'
interface IServiceCard {
     title:string,
     icon:React.ReactNode,
     description:string
}

const ServiceCard = ({title,icon,description}:IServiceCard) => {
  return (
    <div className="group service-card w-full md:w-[300px] h-[150px] bg-gray-100 p-4 mt-10 hover:bg-blue-900 hover:text-white cursor-pointer">
         <div className="icon-container w-14 h-14 bg-blue-900 flex justify-center items-center rounded-full">
         <AlignVerticalDistributeEnd className='text-white'/>
         </div>
         <h3 className="mt-4 text-blue-900 font-bold capitalize text-2xl group-hover:text-white">
             {title}
         </h3>
         <p className='text-gray-600 mt-4'>
         {description}

         </p>
         
         
    </div>
  )
}

export default ServiceCard