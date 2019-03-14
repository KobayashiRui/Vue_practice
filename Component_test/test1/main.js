var MyComponent = {
    template: '<p>Hello</p>'
}

new Vue({
    el: '#app',
    components: {
        'my-component' : MyComponent
    }
})
