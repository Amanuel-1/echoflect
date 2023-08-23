

import React from 'react';
import Image from 'next/image'
import { Images } from '@/public/resources';
import { roboto } from '@/public/Fonts';

export default function Layout( {children}:{ children:React.ReactNode }){
    return (
       <section style={roboto.style} className=' h-full py-24 bg-inherit mx-6 md:mx-[2rem]'>
         {children}
       </section>
           
        
       
    )
}