
import { eq } from "drizzle-orm";
import { db } from "../db";
import { categories, postCategories, posts } from "../db/schema";
import { ICategory, IPost, IPostToCategory } from "../db/schemaTypes"; 


export async function getAllPosts(param?:{href:any}){
    
    let response:object = {message :"failed to fetch categories from the database"}
    let status = 400;
    
   try{
       let result: any
       if(param){
         result =  await db.select().from(posts).innerJoin(postCategories,eq(posts.id,postCategories.postId)).innerJoin(categories,eq(categories.id,postCategories.categoryId))
       }
       else{
          result  =  await db.select().from(posts)
       }
        
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


export async function getAllCategories(param?:{href:any}){
    
    let response:object = {message :"failed to fetch categories from the database"}
    let status = 400;
    
   try{
       let result:ICategory[] | ICategory
       if(param){
         result  =  await db.query.categories.findMany({
            where: eq(categories.slug,param?.href as string)
         })
       }
       else{
          result  =  await db.select().from(categories)
       }
        
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

