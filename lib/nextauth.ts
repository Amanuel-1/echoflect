import { eq } from 'drizzle-orm';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { db } from '@/lib/db';
import { users } from '@/lib/db/schema';
import type { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';

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