const webpackMerge = require('webpack-merge')
const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const workboxWebpackPlugin = require('workbox-webpack-plugin')
const common = require('./webpack.common')


module.exports = webpackMerge(common, {
  devtool: 'source-map',
  plugins: [
    // new uglifyjsWebpackPlugin({
    //   sourceMap: true
    // }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': 'production'
    }),
    new workboxWebpackPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    })
  ],
  mode: 'production'
})
