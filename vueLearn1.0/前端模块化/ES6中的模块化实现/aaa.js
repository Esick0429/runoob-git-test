let name = '小明'
let age = 18
var flag = true

function sum(num1,num2){
    return num1 + num2
}
if(flag){
    sum(20,50)

}
export{
    flag,
    sum
}

export var num1 = 1000;
export var height = 1.11;


export function sum1(num1,num2){
    return num1 + num2
}

export class Person{
   run(){
       console.log("哈哈哈");
   }
}

// const address = 'ShenZhen'
// export default address

export default function(arg){
    console.log(arg)
}