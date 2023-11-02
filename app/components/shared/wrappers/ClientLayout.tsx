"use client"

import '@/app/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import {SessionProvider} from 'next-auth/react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Footer from '../footer/Footer'
import Navbar from '../nav/Navbar'





export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
 
  const [darkMode,setDarkMode] = useState(false);

  const checkTheme = ()=>{
    if (localStorage.getItem("darkTheme") === "true"   ||
      (!("darkTheme" in localStorage) && 
      window.matchMedia("(prefers-color-scheme: dark)").matches)){
          document.documentElement.classList.add("dark");
          setDarkMode(true)
    }
    else{
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }
//this is to check if the dark mode is enabled whenever the darkMode is changed.
  useEffect(()=>{
      checkTheme();
  },[darkMode]);
  //this is to check if the dark mode is enabled when the components are mounted (when the instance of the component is created and added to the DOM)
  useEffect(()=>{
    checkTheme();
  },[]);

  return (

          <SessionProvider>
              <ToastContainer/>
              <Navbar darkMode={darkMode} setDarkMode={setDarkMode} className={'bg-transparent'}/>
              {children}
              <Footer/>
          </SessionProvider>

  )
}