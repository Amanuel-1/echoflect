import React from 'react'
import { twMerge } from 'tailwind-merge';

type boxProps = {
    className?:string
    children:React.ReactNode
}
const Box:React.FC<boxProps> = ({className,children}) => {
  return (
    <div className={twMerge(" border  border-gray-200 rounded-xl dark:border-[#47291b81] shadow-sm dark:shadow-none drop-shadow-lg shadow-gray-200",className)}>
        {children}
    </div>
  )
}

export default Box