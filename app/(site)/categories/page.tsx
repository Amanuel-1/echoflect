import Box from '@/app/components/shared/Box'
import React from 'react'
import Image from 'next/image'
import { shortener } from '@/lib/utils'
import Avatar from '@/app/components/shared/nav/Avatar'
import { RiHeart2Line } from 'react-icons/ri'
import { AiFillDislike, AiFillEye, AiFillHeart, AiFillLike, AiOutlineHeart } from 'react-icons/ai'
import { FaThumbsUp } from 'react-icons/fa'
import { MdThumbsUpDown } from 'react-icons/md'
import { roboto } from '@/public/Fonts'

const Categories = () => {

  
  return (
    <div className='w-full flex flex-col md:p-[1rem] rounded-[5px]'>
      <div className="flex w-full justify-center ">

      </div>
      <Box className=' grid grid-cols-1 md:grid-cols-2 gap-6 dark:bg-gray-950'>
       {
        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,].map((num,i)=>(
          <div key={num} className=' col-span-1 flex flex-col justify-center dark:bg-gray-950   rounded-[15px] border border-gray-200 dark:border-[#47291b81] drop-shadow-lg shadow-amber-950'>
          
          <Image className='rounded-t-[15px]' src={'/resources/herosection.jpg'} alt='image' width={800} height={400} />
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
             `)
            }
          </h1>
          <div className='absolute bottom-0 left-0 flex justify-center items-end w-full h-full rounded-b-[15px] bg-gradient-to-t from-white via-[rgba(255,255,255,.9)] dark:from-[rgba(5,5,10,1)]  dark:via-[rgba(6,10,20,.98)] dark:to-transparent'>
                <button className='py-5 text-neutral-500 font-extralight italic'>continue reading</button>
          </div>
          </div>
          
        </div>
       
        ))
       }
      </Box>
       
    </div>
  )
}

export default Categories