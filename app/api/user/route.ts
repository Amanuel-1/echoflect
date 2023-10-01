import { getUserByUsername } from "@/lib/functions/dbfunctions";
import { getDomain } from "@/lib/functions/utils";
import { NextRequest, NextResponse } from "next/server";
import { URL } from "url";

export async function GET(req:NextRequest){
    const url = new URL(req.url)
    const username  = url.searchParams.get('user')
    var result:{data:any,status:any}
    if(username){
        result  = await getUserByUsername(username)
    

    return NextResponse.json(result.data,{status:result.status})
    }
    else{
        return NextResponse.redirect(`${getDomain}/404`)
    }
}