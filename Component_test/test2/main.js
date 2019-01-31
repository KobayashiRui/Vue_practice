var MyComponent = {
    template: '<p>カウンター <button v-on:click="addOne">追加</button> {{count}}</p>',
    data: function(){
        return {
            count: 0
        } 
    },
    methods: {
        addOne: function(){
            this.count++;
        }
    },
}

new Vue({
    el: '#app',
    components: {
        'my-component' : MyComponent
    }
})
