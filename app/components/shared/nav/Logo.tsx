import Link from "next/link"
import Image from "next/image"
import { pacific } from "@/public/Fonts";
import { logoProps } from "@/lib/types";




const Logo = (props:logoProps) => {
  return (
    <Link href="/">
      <div className="logoParent mx-4 flex gap-2 items-center">
        <div className="logoImage">
        <Image src={"/resources/logo.png"} alt="Echoflect" width={props.isAtTop ?50 :30} height={props.isAtTop ?50 :30}/>
        </div>
        <div style={pacific.style} className="logoText hidden md:inline-block">
            <h3   className={`${props.isAtTop?'text-2xl text-yellow-900 dark:text-yellow-700 ':'text-lg text-stone-500 '}`}>Echoflect</h3>
        </div>
    </div>
    </Link>
  )
}

export default Logo
