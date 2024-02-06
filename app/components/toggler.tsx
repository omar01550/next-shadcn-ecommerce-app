'use client';
import { Moon, Sun } from 'lucide-react';
import React, { useContext } from 'react'
import { themeContext } from '../context/theme';

const ThemeToggler = () => {
const {theme,setTheme} = useContext(themeContext);


  return (
    <div className="cursor-pointer" onClick={() => {
        if (theme == 'dark') {
          setTheme("light")
        }else{
          setTheme("dark")
        }
    }}>
         {
           theme =='dark'?<Sun/>
           :<Moon/>
         }
    </div>
  )
}

export default ThemeToggler