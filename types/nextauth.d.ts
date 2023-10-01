// types/next-auth.d.ts

import type { JWT } from 'next-auth/jwt';
import type { Session, User } from 'next-auth';

type UserId = string;
type UserName  = string

declare module 'next-auth/jwt' {
  interface JWT {
    id: UserId;
    username:UserName
  }
}

declare module 'next-auth' {
  interface Session {
    user: User & {
      id: UserId;
      username:UserName
    };
  }
}
