module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

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
