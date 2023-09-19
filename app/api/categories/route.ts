import { db } from "@/lib/db";
import { posts, users } from "@/lib/db/schema";
import { getAllCategories } from "@/lib/functions/dbfunctions";
import { NextRequest, NextResponse } from "next/server";
import { URL } from "url";

export async function GET(req:NextRequest){
  const url  = new URL(req.url)
  const href  = url.searchParams.get('categ')
  console.log("this is the query params 🎯 ",href)

  let result:{data:any,status:any}

  if(href){
     result = await getAllCategories({href})  
  }
  else{
     result = await getAllCategories()  
  }

  return NextResponse.json(result.data,{status:result.status})
}
