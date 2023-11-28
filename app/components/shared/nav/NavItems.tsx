"use client"
import Link from 'next/link'

import { ReactComponentElement, useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

import {roboto, pacific,ibmFlex} from '@/fonts'
import { navItemsProps } from '@/lib/types'

 const NavItems = (props:navItemsProps) => {
  
  const pathname = usePathname()
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
  }, [outSideClicked]);


   return (

        <Link href={!props.children?(props.link??''):''}>
            <div className={`cursor-pointer ${pathname==props.link?'text-amber-800  dark:text-amber-600 md:hover:text-amber-600':'text-stone-700  dark:text-stone-300 md:hover:text-stone-800'} overflow-y-auto`} onClick={()=>props.setOpen(!props.open)}>
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
 