'use client'
import { createContext } from "react"
export const cartContext = createContext();



export const Provider = ({payload,children}) => {
    return(
         <cartContext.Provider value={payload}>
              {children}
         </cartContext.Provider>
    )
}