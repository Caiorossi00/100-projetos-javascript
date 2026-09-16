Carrinho de compras desenvolvido em JavaScript com manipulação de DOM. A aplicação permite adicionar produtos informando nome, preço e quantidade, além de remover produtos e calcular o valor total do carrinho.

Os produtos são armazenados em um array de objetos contendo nome, preço e quantidade. Durante a renderização, o subtotal de cada produto é calculado multiplicando seu preço pela quantidade, enquanto o valor total do carrinho é obtido somando os subtotais.

O cálculo do total utiliza `reduce()`, reforçando o uso de métodos de array para realizar operações sobre uma coleção de dados.

## MVP

- Cadastro de produtos
- Entrada de nome, preço e quantidade
- Validação dos campos
- Armazenamento dos produtos em um array
- Exibição dinâmica dos produtos
- Cálculo do subtotal de cada produto
- Cálculo do total do carrinho
- Remoção de produtos
- Atualização do total após remoção
- Limpeza dos campos após cadastro
