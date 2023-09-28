'use client'


import React, { useEffect, useState } from 'react'
import { AiFillDislike, AiFillEye, AiFillHeart } from 'react-icons/ai'
import Image from 'next/image'
 
import { useParams } from 'next/navigation'

import Box from '@/app/components/shared/Box'
import { roboto } from '@/public/Fonts'
import Avatar from '@/app/components/shared/nav/Avatar'
import { getDomain, shortener } from '@/lib/functions/utils'
import Link from 'next/link'
import { Images } from '../../../../public/resources/index';
import { IPost } from '@/lib/db/schemaTypes'
import Loading from '@/app/components/shared/Loading'
import { users } from '@/lib/db/schema'



//const covers = [Images.cover,Images.author,Images.green,Images.lighthouse,Images.herosection]


const CategoryPage = () => {
  
  const [postData,setPostData] = useState([]);  
  const [isLoading,setIsLoading]= useState(true)
  const params = useParams();
  

  useEffect( ()=>{
    const getPosts =async ()=>{
      const result  = await fetch(`${getDomain()}/api/post`).then((res)=>res.json())
      if(result){
        setPostData(result)
        console.log(result)
        setIsLoading(false)
      }
      console.log(result)
           
    }

    getPosts()
    

  },[])
  
  
  return (
    <section style={roboto.style} className='relative h-full py-24 bg-inherit mx-6 md:mx-[2rem]'>
    <Loading isloading={isLoading} className='h-[20rem] backdrop-blur-sm' />
    <div className='w-full flex flex-col md:p-[1rem] rounded-[5px]'>
      <div className="flex w-full justify-center ">
            
      </div>
      <Box className=' grid grid-cols-1 md:grid-cols-2 gap-6 dark:bg-gray-950 border-none'>
       {
        postData && postData.map(({posts,user}:{posts:IPost,user:typeof users},i)=>(
          <Link key={i} href={`/posts/${posts.slug}`} >
            <div key={i+2} className=' col-span-1 flex flex-col justify-center dark:bg-gray-950   rounded-[15px] border border-gray-200 dark:border-[#47291b81] drop-shadow-lg shadow-amber-950 cursor-pointer hover:grayscale'>
          
          <div className="relative min-h-[18rem]">
          <Image className='rounded-t-[15px]' src={posts.thumbnail.startsWith('cover')?'':posts.thumbnail} alt={posts.title} layout="fill" objectFit="cover"/>
          </div>
          <div className="flex gap-6 justify-between mx-4">
            <Avatar img={user.image} name={user.name as any} />
            <div style={roboto.style} className="flex gap-3 justify-center items-center ">
              <button className='flex gap-1 items-center text-gray-500 dark:text-gray-700'><AiFillEye size={25}/> <p>2K</p></button>
              <button className='flex gap-1 items-center text-gray-500 dark:text-gray-700'><AiFillHeart size={25}/> <p>2K</p></button>
              <button className='flex gap-1 items-center text-gray-500 dark:text-gray-700'><AiFillDislike size={25}/> <p>2K</p></button>
            </div>
          </div>
          <div className="p-4 relative text-gray-800 dark:text-gray-100 dark:bg-gray-950 rounded-[15px] ">
          <h1 className="text-md font-light text-justify">
            {
             shortener(posts.content,500)
            }
          </h1>
          <div className='absolute bottom-0 left-0 flex justify-center items-end w-full h-full rounded-b-[15px] bg-gradient-to-t from-white via-[rgba(255,255,255,.9)] dark:from-[rgba(5,5,10,1)]  dark:via-[rgba(6,10,20,.98)] dark:to-transparent'>
                <button className='py-5 text-neutral-500 font-extralight italic'>continue reading</button>
          </div>
          </div>
          
        </div>
          </Link>
       
        ))
       }
      </Box>
       
    </div>
    </section>
  )
}

export default CategoryPage