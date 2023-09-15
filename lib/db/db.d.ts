import {users,
    categories,
    sessions,
    accounts,
    sessions,
    comments,
    postCategories,
    posts}  from './schema'

declare module './db' {
    interface Query {
        users:typeof users,
        accounts:typeof accounts,
        sessions:typeof sessions,
        posts:typeof posts,
        comments:typeof comments


    }
}