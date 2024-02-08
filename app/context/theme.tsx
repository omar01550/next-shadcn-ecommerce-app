'use client'
import { cn } from "@/lib/utils";
import { createContext, useState } from "react";

export const themeContext = createContext('light');


const {Provider} = themeContext;



export const ThemeWrapper = ({children}:{children:React.ReactNode}) => {
    const [theme,setTheme] = useState('dark');
    return(
         <Provider value={
            {
                 theme,
                 setTheme
            }
         }>
             <body className={cn(theme,'transition',theme == 'dark'?"bg-black":"bg-white","overflow-x-hidden")}>
                 {children}
             </body>
         </Provider>
    )
}
