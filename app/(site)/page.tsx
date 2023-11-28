
import { Button } from '@/components/ui/button'
import { db } from '@/lib/db'
import * as schema from "@/lib/db/schema"
import { IPost } from '@/lib/db/schemaTypes'
import { getDomain, shortener } from '@/lib/functions/utils'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { CardDemo } from '../components/cards/test'
import { Images } from '@/public/resources'
import ImageWithFallback from '../components/cards/ImageWithFallBack'

import { noto, roboto } from '@/public/Fonts'
import Products from '../components/cards/products'
const meta = {
  title:'Login',
  description:'Welcome to the login page. please log in to your echoflect account or register.'
}


export default  function Home() {

  
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
    <>
     <div className=" absolute top-0  left-0 pattern-dots pattern-stone-100 dark:pattern-black bg-blend-multiply pattern-bg-transparent bg-transparent
  pattern-size-6 pattern-opacity-100 h-full w-full "></div>
      
    <div className="relative flex flex-col justify-center  min-h-screen ">
   
          
  
  
  
      <div className="background absolute z-0 top-0 left-0 w-full h-full">
      <div className="z-10 absolute top-[5%] left-1/2 -translate-x-1/2 w-[8rem] md:w-[35rem] h-[15rem] rounded-full bg-red-300 dark:bg-[rgba(32,96,49,0.56)] blur-[90px]"></div>
      <div className="z-10 absolute top-[10%] left-1/4 -translate-x-1/2 2-[8rem] md:w-[35rem] h-[35rem] rounded-full bg-amber-300 dark:bg-[rgba(85,22,22,0.5)] blur-[110px]"></div>
      </div>
      <div className="landingPage z-10 flex flex-col gap-[6rem] justify-center items-center  text-stone-700">
      <div className="z-10 w-full hero flex  flex-col flex-wrap gap-4 pt-[5rem] pb-[10rem] text-stone-700 dark:text-stone-300 text-center">
        <div className="announcement w-fit py-2 px-8 rounded-[50px] bg-[rgba(20,30,20,.2)] dark:border backdrop-blur-sm font-semibold hover:scale-95 transition-all duration-500 cursor-pointer relative">
  <div className="border-gradient-animation bg-transparent relative overflow-hidden">
    {shortener("🎉 new changes coming ahead. It will be awesome when finished", 50)}
  </div>
</div>
        <h1 style={noto.style} className='text-2xl md:text-6xl font-extrabold w-[80%] md:w-full md:px-[15rem] text-center text-wrap bg-clip-text text-transparent bg-gradient-to-tr from-zinc-950 to-stone-700 via-amber-600 bg-300% animate-gradient'>
          A Mirror Reflection of your Thoughts To Reach Every Corner Of The World
        </h1>
      </div>

      <span
  className="text-2xl font-bold bg-gradient-to-r from-zinc-700 via-amber-600 to-stone-600 text-transparent bg-clip-text bg-300% animate-gradient"
>
  My gradient text
</span>
      
        <div className="stats shadow w-full md:w-[60%] dark:bg-stone-900  ">
          
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </div>
            <div className="stat-title ">Total Likes</div>
            <div className="stat-value text-primary">25.6K</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
          
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div className="stat-title">Page Views</div>
            <div className="stat-value text-primary">2.6M</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
          
          <div className="stat">
            <div className="stat-figure text-secondary text-stone-300">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <ImageWithFallback fallbackSrc={Images.fallback} src={Images.smile}  alt='test' className='rounded-full'/>
                </div>
              </div>
            </div>
            <div className="stat-title">Tasks done</div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Tasks done</div>
            <div className="stat-desc text-secondary">31 tasks remaining</div>
          </div>
          
        </div>
        
        <div className="grid grid-cols-4 gap-[2rem] w-full  justify-center">
              <div className="heroText col-span-4 md:col-span-2 h-full w-full flex justify-center align-middle items-center text-center">
                <h1 className='text-2xl w-[80%] flex items-center '>A place where you can showcase your literature works and growup audiences</h1>
              </div>
              <div className="mockup-browser flex flex-col justify-center items-center w-[95%] ml-[2.5%] col-span-4 md:col-span-2 border bg-base-300 md:w-[90%] dark:bg-stone-800">
              <div className="mockup-browser-toolbar dark:bg-stone-800 ">
              <div className="px-5 w-full rounded-full bg-stone-300 dark:bg-stone-500">https://echoflect.vercel.app</div>
            </div>
            <div className="flex justify-center px-4 py-16 w-full bg-base-200 dark:bg-stone-900">
                <div className="flex w-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg animate-pulse dark:bg-gray-800">
                    <div className="w-1/3 bg-gray-300 dark:bg-gray-200"></div>

                    <div className="w-2/3 p-4 md:p-4">
                        <h1 className="w-40 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

                        <p className="w-48 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

                        <div className="flex mt-4 item-center gap-x-2">
                            <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                            <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                            <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                            <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                            <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                        </div>

                        <div className="flex justify-between mt-6 item-center">
                            <h1 className="w-10 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

                            <div className="h-4 bg-gray-200 rounded-lg w-28 dark:bg-gray-700"></div>
                        </div>
                    </div>
                </div>
            </div>
              </div>
        </div>


      </div>
      <div className="flex h-screen items-center">
  <div className="group relative mx-auto w-96 overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
    <div className="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
    <div className="relative rounded-[15px] bg-white p-6">
      <div className="space-y-4">
        <ImageWithFallback fallbackSrc={Images.fallback} src={Images.fallback} alt="" />
        <p className="text-lg font-semibold text-slate-800">Hover me!</p>
        <p className="font-md text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam delectus temporibus est ut nisi nam at adipisci sunt dolore quibusdam.</p>
      </div>
    </div>
  </div>
</div>
    </div> 

    <Products/>

    <div className="carousel rounded-box">
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Burger" />
  </div>
</div>




<section className="flex items-center justify-center py-16 bg-gray-100 dark:bg-stone-950  min-w-screen">
    <div className="max-w-6xl px-12 mx-auto bg-gray-100 dark:bg-stone-950 md:px-16 xl:px-10">
        <div className="flex flex-col items-center lg:flex-row">
            <div className="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 lg:mb-0 lg:w-1/2">
                <p className="mb-2 text-base font-medium tracking-tight text-indigo-500 uppercase">Keeping you updated to your favourite</p>
                <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-stone-200 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">Writers</h2>
                <p className="my-6 text-lg text-gray-200">Dont just take our word for it, read from our extensive list of case studies and customer testimonials.</p>
                <a href="#_" className="flex items-center justify-center px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md shadow hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo md:py-4 md:text-lg md:px-10">Start Reading Now</a>
            </div>
            <div className="w-full lg:w-1/2 py-4">
                <blockquote className="flex items-center justify-between w-full col-span-1 p-6 bg-white dark:bg-stone-900 rounded-lg shadow">
                    <div className="flex flex-col pr-8">
                        <div className="relative pl-12">
                            <svg className="absolute left-0 w-10 h-10 text-indigo-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                                <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                            </svg>
                            <p className="mt-2 text-sm text-gray-200 sm:text-base lg:text-sm xl:text-base">Awesome product! And the customer service is exceptionally well.</p>
                        </div>

                        <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm lg:text-base">
                            Jane Cooper
                            <span className="mt-1 text-sm leading-5 text-gray-500 truncate">- CEO SomeCompany</span>
                        </h3>
                    </div>
                    <img className="flex-shrink-0 w-20 h-20 bg-gray-300 rounded-full xl:w-24 xl:h-24" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt=""/>
                </blockquote>
                <blockquote className="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-white dark:bg-stone-900 rounded-lg shadow">
                    <div className="flex flex-col pr-10">
                        <div className="relative pl-12">
                            <svg className="absolute left-0 w-10 h-10 text-indigo-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                                <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                            </svg>
                            <p className="mt-2 text-sm text-gray-200 sm:text-base lg:text-sm xl:text-base">I cant express enough, how amazing this service has been for my company.</p>
                        </div>
                        <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm lg:text-base">
                            Amanuel Garomsa
                            <span className="mt-1 text-sm leading-5 text-gray-500 truncate">- CEO of Amanapps</span>
                        </h3>
                        <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                    </div>
                    <img className="flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;aauto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt=""/>
                </blockquote>
                <blockquote className="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-white dark:bg-stone-900 rounded-lg shadow">
                    <div className="flex flex-col pr-10">
                        <div className="relative pl-12">
                            <svg className="absolute left-0 w-10 h-10 text-indigo-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                                <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                            </svg>
                            <p className="mt-2 text-sm text-gray-200 sm:text-base lg:text-sm xl:text-base">I cant express enough, how amazing this service has been for my company.</p>
                        </div>

                        <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm lg:text-base">
                            John Smith
                            <span className="mt-1 text-sm leading-5 text-gray-500 truncate">- CEO SomeCompany</span>
                        </h3>
                        <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                    </div>
                    <img className="flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full" src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rrb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;aauto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt=""/>
                </blockquote>
            </div>
        </div>
    </div>
</section>
    </>
  )
}


