// next.config.mjs

const nextConfig = {
    // Enable static HTML export
    output: 'export',
  
    // Additional configurations can go here
    // For example, setting a base path or asset prefix if needed
    // basePath: '/your-base-path',
    // assetPrefix: 'https://your-cdn-url/',
  
    // For better debugging and error handling during static export
    trailingSlash: true, // Ensures trailing slashes in URLs, which can be important for S3 hosting
    reactStrictMode: true, // Enables React strict mode
  }
  
  export default nextConfig
  