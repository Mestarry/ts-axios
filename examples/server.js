const express = require('express')
const bodyParser = require('body-parser')
const webpack = require('webpack')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackDevMiddleware = require('webpack-dev-middleware')
const WebpachConfig = require('./webpack.config')

const app = express()
const compiler = webpack(WebpachConfig)

app.use(webpackDevMiddleware(compiler, {
    publicPath: '/__build__/',
    stats: {
        colors: true,
        chunks: false
    }
}))
app.use(webpackHotMiddleware(compiler))
app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ entended: true }))

const router = express.Router()

router.get('/simple/get', (req, res) => {
    res.json({
        msg: 'nice'
    })
})
app.use(router)

const prot = process.env.PROT || 8080
module.exports = app.listen(prot, () => {
    console.log('服务开启成功')
})