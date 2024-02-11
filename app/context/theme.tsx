'use client'
import  {cn} from "../../lib/utils.ts";
import { createContext, useState } from "react";
import WhatsApp from "../components/whatsApp.jsx";
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
             <body className={cn(theme,'transition duration-500',theme == 'dark'?"bg-black":"bg-white","overflow-x-hidden relative")}>
             <WhatsApp/>
                 {children}
             </body>
         </Provider>
    )
}
