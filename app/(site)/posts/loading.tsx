import ProfileCard from '@/app/components/cards/ProfileCard'
import Box from '@/app/components/shared/Box'
import user from '@/app/components/shared/nav/user'
import { Usertype } from '@/lib/db/schemaTypes'
import React from 'react'

const Loading = () => {
  return (
    <div className="relative grid md:grid-cols-6 gap-4">

        <div className="col-span-4 w-full mx-4 bg-transparent p-6">
          <Box className='h-[40rem] flex flex-col gap-[4rem]  bg-stone-100 dark:bg-stone-900 w-full p-[2rem]'>
                <div className="title flex flex-col gap-4 justify-center items-center w-full h-fit mb-[3rem]">
                    <div className="w-[40%] h-[2rem]  rounded-[10px] bg-stone-300 dark:bg-stone-700 animate-pulse"/>
                </div>
                <div className="body flex flex-col gap-4 w-full">
                
                  <div className="w-[90%] h-[1.2rem] self-end rounded-[10px] bg-stone-300 dark:bg-stone-700 animate-pulse"/>
                  <div className="w-full h-[1.2rem] rounded-[10px] bg-stone-300 dark:bg-stone-700 animate-pulse"/>
                  <div className="w-full h-[1.2rem] rounded-[10px] bg-stone-300 dark:bg-stone-700 animate-pulse"/>
                  <div className="w-[40%] h-[1.2rem] self-start rounded-[10px] bg-stone-300 dark:bg-stone-700 animate-pulse"/>

                </div>

                <div className="body flex flex-col gap-4 w-full">
                
                  <div className="w-[90%] h-[1.2rem] self-end rounded-[10px] bg-stone-300 dark:bg-stone-700 animate-pulse"/>
                  <div className="w-full h-[1.2rem] rounded-[10px] bg-stone-300 dark:bg-stone-700 animate-pulse"/>
                  <div className="w-full h-[1.2rem] rounded-[10px] bg-stone-300 dark:bg-stone-700 animate-pulse"/>
                  <div className="w-full h-[1.2rem] rounded-[10px] bg-stone-300 dark:bg-stone-700 animate-pulse"/> 
                  <div className="w-full h-[1.2rem] rounded-[10px] bg-stone-300 dark:bg-stone-700 animate-pulse"/>
                  <div className="w-[60%] h-[1.2rem] self-start rounded-[10px] bg-stone-300 dark:bg-stone-700 animate-pulse"/>

                </div>


          </Box>
        </div>
        <div className="col-span-2 w-full h-fit flex flex-col justify-center items-start bg-stone-50 dark:bg-stone-950 p-6">
          <Box className='self-start h-[20rem]  bg-stone-200 dark:bg-stone-900 w-full animate-pulse'>
         
        </Box>
        
        </div>



    </div>
  )
}

export default Loading