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
        especial: 0, /* Valor será acrescido em 0.25 a cada golpe 'comum' */
        heal: 2, /* A cada 2 ataques, ganha uma cura */
        logs: [], /* Armazenamento de Logs de Batalha */
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
            this.especial = 0;
            this.heal = 2;
            this.logs = [];
        },

        /* Função de ataque */
        atacar(especial){

            /* Logica de recebimento de dano do personagem Monstro */
            /* Pode ou não receber dano 'especial' */
            dano(this, 'lifeMonstro', 0, 10, especial, 'jogador', 'monstro', 'player', 'logs')

            /* Condicional:   */
            if(especial){
                /* Se o ataque for especial, retirar 1 ponto de especial. */
                this.especial -= 1;
                
            } else {
                /* Se for comum, adicionar porcentagem de 'especial' */
                /* Garante que o maior valor de 'especial' seja 3*/
                this.especial = Math.min(this.especial + 0.25, 3)
            }
            /* Garante que o maior valor de 'heal' seja 3*/
            this.heal = Math.min(this.heal + 0.5, 3)

            /* Condicional: Se o life do Monstro for maior que zero, pode atacar. */
            if(this.lifeMonstro > 0){
                /* Logica de recebimento de dano do personagem Monstro  */
                dano(this, 'lifeJogador', 0, 12, false, 'monstro', 'jogador', 'monster', 'logs')
            } else { /* Se o life do Monstro for menor que zero, ele não ataca */
                return
            }
            
        },

        /* Função de curar em Batalha */
        curarEmBatalha(){

            /* Logica de recebimento de dano do personagem Monstro  */
            dano(this, 'lifeJogador', 7, 12, false, 'monstro', 'jogador', 'monster', 'logs')

            /* Logica de recebimento de cura do personagem Jogador  */
            curar(this, 'lifeJogador', 8, 13, 'player', 'logs')

            /* Ao usar a 'cura em batalha': diminui em um o 'heal' */
            this.heal -= 1;

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