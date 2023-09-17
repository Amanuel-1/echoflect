'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { RiHeart2Line } from 'react-icons/ri'
import { AiFillDislike, AiFillEye, AiFillHeart, AiFillLike, AiOutlineHeart } from 'react-icons/ai'
import { FaThumbsUp } from 'react-icons/fa'
import { MdThumbsUpDown } from 'react-icons/md'



import Box from '@/app/components/shared/Box'
import { shortener } from '@/lib/functions/utils'
import Avatar from '@/app/components/shared/nav/Avatar'
import { roboto } from '@/public/Fonts'
import { Categories as categ } from '@/lib/Constants'
import Link from 'next/link'
import SearchFilter from '@/app/components/categories/searchFilter'
import { ICategory } from '@/lib/db/schemaTypes'
import Loading from '@/app/components/shared/Loading'




const Categories = () => {

  const [categoryList,setCategoryList] = useState([])
  const [loading,setLoading] = useState(true)
  
  useEffect(()=>{
    const fetchCategories = async ()=>{
      const result  = await fetch("http://localhost:3000/api/categories",{cache:'no-cache'}).then((res)=>res.json())
      if(result){
        setLoading(false)
        setCategoryList(result)
      }
      console.log(result)
    }
    fetchCategories()
  },[])



  return (
    <section style={roboto.style} className='mt-8 flex flex-col gap-[3rem] h-full bg-inherit mx-6 md:mx-[2rem] transition-all duration-300 ease-in'>
        <SearchFilter/>
        <div className="relative flex flex-wrap gap-[2rem] justify-center">
          <Loading className="py-[4rem]" isloading={loading} />         
            {
              categoryList.map((category:ICategory,index)=>(
                
                
                    <Box  key={index} className='lg:max-w-[40%] dark:bg-gray-950 hover:hue-rotate-[180deg] cursor-pointer rounded-md border border-gray-200 dark:border-[#47291b81] drop-shadow-lg shadow-amber-950'>
                        <Link className='grid grid-cols-3 ' href={`/categories/${category.name}`} >
                        <div  key={index*2}  className="relative col-span-1 flex items-center category-image py-[0.04rem] bg-gray-300 dark:bg-gray-900 ">
                          <Image className='rounded-l-md' src={category.thumbnail} alt={category.id} layout="fill" objectFit="cover" />
                        </div>
                        <div className="col-span-2 p-3 flex flex-col gap-4 justify-spread">
                          <h1 className="text-left text-lg md:text-3xl font-semibold dark:text-gray-500">
                            {category.name}
                          </h1> 
                          <ul className="flex gap-2">
                            <li className=' pr-4 text-xs font-extralight md:text-sm'><small>{category.views} views</small></li>
                            <li className='border-l px-4 text-xs font-extralight md:text-sm'><small>500k+ likes</small></li>
                            <li className='border-l px-4 text-xs font-extralight md:text-sm'><small>3k+ authors</small></li>
                          </ul>
                          <p className="px-1 text-xs md:text-sm text-justify font-light">
                          {shortener(category.slug,180)}
                          </p>
                        </div>
                        </Link>
                    </Box>
                
          
              ))
            }
            
        </div>
    </section>
  )

}

export default Categories