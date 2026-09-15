let historico = [];

function realizarPesquisa() {
  const pesquisaInput = document.getElementById("pesquisa");
  const termo = pesquisaInput.value.trim();

  if (!termo) return;

  historico.unshift(termo);

  pesquisaInput.value = "";

  renderizarHistorico();
}

function removerPesquisa(index) {
  historico.splice(index, 1);

  renderizarHistorico();
}

function limparHistorico() {
  historico = [];

  renderizarHistorico();
}

function renderizarHistorico() {
  const lista = document.getElementById("historico");

  lista.innerHTML = "";

  historico.forEach((termo, index) => {
    const li = document.createElement("li");
    const removerButton = document.createElement("button");

    li.textContent = termo;
    removerButton.textContent = "Remover";

    removerButton.addEventListener("click", () => {
      removerPesquisa(index);
    });

    li.appendChild(removerButton);

    lista.appendChild(li);
  });
}