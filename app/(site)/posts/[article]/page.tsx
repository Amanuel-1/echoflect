import ProfileCard from '@/app/components/cards/ProfileCard'
import Box from '@/app/components/shared/Box'
import { Images } from '@/public/resources'
import React from 'react'

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
  return (
    <div className="relative grid md:grid-cols-6 gap-1 ">

        <div className="col-span-4 w-full mx-0 md:mx-4 bg-white dark:bg-inherit md:p-6 border border-gray-200 dark:border-[#47291b81] drop-shadow-lg shadow-amber-950 rounded-xl">
          <Box className='h-[40rem]  bg-gray-50 dark:bg-inherit w-full p-[2rem] '>
                
          </Box>
        </div>
        <div className="hidden md:flex col-span-2 w-full px-2  bg-white dark:bg-inherit md:p-6">
          <Box className='h-fit w-full border  border-gray-200 rounded-xl dark:border-[#47291b81] shadow-sm dark:shadow-none drop-shadow-lg shadow-gray-200'>
          <ProfileCard cover={author.cover} avatar={author.avatar} bio={author.bio}
                    role={author.role} email={author.email} followers={author.followers} likes={author.likes}/>
          </Box>
        </div>



    </div>
  )
}

export default Article