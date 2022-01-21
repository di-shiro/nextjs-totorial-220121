module.exports = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    config.resolve.fallback = { buffer: false };

    return config;
  },
};

// module.exports = {
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.resolve.fallback.fs = false;
//       config.resolve.fallback.child_process = false;
//       config.resolve.fallback.net = false;
//       config.resolve.fallback.dns = false;
//       config.resolve.fallback.tls = false;
//     }
//     return config;
//   },
// };
