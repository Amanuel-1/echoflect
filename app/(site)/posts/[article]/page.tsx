"use client"

import React, { useEffect, useState } from 'react';
import styles from '@/styles/markdown.module.css'
import Image from 'next/image'
import { Images } from '@/public/resources';

import ProfileCard from '@/app/components/cards/ProfileCard';
import Box from '@/app/components/shared/Box';
import Loading from '@/app/components/shared/Loading';
import { IPost } from '@/lib/db/schemaTypes';
import { db } from '@/lib/db';
import { eq } from 'drizzle-orm';
import { useParams } from 'next/navigation';
import { posts, users } from '@/lib/db/schema';
import { getDomain } from '@/lib/functions/utils';
 // Import CSS file for styling

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

const author = {
  avatar: {
    img: Images.author,
    name: 'Selam Weldeyes'
  },
  cover: Images.cover,
  bio: 'I am a passionate writer dedicated to creating captivating stories.',
  role: 'Writer',
  email: 'selamwinta@gmail.com',
  followers: '150k',
  likes: '2.3M+'
};

type aPost={
  posts:IPost,
  user:typeof users
}


const PostDetail = () => {

  const [loading,setIsLoading] = useState(true)
  const [postData, setPostData] = useState([]);
  const [user,setUser] = useState({})

  const params = useParams();

  useEffect( ()=>{
    const getPost =async ()=>{
      const result  = await fetch(`${getDomain()}/api/post?slug=${params.article}`).then((res)=>res.json())
      if(result){
        setPostData(result)
        setUser(result[0].user)
        console.log(result)
        setIsLoading(false)
      }
      console.log(result)
           
    }

    getPost()
    

  },[])
  
 
   
  const content  = `
  # Markdown Example
  
  This is an example of **Markdown** text that includes various elements.
  
  - Unordered list item 1
  - Unordered list item 2
  - Unordered list item 3
  `;
  





  return (
    <div className="relative grid grid-cols-3 gap-4 container mx-auto">

    <div className="relative col-span-3 md:col-span-2 p-2 min-h-screen w-full md:border border-gray-200 dark:border-[#47291b81] drop-shadow-lg shadow-amber-950 rounded-xl">
    <Loading isloading={loading} />
      <div className='flex flex-col gap-y-4'>
        
      {
        
        //this maynot be neccessary because we only want one post but we are selecting all posts and retrieve the first one
        postData ?( postData.map(({posts,user}:{posts:IPost,user:typeof users},i)=>(
          <div key={i} style={styles} dangerouslySetInnerHTML={{ __html: posts.content}} className="flex w-full h-fit py-[3rem] px-6 flex-wrap text-justify"/>
        ))
          )
          :(
            <div className="h-full py-[10rem]">
                <div className="flex flex-col gap-1 justify-center items-center grayscale hue-rotate-[50deg]">
                <Image src={Images.nodata} alt="no data" width={300} height={300}/>
                <h1 className="text-2xl text-gray-700 text-center">
                  No Data
                </h1>
                </div>
            </div>
          )
        }
      </div>
    </div>
    <div className="hidden h-fit md:flex col-span-1 ">
      {
        user?(<Box className=' border  border-gray-200 rounded-xl dark:border-[#47291b81] shadow-sm dark:shadow-none drop-shadow-lg shadow-gray-200'>
        <ProfileCard cover={author.cover} user={user as typeof users} bio={author.bio}                 />
        </Box>
        ):(
          <div className="h-full py-[3rem]">
                <div className="flex flex-col gap-1 justify-center items-center grayscale hue-rotate-[50deg]">
                <Image src={Images.nodata} alt="no data" width={100} height={100}/>
                <h1 className="text-xs text-gray-700 text-center">
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