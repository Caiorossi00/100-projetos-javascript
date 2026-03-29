Sistema simples de comentários desenvolvido em JavaScript com manipulação de DOM e gerenciamento de estado em memória. A aplicação permite adicionar e listar comentários dinamicamente na interface.

Os comentários são armazenados em um array local e renderizados sempre que um novo item é adicionado. Ao submeter um comentário, o valor é validado, persistido em memória e a lista é re-renderizada, garantindo sincronização entre estado e interface.

A renderização é feita de forma imperativa, limpando o container e recriando os elementos a partir do estado atual.

## MVP

- Campo para inserir comentários
- Validação de entrada vazia
- Armazenamento em array local
- Renderização dinâmica da lista
- Atualização da interface a cada novo comentário
- Limpeza do input após envio
