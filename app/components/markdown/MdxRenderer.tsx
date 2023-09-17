import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from '@/styles/markdown.module.css'
import Image from 'next/image'
import Loading from '../shared/Loading';
import Box from '../shared/Box';
import { Images } from '@/public/resources';
import ProfileCard from '../cards/ProfileCard';
import supabase from '@/lib/supabase';
import { PostgrestError } from '@supabase/supabase-js';
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



const MarkdownComponent = () => {
  const [userData,setUserData]  = useState<any>()
  const [error,setError] =  useState<PostgrestError>()
  const [loading,setLoading] = useState(true)
 
   
  const content  = `
  # Markdown Example
  
  This is an example of **Markdown** text that includes various elements.
  
  - Unordered list item 1
  - Unordered list item 2
  - Unordered list item 3
  `;
  



  useEffect(()=>{
    const fetcheData  = async ()=>{
      const {data,error} = await supabase.schema('public').from('posts').select('*')
      if(error){
        console.log(error)
        setError(error)
      }
      else{
        setLoading(false)
        setUserData(data)
        
      }
    }
    fetcheData();
  },[])
  
  const renderers = {
   
  };

  return (
    <div className="relative grid grid-cols-3 gap-4 container mx-auto">

    <div className="relative col-span-3 md:col-span-2 p-2 min-h-screen w-full md:border border-gray-200 dark:border-[#47291b81] drop-shadow-lg shadow-amber-950 rounded-xl">
    <Loading isloading={loading} />
      <Box className='flex flex-col gap-y-4'>
        
      {
          userData?.length!=0 ?(
           
            <div className="markdown-container">
            <ReactMarkdown className={styles.reactMarkDown}>{markdownText}</ReactMarkdown>
          </div>
        
          ):(
            <div className="absolute flex justify-center items-center w-full h-full">
                <div className="flex flex-col gap-1 justify-center items-center grayscale hue-rotate-[50deg]">
                <Image src={Images.nodata} alt="no data" width={300} height={300}/>
                <h1 className="text-2xl text-gray-700 text-center">
                  No Data
                </h1>
                </div>
            </div>
          )
        }
      </Box>
    </div>
    <div className="hidden h-fit md:flex col-span-1 ">
      <Box className=' border  border-gray-200 rounded-xl dark:border-[#47291b81] shadow-sm dark:shadow-none drop-shadow-lg shadow-gray-200'>
      <ProfileCard cover={author.cover} avatar={author.avatar} bio={author.bio}
                role={author.role} email={author.email} followers={author.followers} likes={author.likes}/>
      </Box>
    </div>



</div>
    
  );
};

export default MarkdownComponent;