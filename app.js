new Vue({
    el: '#desafio',
    data :{
        lifeJogador: 100,
        lifeMonstro: 100,
        golpeEspecial: 5,
        iniciado: false,
        log: []
    },
    methods: {
        lifeColor(life){
            if(life >= 75){
                return 'saudavel';
            } else if (life < 75 && life >= 25){
                return 'ferido';
            } else {
                return 'perigo';
            }
        },
        
        curar(cura){
            this.lifeJogador = Number(Math.min(this.lifeJogador += cura, 100))
            
        },

        ataqueMonstro(dano){
            this.lifeJogador = Number(Math.max(this.lifeJogador - dano, 0)).toFixed(2)
        },

        ataqueJogador(dano){
            this.lifeMonstro = Number(Math.max(this.lifeMonstro - dano, 0)).toFixed(2)
        },
        
        listarAtaques(jogador, monstro){

            // Adiciona o dano do jogador ao log
            this.log.push(`Dano Jogador: ${jogador}`);
            // Adiciona o dano do monstro ao log
            this.log.push(`Dano Monstro: ${monstro}`);

            /* console.log(this.log) */
        },

        listarCura(cura, monstro){

            // Adiciona o dano do jogador ao log
            this.log.push(`Curando Jogador: ${cura}`);
            // Adiciona o dano do monstro ao log
            this.log.push(`Dano Monstro: ${monstro}`);

            /* console.log(this.log) */
        },

        listarEspecial(especial, monstro){

            // Adiciona o dano do jogador ao log
            this.log.push(`Especial Jogador: ${especial}`);
            // Adiciona o dano do monstro ao log
            this.log.push(`Dano Monstro: ${monstro}`);

            this.golpeEspecial -= 1;

            /* console.log(this.log) */
        },

        acao(acao){

            let danoJogador = 0;
            let danoMonstro = 0;
            let cura = 0;
            let especial = 0;

            if(acao === 'atacar'){
               danoMonstro = Number((Math.random() * 5)).toFixed(0) * 1.2;
               danoJogador = Number((Math.random() * 5)).toFixed(0);
    
                this.ataqueJogador(danoJogador)
                this.ataqueMonstro(danoMonstro);
                
                this.listarAtaques(danoJogador, danoMonstro)

            } else if (acao === 'curar'){
                cura = Number((Math.random() * 5)).toFixed(0);
                danoMonstro = Number((Math.random() * 5)).toFixed(0) * 1.2;
    
                this.curar(cura)
                /* this.ataqueMonstro(danoMonstro); */
    
                
                this.listarCura(cura, danoMonstro)
            } else if(acao === 'especial'){
                danoMonstro = Number((Math.random() * 5)).toFixed(0) * 1.2;
                especial = Number((Math.random() * 5)).toFixed(0) * 2;

                this.ataqueJogador(especial)
                this.ataqueMonstro(danoMonstro);
                
                this.listarEspecial(especial, danoMonstro)
            }
            
            // Log no console para debug
            console.log(`Jogador: Dano ${danoJogador}, Cura ${cura}, Especial ${especial} | Monstro: Dano ${danoMonstro}`);
        },

    }
})