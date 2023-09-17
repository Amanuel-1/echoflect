import React from 'react'
import { AiFillDislike, AiFillEye, AiFillHeart } from 'react-icons/ai'
import Image from 'next/image'


import Box from '@/app/components/shared/Box'
import { roboto } from '@/public/Fonts'
import Avatar from '@/app/components/shared/nav/Avatar'
import { shortener } from '@/lib/functions/utils'
import Link from 'next/link'
import { Images } from '../../../../public/resources/index';

const covers = [Images.cover,Images.author,Images.green,Images.lighthouse,Images.herosection]
const page = () => {
  return (
    <section style={roboto.style} className=' h-full py-24 bg-inherit mx-6 md:mx-[2rem]'>
    <div className='w-full flex flex-col md:p-[1rem] rounded-[5px]'>
      <div className="flex w-full justify-center ">

      </div>
      <Box className=' grid grid-cols-1 md:grid-cols-2 gap-6 dark:bg-gray-950 re'>
       {
        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,].map((num,i)=>(
          <Link key={i} href={`/posts/${num}`} >
            <div key={num} className=' col-span-1 flex flex-col justify-center dark:bg-gray-950   rounded-[15px] border border-gray-200 dark:border-[#47291b81] drop-shadow-lg shadow-amber-950 cursor-pointer hover:grayscale'>
          
          <div className="relative min-h-[18rem]">
          <Image className='rounded-t-[15px]' src={covers[Math.floor(Math.random() * 5)]} alt='image' layout="fill" objectFit="cover"/>
          </div>
          <div className="flex gap-6 justify-between mx-4">
            <Avatar img={'https://api.dicebear.com/6.x/bottts/png'} name='Abebe' />
            <div style={roboto.style} className="flex gap-3 justify-center items-center ">
              <button className='flex gap-1 items-center text-gray-500 dark:text-gray-700'><AiFillEye size={25}/> <p>2K</p></button>
              <button className='flex gap-1 items-center text-gray-500 dark:text-gray-700'><AiFillHeart size={25}/> <p>2K</p></button>
              <button className='flex gap-1 items-center text-gray-500 dark:text-gray-700'><AiFillDislike size={25}/> <p>2K</p></button>
            </div>
          </div>
          <div className="p-4 relative text-gray-800 dark:text-gray-100 dark:bg-gray-950 rounded-[15px] ">
          <h1 className="text-md font-light text-justify">
            {
             shortener( `
             Literature serves as a gateway to different cultures, societies, a
             nd perspectives. It introduces readers to a myriad of experiences 
             and allows them to step into the shoes of diverse characters.
              By immersing oneself in the pages of a well-crafted story, readers 
              gain a deeper understanding of the world around them, fostering empathy 
               compassion. As they encounter characters from various backgrounds and walks of life, readers are encouraged to question
              their own beliefs and prejudices, leading to personal growth and an expanded worldview.
             `,500)
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

export default page