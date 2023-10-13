import { IPost, Usertype } from '@/lib/db/schemaTypes'
import {getPostsByUsername } from '@/lib/functions/dbfunctions'
import React, { useEffect, useState } from 'react'
import ImageWithFallback from './ImageWithFallBack'
import { Images } from '@/public/resources'
import { getDomain } from '@/lib/functions/utils'
import Loading from '../shared/Loading'

const PostsList = ({username}:{username:string}) => {
  const [userPosts,setUserPosts] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    const getdata = async()=>{
      
      console.log("this is the user-posts api url 🛑🔩🛑✨",`${getDomain()}/api/post?user=${username}`)
     let result:any =await fetch(`${getDomain()}/api/post?user=${username}`,{cache:'no-cache'}).then((res)=>res.json())

      if(result){
        setLoading(false)
        setUserPosts(result)
      }
    }
    getdata()
  },[])


  return (
    <div className='w-full gap-4 p-2 border-1 border-gray-500 dark:border-stone-700'>
        {        
          userPosts.length? (userPosts.map(({posts,user}:{posts:IPost,user:Usertype},i:number)=>(
                  <div key={i} className="grid grid-cols-6 gap-4 m-3">
                    <div className=" relative w-full h-full col-span-2">
                      <div className="relative h-[25rem] w-[25rem]">
                      <ImageWithFallback src={posts.thumbnail} fallbackSrc={Images.fallback} alt={posts.title}/>
                      </div>
                    </div>
                    <div className="user">{user.name}</div>
                    <div className="user max-w-md max-h-md flex flex-wrap overflow-x-scroll">{posts.description}</div>
                    <div className="user">{posts.views}</div>
                  </div>
          ))):(
              <div>
                no posts at the moment.☹
              </div>
          )
        }
    </div>
  )
}

export default PostsList