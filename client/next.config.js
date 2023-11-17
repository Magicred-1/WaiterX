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
};

module.exports = nextConfig;
