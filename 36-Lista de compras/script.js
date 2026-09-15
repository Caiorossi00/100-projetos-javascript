let produtos = [];

function adicionarProduto() {
  const produtoInput = document.getElementById("produto");
  const nome = produtoInput.value.trim();

  if (!nome) return;

  produtos.push({
    nome,
    comprado: false,
  });

  produtoInput.value = "";

  renderizarLista();
}

function alternarCompra(index) {
  produtos[index].comprado = !produtos[index].comprado;

  renderizarLista();
}

function removerProduto(index) {
  produtos.splice(index, 1);

  renderizarLista();
}

function renderizarLista() {
  const lista = document.getElementById("lista");

  lista.innerHTML = "";

  produtos.forEach((produto, index) => {
    const li = document.createElement("li");
    const texto = document.createElement("span");
    const comprarButton = document.createElement("button");
    const removerButton = document.createElement("button");

    texto.textContent = produto.nome;

    if (produto.comprado) {
      texto.style.textDecoration = "line-through";
    }

    comprarButton.textContent = produto.comprado ? "Desmarcar" : "Comprar";
    removerButton.textContent = "Remover";

    comprarButton.addEventListener("click", () => {
      alternarCompra(index);
    });

    removerButton.addEventListener("click", () => {
      removerProduto(index);
    });

    li.appendChild(texto);
    li.appendChild(comprarButton);
    li.appendChild(removerButton);

    lista.appendChild(li);
  });
}