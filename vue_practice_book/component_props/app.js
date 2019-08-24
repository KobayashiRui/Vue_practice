Vue.component('fruits-item-name',{
    props:{
        fruitsItem:{//テンプレート内ではケバブケース
            type:Object,
            required:true//必須データ
        }
    },
    template:'<li>{{fruitsItem.name}}</li>'
})

new Vue({
    el:'#fruits-component',
    data:{
        fruitsItems:[
            {name:'梨'},
            {name:'イチゴ'},
            {name:'リンゴ'}
        ]
    }
})