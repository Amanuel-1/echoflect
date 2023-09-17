import React from 'react'
import {loadingProps} from '@/lib/types'
import Image from 'next/image'
import { Images } from '@/public/resources'
import { twMerge } from 'tailwind-merge'
const Loading:React.FC<loadingProps> = ({isloading,className}) => {
  return (
    isloading && <div className={twMerge('absolute top-0 left-0 w-full h-full bg-[rgba(100,20,20,.1)] flex justify-center items-center ',className)}>
                
                <Image src={Images.loader} width={100} height={100} alt='loading' />

                </div>
  )
}

export default Loading