Jogo da Forca interativo desenvolvido em JavaScript puro com manipulação de DOM. O jogador deve adivinhar a palavra secreta digitando letras individuais, enquanto o sistema valida as entradas, revela acertos e registra erros.

A cada tentativa, o jogo verifica se a letra informada pertence à palavra. Letras corretas são exibidas em suas respectivas posições, enquanto letras incorretas são listadas separadamente e reduzem o número de tentativas restantes. O jogo termina automaticamente quando o jogador descobre todas as letras ou quando o limite de tentativas é atingido.

A aplicação utiliza validações de entrada, estruturas condicionais, arrays, controle de estado e eventos de clique para gerenciar a lógica do jogo e atualizar dinamicamente os elementos da interface.

## MVP

- Sistema de adivinhação de palavra
- Validação de entrada (apenas uma letra por tentativa)
- Controle de tentativas máximas
- Exibição de letras corretas nas posições certas
- Listagem de letras incorretas
- Mensagem de vitória ao completar a palavra
- Mensagem de derrota ao esgotar tentativas
- Bloqueio da interface ao finalizar a partida
- Atualização dinâmica das informações na tela
