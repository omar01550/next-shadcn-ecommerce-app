import { getCookie } from "./cookies"
import { handleVerifyToken } from "./token";

export const getServerSession  = (tokenName:string) => {
    const token = getCookie(tokenName);
    if (token) {
        return handleVerifyToken(token,"Omar_secret_key")
    }else{
        return null;
    }
    
}