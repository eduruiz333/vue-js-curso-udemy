const vm = new Vue ({
    el: '#app',

    data: {
        titulo: 'Ciclo de Vida',
    },

    beforeCreate() {
        console.log('Antes de criar')
    },
    created() {
        console.log('Criado');
    },
    beforeMount() {
        console.log('Antes de montar no DOM');
    },
    mounted() {
        console.log('DOM montada');
    },
    beforeUpdate() {
        console.log('Antes de atualizar');
    },
    updated() {
        console.log('Atualizado');
    },
    beforeDestroy() {
        console.log('Ante de destruir');
    },
    destroyed() {
        console.log('Depois de destruir');
    },
})