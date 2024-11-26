new Vue({

    el: '#desafio',

    data: {
        lifeJogador: 74,
        lifeMonstro: 24,
        jogando: false
    },

    computed: {
        temResultado(){
            this.jogando = false;

        }
    },
    methods: {

    },
    watch: {

    }
})