const path = require('path')

module.exports = {
    //指定入口，表示webpack要打包哪个文件
    entry: path.join(__dirname,'./src/main.js'),
    //指定出口，表示打包好的文件输出到哪个目录
    output:{
        path:path.join(__dirname,'./dist'),
        //指定输出文件的名称
        filename:'bundle1.js'
    }
}