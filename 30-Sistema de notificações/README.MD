Sistema de notificação temporária desenvolvido em JavaScript com manipulação de DOM. A aplicação exibe uma mensagem na tela ao clicar em um botão e a remove automaticamente após um intervalo de tempo.

Ao acionar o botão, um novo elemento é criado dinamicamente e inserido no container da interface. Essa notificação permanece visível por alguns segundos e é removida utilizando um temporizador.

O fluxo é simples e orientado a eventos, com foco na criação e remoção dinâmica de elementos na interface.

## MVP

- Botão que dispara a notificação
- Criação dinâmica de elemento HTML
- Exibição da mensagem na interface
- Remoção automática após tempo definido
- Uso de `setTimeout` para controle de tempo
