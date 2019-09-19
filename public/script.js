new Vue({
el:"#app",
data:{
    total:0,
    products:[
     {title :'product1',id:1, price:1.44},
     {title :'product2',id:2 ,price:2.13},
     {title :'product3',id:3, price:3.23},
    ],
    cart:[]
},
methods:{
    addToCart:function(product){
        this.total +=product.price;
        this.cart.push(product);
    }
}
});