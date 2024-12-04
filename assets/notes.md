# Matador de Monstros

Primeiro desafio do curso de VUE.JS da Cod3r.

## Componentes

### Jogadores
- Jogador + Barra de Vida
    - Tem dinamicas de Ataque Especial e Cura
- Monstro + Barra de Vida
    - Tem um poder de ataque maior que o do Jogador

OBS: A Barra de Vida muda a coloração durante o seu decrescimento
- De 100 até 75% fica verde
- De 74 até 25% fica amarelo
- Abaixo de 25% fica vermelho

### Caixa de Interação do Usuário
- Caixa com Botões de Ações do Jogados
- Mensagem de Final (Venceu ou Perdeu) + Iniciar Novo Jogo

### Log de Ações do Jogo
- Após cada Ação do Usuário o Mostro faz um ataque
- Ataques, Ataques Especiais e Curas
    - Aparecem no Log
    - Do jogador em Azul e do Monstro em Vermelho

## Botões - Logica
1. Botão de Iniciar o Jogo
    - Abrir outro grupo de botões

2. Desistir
    - Volta para o 'Iniciar o Jogo'

3. Ataque
    - Tanto o jogador quanto o monstro vão atacar

4. Curar
    - Atribui um valor a mais para a vida do jogador

5. Desistir
    - Retonar para o Botão Iniciar