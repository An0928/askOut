/*
/** @type {import('next').NextConfig} */
/*const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
*/

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/askOut',
  trailingSlash: true,
};

export default nextConfig;