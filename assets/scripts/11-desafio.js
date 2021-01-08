// MINHA RESPOSTA ABAIXO => NÃO UTILIZEI O COMPUTED, DEVERIA TER UTILIZADO

/* new Vue ({
    el: '#app',

    data: {
        resultado: '',
        valor: 0
    },

    watch: {
        valor() {
            this.valor === 13 ? this.resultado = 'Igual a 13' : this.resultado = 'Diferente de 13'
        },

        resultado() {
            setTimeout(() => {
                this.valor = 0
            }, 3000)
        }
    }
}) */

// RESPOSTA DO PROFESSOR ABAIXO

new Vue ({
    el: '#app',

    data: {
        valor: 0
    },

    computed: {
        resultado() {
            return this.valor === 13 ? 'Valor igual a 13' : 'Valor diferente de 13'
        }
    },

    watch: {
        resultado() {
            setTimeout(() => {
                this.valor = 0
            }, 3000)
        }
    }
})