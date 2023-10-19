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
        <div className="chat chat-start">
  <div className="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
</div>
<div className="chat chat-start">
  <div className="chat-bubble chat-bubble-secondary">Put me on the Council and not make me a Master!??</div>
</div>
<div className="chat chat-start">
  <div className="chat-bubble chat-bubble-accent">Thats never been done in the history of the Jedi. Its insulting!</div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble chat-bubble-info">Calm down, Anakin.</div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble chat-bubble-success">You have been given a great honor.</div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble chat-bubble-warning">To be on the Council at your age.</div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble chat-bubble-error">Its never happened before.</div>
</div>
    </main>
  )
}


