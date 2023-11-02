
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import Footer from '../components/shared/footer/Footer'
import Navbar from '../components/shared/nav/Navbar'
import {SessionProvider} from 'next-auth/react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ClientLayout from '../components/shared/wrappers/ClientLayout'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EchoFlect',
  description: 'reflex your feeling with the rest of the world',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 


  return (
    <html data-theme="cupcake" lang="en">
      <body style={inter.style} className='all overflow-x-hidden'>
       
              <ClientLayout>
              <section className='py-24 px-0 mx-0'>
              {children}
              </section>
              </ClientLayout>
              

        </body>
    </html>
  )
}