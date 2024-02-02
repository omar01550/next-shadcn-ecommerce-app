import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server';

export const POST = async (request:Request) => {
     const userData = await request.json();
     

if (userData.email == 'omar@gmail.com'&& userData.password == 'omar1010') {
    const token = jwt.sign({...userData,role:'admin'},"omarsecret",{expiresIn:60});
    return NextResponse.json({
        token:token
    })   
}else{ 

    return
     NextResponse.json({
        message:"login error"
    },{status:"404",statusText:"login error"})

}
     
}