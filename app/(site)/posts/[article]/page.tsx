"use client"

import ProfileCard from '@/app/components/cards/ProfileCard'
import Box from '@/app/components/shared/Box'
import Loading from '@/app/components/shared/Loading';
import supabase from '@/lib/supabase';
import { shortener } from '@/lib/utils';
import { Images } from '@/public/resources'
import { PostgrestError } from '@supabase/supabase-js';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { useEffect } from 'react';

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






const Article = () => {
    const [userData,setUserData]  = useState<any>()
    const [error,setError] =  useState<PostgrestError>()
    const [loading,setLoading] = useState(true)
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

  return (
    <div className="relative grid grid-cols-3 gap-4 container mx-auto">

        <div className="relative col-span-3 md:col-span-2 min-h-screen w-full border border-gray-200 dark:border-[#47291b81] drop-shadow-lg shadow-amber-950 rounded-xl">
        <Loading isloading={loading} />
          <Box className=''>
            
          {
              userData?.map((data,index)=>(
                
                
                    <Box className=' dark:bg-gray-950 hover:hue-rotate-[180deg] cursor-pointer rounded-md border border-gray-200 dark:border-[#47291b81] drop-shadow-lg shadow-amber-950' key={index}>
                        <Link className='grid grid-cols-3 ' href={`/categories/${data.title}`} >
                        <div className="relative col-span-1 flex items-center category-image py-[0.04rem] bg-gray-300 dark:bg-gray-900 ">
                           
                        </div>
                        <div className="col-span-2 p-3 flex flex-col gap-4 justify-spread">
                          <h1 className="text-left text-lg md:text-3xl font-semibold dark:text-gray-500">
                            {data.title}
                          </h1>
                          <ul className="flex gap-2">
                            <li className=' pr-4 text-xs font-extralight md:text-sm'><small>10k+ articles</small></li>
                            <li className='border-l px-4 text-xs font-extralight md:text-sm'><small>500k+ likes</small></li>
                            <li className='border-l px-4 text-xs font-extralight md:text-sm'><small>3k+ authors</small></li>
                          </ul>
                          <p className="px-1 text-xs md:text-sm text-justify font-light">
                          {shortener(data.content,180)}
                          </p>
                        </div>
                        </Link>
                    </Box>
                
          
              ))
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
  )
}

export default Article