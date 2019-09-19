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
        var found=false;
        for(var i=0; i<this.cart.length; i++){
        if(this.cart[i].id==product.id){
            this.cart[i].qty++;
            found=true;
        }
        }
        if(!found){
            this.cart.push({
                id:product.id,
                title:product.title,
                price:product.price,
                qty:1
    
            });
        }
        
    }
},
 filters:{
     currency:function(price){
        return "$".concat(price.toFixed(2));
     }
 }
});