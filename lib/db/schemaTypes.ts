import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { categories, postCategories, posts } from "./schema";


export type IPost = InferSelectModel<typeof posts>
export type ICreatePost = InferInsertModel<typeof posts>

export type ICategory = InferSelectModel<typeof categories>
export type ICreateCategory = InferInsertModel<typeof categories>

export type IPostToCategory = InferSelectModel<typeof postCategories>
export type ICreatePostToCategory = InferInsertModel<typeof postCategories>

