var FruitsListTitle=Vue.extend({
    template:'<h1>フルーツ一覧</h1>'
})
Vue.component('fruits-list-title',FruitsListTitle)

new Vue({
    el:'#fruits-list'
})