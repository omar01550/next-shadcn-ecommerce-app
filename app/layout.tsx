
import React, { ReactNode, useState } from 'react'
import { Provider } from './context'

export const metadata ={
     title:"Omar",
     description:"hamada"
}

const Layout = ({children}:{children:ReactNode}) => {

  return (
    <html>


            <body>

                <Provider payload={{cart:10,setCart:20}}>
                     {children}
                </Provider>

            </body>
         
    </html>
  )
}

export default Layout