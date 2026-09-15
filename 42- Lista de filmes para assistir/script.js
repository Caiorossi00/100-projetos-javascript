let filmes = [];

function adicionarFilme() {
  const filmeInput = document.getElementById("filme");
  const nome = filmeInput.value.trim();

  if (!nome) return;

  filmes.push({
    nome,
    assistido: false,
  });

  filmeInput.value = "";

  renderizarFilmes();
}

function alternarStatus(index) {
  filmes[index].assistido = !filmes[index].assistido;

  renderizarFilmes();
}

function removerFilme(index) {
  filmes.splice(index, 1);

  renderizarFilmes();
}

function renderizarFilmes() {
  const lista = document.getElementById("lista");

  lista.innerHTML = "";

  filmes.forEach((filme, index) => {
    const li = document.createElement("li");
    const nome = document.createElement("span");
    const statusButton = document.createElement("button");
    const removerButton = document.createElement("button");

    nome.textContent = filme.nome;

    if (filme.assistido) {
      nome.style.textDecoration = "line-through";
    }

    statusButton.textContent = filme.assistido
      ? "Não assistido"
      : "Assistido";

    removerButton.textContent = "Remover";

    statusButton.addEventListener("click", () => {
      alternarStatus(index);
    });

    removerButton.addEventListener("click", () => {
      removerFilme(index);
    });

    li.appendChild(nome);
    li.appendChild(statusButton);
    li.appendChild(removerButton);

    lista.appendChild(li);
  });
}