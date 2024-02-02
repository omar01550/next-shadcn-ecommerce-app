``
import { handleVerifyToken } from '@/lib/functions/token';
import { NextResponse } from 'next/server';


export async function POST(request:Request) {

const userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiT21hciIsImFnZSI6MjAsImNvdW50cnkiOiJlZ3lwdCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwNjgzMDQ2NiwiZXhwIjoxNzA2ODMwNjc2fQ.17RJ-8Lbcq0ewt9pPQ3AS4iE8D-5hp8RVYjsfbFk-k8";

if (!userToken) {
    return NextResponse.json({
        message:"no token to verify you must login"
   });

}
const verifyToken = handleVerifyToken(userToken,"Omar_secret_key");
if (verifyToken.error) {
    return NextResponse.json({
         message:"you are not authrize",
         error:verifyToken.error
    })
}else{
     return NextResponse.json({
         user:verifyToken
     })
}
    
}