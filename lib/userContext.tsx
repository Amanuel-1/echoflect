import { useSession } from "next-auth/react";
import { createContext } from "react";

const UserProvider = ({children}:{children:React.ReactNode})=>{

    const {data:session} = useSession()

    

}
