
// Essa forma de declaração utilizando o Vue.componente é a forma de declaração global
Vue.component('contador', {
    
    template: `
        <div>
            <span> {{ contador }} </span>
            <button @click="contador++" class="btn btn-primary">+</button>
            <button @click="contador--" class="btn btn-primary">-</button>
        </div>
    `,
    
    data () {
        return {
            contador: 0
        }
    }

})

new Vue ({
    el: '#app',

})