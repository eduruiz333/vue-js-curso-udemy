new Vue({
    el: '#app',

    data: {
        contador: 0
    },

    methods: {
        somar() {
            this.contador++
            console.log(this.contador)
        }
    }
})