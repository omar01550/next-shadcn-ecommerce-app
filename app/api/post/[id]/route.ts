import jwt from "jsonwebtoken";
import { NextApiRequest } from "next";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";



export const POST = async (request:NextApiRequest) => {
    const userToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9tYXJAZ21haWwuY29tIiwicGFzc3dvcmQiOiJvbWFyMTAxMCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwNjgwOTc3MCwiZXhwIjoxNzA2ODA5ODMwfQ.44vJiUihzK6wtwHrnVEIQMtzNlTlL58e622gd7Rme0Y";
     try {
        const token =jwt.verify(userToken,"omarsecret");
        token&&console.log(token);
        return NextResponse.json({
             token:token
        },{statue:200})
     } catch (error) {
        console.log('error code' ,error.code);
        
        return NextResponse.json({
            message:error.message
       },{statue:403})
     }
}
// post(request)