/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "files.cdn.printful.com",
      "printful-upload.s3-accelerate.amazonaws.com",
      "littlebuilds.s3.us-east-1.amazonaws.com",
      "littlebuilds.s3.amazonaws.com",
      "localhost",
      "foodthings.net",
      "foodthings.shop",
      "foodthings.store"
    ],
    deviceSizes: [320, 640, 660, 768, 1024, 1600]
  }
}
