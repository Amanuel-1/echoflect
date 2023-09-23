ALTER TABLE "post_categories" DROP COLUMN IF EXISTS "id";--> statement-breakpoint
ALTER TABLE "post_categories" ADD CONSTRAINT "post_categories_categoryId_postId" PRIMARY KEY("categoryId","postId");