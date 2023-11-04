
import React, { useEffect, useState } from 'react';
import styles from '@/styles/markdown.module.css'
import Image from 'next/image'
import { Images } from '@/public/resources';
import postStyle from '@/styles/markdown.module.css'

import ProfileCard from '@/app/components/cards/ProfileCard';
import Box from '@/app/components/shared/Box';
import Loading from '@/app/components/shared/Loading';
import { IPost, Usertype } from '@/lib/db/schemaTypes';
import { db } from '@/lib/db';
import { eq } from 'drizzle-orm';
import { useParams } from 'next/navigation';
import { posts, users } from '@/lib/db/schema';
import { getDomain } from '@/lib/functions/utils';
import hljs from 'highlight.js/lib/core';
import "highlight.js/styles/github.css";
import Head from 'next/head';
import { constructMetadata } from '@/lib/utils';

const markdownText = `
# My Awesome Blog Post

Welcome to my blog! In this post, I'll be sharing some code examples in different programming languages.

## JavaScript Code

Here's an example of a JavaScript function that greets a person by name:

\`\`\`javascript
function greet(name) {
  console.log('Hello, ' + name + '!');
}
greet('John');
\`\`\`

## Python Code

And here's a Python function that multiplies two numbers:

\`\`\`python
def multiply(a, b):
    return a * b
result = multiply(3, 4)
print(result)
\`\`\`

I hope you found these code examples helpful. Stay tuned for more exciting content!
`;

// const author = {
//   avatar: {
//     img: Images.author,
//     name: 'Selam Weldeyes'
//   },
//   cover: Images.cover,
//   bio: 'I am a passionate writer dedicated to creating captivating stories.',
//   role: 'Writer',
//   email: 'selamwinta@gmail.com',
//   followers: '150k',
//   likes: '2.3M+'
// };

type aPost={
  posts:IPost,
  user:typeof users
}

async function getpostData(article:string){
  const result  = await fetch(`${getDomain()}/api/post?slug=${article}`).then((res)=>res.json())
  if(result){
    return result
  }

  return null
}

async function getAuthor(posts :any){
  if(posts.length){
    return posts[0].user
  }

  return null
}
// {
//   params,
//   searchParams,
// }: {
//   params: { slug: string }
//   searchParams: { [key: string]: string | string[] | undefined }
// }


export const metadata = constructMetadata({
  title: "Blog - Loglib",
  description:
      "All the latest news, guides, and updates from loglib - the privacy first open source web analytics.",
  image: "https://echoflect.vercel.app/api/og?title=amanifarms&author=Amanuel",
});



const PostDetail = async(  {
  params,
  searchParams,
}: {
  params: { article: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) => {


  type poststype = {
    posts:IPost,
    user:typeof users
   }
 const postData:poststype[]  = await getpostData(params.article)
 const user  =  await getAuthor(postData)

 
   
  const content  = `
  # Markdown Example
  
  This is an example of **Markdown** text that includes various elements.
  
  - Unordered list item 1
  - Unordered list item 2
  - Unordered list item 3
  `;
  





  return (
    <div className="relative grid grid-cols-3 gap-4 md:container mx-3 md:mx-auto">
 
        )
    <div className="relative postContent col-span-3 md:col-span-2 w-full min-h-[25rem] py-2 px-0 md:px-2 md:border-r border-stone-200 dark:border-[#47291b81] drop-shadow-lg shadow-amber-950 ">
   
      <div className={`${styles.postContent} flex flex-col gap-y-4 w-full`}>
        
      {
        
        //this maynot be neccessary because we only want one post but we are selecting all posts and retrieve the first one
        postData.length  ?( postData.map(({posts,user}:{posts:IPost,user:typeof users},i:number)=>(
          <>
          <div className=" relative w-full h-[20rem] p-0 flex justify-center items-center rounded-t-[10px]">
            <Image src={posts.thumbnail} alt={posts.title} objectFit='cover' layout='fill' />

           <div className="absolute flex w-full h-[20rem] justify-center bg-gradient-to-t from-[rgba(0,0,0,1)] via-[rgba(0,0,0,.8)] to-transparent dark:from-stone-950 dark:via-[rgba(8,8,8,0.8)] dark:to-transparent ">
              <h3 className="absolute z-50 w-full bottom-4 left-0 text-center  text-stone-200">{posts.title}</h3>
           </div>
          </div>
          <div key={i} style={styles} dangerouslySetInnerHTML={{ __html: posts.content}} className="relative flex w-full h-fit py-[3rem] px-0 md:px-6 flex-wrap dark:text-stone-200 text-justify font-extralight te"/>
          </>
        ))
          )
          :(
              <div className="absolute h-full w-full">
                <div className="flex flex-col gap-1 justify-center items-center w-full h-full grayscale hue-rotate-[50deg]">
                <Image src={Images.nodata} alt="no data" width={150} height={150}/>
                <p className="text-2xl text-stone-700 text-center">
                  No Data
                </p>
                </div>
            </div>
          )
        }
      </div>
    </div>
    <div className="hidden h-fit md:flex col-span-1 ">
      {
        user?(<Box className=' border  border-stone-200 w-full rounded-xl dark:border-[#47291b81] shadow-sm dark:shadow-none drop-shadow-lg shadow-stone-200'>
        <ProfileCard cover={user.coverphoto as string} user={user as Usertype} bio={user.bio as string} />
        </Box>
        ):(
          <div className=" w-full h-full py-[3rem]">
                  <div className="flex flex-col gap-1 h-full w-full justify-center items-center grayscale hue-rotate-[50deg]">
                  <Image src={Images.nodata} alt="no data" width={100} height={100}/>
                  <h1 className="text-xs text-stone-700 text-center">
                    No Author Found
                  </h1>
                  </div>
            </div>
        )

      }
    </div>



</div>
    
  );
};

export default PostDetail;