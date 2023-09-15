import {
  timestamp,
  pgTable,
  text,
  primaryKey,
  integer,
} from "drizzle-orm/pg-core";
import type { AdapterAccount } from "@auth/core/adapters";
import { Many, relations } from "drizzle-orm";

export const users = pgTable("user", {
  id: text("id").notNull().primaryKey(),
  name: text("name"),
  email: text("email").notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
});

export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccount["type"]>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey(account.provider, account.providerAccountId),
  })
);

export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").notNull().primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey(vt.identifier, vt.token),
  })
);

export const posts  = pgTable("posts",{
  id : text("id").notNull().primaryKey(),
  authorId:text("authorId").notNull(),
  title : text("title").default("untitled").notNull(),
  description : text("description").notNull(),
  content: text("content").notNull(),
  cover:text("cover"),
  createdAt:timestamp("createdAt",{ mode: "date" }).notNull(),
  updatedAt:timestamp("createdAt",{ mode: "date" }).notNull(),

})

export const followers = pgTable("followers",{
  followerId:text("followerId"),
  followedId:text("followedId")
  
})

export const comments  = pgTable("comments",{
  id : text("id").notNull().primaryKey(),
  postId:text("postId"),
  authorId:text("authoId"),
  body:text("body")

})


export const replies = pgTable('replies', {
  id: text('id').primaryKey(),
  commentId: text('commentId'),
  authorId: text('authorId'),
  content: text('content'),
  replyId: text('replyId'),
});

export const categories = pgTable('categories', {
  categoryId: text('categoryId').primaryKey(),
  name: text('name'),
});

export const postCategories = pgTable('post_categories', {
  postId: text('postId'),
  categoryId: text('categoryId'),
});

export const usersRelations = relations(users, ({ many }) => ({
	posts: many(posts),
  followers:many(users),
  followed:many(users)
}));
 
export const postRelations = relations(posts, ({ one , many }) => ({
  
	authorId:one(users,{
   fields:[posts.authorId],
   references:[users.id]
 }),

 comments:many(comments),
 categories:many(categories)

}));

export const commentRelations = relations(comments,( {one,many} )=>({
  post:one(posts,{
    fields:[comments.postId],
    references:[posts.id]
    
  }),

  author:one(users,{
    fields:[comments.authorId],
    references:[users.id]

  }),

  replies:many(replies)

}))

export const PostcategoriesRelation = relations(categories,( { one,many})=>({
  posts:many(posts),
  categories:many(categories)
  
}))

export const repliesRelations = relations(replies,({one,many})=>({
  replies:many(replies),
  parentReply:one(replies,{
    fields:[replies.replyId],
    references:[replies.replyId]
  }),
  comment:one(comments,{
    fields:[replies.commentId],
    references:[comments.id]
  })
}))



