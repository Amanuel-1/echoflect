import {FaDesktop} from "react-icons/fa"
import ThemeSelector from "./ThemeSelector"
import { RiAccountCircleFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image"
import { FiUser } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/react";
import { navButtonsProps } from "@/lib/types";
import Search from "./Search";
import User from "./user";



const NavButtons = (props:navButtonsProps) => {
  
  const {data:session}  = useSession()

  return (
    <>
    <div className="flex gap-4 items-center">
      <Search />
      <ThemeSelector darkMode={props.darkMode} setDarkMode={props.setDarkMode}/>
      <User/>   
    </div>
    </>
  )
}

export default NavButtons
