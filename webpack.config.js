const { createWebPackConfig } = require('@knapsack/build-tools');
const { join } = require('path');
const { ksPublic, ksPublicDist } = require('./config');

const config = createWebPackConfig({
  mainEntries: [join(__dirname, './src/')],
  extraSrcDirs: [__dirname, join(__dirname, './src')],
  dist: ksPublicDist,
  webRootDir: ksPublic,
  useHtmlWebpackPlugin: false,
  outputFilename: 'index.js',
});

module.exports = {
  ...config,
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  optimization: {},
};
