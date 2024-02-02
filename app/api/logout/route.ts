import { NextRequest, NextResponse } from "next/server"

export function GET(request:Request) {
    console.log('get requets logout');
    
    return NextResponse.redirect(new URL('/dashboard',request.url))
}