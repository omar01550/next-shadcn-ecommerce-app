import React from 'react'
import ContainerWrapper from './containerWrapper'
import Image from 'next/image'
import js from '../../public/images/techs/js.webp'
import html from '../../public/images/techs/html.webp'
import dart from '../../public/images/techs/dart.webp'
import flutter from '../../public/images/techs/flutter.webp'
import dontnet from '../../public/images/techs/dotnet.webp'
import node from '../../public/images/techs/node.webp'
import react from '../../public/images/techs/react.webp'
import figma from '../../public/images/techs/figma.webp'
import adobexd from '../../public/images/techs/adobexd.webp'
import photoshop from '../../public/images/techs/photoshop.webp'
import nextjs from '../../public/images/techs/next.png'
import csharp from '../../public/images/techs/csharp.png'
import ts from '../../public/images/techs/ts.png'
import css from '../../public/images/techs/css.webp'







const skills =[
     html,css,js,ts,react,nextjs,node,dart,flutter,csharp,dontnet,adobexd,figma,photoshop
]


const Technologies = () => {
  return (
    <ContainerWrapper className='dark:bg-black text-white py-20'>
    <h2 className="text-center text-primary dark:text-white text-4xl capitalize font-semibold" id="our-works">
    Technologies are we use
    </h2>

    <div className="tech w-full my-16 flex justify-around items-center p-5 flex-wrap bg-gray-200 ">
       {
         skills
         .map((skill) => {
          return (
            <>
            <Image
            className='w-20 h-20 m-3 lg:m-0'
            src={skill}
            alt='not found image tech'
           />
            </>
          )
         })
       }
    </div>
</ContainerWrapper>
  )
}

export default Technologies