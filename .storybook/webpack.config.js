const path = require('path');
const {src, dest} = require('../build/config.js');

module.exports = (baseConfig, env, defaultConfig) => {
  // Extend defaultConfig as you need.

  // For example, add typescript loader:
  // defaultConfig.module.rules.push({
  //   test: /\.(ts|tsx)$/,
  //   include: path.resolve(__dirname, '../_src'),
  //   loader: require.resolve('ts-loader'),
  // });
  defaultConfig.resolve.alias['@'] = path.resolve(src.dir);
  defaultConfig.resolve.alias['@vue'] = path.resolve(src.vue);
  defaultConfig.resolve.alias['@css'] = path.resolve(dest.css);

  return defaultConfig;
};
