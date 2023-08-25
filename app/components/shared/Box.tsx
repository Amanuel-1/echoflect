import React from 'react'
import { twMerge } from 'tailwind-merge';

type boxProps = {
    className?:string
    children:React.ReactNode
}
const Box:React.FC<boxProps> = ({className,children}) => {
  return (
    <div className={twMerge(" font-semibold",className)}>
        {children}
    </div>
  )
}

export default Box