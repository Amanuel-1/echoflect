import { tabsProps } from '@/lib/types'
import React from 'react'

const ActivityLog:React.FC<tabsProps> = ({open}) => {
  return (
    open && <div>ActivityLog</div>
  )
}

export default ActivityLog