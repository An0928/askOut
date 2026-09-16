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
  trailingSlash: true, // 關鍵這行：讓導出產生 index.html 而不是 page.html
  images: {
    unoptimized: true,
  },
  // 請確認這裡的 repository 名稱大小寫與 GitHub 完全一致
  basePath: process.env.NODE_ENV === 'production' ? '/askOut' : '',
};

export default nextConfig;