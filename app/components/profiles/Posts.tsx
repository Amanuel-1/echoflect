import React from 'react'
import {tabsProps} from '@/lib/types'


const PostsTab:React.FC<tabsProps> = ({open}) => {
  return (
    open && <div>Posts</div>
  )
}

export default PostsTab