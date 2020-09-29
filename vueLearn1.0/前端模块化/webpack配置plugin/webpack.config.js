const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')



module.exports = {
    //指定入口，表示webpack要打包哪个文件
    entry: path.join(__dirname,'./src/main.js'),
    //指定出口，表示打包好的文件输出到哪个目录
    output:{
        path:path.join(__dirname,'./dist'),
        //指定输出文件的名称
        filename:'bundle1.js',
        // publicPath: 'dist/'
    },
    module:{
      rules: [
        {
        test: /\.css$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        },]
        },
        {
          test: /\.less$/,
          use: [{
              loader: "style-loader" // creates style nodes from JS strings
          }, {
              loader: "css-loader" // translates CSS into CommonJS
          }, {
              loader: "less-loader" // compiles Less to CSS
          }]
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8000,
                name: 'images/[hash:8].[ext]'
              }
            }
          ]
        },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test:/\.vue$/,
          use: ['vue-loader']
        }
      ]
    },
    resolve:{
      alias:{
        'vue$':'vue/dist/vue.esm.js'
      }
    },
    plugins: [
      // 请确保引入这个插件！
      new VueLoaderPlugin(),
      new webpack.BannerPlugin('卢本伟🐂🍺'),
      new HtmlWebpackPlugin({
        template:'index.html'
      })
    ],
    devServer: {
      contentBase: './dist',
      inline:true
    }
}

