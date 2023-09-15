CREATE TABLE users (
    userId UUID PRIMARY KEY,
    username VARCHAR NOT NULL,
    email VARCHAR UNIQUE,
    avatar VARCHAR,
    password VARCHAR
);

CREATE TABLE posts (
    postId UUID PRIMARY KEY,
    authorId UUID,
    title VARCHAR,
    content TEXT,
    cover VARCHAR
);

CREATE TABLE followers (
    id UUID PRIMARY KEY,
    followerId UUID,
    followedId UUID
);

CREATE TABLE comments (
    id UUID PRIMARY KEY,
    postId UUID,
    authorId UUID,
    content TEXT
);

CREATE TABLE replies (
    id UUID PRIMARY KEY,
    commentId UUID,
    authorId UUID,
    content TEXT,
    replyId UUID
);

CREATE TABLE categories (
    categoryId UUID PRIMARY KEY,
    name VARCHAR
);

CREATE TABLE post_categories (
    postId UUID,
    categoryId UUID
);

ALTER TABLE posts
ADD CONSTRAINT fk_posts_author
FOREIGN KEY (authorId) REFERENCES users(userId);

ALTER TABLE followers
ADD CONSTRAINT fk_followers_follower
FOREIGN KEY (followerId) REFERENCES users(userId);

ALTER TABLE followers
ADD CONSTRAINT fk_followers_followed
FOREIGN KEY (followedId) REFERENCES users(userId);

ALTER TABLE comments
ADD CONSTRAINT fk_comments_post
FOREIGN KEY (postId) REFERENCES posts(postId);

ALTER TABLE comments
ADD CONSTRAINT fk_comments_author
FOREIGN KEY (authorId) REFERENCES users(userId);

ALTER TABLE replies
ADD CONSTRAINT fk_replies_comment
FOREIGN KEY (commentId) REFERENCES comments(id);

ALTER TABLE replies
ADD CONSTRAINT fk_replies_author
FOREIGN KEY (authorId) REFERENCES users(userId);

ALTER TABLE replies
ADD CONSTRAINT fk_replies_reply
FOREIGN KEY (replyId) REFERENCES replies(id);

ALTER TABLE post_categories
ADD CONSTRAINT fk_post_categories_post
FOREIGN KEY (postId) REFERENCES posts(postId);

ALTER TABLE post_categories
ADD CONSTRAINT fk_post_categories_category
FOREIGN KEY (categoryId) REFERENCES categories(categoryId);