new Vue ({
    el: '#app',

    data: {
        contador: 0,
        contador2: 0
    },

    computed: {
        // esta chamada não precisa ser feita como método: resultado()
        // deve ser chamada como propriedade, ou seja, apenas: resultado
        resultado() {
            console.log('Médodo COMPUTED "resultado" foi chamado...')
            return this.contador >= 5 ? 'Maior ou igual a 5' : 'Menor que 5'
        }
    },


    methods: {
        aumentar() {
            this.contador++
        },

        diminuir() {
            this.contador--
        },

        // esta chamada PRECISA ser feita como método, ou seja: resultado()
        /* resultado() {
            console.log('Médodo "resultado" foi chamado...')
            return this.contador >= 5 ? 'Maior ou igual a 5' : 'Menor que 5'
        } */
    }
})