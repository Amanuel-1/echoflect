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
import ImageWithFallback from '@/app/components/cards/ImageWithFallBack'



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
      <Box className=' columns-2xs  gap-4  dark:bg-stone-950 border-none'>
       {
        postData && postData.map(({posts,user}:{posts:IPost,user:typeof users},i)=>(
          
            <div key={i+2} className='mt-2 min-w-[17rem] break-inside-avoid-column flex flex-col justify-center dark:bg-stone-950   rounded-[15px] border border-stone-200 dark:border-[#47291b81] drop-shadow-lg shadow-amber-950 cursor-pointer hover:grayscale'>
          
          <div className="relative min-h-[18rem] bg-stone-800 rounded-t-[15px]">
          <div style={roboto.style} className="absolute z-30 bottom-0 py-1 left-1/2 -translate-x-1/2 w-full bg-[rgba(0,0,0,.5)] backdrop-blur-sm flex gap-3 justify-center items-center ">
              <button className='flex gap-1 items-center text-stone-200 dark:text-stone-500'><AiFillEye size={25}/> <p>2K</p></button>
              <button className='flex gap-1 items-center text-stone-200 dark:text-stone-500'><AiFillHeart size={25}/> <p>2K</p></button>
              <button className='flex gap-1 items-center text-stone-200 dark:text-stone-500'><AiFillDislike size={25}/> <p>2K</p></button>
          </div>
          <ImageWithFallback className='rounded-t-[15px] text-center ' fallbackSrc={Images.fallback} src={posts.thumbnail.startsWith('cover')?'':posts.thumbnail} alt={posts.title} />
          </div>
          <div className="title flex flex-wrap text-center justify-center items-center font-bold font-[roboto] text-xl ">{posts.title}</div>
          <div className="flex gap-4 justify-between mx-4">
            <Avatar img={user.image} name={user.username as any} />
          </div>
          <div className="p-4 relative text-stone-800 dark:text-stone-100 dark:bg-stone-950 rounded-[15px] ">
          <h1 className=" flex flex-wrap overflow-hidden text-md font-light text-justify ">
            {
             shortener(posts.description,500)
            }
          </h1>
          <div className='absolute bottom-0 left-0 flex justify-center items-end w-full h-full rounded-b-[15px] bg-gradient-to-t from-white via-[rgba(255,255,255,.9)] dark:from-black  dark:via-[rgb(8,5,3,.6)] dark:to-transparent'>
              <Link key={i} href={`/posts/${posts.slug}`} >
                <button className='py-5 text-neutral-500 font-extralight italic hover:text-blue-700 bg-stone-700 px-6 rounded-full text-white'>continue reading</button>
              </Link>
          </div>
          </div>
          
        </div>
          
       
        ))
       }
      </Box>
       
    </div>
    </section>
  )
}

export default CategoryPage