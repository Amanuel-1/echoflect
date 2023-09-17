import { db } from "@/lib/db";
import { posts, users } from "@/lib/db/schema";
import { getAllCategories } from "@/lib/functions/dbfunctions";
import { NextResponse } from "next/server";

export async function GET(){

  const result = await getAllCategories()  

  return NextResponse.json(result.data,{status:result.status})
}
