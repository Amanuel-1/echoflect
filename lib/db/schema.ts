import {
  timestamp,
  pgTable,
  text,
  primaryKey,
  integer,
  uniqueIndex,
  boolean,
  
  decimal,
  index,
} from "drizzle-orm/pg-core";
import type { AdapterAccount } from "@auth/core/adapters";
import { Many, relations, sql, One } from 'drizzle-orm';


export const users = pgTable("user", {
  id: text("id").notNull().primaryKey(),
  name: text("name"),
  email: text("email").notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
  honor:decimal("honor",{precision:2 }).default("1.0").notNull(),
  createdAt:timestamp("created_at",{ mode:"date"}).defaultNow().notNull(),
},
(users) => {
  return {
    email_uq_idx: uniqueIndex("email_uq_idx").on(users.email),
  };
}
);

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
  //foreign key authorId
  authorId:text("authorId").references(
    ()=>(users.id),
    {
      onDelete:"cascade",
      onUpdate:"cascade"
    }).notNull(),


  title : text("title").default("untitled").notNull(),
  slug:text("slug").notNull(),
  description : text("description").notNull(),
  content: text("content").notNull(),
  thumbnail:text("thumbnail").notNull(),
  published:boolean("published").default(true).notNull(),
  rating:decimal("rating",{precision:2,scale:1}),
  views:integer("views").default(0).notNull(),
  createdAt:timestamp("createdAt",{ mode: "date" }).defaultNow().notNull(),
  updatedAt:timestamp("createdAt",{ mode: "date" }).defaultNow().notNull(),

},

(posts) => {
  return {
    slug_uq_idx: uniqueIndex("slug_uq_idx").on(posts.slug),
    published_idx: index("published_idx").on(posts.published),
  };
}
)

export const bookmarks = pgTable("bookmarks",{
  id:text("id").primaryKey().notNull(),
  postId:text("postId").references(()=>posts.id,{
    onDelete:'cascade',
    onUpdate:'cascade'
  }).notNull(),
  authorId:text("authorId").references(()=>users.id,{
    onDelete:'cascade',
    onUpdate:'cascade'
  }).notNull()
})


export const comments  = pgTable("comments",{
  id : text("id").notNull().primaryKey(),
  postId:text("postId").references(()=>posts.id,{
    onDelete:'cascade',
    onUpdate:'cascade'
  }).notNull(),
  authorId:text("authoId").references(()=>users.id,{
    onDelete:'cascade',
    onUpdate:'cascade'
  }).notNull(),
  body:text("body").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()

})


export const replies = pgTable('replies', {
  id: text('id').primaryKey(),
  commentId: text('commentId').references(()=>comments.id,{
    onDelete:'cascade',
    onUpdate:'cascade'
  }),
  authorId: text('authorId').references(()=>users.id,{
    onDelete:'cascade',
    onUpdate:'cascade'
  }).notNull(),
  content: text('content').notNull(),

});

export const categories = pgTable('categories', {
  id: text('id').primaryKey(),
  name: text('name'),
  slug:text("slug").notNull().unique(),
  published:boolean("published").default(true).notNull(),
  thumbnail:text("thumbnail").notNull(),
  views:integer("views").default(0).notNull(),
  rating:decimal("rating",{precision:2, scale:1}).notNull()
},
(categorySchema) => {
  return {
    slug_uq_idx: uniqueIndex("slug_uq_idx").on(categorySchema.id),
  };
}
);

// export const postCategories = pgTable('post_categories', {
  
//   postId: text('postId').references(()=> posts.id,{
//     onDelete:'cascade',
//     onUpdate:'cascade'
//   }).notNull(),
//   categoryId: text('categoryId').references(()=> posts.id,{
//     onDelete:'cascade',
//     onUpdate:'cascade'
//   }).notNull(),
// },
// (postCategories) => {
//   return {
//     pc_pk: primaryKey(postCategories.categoryId,postCategories.postId),
//   };
// }
// );



// relationships

export const usersRelations = relations(users, ({ many }) => ({
	posts: many(posts),
  bookmarks:many(bookmarks),

}));
 //post relations 
export const postRelations = relations(posts, ({ one , many }) => ({
  
	authorId:one(users,{
   fields:[posts.authorId],
   references:[users.id]
 }),

 comments:many(comments),
 postToCategories:many(postCategories)

}));

export const bookmarksRelations = relations(bookmarks,({one,many})=>(
  {
    author:one(users,{
      fields:[bookmarks.authorId],
      references:[users.id]
    })
  }
))

//categories relations

export const categoriesRelations = relations(categories,({many})=>({
  postToCategories:many(postCategories)
} 
))

//post to categories relations
// export const postCategoriesRelations = relations(postCategories,({one,many})=>(
//   {
//     postId:one(posts,{
//       fields:[postCategories.postId],
//       references:[posts.id]
//     }),
//     categoryId:one(categories,{
//       fields:[postCategories.categoryId],
//       references:[categories.id]
//     })
//   }
// ))

//comments relations

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

//replies relations

export const repliesRelations = relations(replies,({one,many})=>({

  comment:one(comments,{
    fields:[replies.commentId],
    references:[comments.id]
  })
}))



export const postCategories = pgTable(
  "postCategories",
  {
    id:text("id").primaryKey(),
    postId: text("post_id")
      .notNull()
      .references(() => posts.id, { onDelete: "cascade", onUpdate: "cascade" }),
    categoryId: text("category_id")
      .notNull()
      .references(() => categories.id, { onDelete: "cascade", onUpdate: "cascade" }),
  }
);

// types


// 1 b2c has 1 blog
// 1 b2c has 1 category
export const PostToCategories = relations(postCategories, ({ one }) => ({
  post: one(posts, {
    fields: [postCategories.postId],
    references: [posts.id],
  }),
  category: one(categories, {
    fields: [postCategories.categoryId],
    references: [categories.id],
  }),
}));

