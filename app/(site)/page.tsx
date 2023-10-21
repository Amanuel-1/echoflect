'use client'

import { Button } from '@/components/ui/button'
import { db } from '@/lib/db'
import * as schema from "@/lib/db/schema"
import { IPost } from '@/lib/db/schemaTypes'
import { getDomain, shortener } from '@/lib/functions/utils'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { CardDemo } from '../components/cards/test'
import { Images } from '@/public/resources'
import ImageWithFallback from '../components/cards/ImageWithFallBack'

import { noto, roboto } from '@/public/Fonts'
const meta = {
  title:'Login',
  description:'Welcome to the login page. please log in to your echoflect account or register.'
}


export default  function Home() {


  const [acc,setUsers]= useState([])
  
  // useEffect( ()=>{
  //   const getUsers =async ()=>{
  //     const result  = await fetch(`${getDomain()}/api/post`).then((res)=>res.json())
  //     if(result){
  //       setUsers(result)
  //     }
  //     console.log(result)
           
  //   }

  //   getUsers()
    

  // },[])
  

  return ( 
    // <main className="relative flex min-h-screen flex-col items-center justify-between overflow-x-hidden ">
    //     <section className='heroSection flex justify-center '>
    //     <div className="  absolute -top-1/2 w-[30rem] h-[30rem] animate-spin duration-700 rounded-full bg-amber-600 blur-[140px]"></div>
    //     <div className="  absolute -top-[5rem] left-[4rem] w-[10rem] h-[30rem] animate-spin duration-700 rounded-full bg-yellow-600 blur-[200px]"></div>
    //     </section>
    // </main>
    <div className="relative flex flex-col justify-center  min-h-screen">
      <div className="background absolute z-0 top-0 left-0 w-full h-full">
      <div className="z-10 absolute top-[5%] left-1/2 -translate-x-1/2 w-[35rem] h-[15rem] rounded-full bg-red-300 dark:bg-[rgba(32,96,49,0.56)] blur-[90px]"></div>
      <div className="z-10 absolute top-[10%] left-1/4 -translate-x-1/2 w-[35rem] h-[35rem] rounded-full bg-amber-300 dark:bg-[rgba(85,22,22,0.5)] blur-[110px]"></div>
      </div>
      <div className="landingPage z-10 flex flex-col gap-[6rem] justify-center items-center  text-stone-700">
      <div className="z-10 w-full hero flex  flex-col flex-wrap gap-4 justify-center py-[10rem] text-stone-700 dark:text-stone-300 text-center">
        <div className=" announcement w-fit py-2 px-8 rounded-[50px] bg-[rgba(20,30,20,.2)] backdrop-blur-sm border border-stone-400 font-semibold hover:scale-95 transition-all duration-500 cursor-pointer">
          {shortener("🎉 new changes coming a head. it will be awesome when finished",50)}
        </div>
        <h1 style={noto.style} className='text-2xl md:text-6xl font-extrabold w-[80%] md:w-full md:px-[15rem] text-center text-wrap'>
          A Mirror Reflection of your Thoughts To Reach Every Corner Of The World
        </h1>
      </div>
      
        <div className="stats shadow w-full md:w-[60%] dark:bg-stone-900 ">
          
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </div>
            <div className="stat-title">Total Likes</div>
            <div className="stat-value text-primary">25.6K</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
          
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div className="stat-title">Page Views</div>
            <div className="stat-value text-primary">2.6M</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
          
          <div className="stat">
            <div className="stat-figure text-secondary text-stone-300">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <ImageWithFallback fallbackSrc={Images.fallback} src={Images.smile}  alt='test' className='rounded-full'/>
                </div>
              </div>
            </div>
            <div className="stat-title">Tasks done</div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Tasks done</div>
            <div className="stat-desc text-secondary">31 tasks remaining</div>
          </div>
          
        </div>
        
        <div className="grid grid-cols-4 gap-[2rem] w-full  justify-center">
              <div className="heroText col-span-2 h-full w-full flex justify-center align-middle items-center text-center">
                <h1 className='text-2xl w-[80%] flex items-center '>A place where you can showcase your literature works and growup audiences</h1>
              </div>
              <div className="mockup-browser col-span-2 border bg-base-300 w-[90%] dark:bg-stone-800">
              <div className="mockup-browser-toolbar dark:bg-stone-800 ">
              <div className="px-5 w-full rounded-full bg-stone-300 dark:bg-stone-500">https://daisyui.com</div>
            </div>
            <div className="flex justify-center px-4 py-16 bg-base-200 dark:bg-stone-900">
              
            </div>
              </div>
        </div>


      </div>
    </div> 
  )
}


