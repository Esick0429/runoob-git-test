const WebpackMerage = require('webpack-merge')
const baseConfig = require('./base.config.js')

module.exports = WebpackMerage(baseConfig,{
    devServer: {
      contentBase: './dist',
      inline:true
    }
})
