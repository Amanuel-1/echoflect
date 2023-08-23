import Box from '@/app/components/shared/Box'
import React from 'react'

const Posts = () => {
  return (
    <div className="relative grid md:grid-cols-6 gap-4">

        <div className="col-span-4 w-full mx-4 bg-gray-500 p-6">
          <Box className='h-[40rem]  bg-black w-full p-[2rem]'>
                SDLKJFSDKLAFJSAKLJ
          </Box>
        </div>
        <div className="col-span-2 w-full mx-4 bg-gray-500 p-6">
          <Box className='h-[20rem]  bg-black w-full'>
                SDLKJFSDKLAFJSAKLJ
          </Box>
        </div>



    </div>
  )
}

export default Posts