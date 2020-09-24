const app = new Vue({
    el:'#app',
    data:{
        books:[
            {
                id:1,
                name:"《代码大全》",
                date:'2006-9',
                price:66.00,
                count:1
            },
            {
                id:2,
                name:"《代码大全2》",
                date:'2006-9',
                price:22.00,
                count:1
            },
            {
                id:3,
                name:"《代码大全3》",
                date:'2006-9',
                price:11.00,
                count:1
            },
            {
                id:4,
                name:"《代码大全4》",
                date:'2006-9',
                price:23.00,
                count:1
            },
            {
                id:5,
                name:"《代码大全5》",
                date:'2006-9',
                price:44.00,
                count:1
            },
        ]
    },
    methods:{
        // getFinalPrice(price){
        //     return '$' + price.toFixed(2) 

        // }
        increment(index){
            this.books[index].count++
        },
        decrement(index){
            this.books[index].count--
        },
        removeBtn(index){
            this.books.splice(index,1)
        }
    },
    computed:{
        allPrice(){
            //1.普通的for循环
            // let allPrice = 0
            // for(let i=0;i < this.books.length;i++){
            //     allPrice += this.books[i].price * this.books[i].count
            // }
            // return allPrice


            // let allPrice = 0
            // for (let i in this.books){
            //     allPrice += this.books[i].price * this.books[i].count
            // }
            // return allPrice

            // let allPrice = 0
            // for(let item of this.books){
            //     allPrice += item.price * item.count
            // }
            // return allPrice

            let allPrice=this.books.reduce(function(allPrice,n){
                return allPrice + n.price * n.count
            },0)

            return allPrice
           
        }
    },
    filters:{
        showPrice(price){
            return '$' + price.toFixed(2) 
        }
    }
})