const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const config = require('./webpack.config.js')
const compiler = webpack(config)
const port = 3000

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/'
}))
app.listen(port, () => console.log(`Example app listening on port port!`))