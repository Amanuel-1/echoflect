import { themeSelectorProps } from '@/lib/types';
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaSearchPlus } from 'react-icons/fa';
import { FiSun, FiMoon, FiSettings } from 'react-icons/fi';



const Search = () => {
  const [selectedTheme, setSelectedTheme] = useState('');
  
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleDropdownClick = () => {
    // Toggle dropdown visibility
    setIsOpen(!isOpen);
  };

 

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <button
        className="bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-500 font-bold p-2 rounded-full flex items-center"
        onClick={handleDropdownClick}
      >
       <AiOutlineSearch size={18}/>
       
      </button>
      {isOpen && (
        <div className='absolute z-0 right-4 mt-6 p-2 w-2/5 rounded-xl bg-[rgba(200,200,200,0.5)] dark:bg-[rgba(6,6,6,0.5)]  border dark:border-none backdrop-blur-sm  '>
          <input className='w-[100%] py-4 px-6 border rounded-xl bg-[#ffffff] dark:bg-gray-900 focus:outline-none border-none' type='text' placeholder='search here ' />
        </div>
      )}
    </div>
  );
};

export default Search;