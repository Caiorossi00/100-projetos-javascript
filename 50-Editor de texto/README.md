Editor de texto simples desenvolvido em JavaScript com manipulação de DOM. A aplicação permite digitar um texto, visualizar uma prévia do conteúdo e acompanhar a quantidade de caracteres digitados.

O conteúdo é obtido diretamente do elemento `textarea` e atualizado sempre que ocorre uma alteração utilizando o evento `input`. A quantidade de caracteres é calculada através da propriedade `length`.

A prévia utiliza `textContent` para apresentar o mesmo conteúdo digitado pelo usuário, enquanto a função de limpeza remove o texto e atualiza as informações exibidas na interface.

## MVP

- Campo para edição de texto
- Detecção de alterações no conteúdo
- Contagem de caracteres
- Exibição da prévia do texto
- Limpeza do conteúdo
- Atualização dinâmica da interface
