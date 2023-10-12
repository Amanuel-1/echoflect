import { db } from "@/lib/db";
import { posts, users } from "@/lib/db/schema";
import { AddPost, getAllPosts, getPost, getPostsByUsername } from "@/lib/functions/dbfunctions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){

  const url  = new URL(req.url)
  const href  = url.searchParams.get('categ')
  const slug =  url.searchParams.get('slug')
  const user =  url.searchParams.get('user')

  console.log("this is the query params 🎯 ",href)
  console.log("this is the slug param 🎯 ",slug)
  console.log("this is the user param 🎯 ",user)

  let result:{data:any,status:any}

  if(href){
     result = await getAllPosts({href})  
  }
  else if(slug){
      result = await getPost(slug)
  }
  else if (user){
      result = await getPostsByUsername(user)
  }
  else{
     result = await getAllPosts()  
  }


  return NextResponse.json(result.data,{status:result.status})
}

export async function POST(req:NextRequest){
   const postData =await req.json()
   

   const result = await AddPost((postData as any))

   return NextResponse.json(result)

}
