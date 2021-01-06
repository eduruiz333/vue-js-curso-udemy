new Vue ({
    el: '#app',

    data: {
        contador: 0,
        contador2: 0
    },

    computed: {
        // esta chamada não precisa ser feita como método: resultado()
        // deve ser chamada como propriedade, ou seja, apenas: resultado

        // PROPRIEDADES COMPUTADAS SÃO SÍNCRONAS, OU SEJA, CHAMOU A PROPRIEDADE, OBRIGATORIAMENTE TEM QUE RETORNAR UM VALOR
        resultado() {
            console.log('Médodo COMPUTED "resultado" foi chamado...')
            return this.contador >= 5 ? 'Maior ou igual a 5' : 'Menor que 5'
        }
    },

    watch: {
        contador() {
            setTimeout(() => {
                this.contador = 0
            }, 2000)
        }
        // WATCH VAI FICAR MONITORANDO AS ALTERAÇÕES DE ALGUMA PROPRIEDADE PARA SÓ DEPOIS, PODER FAZER ALGUMA COISA
        // EXEMPLO: COMBO DE ESTADO, QUANDO ALTERADO, FAZ CARREGAR OUTRO COMBO COM AS CIDADES DO ESTADO
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