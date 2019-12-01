var MyComponent = {
    template: '<p>im {{myName}}</p>',
    props:{
        myName: String
    },
    created: function (){
        if(this.myName == null){
            this.myName= "????";
        }
    }
}

new Vue({
    el: '#app',
    components: {
        'my-component' : MyComponent
    }
})
