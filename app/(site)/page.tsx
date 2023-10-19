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
        <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle z-50" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
  </div>
</div>
    </main>
  )
}


