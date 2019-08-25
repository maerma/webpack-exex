const webpackMerge = require('webpack-merge')
const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const common = require('./webpack.common')

module.exports = webpackMerge(common, {
  devtool: 'source-map',
  plugins: [
    // new uglifyjsWebpackPlugin({
    //   sourceMap: true
    // }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': 'production'
    })
  ],
  mode: 'production'
})
