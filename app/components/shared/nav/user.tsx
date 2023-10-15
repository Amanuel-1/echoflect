import React, { useState,useRef } from 'react';
import { useSession, signOut, signIn } from 'next-auth/react';
import Image from 'next/image';
import { FiMoon, FiSettings, FiUser, FiLogOut } from 'react-icons/fi';
import Link from 'next/link';
import {MdOutlineLogin} from 'react-icons/md'

const User = () => {
  const { data: session } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false)
    }
  };


  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    signOut();
  };

  return (
    <div className=''>
      {session ? (
        <div className="relative">
          <button
            className="flex items-center focus:outline-none"
            onClick={handleDropdownToggle}
          >
            <Image
              className="rounded-full border-2 border-stone-200 dark:border-stone-900"
              src={session.user?.image ?? ''}
              alt="avatar"
              width={40}
              height={40}
            />
            
          </button>

          {isDropdownOpen && (
            <div ref={menuRef} className="absolute right-0 mt-2 py-2 w-[210px] bg-white dark:bg-stone-800 rounded shadow-lg overflow-hidden">
              <button className="flex gap-1 items-center text-sm w-full px-2 py-2 border-spacing-3 border-b">
                
                <p className="italic">signed in as </p>
                <p className="font-bold">{session?.user.username}</p>
              </button>
              <button className="flex items-center w-full px-4 py-2">
                <FiSettings className="mr-2" />
                Settings
              </button>
              <Link href={`/profile/${session?.user?.username}`} >
                <button className="flex items-center w-full px-4 py-2">
                      <FiUser className="mr-2" />
                      Profile
                </button>
                </Link>
              <button
                className="flex items-center w-full px-4 py-2 text-red-500 hover:text-red-700"
                onClick={handleLogout}
              >
                <FiLogOut className="mr-2" />
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex gap-2 items-center">
          
           
           <button onClick={()=>signIn()} className="px-3 py-3 md:py-1 rounded-full text-xs md:text-lg font-light text-white bg-gradient-to-tr from-stone-500 to-stone-800 ">
              <p className='hidden md:flex'>signIn</p>
              
            </button>
            

          
        </div>
      )}
    </div>
  );
};

export default User;