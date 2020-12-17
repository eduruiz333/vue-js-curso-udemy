new Vue ({
    
    el: '#desafio',

    data: {
        // Dados Pessoais
        nome: 'Edu Nagual',
        idade: 48,

        // Números para randomizar
        min: 1,
        max: 10,

        // Imagem para inserir via bind
        image: 'https://cdn.wegow.com/media/artists/dead-can-dance/dead-can-dance-1492555236.47.2560x1440.jpg'
    },

    methods: {

        numeroAleatorio(min, max) {
            return Math.round(
                Math.random() * (this.max - this.min) + this.min
                )
        }
        
    }
    
})

