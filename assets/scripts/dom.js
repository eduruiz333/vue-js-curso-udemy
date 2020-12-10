new Vue({

    el: '#app',

    data: {
    
        titulo: 'Usando Vue JS!',

        linkGoogle: 'https://www.google.com'
    },

    methods: {

        alteraTexto(event) {
            this.titulo = event.target.value
        },
        
        saudacao() {
            return 'ALOHA, primo!!!'
        },

        acessaTitulo() {
            return this.titulo
        }
    }
})

let teste1 = document.querySelector('.teste1')
console.log(teste1)

let teste2 = document.querySelector('#teste2')
console.log(teste2)





// OBSERVAÇÃO: para incorporar conteúdo direto de texto (string) no html, basta utilizar o double mustache. porém, para inserir conteúdo dentro de propriedades, como href por exemplo, devemos utilizar como DIRETIVAS, no caso do href seria o v-bind:href
// Ou seja, DIRETIVAS são propriedades personalizadas, e essas propriedades são interpretadas pelo VUE. Podemos criar nossas próprias diretivas ou usar as que o VUE disponibiliza.