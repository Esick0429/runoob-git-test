const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const WebpackMerage = require('webpack-merge')
const baseConfig = require('./base.config.js')

module.exports = WebpackMerage(baseConfig, {
    plugins: [
      new UglifyjsWebpackPlugin()
    ]
})
