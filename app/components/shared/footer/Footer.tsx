import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { footerLinks } from '@/lib/Constants'
import NewsLetter from './NewsLetter'
import Logo from '../nav/Logo'



const Footer = () => {
  return(
    // <section className="absolute w-full overflow-x-hidden bg-gradient-to-t from-white  via-stone-100 to-stone-200 ">
       
    // <footer className='footer-parent bottom-1 w-full md:px-[2rem] overflow-x-hidden'>
    //     <div className=" w-full flex flex-col dark:bg-gradient-to-t dark:from-stone-900 dark:via-stone-950 dark:to-black">
    //         <div className='flex w-full justify-center grayscale opacity-90 hover:grayscale-0 cursor-pointer rounded-3xl '><Logo isAtTop={false}/></div>
    //         <div className="body grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-2 w-full p-5 md:p-14 h-full bg-white dark:bg-stone-900 rounded-2xl">

    //         <div className="col-span-1 text-stone-700 flex items-center transition-all duration-700 ease-in-out">{
    //           <div className='flex justify-center items-center '>
    //             {/* <NewsLetter/> */}
                
    //           </div>
    //       }
    //       </div>
    //       {
    //         footerLinks.map((topic,index)=>(
    //           <div className="col-span-1 text-stone-400" key={index}>{
    //             <ul className='flex flex-col gap-3'>
                  
    //               <li className='  rounded-lg p-2 cursor-pointer transition-all duration-500 ease-in-out' key={index*2}>
    //               <h1 className='text-2xl font-bold'>{topic.name}</h1>
    //               {topic.links.map((link,i)=>(
    //               <Link key={i} href={link.href}><h1 className='text-sm font-light hover:text-stone-200'>{link.title}</h1></Link>
    //               ))
    //               }
    //               </li>
                 
    //             </ul>
    //           }
    //           </div>
    //         ))
    //       }
         
          
    //   </div>

    //     </div>
      
    // </footer>
    // </section>
    <footer className="footer footer-center p-10 text-base-content rounded bg-stone-800 text-stone-50">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a> 
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
  </nav> 
  <aside>
    <p>Copyright © 2023 - All right reserved by <a className='font-semibold text-blue-300' href='https://amanapps.vercel.app'>AmanApps.INC</a></p>
  </aside>
</footer>
  )
}

export default Footer
