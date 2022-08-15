/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const env = {
    MONGO_URI: "mongodb+srv://varun:varun@inventory.tue5zce.mongodb.net/?retryWrites=true&w=majority"
}

module.exports = nextConfig, env;

