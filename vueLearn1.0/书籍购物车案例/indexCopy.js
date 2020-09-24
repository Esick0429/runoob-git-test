const app = new Vue({
     el:'#app',
     data:{
        books:[
            {
                id:1,
                name:"代码大全",
                price:55,
                date:2006,
                count:1
            },
            {
                id:2,
                name:"代码大全2",
                price:55,
                date:2006,
                count:1
            },
            {
                id:3,
                name:"代码大全3",
                price:55,
                date:2006,
                count:1
            },
            {
                id:4,
                name:"代码大全4",
                price:55,
                date:2006,
                count:1
            },
            {
                id:5,
                name:"代码大全5",
                price:55,
                date:2006,
                count:1
            }
        ]
     },
     methods:{
        Btnadd(index){
            this.books[index].count++
        },
        Btnint(index){
            this.books[index].count--
        },
        BackBlock(index){
            this.books.splice(index,1)
        }
     },
     computed:{
        allprice(){
            let allprice=this.books.reduce(function(total,n){
                return total + n.price * n.count
            },0)
            return allprice
        }
     },
     filters:{
        showPrice(price){
            return '$' + price.toFixed(2) 
        }
    }
})
   
    
