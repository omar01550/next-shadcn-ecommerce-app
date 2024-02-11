import Image from 'next/image';
import React from 'react'
import ReactDomServer from 'react-dom/server'
const Users = async ({type}) => {
      const res = await fetch("https://jsonplaceholder.typicode.com/"+type,{
         cache:"no-cache"
     })  ;
     const users = await res.json();
  return (
     <>
<div className='flex justify-between items-center flex-wrap'>
    
{
                users.map((photo) => {
                    return (
                         <div className="w-96 h-96 bg-red-500">
                            <h1>ele ment in type {type}</h1>
                             {
                                 photo.title&&<div>{photo.title}</div>
                             }
                             
                         </div>
                    )
                })
             } 

    </div>    
     </>
  )
};






export default Users


