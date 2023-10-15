import Image from 'next/image'
import React from 'react'
import {avatarProps} from '@/lib/types'
import {concert,baloo,ibmFlex} from '@/public/Fonts'

const Avatar:React.FC<avatarProps> = ({img,name}) => {

  

  return (
    <div style={concert.style} className='flex gap-1 p-y-2 w-fit items-center drop-shadow-none'>
        <Image
              className="rounded-full border-2 border-stone-200 dark:border-stone-900"
              src={img }
              alt="avatar"
              width={40}
              height={40}
            />
        <p className='text-md text-stone-900 flex gap-1 my-4 dark:text-stone-200' >{name?.split(' ')[0]}</p>
    </div>
  )
}

export default Avatar