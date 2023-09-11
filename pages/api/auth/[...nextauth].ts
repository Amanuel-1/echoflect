import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import {SupabaseAdapter} from '@auth/supabase-adapter'
import { Adapter } from "next-auth/adapters";
import login_validate from '../../../lib/validate';


export const authOptions:AuthOptions ={
    providers:[
        
        GoogleProvider({
            clientId:process.env.NEXT_PUBLIC_GOOGLE_ID??"",
            clientSecret:process.env.NEXT_PUBLIC_GOOGLE_SECRET??""
        }),
        GithubProvider({
            clientId:process.env.NEXT_PUBLIC_GITHUB_ID??"",
            clientSecret:process.env.NEXT_PUBLIC_GITHUB_SECRET??""
        }),
        FacebookProvider({
            clientId:process.env.NEXT_PUBLIC_FACEBOOK_ID??"",
            clientSecret:process.env.NEXT_PUBLIC_FACEBOOK_SECRET??""
        })
    ],
    adapter: SupabaseAdapter({
        url: process.env.NEXT_PUBLIC_SUPABASE_URL as string,
        secret: process.env.SUPABASE_SERVICE_ROLE_KEY as string,
      }) as Adapter,
      session:{
        maxAge:60,
        updateAge:60*10
      }
    


}



export default NextAuth(authOptions)