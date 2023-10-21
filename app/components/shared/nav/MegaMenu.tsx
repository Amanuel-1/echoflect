import React, { useEffect, useRef } from 'react';
import { menuLinks } from '../../../../lib/Constants';
import Link from 'next/link';
import Image from 'next/image';
import { megaMenuProps } from '@/lib/types';



const MegaMenu = (props:megaMenuProps) => {
  
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
          <>
              <div ref={menuRef} className="absolute hidden md:block z-40 container mx-auto  top-[110%] left-0 w-full mr-5 ">
                  <div className="body grid grid-cols-4 gap-2 w-full p-14 mb-10 h-full bg-white dark:bg-stone-950 shadow-lg rounded-b-2xl dark:border dark:border-stone-900">
                        <div className="col-span-3 grid grid-cols-3">
                        {
                        [...props.data].map((category,index)=>(

                            <div key={index} className="col-span-1 text-stone-700 dark:text-stone-300">{
                                <ul className='flex flex-col gap-3'>
                                

                                    <li className='hover:bg-slate-100 dark:hover:bg-inherit hover:text-stone-800 rounded-lg p-2 cursor-pointer transition-all duration-500 ease-in-out' key={index}>
                                      <Link href={category.href}>
                                        <h1 className='text-2xl font-bold' key={index*7}>{category.title}</h1>
                                        <p className='text-sm font-light' key={index*3}>{category.description}</p>

                                      </Link>
                                    </li>

                                </ul>
                            }
                            </div>

                        ))
                      }
                        </div>
                     
                      <div className="relative col-span-1 w-full h-full text-stone-700 dark:text-stone-300 hover:grayscale transition-all duration-700 ease-in-out">{
                          <Image className='rounded-xl' src="/resources/avatar.jpg" alt ="menuImage" layout='fill' objectFit='cover'/>
                      }
                      </div>
                  </div>
              </div>

              <div className='md:hidden w-[100%] h-[10rem] bg-[rgba(24,23,23,0.43)]'>
                <div className="body grid sm:grid-cols-2 gap-2 w-full mb-10 max-h-[20rem] bg-transparent shadow-lg rounded-b-2xl">
                  <div className="col-span-1">

                  </div>
                </div>
              </div>
          </>
  );
};

export default MegaMenu;