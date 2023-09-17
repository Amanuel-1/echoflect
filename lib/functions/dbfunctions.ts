
import { db } from "../db";
import { categories, posts } from "../db/schema";
import { IPost } from "../db/schemaTypes"; 


export async function getAllPosts(){
    
    let response:object = {message :"failed to fetch posts from the database"}
    let status = 400;
   try{
       const result  =  await db.select().from(posts)
        if(result){
            response =result;
            status= 200
        }

        
    }
    catch(error){
        response = {message :"failed to fetch posts from the database"}
    }

    return {data:response,status:status}
}


export async function getAllCategories(){
    
    let response:object = {message :"failed to fetch categories from the database"}
    let status = 400;
   try{
       const result  =  await db.select().from(categories)
        if(result){
            response =result;
            status= 200
        }

        
    }
    catch(error){
        response = {message :"failed to fetch posts from the database"}
    }

    return {data:response,status:status}
}

