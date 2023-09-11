
import { Session } from "inspector";
import NextAuth , {NextAuthOptions , getServerSession, DefaultSession} from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook"
import GithubProvider from "next-auth/providers/github"

import { type GetServerSidePropsContext } from "next";
import { off } from "process";

import { prisma } from './db'
import {GET , POST} from '@/pages/api/auth/[...nextauth]/route'
declare module "next-auth" {
    interface Session extends DefaultSession {
      user: {
        userId: string;
        // ...other properties
        // role: UserRole;
      } & DefaultSession["user"];
    }
  
    // interface User {
    //   // ...other properties
    //   // role: UserRole;
    // }
  }
  
  declare module "next-auth/jwt" {
    interface JWT {
      id: string;
    }
}
export const authOptions: NextAuthOptions = {


    session: {
        strategy: "jwt"
    },
    secret: process.env.SECRET,
    adapter:PrismaAdapter(prisma),
    callbacks: {
        jwt: async ({ token }) => {
            // console.log('the jwt is here: ' , token)
          const db_user = await prisma.user.findFirst({
            where: {
              email: token?.email,
            },
          });
          if (db_user) {
            token.id = db_user.userId;
          }
          return token;
        },
        // the type here will be modified later on 
        session: ({ session, token } : {session: any , token: any}) => {
            // console.log("The session here: " , session,token)
          if (token) {
            session.user.userId = token.id;
            session.user.name = token.name;
            session.user.email = token.email;
            session.user.image = token.picture;
          }
          return session;
        },
      },
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_ID as string,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET as string
        }),
        FacebookProvider({
          clientId:process.env.NEXT_PUBLIC_FACEBOOK_ID as string,
          clientSecret:process.env.NEXT_PUBLIC_FACEBOOK_SECRET as string
        }),
        GithubProvider({
          clientId:process.env.NEXT_PUBLIC_GITHUB_ID as string,
          clientSecret:process.env.NEXT_PUBLIC_GITHUB_SECRET  as string
        })
    ],




};


export const getAuthSession = () => {
    return getServerSession(authOptions);
}