"use client"

import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import Footer from '../components/shared/footer/Footer'
import Navbar from '../components/shared/nav/Navbar'
import {SessionProvider} from 'next-auth/react'
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
  title: 'EchoFlect',
  description: 'reflex your feeling with the rest of the world',
}


export default function RootLayout({
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
    <html lang="en">
      <body style={inter.style} className='all overflow-x-hidden'>
       
          <SessionProvider>
              <ToastContainer/>
              <Navbar darkMode={darkMode} setDarkMode ={setDarkMode}/>
              <section className='py-24 px-0 mx-0'>
              {children}
              </section>
              <Footer/>
          </SessionProvider>

        </body>
    </html>
  )
}