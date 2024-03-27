const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  // Your Next.js configuration options here
});

// next.config.js

module.exports = {
  images: {
    domains: ['res.cloudinary.com'],
  },
}




const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  webpack: (config, options) => {
    config.optimization.minimize = true;
    config.optimization.minimizer = [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ];
    return config;
  },
};


module.exports = {
  // Other configuration options...
  minify: true,
};

const withOptimizedImages = require('next-optimized-images')

module.exports = withOptimizedImages({
  optimizeImagesInDev: true,
 
  // Other Next.js configurations
})

const WebpackObfuscator = require('webpack-obfuscator');

module.exports = {
  // ...
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new WebpackObfuscator({
          rotateStringArray: true,
        })
      );
    }

    return config;
  },
  // ...
};


module.exports = {
    async headers() {
      return [
        {
          // Set the Content Security Policy header for all pages
          source: '/(.*)',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: "frame-ancestors 'self' uwatchfree.vercel.app *.uwatchfree.vercel.app;",
             
            },
          ],
        },
      ];
    },
  };





  
  