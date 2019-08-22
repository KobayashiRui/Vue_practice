var items=[
    {
        name:'鉛筆',
        price:300,
        quantity:0
    },
    {
        name:'ノート',
        price:400,
        quantity:0
    },
    {
        name:'消しゴム',
        price:500,
        quantity:0
    },
]

var vm=new Vue({
    el:'#app',
    data:{
        items:items,
    }
})

vm.$watch(function(){
    //鉛筆の個数
    return this.items[0].quantity
}, function(quantity){
    //鉛筆の個数が変更されたら呼ばれる
    console.log("change 鉛筆の個数")
    console.log(quantity)
})
