let itens = [];

function adicionarItem() {
  const itemInput = document.getElementById("item");
  const nome = itemInput.value.trim();

  if (!nome) return;

  itens.push({
    nome,
    favorito: false,
  });

  itemInput.value = "";

  renderizarItens();
}

function alternarFavorito(index) {
  itens[index].favorito = !itens[index].favorito;

  renderizarItens();
}

function removerItem(index) {
  itens.splice(index, 1);

  renderizarItens();
}

function renderizarItens() {
  const lista = document.getElementById("lista");
  const favoritos = document.getElementById("favoritos");

  lista.innerHTML = "";
  favoritos.innerHTML = "";

  itens.forEach((item, index) => {
    const li = document.createElement("li");
    const favoritoButton = document.createElement("button");
    const removerButton = document.createElement("button");

    li.textContent = item.nome;

    favoritoButton.textContent = item.favorito
      ? "Remover dos favoritos"
      : "Favoritar";

    removerButton.textContent = "Remover";

    favoritoButton.addEventListener("click", () => {
      alternarFavorito(index);
    });

    removerButton.addEventListener("click", () => {
      removerItem(index);
    });

    li.appendChild(favoritoButton);
    li.appendChild(removerButton);

    lista.appendChild(li);

    if (item.favorito) {
      const favoritoLi = document.createElement("li");

      favoritoLi.textContent = item.nome;

      favoritos.appendChild(favoritoLi);
    }
  });
}