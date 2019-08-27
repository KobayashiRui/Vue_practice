Vue.component('event-buttons',{
    template:'<div><button @click="emitEventOne">Event1</button><button @click="emitEventTwo">Event2</button><button @click="emitEventThree">Event3</button></div>',
    methods: {
        emitEventOne: function(){
            this.$emit('event-one')
        },
        emitEventTwo: function(){
            this.$emit('event-two',"test")
        },
        emitEventThree: function(){
            this.$emit('event-three',123,{test:"test"})
        },
    }

})

new Vue({
    el:'#app',
    data:{
        arguments:[]
    },
    methods: {
        onEventOne: function(){
            alert('Event 1');
        },
        onEventTwo: function(arg){
            alert('Event 2');
            this.arguments=[]
            this.arguments.push(arg)
        },
        onEventThree:function(arg1,arg2){
            alert('Event 3');
            this.arguments=[]
            this.arguments.push(arg1)
            this.arguments.push(arg2)
        }
    }
})