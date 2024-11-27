/* Função que gera um valor aleatorio - recebe um 'range' maximo e minimo */
export function valorAleatorio(min, max){

    /* Lógica que gera um valor aleatorio entre: menor valor e maior valor */
    const valor = Math.random() * (max - min) + min;

    /* Arredonda o valor para cima ou para baixo */
    return Math.round(valor);

}

/* Função de registro de acontecimento em uma lista (Logs) 
    - recebe a classe de estilização que aquele registro deve receber
    - a lista onde deve ser armazenada
    - texto exibido*/
export function registrarLog(classe, lista, texto){

    /* Puxa o registro para a lista - Adicionando o novo em cima e não em baixo da pilha */
    lista.unshift({

        texto, classe

    })

}

/* Função que aplica e registra dano, recebe:
    - contexto = em qual contexto essa função vai rodar, nesse caso 'this'
    - alvo = qual variavel vai sofrer alteração (lifeJogador ou lifeMonstro)
    - min e max = estabelece o 'range' do dano.
    - especial = recebe fazer falso ou true. 
    - atacante, vitima, classe e lista = propriedades passadas para a função de 'registro de log'
     */
export function dano(contexto, alvo, min, max, especial, atacante, vitima, classe, lista){

    /* Se o golpe especial, a variavel vai receber +5 */
    const plus = especial? 5 : 0;

    /* variavel dano recebe valor aleatorio. Range recebe +5 nos valores minimo e maximo */
    const dano = valorAleatorio(min + plus, max + plus)

    /* Alvo recebe o valor de dano. Escolhe o valor 'maior' entre a 'logica' e zero
    - Impede o 'life' ficar negativo */
    contexto[alvo] = Math.max(contexto[alvo] - dano, 0);

    /* Registrando 'dano' na lista e com o texto indicado */
    registrarLog(classe, contexto[lista], `${atacante} atingiu ${vitima} com ${dano}.`)
}

/* Função que aplica cura, recebe: 
    - contexto = em qual contexto essa função vai rodar, nesse caso 'this'
    - alvo = qual variavel vai sofrer alteração (lifeJogador ou lifeMonstro)
    - min e max = estabelece o 'range' da cura.
    - classe e lista = propriedades passadas para a função de 'registro de log'*/
export function curar(contexto, alvo, min, max, classe, lista){

    /*Variavel de cura, recebe valor aleatorio dentro do seu range */
    const cura = valorAleatorio(min, max);

    /* Alvo recebe o valor de cura. Escolhe o valor 'menor' entre a 'logica' e 100
    - Impede o 'life' ficar maior que 100 */
    contexto[alvo] = Math.min(contexto[alvo] + cura, 100);

     /* Registrando 'cura' na lista e com o texto indicado */
    registrarLog(classe, contexto[lista], `jogador foi curado em ${cura}.`)
}