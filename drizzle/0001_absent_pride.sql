ALTER TABLE "post_categories" DROP CONSTRAINT "post_categories_postId_categoryId";--> statement-breakpoint
ALTER TABLE "post_categories" ADD COLUMN "id" text NOT NULL;