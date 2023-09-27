import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as dotenv from 'dotenv';
import * as schema from "@/lib/db/schema"

dotenv.config({
    path: '.env'
});

neonConfig.fetchConnectionCache = true;

const sql = neon(process.env.DATABASE_URL as string);
export const db = drizzle(sql,{schema});

// const result = await db.select().from(...);