import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { eq } from 'drizzle-orm';
import { db } from '@/lib/db';
import { users } from '@/lib/db/schema';
import type { NextAuthOptions } from 'next-auth';
import { NeonHttpDatabase } from 'drizzle-orm/neon-http';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { generateUniqueUsername } from './functions/utils';
import { Usertype } from './db/schemaTypes';

export const authOptions: NextAuthOptions = {
  adapter: DrizzleAdapter(db),
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
 
callbacks: {
  // async signIn({profile,user,account,credentials}) {
  //   const newusername = await generateUniqueUsername()
  //   await db.update(users).set({username:newusername}).where(eq(users.id,user.id)).returning({newuser:users.username})
  //   return newusername
  // },
 
  async jwt({ token, user }) {
    if (user) {
      token.id = user.id;
      
      // Fetch the username from the users table based on the user's ID
      const [dbUser] = await db
        .select()
        .from(users)
        .where(eq(users.id, user.id))
        .limit(1);

        if (dbUser) {
          if(!dbUser.username){

            const newusername = await generateUniqueUsername()
            await db.update(users).set({username:newusername}).where(eq(users.id,user.id)).returning({newuser:users.username})
          
          }
        token.username = dbUser.username as string;
        
      }
    }
    console.log("🛑🎲✨ jwt callback ✨🎲🛑",token)
    return token;
  },
  async session({ token, session }) {
    if (token) {
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.email = token.email;
      session.user.image = token.picture;
  
      session  = {
        ...session,
        user:{
          ...session.user,username:token.username
        }
      }
  
      // Fetch the username from the users table based on the user's ID
      const [dbUser] = await db
        .select()
        .from(users)
        .where(eq(users.id, token.id))
        .limit(1);
  
      if (dbUser) {
       // session.user.username = dbUser.username;
        session ={
          ...session,
          user:{
            ...session.user,username:dbUser.username as string
          }
        }
      }
    }
    console.log("🛑🎲✨ session callback ✨🎲🛑",session)
    return session;
  },
},
};



// callbacks: {
//   async signIn({ user, account, profile, email, credentials }) {
//     // Generate a unique username for the user.
//     const uusername = await generateUniqueUsername();
    
//     // Update the user's username in the database.
//     user = {...user,username:uusername} as Usertype ;
//     await db.update(users).set({username:uusername}).where(eq(users.id,user.id)).returning({newuser:users.username})
//     // ({
//     //   where: { id: user.id },
//     //   data: { username },
//     // });

//     // Return the user.
//     return user;
//   },
 
//   async jwt({ token, user }) {
//     if (user) {
//       token.id = user.id;
      
//       // Fetch the username from the users table based on the user's ID
//       const [dbUser] = await db
//         .select()
//         .from(users)
//         .where(eq(users.id, user.id))
//         .limit(1);

//         if (dbUser) {
//         token.username = dbUser.username as string;
        
//       }
//     }
//     console.log("🛑🎲✨ jwt callback ✨🎲🛑",token)
//     return token;
//   },
//   async session({ token, session }) {
//     if (token) {
//       session.user.id = token.id;
//       session.user.name = token.name;
//       session.user.email = token.email;
//       session.user.image = token.picture;
  
//       session  = {
//         ...session,
//         user:{
//           ...session.user,username:token.username
//         }
//       }
  
//       // Fetch the username from the users table based on the user's ID
//       const [dbUser] = await db
//         .select()
//         .from(users)
//         .where(eq(users.id, token.id))
//         .limit(1);
  
//       if (dbUser) {
//        // session.user.username = dbUser.username;
//         session ={
//           ...session,
//           user:{
//             ...session.user,username:dbUser.username as string
//           }
//         }
//       }
//     }
//     console.log("🛑🎲✨ session callback ✨🎲🛑",session)
//     return session;
//   },
// },