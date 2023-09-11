"use client"

import {AiFillHome,AiOutlineOrderedList,AiFillMessage} from "react-icons/ai"
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


const Navbar = (props:navbarProps) => {  

    const [open,setOpen] = useState(false);
    const [mobileView,setMobileView] = useState(false);
    const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-gray-900 dark:bg-gray-100 transition ease-in transform duration-300`;
    



    return (                         
        <>
           <div className=" fixed flex justify-center top-0 w-full lg:container py-2 z-20 bg-[rgba(250,250,250,0.68)] dark:bg-[rgba(3,7,18,0.68)] backdrop-blur-md">
           <nav className=" w-full bg-white dark:bg-transparent md:rounded-2xl">
                <div className="parent flex  md:justify-between items-center rounded-2xl mt-2 py-2 border-0 shadow-lg  shadow-brown-100  ">
                    <Logo isAtTop={true}/>
                    <div className="hidden md:flex gap-4 ">
                    
                    <NavItems link="/" icon={<AiFillHome />} text={"Home"} setOpen={()=>{}} open={false}/>
                    <NavItems link="/categories" icon={<RiArrowDropDownLine size="30" />} text={"Categories"} setOpen={setOpen} open={open}><MegaMenu data={Categories} onClose={()=>{setOpen(!open)}} /></NavItems>                
                    <NavItems link="/trending" icon={<AiFillMessage />} text={"Trending"}  setOpen={()=>{}} open={false}/>
                    <NavItems link="/about" icon={<AiOutlineOrderedList />} text={"About"}  setOpen={()=>{}} open={false}/>
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
                                    ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                                    : "opacity-50 group-hover:opacity-100"
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
                                    ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                                    : "opacity-50 group-hover:opacity-100"
                                    }`}
                                    />
                            </button>
                    </div>
                   
                
            </div>
               
            {/* the following section is for smaller devices. */}
            <div className={`absolute md:hidden ${mobileView?'':'top-[-150vh]'}  left-0 w-full h-[50rem] rounded-b-[20px] bg-[rgba(0,4,0,0.9)] backdrop-blur-md py-3 md-hidden overflow-scroll transition-all duration-700 ease-in-out`}>
                <ul className="w-full">
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