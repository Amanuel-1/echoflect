/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['lh3.googleusercontent.com','avatars.githubusercontent.com','platform-lookaside.fbsbx.com','api.dicebear.com','images.unsplash.com','media.istockphoto.com','example.com'],
      },
      env: {
        DATABASE_URL: process.env.DATABASE_URL,
      }
}
 
module.exports = nextConfig
