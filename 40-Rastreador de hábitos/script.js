let habitos = [];

function adicionarHabito() {
  const habitoInput = document.getElementById("habito");
  const nome = habitoInput.value.trim();

  if (!nome) return;

  habitos.push({
    nome,
    concluido: false,
  });

  habitoInput.value = "";

  renderizarHabitos();
}

function alternarHabito(index) {
  habitos[index].concluido = !habitos[index].concluido;

  renderizarHabitos();
}

function removerHabito(index) {
  habitos.splice(index, 1);

  renderizarHabitos();
}

function renderizarHabitos() {
  const lista = document.getElementById("lista");

  lista.innerHTML = "";

  habitos.forEach((habito, index) => {
    const li = document.createElement("li");
    const nome = document.createElement("span");
    const concluirButton = document.createElement("button");
    const removerButton = document.createElement("button");

    nome.textContent = habito.nome;

    if (habito.concluido) {
      nome.style.textDecoration = "line-through";
    }

    concluirButton.textContent = habito.concluido
      ? "Desmarcar"
      : "Concluir";

    removerButton.textContent = "Remover";

    concluirButton.addEventListener("click", () => {
      alternarHabito(index);
    });

    removerButton.addEventListener("click", () => {
      removerHabito(index);
    });

    li.appendChild(nome);
    li.appendChild(concluirButton);
    li.appendChild(removerButton);

    lista.appendChild(li);
  });
}