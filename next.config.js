/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // 公开 site 页面
      { source: '/about',    destination: '/en/about',    permanent: true },
      { source: '/contact',  destination: '/en/contact',  permanent: true },
      { source: '/services', destination: '/en/services', permanent: true },
      { source: '/team',     destination: '/en/team',     permanent: true },
      // 内部 portal 页面
      { source: '/daily-tools',            destination: '/en/daily-tools',            permanent: true },
      { source: '/daily-tools/:path*',     destination: '/en/daily-tools/:path*',     permanent: true },
      { source: '/tools/:slug',            destination: '/en/tools/:slug',            permanent: true },
    ]
  },
}
module.exports = nextConfig
