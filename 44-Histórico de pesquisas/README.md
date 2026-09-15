Histórico de pesquisas desenvolvido em JavaScript com manipulação de DOM. A aplicação permite registrar termos pesquisados, exibir o histórico e remover pesquisas individuais ou todo o histórico.

Os termos são armazenados em um array de strings. Cada nova pesquisa é adicionada no início do array utilizando `unshift()`, mantendo as pesquisas mais recentes no topo da lista.

A interface é atualizada após cada operação. O índice de cada item é utilizado para identificar a pesquisa que será removida, enquanto a função de limpeza substitui o histórico atual por um novo array vazio.

## MVP

- Entrada de termos de pesquisa
- Validação do campo de entrada
- Armazenamento do histórico em um array
- Adição de novas pesquisas no início do histórico
- Exibição dinâmica das pesquisas
- Remoção de pesquisas individuais
- Limpeza de todo o histórico
- Limpeza do campo após pesquisa
