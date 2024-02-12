import { NextResponse } from "next/server"



const users =[
     {
         name:"omar",
         age:20
     },
     {
        name:"asim",
        age:11
    }
]





export  function GET() {
    
    return NextResponse.json(users)
}


