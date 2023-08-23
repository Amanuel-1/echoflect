
import styles from '../styles/Layout.module.css';
import React from 'react';
import Image from 'next/image'
import { Images } from '@/public/resources';


export default function Layout( {children}:{ children:React.ReactNode }){
    return (
        <div className="flex justify-center items-center mx-auto bg-blue-400 ">
            <div className="grid justify-center lg:grid-cols-3 m-auto bg-slate-50 rounded-md w-full h-full ">
                <div className={`${styles.cover_panel} hidden md:inline-block col-span-2 w-full overflow-y-hidden`}>
                    
                </div>
                <div className="col-span-1 w-full bg-gray-70 right flex flex-col justify-evenly text-center">
                    
                        {children}
                    
                </div>
            </div>
  
        </div>
    )
}