ALTER TABLE "postCategories" DROP CONSTRAINT "postCategories_post_id_category_id";--> statement-breakpoint
ALTER TABLE "postCategories" ADD COLUMN "id" text NOT NULL;