import { cookies } from "next/headers";
export const getCookie = (name:string):null | string => {
    const allCookies = cookies();
    const targetCookie =allCookies.get(name);
    if(targetCookie){
         return targetCookie.value;
    }else{
        return null;
    }
    
} 
