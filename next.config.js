/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/about',    destination: '/en/about',    permanent: true },
      { source: '/contact',  destination: '/en/contact',  permanent: true },
      { source: '/services', destination: '/en/services', permanent: true },
      { source: '/team',     destination: '/en/team',     permanent: true },
    ]
  },
}
module.exports = nextConfig
