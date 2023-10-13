import { IPost, Usertype } from '@/lib/db/schemaTypes'
import {getPostsByUsername } from '@/lib/functions/dbfunctions'
import React, { useEffect, useState } from 'react'
import ImageWithFallback from './ImageWithFallBack'
import { Images } from '@/public/resources'
import { getDomain } from '@/lib/functions/utils'

const PostsList = ({username}:{username:string}) => {
  const [userPosts,setUserPosts] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    const getdata = async()=>{
      
      console.log("this is the user-posts api url 🛑🔩🛑✨",`${getDomain()}/api/user?user=${username}`)
     let result:any =await fetch(`${getDomain()}/api/post?user=${username}`,{cache:'no-cache'}).then((res)=>res.json())

      if(result){
        setLoading(false)
        setUserPosts(result)
      }
    }
    getdata()
  },[])


  return (
    <div className='w-full p-2 border-1 border-gray-500 dark:border-stone-700'>
        {
          userPosts.length +" "+username??"nouser"
        
          // userPosts.length? (userPosts.map(({posts,user}:{posts:IPost,user:Usertype},i:number)=>(
          //         <div key={i} className="grid grid-cols-6">
          //           <div className=" relative w-full h-full col-span-2">
          //             <ImageWithFallback src={posts.thumbnail} fallbackSrc={Images.fallback} alt={posts.title}/>
          //           </div>
          //           <div className="user">{user.name}</div>
          //         </div>
          // ))):(
          //     <div>

          //     </div>
          // )
        }
    </div>
  )
}

export default PostsList