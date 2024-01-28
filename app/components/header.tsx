import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (

<header className='flex justify-between items-center py-3 shadow-md'>
     <div className="logo text-3xl font-bold">
        Omar

     </div>

     <Link href={'/dashboard'}>
         dashboard
      </Link>



      <Link href={'/login'}>
         login
      </Link>

      
      

     <Link href={'/cart'}>
      cart
      </Link>
     
</header>

  )
}

export default Header