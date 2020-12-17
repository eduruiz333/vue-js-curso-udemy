new Vue ({
    
    el: '#desafio',

    data: {
        nome: 'Edu Nagual',
        idade: 48,

        min: 1,
        max: 10
    },

    methods: {

        numeroAleatorio(min, max) {
            return Math.round(
                Math.random() * (this.max - this.min) + this.min
                )
        }
        
    }
    
})

