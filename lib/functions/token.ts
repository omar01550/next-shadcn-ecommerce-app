import { verify } from "jsonwebtoken"

interface user {
     email:string,
     username:string,
     role:"admin"|"user"
}

export const handleVerifyToken = (token:string,secretKey:string) => {
     try {
         const user = verify(token,secretKey);
         return user;
     } catch (error) {
        return {
            error:error.message
        };
     }
}


