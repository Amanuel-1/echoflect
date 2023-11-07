/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['lh3.googleusercontent.com','avatars.githubusercontent.com','platform-lookaside.fbsbx.com','api.dicebear.com','images.unsplash.com','media.istockphoto.com','example.com'],
      },
      env: {
        NEXT_PUBLIC_DATABASE_URL: process.env.NEXT_PUBLIC_DATABASE_URL,
      }
}
 
module.exports = nextConfig
