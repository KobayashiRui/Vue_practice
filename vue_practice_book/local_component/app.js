var FruitsListTitle=Vue.extend({
    template:'<h1>フルーツ一覧</h1>'
})

new Vue({
    el:'#fruits-list',
    components:{
        'fruits-list-title':FruitsListTitle
    }
})