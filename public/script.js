new Vue({
el:"#app",
data:{
    total:0,
    products:[
     {title :'product1',id:1},
     {title :'product2',id:2},
     {title :'product3',id:3},

    ]
},
methods:{
    addToCart:function(){
        this.total +=9.99;
    }
}
});