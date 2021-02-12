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