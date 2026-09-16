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
  images: {
    unoptimized: true,
  },
  // 若儲存庫名稱為 my-invitation，這裡填入 '/my-invitation'
  // 若儲存庫是帳號首頁（如 username.github.io），則維持空字串 ''
  basePath: process.env.NODE_ENV === 'production' ? 'askOut' : '',
};

export default nextConfig;