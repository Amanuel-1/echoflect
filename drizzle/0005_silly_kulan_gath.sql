CREATE TABLE IF NOT EXISTS "postCategories" (
	"post_id" text NOT NULL,
	"category_id" text NOT NULL,
	CONSTRAINT postCategories_post_id_category_id PRIMARY KEY("post_id","category_id")
);
--> statement-breakpoint
DROP TABLE "post_categories";--> statement-breakpoint
DROP INDEX IF EXISTS "slug_uq_idx";--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "slug_uq_idx" ON "categories" ("id");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "postCategories" ADD CONSTRAINT "postCategories_post_id_posts_id_fk" FOREIGN KEY ("post_id") REFERENCES "posts"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "postCategories" ADD CONSTRAINT "postCategories_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
