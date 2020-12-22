new Vue({
    el: '#app',

    data: {
        contador: 0,
        contador5: 5,

        x: 0,
        y: 0,

        cinco: 5
    },

    methods: {

        somar() {
            this.contador++
            console.log(this.contador)
        },

        atualizarXY(event) {
            this.x = event.clientX
            this.y = event.clientY
        },

        somar5(ev) {
            this.contador5 += this.cinco
            console.log(ev)
        },

        naoNavegar(ev) { 
            // neste caso o ev é o evento (event) pq não tem nenhum outro evento personalizado decladado, se houvesse precisaria ser $event
            ev.preventDefault()
        }
    }
})