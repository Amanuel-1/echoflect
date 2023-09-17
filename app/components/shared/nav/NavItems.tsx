"use client"

import {roboto, pacific,ibmFlex} from '@/fonts'
import { navItemsProps } from '@/lib/types'
import Link from 'next/link'
import { ReactComponentElement, use, useEffect, useRef, useState } from 'react'

 const NavItems = (props:navItemsProps) => {

  
  const reff = useRef<HTMLDivElement>(null)
  const outSideClicked = (e:MouseEvent)=>{
     // Check if the clicked element is inside the dropdown
     if (reff.current && !reff.current.contains(e.target as Node)) {
      props.setOpen(false);
    }
  }

  useEffect(() => {
    // Attach event listener to the document object
    document.addEventListener('click', outSideClicked);

    // Detach event listener when the component is unmounted
    return () => {
      document.removeEventListener('click', outSideClicked);
    };
  }, []);


   return (

        <Link href={!props.children?(props.link??''):''}>
            <div className='cursor-pointer text-gray-100 md:text-gray-900 dark:text-gray-100 md:hover:text-gray-800 overflow-y-auto' onClick={()=>props.setOpen(!props.open)}>
                <ul style={roboto.style} className="flex gap-1 text-xl items-center">
                    <li className={`${props.open && props.children ? 'rotate-180':''}  transition-all duration-700 ease-in-out`}>{props.icon}</li>
                    <li className='text z-40' >{props.text}</li>
                </ul>
                <div className={`${!props.open ? 'top-[0] opacity-0':'opacity-100'} transition-all duration-700 ease-in-out overflow-y-auto`}>
                {props.open && props.children}
                </div>
            </div>
        </Link>
   )
 }
 
 export default NavItems
 