import { tabsProps } from '@/lib/types'
import React from 'react'

const Story:React.FC<tabsProps> = ({open}) => {
  return (
    open && <div>Story</div>
  )
}

export default Story