import React, { Suspense } from 'react'
import Users from './components/users'
import Link from 'next/link';


const Page = async ({searchParams}) => {
    const {type} = searchParams;



    
   
     return (
        <main className='text-white'>

             <h1 className="text-center text-3xl text-primary">
                  All Users
             </h1>

             <div className="flex justify-start items-start w-full">
                  
           <div className="sidebar w-80 bg-gray-900 text-white min-h-[90vh] shrink-0">
               <h1>sidebar</h1>
               <ul>
                 <li key={1}>
                     <Link href={'?type=users'}>
                         users
                     </Link>
                 </li>
                 <li key={2}>
                 <Link href={'?type=todos'}>
                         todos
                     </Link>
                 </li>
                 <li key={3}></li>
               </ul>
           </div>
           <Suspense fallback={type+" is loading now......"}>
                  <Users type={type}/>
           </Suspense>
             </div>
        </main>
      )
}

export default Page