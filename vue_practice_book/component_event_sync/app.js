Vue.component('input-form',{
    template:'<input type="text" :value="text_data" @input="input_data"/>',
    props:{
        text_data:{
            type:String,
            default:"",
        }
    },
    methods:{
        input_data:function(event){
            //イベントの発行 update:text_data
            return this.$emit("update:text_data",event.target.value) 
        }
    }
})

new Vue({
    el:'#app',
    data:{
        text_data:"",
    },
})