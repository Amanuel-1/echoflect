import Image from 'next/image'
import React from 'react'
import {avatarProps} from '@/lib/types'
import {concert,baloo,ibmFlex} from '@/public/Fonts'

const Avatar:React.FC<avatarProps> = ({img,name}) => {
  return (
    <div style={concert.style} className='flex gap-4 p-2 items-center'>
        <Image
              className="rounded-full border-2 p-2 border-gray-200 dark:border-gray-900"
              src={img }
              alt="avatar"
              width={40}
              height={40}
            />
        <p className='text-md text-gray-900 dark:text-gray-200' >{name}</p>
    </div>
  )
}

export default Avatar