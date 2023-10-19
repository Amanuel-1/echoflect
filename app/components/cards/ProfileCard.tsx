import React from 'react'
import {profileProps} from '@/lib/types'
import Image from 'next/image'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
//styles for the components
import styles from '@/styles/app.module.css'
import { users } from '@/lib/db/schema'
import { Usertype } from '@/lib/db/schemaTypes'
import ImageWithFallback from './ImageWithFallBack'
import { Images } from '@/public/resources'

const ProfileCard=({ cover,bio,user}:{cover:string,bio:string,user:Usertype}) => {
  return (
   <div className="flex flex-col gap-4 rounded-xl">
     <div className='relative w-full flex flex-col gap-4 justify-center items-center h-[165px] '>
        
        <ImageWithFallback fallbackSrc={Images.fallback} src={cover??""} alt='Avatar'        
        className={`z-0 w-full h-[10rem] rounded-t-xl 
        border-neutral-400
        dark:border-stone-800`}  />
        <Image src={user.image as any} alt='Avatar' width={150} height={150} 
        className={`absolute top-[80px] z-10 rounded-full border-8
        border-neutral-400
        dark:border-[rgba(8,8,8,0.6)]`}  />

    </div>
    <div className="flex flex-col gap-4 py-[60px] text-center justify-center">
        <div className="name-email flex flex-col gap-1">
          <h1 className="text-xl">{}</h1>
          <small className='font-semibold italic text-xl'>{user.name as any}</small>
          <small className='font-semibold italic text-sm'>#{user.username as any}</small>
          <small className='font-light italic text-sm'>📧{user.email as any}</small>

        </div>
        <div className="bio flex gap-2 justify-center ">
          <FaQuoteLeft size={20}/>
          <i className='text-center self-center font-light'>{bio}</i>
          <FaQuoteRight size={20}/>
        </div>
        <div className="actions w-full flex gap-6 justify-center ">
          <button className={`${styles.appButton} ${styles.outline}`}>subscribe</button>
          <button className={`${styles.appButton} ${styles.filled}`}>Message</button>
        </div>
        
    </div>
   </div>
  )
}

export default ProfileCard