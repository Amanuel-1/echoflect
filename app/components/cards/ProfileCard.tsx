import React from 'react'
import {profileProps} from '@/lib/types'
import Image from 'next/image'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
//styles for the components
import styles from '@/styles/app.module.css'

const ProfileCard:React.FC<profileProps> = ({ avatar,cover,bio,social,role,email,followers,likes}) => {
  return (
   <div className="flex flex-col gap-4">
     <div className='relative w-full flex flex-col gap-4 justify-center items-center '>
        
        <Image src={cover} alt='Avatar' width={800} height={50} 
        className={`z-0 w-full h-[10rem] rounded-t-xl 
        border-neutral-400
        dark:border-gray-800`}  />
        <Image src={avatar.img} alt='Avatar' width={150} height={150} 
        className={`absolute top-[80px] z-10 rounded-full border-8
        border-neutral-400
        dark:border-[rgba(8,8,8,0.6)]`}  />

    </div>
    <div className="flex flex-col gap-4 py-[60px] text-center justify-center">
        <div className="name-email flex flex-col gap-1">
          <h1 className="text-xl">{avatar.name}</h1>
          <small className='font-extralight italic'>{email}</small>
        </div>
        <div className="bio flex gap-2 p-2 ">
          <FaQuoteLeft size={20}/>
          <i className='text-center self-center font-light'>{bio}</i>
          <FaQuoteRight size={20}/>
        </div>
        <div className="actions w-full flex gap-6 justify-center ">
          <button className={`${styles.appButton} ${styles.outline}`}>Friend</button>
          <button className={`${styles.appButton} ${styles.filled}`}>Message</button>
        </div>
        
    </div>
   </div>
  )
}

export default ProfileCard