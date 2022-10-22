const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval',
  devServer: {
    historyApiFallback: true,
    hot: true,
    compress: true,
    liveReload: false,
  },
  optimization: {
    runtimeChunk: 'single',
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  cache: true,
});
