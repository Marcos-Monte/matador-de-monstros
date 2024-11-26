new Vue({

    el: '#desafio',

    data: {
        lifeJogador: 0,
        lifeMonstro: 100,
        jogando: false
    },

    computed: {
        temResultado(){
            return this.lifeJogador == 0 || this.lifeMonstro == 0
        }
    },
    methods: {
        iniciarPartida(){
            this.lifeJogador = 100;
            this.lifeMonstro = 100;
            this.jogando = true
        },

        valorAleatorio(){
            
        }
    },
    watch: {

    }
})