'use client'

import { Button } from '@/components/ui/button'
import { db } from '@/lib/db'
import * as schema from "@/lib/db/schema"
import { IPost } from '@/lib/db/schemaTypes'
import { getDomain } from '@/lib/functions/utils'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { CardDemo } from '../components/cards/test'
import { Images } from '@/public/resources'

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
    // <main className="relative flex min-h-screen flex-col items-center justify-between overflow-x-hidden ">
    //     <section className='heroSection flex justify-center '>
    //     <div className="  absolute -top-1/2 w-[30rem] h-[30rem] animate-spin duration-700 rounded-full bg-amber-600 blur-[140px]"></div>
    //     <div className="  absolute -top-[5rem] left-[4rem] w-[10rem] h-[30rem] animate-spin duration-700 rounded-full bg-yellow-600 blur-[200px]"></div>
    //     </section>
    // </main>
    <div className=""></div>
  )
}


