Formulário multi-etapas desenvolvido em JavaScript com controle de estado e manipulação de DOM. A aplicação divide o preenchimento em etapas sequenciais, melhorando a experiência do usuário ao coletar dados de forma progressiva.

O sistema mantém um estado central com o passo atual e um objeto que armazena os dados do formulário. A navegação entre etapas é controlada por funções de avanço e retorno, com validação básica em cada etapa antes de permitir a progressão.

A interface é atualizada dinamicamente exibindo apenas o passo ativo e indicando o progresso ao usuário. Ao final, os dados coletados são consolidados e exibidos.

## MVP

- Divisão do formulário em múltiplas etapas
- Controle de passo atual
- Validação básica por etapa
- Navegação entre etapas (próximo e voltar)
- Indicador de progresso
- Armazenamento incremental dos dados
- Exibição final dos dados preenchidos
