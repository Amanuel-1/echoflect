import { themeSelectorProps } from '@/lib/types';
import React, { useState } from 'react';
import { FiSun, FiMoon, FiSettings } from 'react-icons/fi';


const [light, dark, system] = ['light', 'dark', 'system'];

const ThemeSelector = (props: themeSelectorProps) => {
  const [selectedTheme, setSelectedTheme] = useState('');

  const setTheme = (variant: string) => {
    if (variant === dark) {
      props.setDarkMode(true);
      localStorage.setItem('darkTheme', 'true');
    } else if (variant === system) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            props.setDarkMode(true);
            localStorage.setItem('darkTheme', 'true');
        }
        else{
            props.setDarkMode(false);
            localStorage.setItem('darkTheme', 'false');
        }
    } else {
      props.setDarkMode(false);
      localStorage.setItem('darkTheme', 'false');
    }
    setSelectedTheme(variant);
  };

  const renderIcon = (variant: string) => {
    switch (variant) {
      case light:
        return <FiSun />;
      case dark:
        return <FiMoon />;
      case system:
        return <FiSettings />;
      default:
        return null;
    }
  };

  const handleDropdownClick = () => {
    // Toggle dropdown visibility
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (variant: string) => {
    setTheme(variant);
    // Close the dropdown after selecting an option
    setIsDropdownOpen(false);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-500 p-2 rounded-full flex items-center"
        onClick={handleDropdownClick}
      >
        {renderIcon(selectedTheme) || renderIcon(system)}
       
      </button>
      {isDropdownOpen && (
        <div className="absolute z-50 right-0 mt-2 bg-white dark:bg-gray-900 border  border-gray-200 dark:border-gray-800 rounded-md shadow-lg">
          <ul>
            <li
              className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-800 cursor-pointer flex items-center"
              onClick={() => handleOptionClick(light)}
            >
              <FiSun className="mr-2" />
              Light
            </li>
            <li
              className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-800 cursor-pointer flex items-center"
              onClick={() => handleOptionClick(dark)}
            >
              <FiMoon className="mr-2" />
              Dark
            </li>
            <li
              className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-800 cursor-pointer flex items-center"
              onClick={() => handleOptionClick(system)}
            >
              <FiSettings className="mr-2" />
              System
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;