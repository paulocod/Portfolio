/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== 'production'

const nextConfig = {
  output: 'export',
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: !debug ? '/Portfolio' : '',
  basePath: !debug ? '/Portfolio' : '',
};

export default nextConfig;
