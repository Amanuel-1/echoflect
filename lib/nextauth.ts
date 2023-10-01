// lib/auth/index.ts


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
      profile(profile){
        return {
          id:profile.id.toString(),
          email:profile.email,
          name:profile.name || profile.login || `${profile.email.split('@')[0]}`,
          username:profile.login || `${profile.email.split('@')[0]}_${Math.random().toString(36).substring(7)}`,
          image:profile.avatar_url || `https://www.gravatar.com/avatar/${Math.random().toString(36).substring(7)}?d=identicon&r=PG` ,

        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      profile(profile){
        return {
          id:profile.sub+ "", 
          email:profile.email,
          name:profile.name ||  `${profile.email.split('@')[0]}`,
          username:profile.login || `${profile.email.split('@')[0]}_${Math.random().toString(36).substring(7)}`,
          image:profile.picture || `https://www.gravatar.com/avatar/${Math.random().toString(36).substring(7)}?d=identicon&r=PG` ,

        }
      }
    }),
  ],
  callbacks: {
    async session({ token, session}:{token:any,session:any}) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.username = token.username;
        session.user.email = token.email;
        session.user.image = token.picture;
      }

      return session;
    },
    async jwt({ token, user }:{ token:any, user:any }) {
      const [dbUser] = await db
        .select()
        .from(users)
        .where(eq(users.email, token.email || ''))
        .limit(1);

      if (!dbUser) {
        if (user) {
          token.id = user?.id;
        }
        return token;
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        username:dbUser.username,
        email: dbUser.email,
        picture: dbUser.image,
      };
    },
  },
  
};
