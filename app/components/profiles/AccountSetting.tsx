import { tabsProps } from '@/lib/types'
import React from 'react'

const AccountSetting:React.FC<tabsProps> = ({open})=> {
  return (
   open && <div className=''>
       AccountSetting
       </div>
  )
}

export default AccountSetting