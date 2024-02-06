'use client';


import React from 'react'

const User = ({id,name}) => {
  return (
    <div className='text-3xl' onClick={() => {
        console.log(true);
        
    }}>{id}
    
    <h1>{name}</h1>
    </div>
  )
}

export default User