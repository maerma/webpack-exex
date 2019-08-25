const webpackMerge = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.common')

module.exports = webpackMerge(common, {
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  }
})
