import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as dotenv from 'dotenv';

dotenv.config({
    path: '.env.local'
});

neonConfig.fetchConnectionCache = true;

const sql = neon(process.env.DATABASE_URL as string);
export const db = drizzle(sql);

// const result = await db.select().from(...);