import React from 'react'
import { cn } from '@/lib/utils'
const ContainerWrapper = ({children,className}:{childred:React.ReactNode,className:string}) => {
  return (
    <section className={cn('px-3 md:px-9',className)}>
         {children}
    </section>
  )
}

export default ContainerWrapper