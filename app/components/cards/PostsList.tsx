import { IPost, Usertype } from '@/lib/db/schemaTypes'
import {getPostsByUsername } from '@/lib/functions/dbfunctions'
import React, { useEffect, useState } from 'react'
import ImageWithFallback from './ImageWithFallBack'
import { Images } from '@/public/resources'
import { getDomain, shortener } from '@/lib/functions/utils'
import Loading from '../shared/Loading'
import Link from 'next/link'

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
    <div className='w-full gap-4 p-2 border-1 border-stone-500 dark:border-stone-700'>
        {        
          userPosts.length? (userPosts.map(({posts,user}:{posts:IPost,user:Usertype},i:number)=>(
                  <div key={i} className="grid grid-cols-6 gap-6 mb-[2rem] p-4 border-b border-b-stone-600">
                    <div className="relative w-full h-full col-span-2">
                      <div className="relative min-h-[10rem] h-full w-full">
                      <ImageWithFallback src={posts.thumbnail} fallbackSrc={Images.fallback} alt={posts.title}/>
                      </div>
                    </div>
                   
                    <div className="col-span-4  w-full flex flex-col ">
                      <Link href={`${getDomain()}/posts?${posts.slug}`}><h3 className='text-xl font-semibold text-stone-900 hover:text-amber-700'>{posts.title}</h3></Link>
                      <p>{shortener(posts.description,200)}</p>
                      </div>
                    
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