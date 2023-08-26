import React from 'react'
import {loadingProps} from '@/lib/types'
import Image from 'next/image'
import { Images } from '@/public/resources'
const Loading:React.FC<loadingProps> = ({isloading}) => {
  return (
    isloading && <div className='absolute top-0 left-0 w-full h-full bg-[rgba(100,20,20,.1)] flex justify-center items-center '>
                
                <Image src={Images.loader} width={100} height={100} alt='loading' />

                </div>
  )
}

export default Loading