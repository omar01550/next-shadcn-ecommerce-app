import React from 'react'
interface IServiceCard {
     title:string,
     icon:React.ReactNode,
     description:string,
     
}

const ServiceCard = ({title,description,Icon}) => {
  return (
    <div className="group service-card w-full md:w-[300px] h-[150px] bg-gray-100 p-4 mt-10 hover:bg-primary hover:text-white cursor-pointer dark:bg-gray-900 text-white rounded-md flex flex-col justify-center items-center">
         <div className="icon-container w-14 h-14 bg-primary flex justify-center items-center rounded-full">
         <Icon className='text-white'/>
         </div>
         <h3 className="mt-4 text-primary font-bold capitalize text-2xl group-hover:text-white">
             {title}
         </h3>
         <p className='text-gray-600 mt-4'>
         {description}

         </p>
         
         
    </div>
  )
}

export default ServiceCard