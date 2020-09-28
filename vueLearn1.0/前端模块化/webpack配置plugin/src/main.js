const {add,add2} = require("./js/muth.js")

console.log(add(20,30));
console.log(add2(20,30));

import {name,height} from "./js/info.js"
console.log(name);
console.log(height); 

//3.依赖css文件
require('./css/index.css');
// import style from './css/index.css'
// style.className === "z849f98ca812"

require('./css/wtf.less');
// // import wtf from './css/wtf.less'
// // wtf.className === "ssss"
document.writeln('?????????')

require('./image/2.jpg');

import Vue from 'vue'
// import app from './vue/app'

import app from './vue/App.vue'
new Vue({
    el:'#app',
    template:`<app/>`,
    components:{
        app
    }
})