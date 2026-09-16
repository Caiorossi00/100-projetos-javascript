let produtos = [];

function adicionarProduto() {
  const produtoInput = document.getElementById("produto");
  const precoInput = document.getElementById("preco");
  const quantidadeInput = document.getElementById("quantidade");

  const nome = produtoInput.value.trim();
  const preco = Number(precoInput.value);
  const quantidade = Number(quantidadeInput.value);

  if (!nome || preco <= 0 || quantidade <= 0) return;

  produtos.push({
    nome,
    preco,
    quantidade,
  });

  produtoInput.value = "";
  precoInput.value = "";
  quantidadeInput.value = "";

  renderizarCarrinho();
}

function removerProduto(index) {
  produtos.splice(index, 1);

  renderizarCarrinho();
}

function calcularTotal() {
  return produtos.reduce((total, produto) => {
    return total + produto.preco * produto.quantidade;
  }, 0);
}

function renderizarCarrinho() {
  const carrinho = document.getElementById("carrinho");
  const total = document.getElementById("total");

  carrinho.innerHTML = "";

  produtos.forEach((produto, index) => {
    const li = document.createElement("li");
    const removerButton = document.createElement("button");

    const subtotal = produto.preco * produto.quantidade;

    li.textContent = `${produto.nome} - ${produto.quantidade} x R$ ${produto.preco.toFixed(2)} = R$ ${subtotal.toFixed(2)}`;

    removerButton.textContent = "Remover";

    removerButton.addEventListener("click", () => {
      removerProduto(index);
    });

    li.appendChild(removerButton);
    carrinho.appendChild(li);
  });

  total.textContent = `Total: R$ ${calcularTotal().toFixed(2)}`;
}