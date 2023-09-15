CREATE TABLE IF NOT EXISTS "categories" (
	"categoryId" text PRIMARY KEY NOT NULL,
	"name" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "comments" (
	"id" text PRIMARY KEY NOT NULL,
	"postId" text,
	"authoId" text,
	"body" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "followers" (
	"followerId" text,
	"followedId" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "post_categories" (
	"postId" text,
	"categoryId" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "posts" (
	"id" text PRIMARY KEY NOT NULL,
	"authorId" text NOT NULL,
	"title" text DEFAULT 'untitled' NOT NULL,
	"description" text NOT NULL,
	"content" text NOT NULL,
	"cover" text,
	"createdAt" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "replies" (
	"id" text PRIMARY KEY NOT NULL,
	"commentId" text,
	"authorId" text,
	"content" text,
	"replyId" text
);
