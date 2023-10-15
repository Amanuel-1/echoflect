import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { footerLinks } from '@/lib/Constants'
import NewsLetter from './NewsLetter'
import Logo from '../nav/Logo'



const Footer = () => {
  return(
    <section className="absolute w-full">
       
    <footer className='footer-parent bottom-1 w-full m-0 p-0'>
        <div className=" contaner flex flex-col bg-gradient-to-t from-white  via-stone-100 to-stone-200 dark:bg-gradient-to-t dark:from-stone-900 dark:via-stone-950 dark:to-black">
            <div className='flex justify-center stonescale opacity-90 hover:stonescale-0 cursor-pointer rounded-3xl '><Logo isAtTop={false}/></div>
            <div className="body grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-2 w-full p-5 md:p-14 h-full bg-white dark:bg-stone-900 rounded-2xl">

            <div className="col-span-1 text-stone-700 flex items-center transition-all duration-700 ease-in-out">{
              <div className='flex justify-center items-center '>
                {/* <NewsLetter/> */}
                
              </div>
          }
          </div>
          {
            footerLinks.map((topic,index)=>(
              <div className="col-span-1 text-stone-400" key={index}>{
                <ul className='flex flex-col gap-3'>
                  
                  <li className='  rounded-lg p-2 cursor-pointer transition-all duration-500 ease-in-out' key={index*2}>
                  <h1 className='text-2xl font-bold'>{topic.name}</h1>
                  {topic.links.map((link,i)=>(
                  <Link key={i} href={link.href}><h1 className='text-sm font-light hover:text-stone-200'>{link.title}</h1></Link>
                  ))
                  }
                  </li>
                 
                </ul>
              }
              </div>
            ))
          }
         
          
      </div>

        </div>
      
    </footer>
    </section>
  )
}

export default Footer
