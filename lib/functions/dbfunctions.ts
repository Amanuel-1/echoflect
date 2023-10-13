
import { eq } from "drizzle-orm";
import { db } from "../db";
import { categories, postCategories, posts, users } from "../db/schema";
import { ICategory, IPost, IPostToCategory, Usertype } from "../db/schemaTypes"; 
import { getServerSession } from "next-auth";
import { randomUUID } from "crypto";
import { toast } from "react-toastify";


export async function getAllPosts(param?:{href:any}){
    
    let response:object = {message :"failed to fetch categories from the database"}
    let status = 400;
    
   try{
       let result: any
       if(param){
         result =  await db.select().from(posts).innerJoin(postCategories,eq(posts.id,postCategories.postId)).innerJoin(categories,eq(categories.id,postCategories.categoryId))
       }
       else{
          result  =  await db.select().from(posts).innerJoin(users,eq(posts.authorId,users.id))
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
    const session = await getServerSession()  ;
    const userID  = session?.user.email
    const user  = await (getuser(userID as string))

    console.log("🔊🔊🔉📢📢 this is the session of the current user data✨🐱‍🐉",user)
    const {title,description,content,thumbnail,slug} = postData;
    const uuid  = randomUUID()
    let response ;

    if(session){
        try{
            response  = await db.insert(posts).values(
                {
                    id:uuid,
                    authorId: user?.id as string,
                    title,
                    slug,
                    thumbnail,
                    description,
                    content
                }
            ).returning()
        } 
        catch(error){
            console.log(error)
            response = {message :"failed to upload posts to the database"}
        }

       
}
        
        
        

        return response
    
}




export async function getuser(email:string){
    const userdata  = await db.query.users.findFirst({
        where:eq(users.email,email)
    })

    return userdata;

}

export async function getPost(slug:string){
    let result ;
    let response:object = {message :"failed to fetch categories from the database"}
    let status = 400;

    try{
        result = await db.select().from(posts).where(eq(posts.slug,slug)).innerJoin(users,eq(posts.authorId,users.id)).limit(1)

    }
    catch(error){
        console.log("🛑✋  an error occured while fetching 🛑✋",error)
    }
    if(result){
        response=result;
        status =200
    }


    return {data:response,status:status}
} 


export async function getUserByUsername(username:string){
    let result:Usertype;
    let response:object = {message :"failed to fetch the user from the database"}
    let status = 400;

    try{
        [result]= await db
        .select()
        .from(users).where(eq(users.username, username)).limit(1)

        if(result){
            response=result;
            status =200
        }
    }
    catch(error){
        toast("🛑✋  an error occured while fetching 🛑✋" + error,{type:'error'})
        status  = 500;
    }
    


    return {data:response,status:status}
}


export async function getPostsByUsername(username: string){
    let result ;
    let response:object = {message :"failed to fetch users post from the database"}
    let status = 400;

    try{
        result = await db.select().from(users).where(eq(users.username,username)).innerJoin(posts,eq(posts.authorId,users.id))

    }
    catch(error){
        console.log("🛑✋  an error occured while fetching user's post 🛑✋",error)
    }
    if(result){
        response=result;
        status =200
        console.log("🔼🔼🔼🔼this is the correct fetched posts of the user▶▶▶",result.length)
    }


    return {data:response,status:status}
}