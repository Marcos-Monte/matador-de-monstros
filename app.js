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

        valorAleatorio(min, max){
            const valor = Math.random() * (max - min) + min;
            return Math.round(valor);
        },

        dano(alvo, min, max, especial, atacante, vitima, classe){
            const plus = especial? 5 : 0;

            const dano = this.valorAleatorio(min + plus, max + plus);

            this[alvo] = Math.max(this[alvo] - dano, 0);

            this.registrarLog(
                `${atacante} atingiu ${vitima} com ${dano}.`, classe
            )
        },

        atacar(especial){

            this.dano('lifeMonstro', 5, 10, especial, 'jogador', 'monstro', 'player')

            if(this.lifeMonstro > 0){
                this.dano('lifeJogador', 7, 12, false, 'monstro', 'jogador', 'monster' );
            }
        },

        curar(min, max, classe){

            const cura = this.valorAleatorio(min, max);

            this.lifeJogador = Math.min(this.lifeJogador  + cura, 100);

            this.registrarLog(
                `jogador foi curado em ${cura}.`, classe
            )
        },

        curarEmBatalha(){

            this.curar(8, 13, 'player');

            this.dano('lifeJogador', 7, 12, false, 'Monstro', 'jogador', 'monster' );

        },

        registrarLog(texto, classe){

            this.logs.unshift({

                texto, classe

            })

        }
        
    },
    watch: {
        temResultado(valor){

            if(valor) this.jogando = false;

        }
    }
})