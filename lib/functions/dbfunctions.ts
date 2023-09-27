
import { eq } from "drizzle-orm";
import { db } from "../db";
import { categories, postCategories, posts, users } from "../db/schema";
import { ICategory, IPost, IPostToCategory } from "../db/schemaTypes"; 
import { getServerSession } from "next-auth";
import { randomUUID } from "crypto";


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
    
    let response:object = {message :"failed to fetch categories from the database"};
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

//postData:{title:string,description:string,content:string,thumbnail:string,slug:string}

export async function AddPost(postData:{title:string,description:string,content:string,thumbnail:string,slug:string}){
    // const session = await getServerSession()  ;
    // const userID  = session?.user.id
    const {title,description,content,thumbnail,slug} = postData;
    const id  = randomUUID()
    let response ;

    if(true){
       
        try{
            response  = await db.insert(posts).values(
                {
                    id:id,
                    authorId:'7596fd63-5d1a-45e9-9ffc-d5c2058cb201',
                    title:title,
                    slug:title.split(' ')[0],
                    thumbnail:thumbnail,
                    description:description,
                    content:content
                }
            ).returning()
        } 
        catch(error){
            console.log(error)
            response = {message :"failed to upload posts to the database"}
        }
}
        
        
        

        return response
    //}

    

    
    


    return {}
}


export async function postit(){

    const session = await getServerSession()  ;
    const userID  = session?.user.id
    let result
    if(userID){
        const result  = await db.insert(posts).values({
            id: "c4d1c6c6-5b02-4a3f-9e9a-7c5f3d5a1a2b",
            authorId:userID,
            title:"this is a test",
            slug:"slug-for-test",
            thumbnail:"cover.jpg",
            description:"sa;lskdjfksajfasklfjksldfaskldfklsadkjfaksldjfaskldf",
            content:"thisis is a content of the post . i know it is not that much , yet.",

        }).returning()

    }

    console.log(result)

    return result


}

export async function getuser(id:string){
    const userdata  = await db.query.users.findFirst({
        where:eq(users.id,id)
    })
}