
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/portfolio-8cf4d', // This ensures CSS/JS paths include the repo name
};
export default nextConfig;
