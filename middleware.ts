import { NextRequest } from "next/server";
import { auth } from "./middlewares/auth";
import { internationalization } from "./middlewares/internationalization";

import { getCookie } from "./lib/functions/cookies";
import { handleVerifyToken } from "./lib/functions/token";





export default function middleware(request:NextRequest) {
      const user = {
         token :getCookie("token"),
         
      }



    if (request.nextUrl.pathname.includes("dashboard" ) || request.nextUrl.pathname.includes("/" ) || request.nextUrl.pathname.includes("/settings" )) {
        
       
    };
    internationalization(); // all request;
}