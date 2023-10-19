'use client'

import { db } from '@/lib/db'
import * as schema from "@/lib/db/schema"
import { IPost } from '@/lib/db/schemaTypes'
import { getDomain } from '@/lib/functions/utils'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const meta = {
  title:'Login',
  description:'Welcome to the login page. please log in to your echoflect account or register.'
}


export default  function Home() {


  const [acc,setUsers]= useState([])
  
  // useEffect( ()=>{
  //   const getUsers =async ()=>{
  //     const result  = await fetch(`${getDomain()}/api/post`).then((res)=>res.json())
  //     if(result){
  //       setUsers(result)
  //     }
  //     console.log(result)
           
  //   }

  //   getUsers()
    

  // },[])
  

  return ( 
    <main className="flex min-h-screen flex-col items-center justify-between p-32 overflow-x-hidden">
        <span className="loading loading-spinner loading-xs"></span>
<span className="loading loading-spinner loading-sm"></span>
<span className="loading loading-spinner loading-md"></span>
<span className="loading loading-spinner loading-lg"></span>
    </main>
  )
}


