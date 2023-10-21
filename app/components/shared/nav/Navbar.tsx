"use client"

import {AiFillHome,AiOutlineOrderedList,AiFillMessage} from "react-icons/ai"
import {BiSolidHot} from "react-icons/bi"
import {SiAboutdotme} from "react-icons/si"
import {RiArrowDropDownLine} from "react-icons/ri"



import Menu from "./NavItems"
import Image from "next/image";
import Logo from "./Logo";
import NavButtons from "./NavButtons";
import NavItems from "./NavItems";
import MegaMenu from "./MegaMenu";

import {AiOutlineMenu} from 'react-icons/ai'
import {useState,useEffect} from 'react'

import { useSession,signIn, signOut } from "next-auth/react";
import { navbarProps } from "@/lib/types";
import Link from "next/link";
import { Categories } from "@/lib/Constants";
import { twMerge } from "tailwind-merge";


const Navbar = (props:navbarProps) => {  

    const [open,setOpen] = useState(false);
    const [mobileView,setMobileView] = useState(false);
    const genericHamburgerLine =twMerge(`h-1 w-8 my-1 rounded-full bg-stone-900 dark:bg-stone-100 transition ease-in transform duration-300`,mobileView&&'bg-stone-100 dark:bg-stone-100') ;
    
// " fixed flex justify-center top-0 w-full py-2 z-20  bg-[rgba(255,255,255,.7)] dark:bg-[rgba(30,30,30,.7)] backdrop-blur-md "


    return (                         
        <>
           <div className={twMerge(" fixed flex justify-center top-0 w-full py-2 z-20  bg-[rgba(255,255,255,.7)] dark:bg-[rgba(30,30,30,.7)] backdrop-blur-md ",props.className )}>
           <nav className={twMerge("md:mx-[20px]  w-full bg-transparent ",props.className)}>
                <div className={twMerge("parent flex  md:justify-between items-center mt-2 py-2 border-0  ",props.className)}>
                    <Logo isAtTop={true}/>
                    <div className="hidden md:flex gap-4 ">
                    
                    <NavItems link="/" icon={<AiFillHome />} text={"Home"} setOpen={()=>{}} open={false}/>
                    <NavItems link="/categories" icon={<RiArrowDropDownLine size="30" />} text={"Categories"} setOpen={setOpen} open={open}><MegaMenu data={Categories} onClose={()=>{setOpen(!open)}} /></NavItems>                
                    <NavItems link="/trending" icon={<BiSolidHot/>} text={"Trending"}  setOpen={()=>{}} open={false}/>
                    <NavItems link="/about" icon={<SiAboutdotme/>} text={"About"}  setOpen={()=>{}} open={false}/>
                    </div>
                    <div className="navButtons hidden md:flex md:px-8 align-middle self-center">
                        <NavButtons darkMode={props.darkMode} setDarkMode={props.setDarkMode}/>
                        
                    </div>
                    <div className="humberger z-50 absolute flex md:hidden right-[5%]" onClick={()=>setMobileView(!mobileView)}>
                            <button
                            className="flex flex-col h-12 w-12  rounded justify-center items-center group"
                            onClick={() => setMobileView(!mobileView)}
                            >
                                    <div
                                    className={`${genericHamburgerLine} ${
                                    mobileView
                                    ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100 bg-stone-100"
                                    : "opacity-50 group-hover:opacity-100 bg-stone-900"
                                    }`}
                                    />
                                    <div
                                    className={`${genericHamburgerLine} ${
                                    mobileView ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                                    }`}
                                    />
                                    <div
                                    className={`${genericHamburgerLine} ${
                                    mobileView
                                    ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100 bg-stone-100"
                                    : "opacity-50 group-hover:opacity-100 "
                                    }`}
                                    />
                            </button>
                    </div>
                   
                
            </div>
               
            {/* the following section is for smaller devices. */}
            <div className={`absolute md:hidden ${mobileView?'top-0':'top-[-150vh]'}  left-0 w-full min-h-screen  bg-[rgba(0,4,0,0.9)] backdrop-blur-md py-8 md-hidden overflow-y-auto transition-all duration-700 ease-in-out z-40`}>
                <ul className="w-full py-[5rem]">
                    <li className="relative w-full  px-[2rem] py-5 ">
                    <NavItems link="/" icon={<AiFillMessage />} text={"Home"}  setOpen={()=>{}} open={false}/>
                    </li>
                    <li className="relative w-full  px-[2rem] py-5 ">
                    <NavItems link="/categories" icon={<AiOutlineOrderedList/>} text={"Categories"}  setOpen={()=>{}} open={false}/>
                    </li>
                    <li className="relative w-full  px-[2rem] py-5 ">
                    <NavItems link="/trending" icon={<AiFillMessage />} text={"Trending"}  setOpen={()=>{}} open={false}/>
                    </li>
                    <li className="relative w-full  px-[2rem] py-5  transition-all duration-700 ease-in-out">
                    <NavItems  icon={<RiArrowDropDownLine size="30" />} text={"About"} setOpen={setOpen} open={open}><MegaMenu data={Categories} onClose={()=>{setOpen(!open)}} /></NavItems>
                    </li>
                    <li className="relative w-full  px-[2rem] py-5 ">
                    <NavItems link="/Trending" icon={<AiFillMessage />} text={"Trending"}  setOpen={()=>{}} open={false}/>
                    </li>
                    

                </ul>
            </div>  

            </nav>
            </div>   
        </>    
     );
}
 
export default Navbar;