import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"


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
    ]
}

console.log(process.env.NEXT_PUBLIC_GOOGLE_ID)

export default NextAuth(authOptions)