
new Vue ({
    el: '#desafioModificadorEventos',

    data: {
        valor: ''
        
    },

    methods: {

        showAlert () {
            alert ('AEEEE, VALEU!')
        },

        pegaValor (ev) {
            this.valor = event.target.value
        }

    }
})