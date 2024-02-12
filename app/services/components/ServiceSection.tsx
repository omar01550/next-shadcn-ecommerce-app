import Image from 'next/image'
import React from 'react'
import { cn } from '../../../lib/utils'





export interface IService {
   title:string,
   description:string,
   image:string,
   dir:string

}

const ServiceSection = ({title,image,description,dir}:IService) => {
  return (
    <div className={cn("service mt-10 lg:mt-0 w-full flex justify-around lg:between items-center flex-wrap-reverse lg:flex-nowrap text-blue-900 dark:text-white p-0  lg:px-20")}>
        <div className="content w-full lg:w-8/12">
            <h3 className="title text-4xl font-bold capitalize">{title}</h3>
            <p className='text-gray-600 dark:text-gray-400 capitalize text-lg mt-8 line font-semibold leading-8'>{description}</p>
        </div>
        <Image
         src={image}
         alt='not found'
         className='w-full lg:w-6/12 h-[500px] lg:p-2'
         loading='lazy'
         placeholder='blur'
         
        />

    </div>
  )
}

export default ServiceSection