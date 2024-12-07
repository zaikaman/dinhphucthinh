/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['github.com', 'kienvocal.com', 'airdrop-killers.vercel.app'],
  },
  webpack: (config) => {
    config.externals.push({
      'utf-8-validate': 'commonjs utf-8-validate',
      'bufferutil': 'commonjs bufferutil',
    })
    return config
  },
}

module.exports = nextConfig
