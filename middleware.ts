import { cookies,  headers } from "next/headers"

import { NextRequest } from "next/server";

import { redirect } from "next/navigation";
import { get } from "http";
export default function middleware(request:Request) {
   let allCookies = cookies();
   const tokenCookie = allCookies.get("token");
   
//check lang
const allHeaders = headers() 
const lang = allHeaders.get("accept-language");





   if (request.nextUrl.pathname.includes("/auth")) {

    if (tokenCookie ) {
        return NextResponse.redirect(new URL('/', request.url))

    }
    
    
   }


   
   if (request.nextUrl.pathname.includes("/dashboard")) {

    if (tokenCookie ) {
        // is admin 
        const admin = false
        if (!admin) {
            return NextResponse.redirect(new URL('/', request.url))
        }

    }else{
         
    }
    
    
   }
   
}


