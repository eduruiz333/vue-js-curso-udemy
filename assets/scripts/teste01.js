new Vue({
    el: '#app',
    data: {
        titulo: 'Usando Vue JS!'
    },
    methods: {
        alteraTexto(event) {
            this.titulo = event.target.value
        }
    }
})