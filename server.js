const path = require('path')
const express = require('express')
const webpack = require('webpack')
const config = require('./webpack.config')

const app = express()
const compiler = webpack(config)

var PORT = process.env.PORT || 8080
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './www/index.html'))
})

app.listen(PORT, HEROKU_URL, (err) => {
  if (err) {
    console.log(err)
    return
  }

  console.log('Listening at http://0.0.0.0:' + PORT)
})
