import { curar, dano } from './services/services.js';

new Vue({

    el: '#desafio',

    data: {
        lifeJogador: 100,
        lifeMonstro: 100,
        jogando: false,
        logs: []
    },

    computed: {
        temResultado(){
            return this.lifeJogador == 0 || this.lifeMonstro == 0
        }
    },

    methods: {
        iniciarPartida(){
            this.jogando = true;
            this.lifeJogador = 100;
            this.lifeMonstro = 100;
            this.logs = [];
        },

        atacar(especial){

            dano(this, 'lifeMonstro', 5, 10, especial, 'jogador', 'monstro', 'player', 'logs')

            if(this.lifeMonstro > 0){
                dano(this, 'lifeJogador', 7, 12, false, 'monstro', 'jogador', 'monster', 'logs')
            }
            

        },

        curarEmBatalha(){

            dano(this, 'lifeJogador', 7, 12, false, 'monstro', 'jogador', 'monster', 'logs')

            curar(this, 'lifeJogador', 8, 13, 'player', 'logs')

        },
        
    },
    
    watch: {

        temResultado(valor){

            if(valor) this.jogando = false;

        }
    }
})