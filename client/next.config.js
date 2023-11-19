const webpack = require('webpack');

const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    config.externals.push('pino-pretty', 'lokijs', 'encoding');

    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /node-gyp-build/,
      })
    );

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'noun-api.com',
      },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async headers() {
    return [
      {
        source: '/src/(.*)?', // Matches all pages
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
