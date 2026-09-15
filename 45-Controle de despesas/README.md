Controle de despesas desenvolvido em JavaScript com manipulação de DOM. A aplicação permite cadastrar despesas informando descrição, categoria e valor, além de remover registros cadastrados.

As despesas são armazenadas em um array de objetos contendo as informações de cada registro. A cada alteração, a lista é renderizada novamente e o valor total das despesas é recalculado.

O total é obtido utilizando `reduce()`, percorrendo o array de despesas e acumulando os valores registrados.

## MVP

- Cadastro de despesas
- Entrada de descrição, categoria e valor
- Validação dos campos obrigatórios
- Validação do valor da despesa
- Armazenamento das despesas em um array
- Exibição dinâmica das despesas
- Cálculo do total das despesas
- Remoção de despesas
- Atualização do total após remoção
- Limpeza dos campos após cadastro
