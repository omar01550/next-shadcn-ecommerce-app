"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"





const Navmenu = () => {
  return (
    
       <NavigationMenu className="bg-red-500 -translate-x-16 hidden lg:flex">
            <NavigationMenuList className="bg-green-600">
            <NavigationMenuItem className="bg-blue-800">
                      <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-gray-700">Home</NavigationMenuTrigger>
                      <NavigationMenuContent className=" -translate-x-80">
                       
                      </NavigationMenuContent>

                      </NavigationMenuItem>
                 </NavigationMenuItem> 
                 <NavigationMenuItem>
                      <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-gray-700">Home</NavigationMenuTrigger>
                      <NavigationMenuContent className=" -translate-x-80">
                         <div className="w-80 h-80 bg-red-600">

                         </div>
                      </NavigationMenuContent>

                      </NavigationMenuItem>
                 </NavigationMenuItem>
            </NavigationMenuList>
       </NavigationMenu>

  )
}

export default Navmenu
