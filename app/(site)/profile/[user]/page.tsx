"use client"

import Image from 'next/image';
import React, { useEffect } from 'react';
import {useState} from 'react';
import { useSession } from 'next-auth/react';
import { AiOutlineCamera } from 'react-icons/ai';
import { HiDotsVertical } from 'react-icons/hi';
import { FaCamera, FaCameraRetro, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { MdOutlineManageAccounts, MdOutlineManageHistory, MdOutlinePostAdd, MdOutlineWebStories, MdWebStories } from 'react-icons/md';
import { RiCamera2Line } from 'react-icons/ri';
import { FiEdit2, FiSettings } from 'react-icons/fi';


import styles from '@/styles/app.module.css'
import { Images } from '@/public/resources';


import Box from '@/app/components/shared/Box';
import AccountSetting from '@/app/components/profiles/AccountSetting';
import ActivityLog from '@/app/components/profiles/ActivityLog';
import Story from '@/app/components/profiles/Story';
import PostsTab from '@/app/components/profiles/Posts';
import { getDomain } from '@/lib/functions/utils';
import { useParams } from 'next/navigation';
import { users } from '@/lib/db/schema';
import { PgColumn } from 'drizzle-orm/pg-core';
import { Usertype } from '@/lib/db/schemaTypes';
import ImageWithFallback from '@/app/components/cards/ImageWithFallBack';




const Profile =() => {
  
  
  const [selectedTab,setSelectedTab] = useState(0);
  const { data: session } = useSession();
  const [user,setUser] =  useState<Usertype>()
  const params = useParams()
  const [isLoading,setIsLoading] = useState(true)

  useEffect(()=>{
    const getdata = async()=>{
      
      console.log("this is the user-posts api url 🛑🔩🛑✨",`${getDomain()}/api/user?user=${params.user}`)
     let result:any =await fetch(`${getDomain()}/api/user?user=${params.user}`,{cache:'no-cache'}).then((res)=>res.json())

      if(result){
        setIsLoading(false)
        setUser(result)
      }
    }
    getdata()
  },[])

  return (
    <section className=" min-h-screen  md:px-20 text-gray-700 dark:text-gray-200">
     <div className="relative flex flex-col gap-[4rem] container mx-auto w-full bg-stone-800 min-h-[15rem]">
          <ImageWithFallback fallbackSrc={Images.fallback} src={user?.coverphoto as string} alt='cover'/>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 md:left-1/6">
            <Image className='relative rounded-full border-8 border-gray-700' src={user?.image as string} alt='author' height={200} width={200}/>
          <button className='absolute bottom-2 left-1/2 -translate-x-1/2 opacity-0 hover:opacity-100 bg-gradient-to-t from-amber-800 via-[rgba(100,100,20,.1)] to-transparent p-[5rem] h-[1rem]  text-3xl text-white rounded-b-full transition-opacity duration-300 ease-in' ><AiOutlineCamera/></button>
          </div>
          <div className="absolute top-1 left-0 w-full flex gap-1 justify-end bg-transparent">
            <button className={`p-4 text-white font-extrabold text-3xl hover:bg-[rgba(30,30,30,.5)] rounded-full`}><FiEdit2/></button>
            <button className={`p-4 text-white font-extrabold text-3xl hover:bg-[rgba(30,30,30,.5)] rounded-full`}><HiDotsVertical/></button>
          </div>
     </div>

     <div className="flex flex-col gap-1 justify-center pt-[100px] pb-[20px] h-fit w-full bg-gray-50 dark:bg-gray-900">
      <div className="name-bio w-full justify-center">
        <ul className="flex flex-col gap-2 w-full justify-center">
          <li className="text-2xl font-bold text-center">{user?.name}</li>
          <li className="text-sm font-extrabold text-center">#{user?.username}</li>
          <li className="text-sm font-extralight italic text-center">📧 {user?.email}</li>

          <li className="flex gap-1 px-4 justify-center text-md  font-light text-center">
            <FaQuoteLeft size={20}/>
              <i className='text-center self-center font-light px-3 '>{user?.bio}</i>
            <FaQuoteRight size={20}/></li>
            <li className="actions w-full flex gap-6 justify-center ">
          <button className={`${styles.appButton} px-5 border`}>Friend</button>
          <button className={`${styles.appButton} px-5 ${styles.filled}`}>Message</button>
        </li>
        </ul>
      </div>
     </div>

     <div className="py-6 grid grid-cols-4 gap-4 lg:gap-">
       <Box className=" col-span-4 md:col-span-1 px-2 py-4 w-full h-fit ">
          <ul className="flex flex-wrap md:flex-col gap-4 w-full p-2 justify-around md:justify-center">
              <li onClick={()=>setSelectedTab(0)} className={`flex gap-2 lg:gap-4 md:w-full py-2 justify-start ${selectedTab==0?'text-amber-600':''} text-md font-bold hover:bg-[rgba(170,123,93,0.05)] cursor-pointer items-center text-center`}>
                <MdOutlineManageAccounts size={30}/>
                <p className="hidden md:flex">Account Setting</p>
              </li>
              <li onClick={()=>setSelectedTab(1)} className={`flex gap-2 lg:gap-4 md:w-full py-2 justify-start ${selectedTab==1?'text-amber-600':''} text-md font-bold hover:bg-[rgba(170,123,93,0.05)] cursor-pointer items-center text-center`}>
                <MdOutlineManageHistory size={30}/>
                <p className="hidden md:flex">Activity Log</p>
              </li>
              <li onClick={()=>setSelectedTab(2)} className={`flex gap-2 lg:gap-4 md:w-full py-2 justify-start ${selectedTab==2?'text-amber-600':''} text-md font-bold hover:bg-[rgba(170,123,93,0.05)] cursor-pointer items-center text-center`}>
                <MdOutlineWebStories size={30}/>
                <p className="hidden md:flex">Stories</p>
              </li>
              <li onClick={()=>setSelectedTab(3)} className={`flex gap-2 lg:gap-4 md:w-full py-2 justify-start ${selectedTab==3?'text-amber-600':''} text-md font-bold hover:bg-[rgba(170,123,93,0.05)] cursor-pointer items-center text-center`}>
                <MdOutlinePostAdd size={30}/>
                <p  className="hidden md:flex">Posts</p>
              </li>
          </ul>
       </Box>

       <Box className="col-span-4 md:col-span-3 px-2 py-4 w-full h-fit transition-all duration-500 ease-in-out">
         <AccountSetting open= {selectedTab==0}/>
         <ActivityLog open= {selectedTab==1}/>
         <Story open= {selectedTab==2}/>
         <PostsTab username={user?.username as string} open= {selectedTab==3}/>
       </Box>
     </div>
     
    
    </section>
  );
};

export default Profile;