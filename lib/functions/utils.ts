
import remarkReact from 'remark-react';
import { createElement } from 'react';
import remarkHtml from 'remark-html';


import {unified} from 'unified'
import remarkParse from 'remark-parse'
import { db } from '../db';
import { eq } from 'drizzle-orm';
import { users } from '../db/schema';



export function shortener(text: string,size:number): string {
    let result: string; // Declare the type of 'result' as string
  
    if (text.length > size) {
      result = text.substring(0, size) + "...";
    } else {
      result = text;
    }
  
    return result;
  }

  export function getDomain() {
    const protocol = process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? "https" : "http"
    const domain = process.env.NEXT_PUBLIC_VERCEL_URL ? process.env.NEXT_PUBLIC_VERCEL_URL : "localhost:3000"
    
    return `${protocol}://${domain}`
}


export const toBase64 = (file:File)=>{
  return new Promise((resolve,reject)=>{
      const reader = new FileReader();
      reader.readAsDataURL(file)
      
      reader.onload=()=>{
      // var canvas =  document.createElement("canvas");
      //     var contxt = canvas.getContext("2d");
      //     var img =document.createElement("img")

      //     img.src = reader.result ; 

      //     contxt.drawImage(img,0,0,612,408) ; 

      //     var final =canvas.toDataURL('image/jpeg')




          resolve(reader.result);
         return reader.result as string
          
      }
      reader.onerror=(error)=>{
          reject(error)
      }
  })
}
//this is a function to change all <img/> in the richtext editor into <Image /> tag
export function wrapImages(content:string,setter:Function) {
  // Create a regular expression to match all image tags.
  const imageRegex = /<img(?<attributes>.*?)>/g;

  // Replace all image tags with the `<Image>` tag.
  setter(content.replace(imageRegex,(match,attributes)=>(`<Image ${attributes} />`)));
}

export async function generateUniqueUsername(): Promise<string> {
  // Generate a random username.
  const username = `${Math.random().toString(36).substring(7)}`;

  // Check if the username is already in use.
  const user = await db.query.users.findFirst(
    {where:eq(users.username,username)}
  )
  if (user) {
    // If the username is already in use, generate a new one.
    return generateUniqueUsername();
  }

  // Return the unique username.
  return username;
}
