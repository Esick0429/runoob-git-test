import {flag,sum} from "../ES6中的模块化实现/aaa.js";

if(flag){
    console.log("sss");
    console.log( sum(20,50));
}

import {num1,height} from "../ES6中的模块化实现/aaa.js";
console.log(num1);
console.log(height);


import {sum1,Person} from "../ES6中的模块化实现/aaa.js";
console.log(sum1(30,50)); 

const p = new Person();
p.run();


import addr from "../ES6中的模块化实现/aaa.js";
addr("ssss");


import * as aaa from "../ES6中的模块化实现/aaa.js"
console.log(aaa.flag);