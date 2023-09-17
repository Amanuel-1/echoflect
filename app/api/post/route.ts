import { db } from "@/lib/db";
import { posts, users } from "@/lib/db/schema";
const psts =[
      {
        "id": "post1_id",
        "authorId": "a35acbbe-2a72-43d1-8ee9-b6d53d91122a",
        "title": "Post 1",
        "description": "Description of Post 1",
        "content": "## MDX formatted text for Post 1",
        "cover": "cover1.jpg",
        "createdAt": "2023-09-16T10:30:00Z",
        "updatedAt": "2023-09-16T10:30:00Z"
      },
      {
        "id": "post2_id",
        "authorId": "b7f8457a-47a0-4f6d-9f8d-11c9e5f3d8f2",
        "title": "Post 2",
        "description": "Description of Post 2",
        "content": "## MDX formatted text for Post 2",
        "cover": "cover2.jpg",
        "createdAt": "2023-09-16T11:45:00Z",
        "updatedAt": "2023-09-16T11:45:00Z"
      },
      {
        "id": "post3_id",
        "authorId": "c96e6f1b-fafb-4a3f-8b1c-9a8a0e9d0c4d",
        "title": "Post 3",
        "description": "Description of Post 3",
        "content": "## MDX formatted text for Post 3",
        "cover": "cover3.jpg",
        "createdAt": "2023-09-16T13:20:00Z",
        "updatedAt": "2023-09-16T13:20:00Z"
      }
    ]
  
export async function POST(){
    let newPost
    try{
         newPost = await db.insert(posts).values({
            "id": "post1_id",
         "authorId": "a35acbbe-2a72-43d1-8ee9-b6d53d91122a",
         "title": "Post 1",
         "description": "Description of Post 1",
         "content": "## MDX formatted text for Post 1",
         "cover": "cover1.jpg",
         "createdAt": "2023-09-16T10:30:00Z",
         "updatedAt": "2023-09-16T10:30:00Z"})
    }
    catch(err){
        console.log(err)
    }
    finally{
    console.log('New post created:', newPost);
   return JSON.stringify(newPost)
    }

}