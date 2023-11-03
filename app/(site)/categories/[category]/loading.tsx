

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
import { users } from '@/lib/db/schema'
import ImageWithFallback from '@/app/components/cards/ImageWithFallBack'



//const covers = [Images.cover,Images.author,Images.green,Images.lighthouse,Images.herosection]
async function getPosts(){

    const result  = await fetch(`${getDomain()}/api/post`).then((res)=>res.json())
    if(result){
      return result
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

const Loading =() => {


 

  
  return (
    <section style={roboto.style} className='relative h-full py-24 bg-inherit mx-6 md:mx-[2rem]'>
    
    <div className='w-full flex flex-col md:p-[1rem] rounded-[5px]'>
      <div className="flex w-full justify-center ">
            
      </div>
      <div className=' columns-2xs  gap-4  dark:bg-stone-950 border-none animate-pulse'>
       {
        [1,2,3,4,5,6,7,8,9,10].map((post:number,i:number)=>(
          
            <div key={i+2} className='my-[1rem] min-w-[17rem] break-inside-avoid-column flex flex-col justify-center dark:bg-stone-950   rounded-[15px] border border-stone-200 dark:border-[#47291b81]  shadow-amber-950 cursor-pointer hover:scale-95 transition-all duration-500 ease-out '>
          
          <div className={`relative min-h-[15rem] bg-stone-100 dark:bg-stone-800 rounded-t-[15px] animate-pulse`}>
          <ul style={roboto.style} className="absolute z-30 bottom-0 py-1 left-1/2 -translate-x-1/2 w-full bg-[rgba(0,0,0,.5)] backdrop-blur-sm flex gap-3 justify-center items-center  animate-pulse">
              <li className="w-[30%] h-[.5rem] rounded-md bg-stone-400 dark:bg-stone-900 animate-pulse"></li>
          </ul>
          {/* this is the image */}
          <div className={`w-full h-[${Math.random()*5 }rem] bg-stone-500 dark:bg-stone-800 animate-pulse`}></div>
          </div>
          <div className="w-[50%] self-center h-[3rem] rounded-[10px] animate-pulse"></div>
          <div className="flex gap-4 justify-between mx-4">
            <div className="w-[3rem] h-[3rem] rounded-full bg-stone-600  animate-pulse"></div>
          </div>
          <div className="p-4 relative text-stone-800 dark:text-stone-100 dark:bg-stone-950 rounded-[15px] ">
         

          <ul className=" flex flex-col justify-center gap-4 mb-[2rem] w-full overflow-hidden text-md font-light text-justify ">
                <li className="w-[60%] h-[1rem] rounded-[10px] bg-stone-500 dark:bg-stone-800"></li>
                <li className="w-full h-[1rem] rounded-[10px] bg-stone-500 dark:bg-stone-800"></li>
                <li className="w-full h-[1rem] rounded-[10px] bg-stone-500 dark:bg-stone-800"></li>
                
          </ul>


          <div className='absolute bottom-0 left-0 flex justify-center items-end w-full h-full rounded-b-[15px] bg-gradient-to-t from-white via-[rgba(255,255,255,.9)] dark:from-black  dark:via-[rgb(8,5,3,.6)] dark:to-transparent'>
              
          </div>
          </div>
          
            </div>
          
       
        ))
       }
      </div>
       
    </div>
    </section>
  )
}

export default Loading


