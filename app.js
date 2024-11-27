/* Importando funções: Estabelecer dano e cura, da camada de serviços */
import { curar, dano } from './services/services.js';

/* Instancia Vue, Responsável pela interação com o template html */
new Vue({
    /* Qual elemento deve ser monitorado */
    el: '#desafio',

    /* Dados / Variáveis */
    data: {
        lifeJogador: 100,
        lifeMonstro: 100,
        jogando: false,
        logs: []
    },

    /* Métodos Computados - São executados, apenas, se as dependencias mudarem */
    computed: {
        /* Retorna valor 'true' se uma das condições forem alcançadas */
        temResultado(){
            return this.lifeJogador == 0 || this.lifeMonstro == 0
        }
    },

    /* Métodos - Executam lógica ou ação */
    methods: {
        /* Reseta valores dos dados / variáveis. Inicia o Jogo */
        iniciarPartida(){
            this.jogando = true;
            this.lifeJogador = 100;
            this.lifeMonstro = 100;
            this.logs = [];
        },

        /* Função de ataque */
        atacar(especial){

            /* Logica de recebimento de dano do personagem Monstro */
            /* Pode ou não receber dano 'especial' */
            dano(this, 'lifeMonstro', 5, 10, especial, 'jogador', 'monstro', 'player', 'logs')

            /* Condicional: Se o life do Monstro for maior que zero, pode atacar. */
            if(this.lifeMonstro > 0){
                /* Logica de recebimento de dano do personagem Monstro  */
                dano(this, 'lifeJogador', 7, 12, false, 'monstro', 'jogador', 'monster', 'logs')
            }
            

        },

        /* Função de curar em Batalha */
        curarEmBatalha(){

            /* Logica de recebimento de dano do personagem Monstro  */
            dano(this, 'lifeJogador', 7, 12, false, 'monstro', 'jogador', 'monster', 'logs')

            /* Logica de recebimento de cura do personagem Jogador  */
            curar(this, 'lifeJogador', 8, 13, 'player', 'logs')

        },
        
    },

    /* Metodo Watch - Observa mudanças em propriedades ou métodos. Usado para realizar ações assincronas ou reações a mudanças de dados. Não retorna um valor */
    watch: {

        /* Se o Método Computado receber o valor, a propriedade 'jogando' recebe o valor 'falso'.
        
        A lógica refere a: Se tem um resultado, então não estão mais jogando*/
        temResultado(valor){

            if(valor) this.jogando = false;

        }
    }
})