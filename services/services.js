export function valorAleatorio(min, max){

    const valor = Math.random() * (max - min) + min;

    return Math.round(valor);

}

export function registrarLog(classe, lista, texto){

    lista.unshift({

        texto, classe

    })

}

export function dano(contexto, alvo, min, max, especial, atacante, vitima, classe, lista){
    const plus = especial? 5 : 0;

    const dano = valorAleatorio(min + plus, max + plus)

    contexto[alvo] = Math.max(contexto[alvo]  - dano, 0);

    registrarLog(classe, contexto[lista], `${atacante} atingiu ${vitima} com ${dano}.`)
}

export function curar(contexto, alvo, min, max, classe, lista){

    const cura = valorAleatorio(min, max);

    contexto[alvo] = Math.min(contexto[alvo] + cura, 100);

    registrarLog(classe, contexto[lista], `jogador foi curado em ${cura}.`)
}