let notas = [];

function adicionarNota() {
  const tituloInput = document.getElementById("titulo");
  const conteudoInput = document.getElementById("conteudo");

  const titulo = tituloInput.value.trim();
  const conteudo = conteudoInput.value.trim();

  if (!titulo || !conteudo) return;

  notas.push({
    titulo,
    conteudo,
  });

  tituloInput.value = "";
  conteudoInput.value = "";

  renderizarNotas();
}

function editarNota(index) {
  const novoConteudo = prompt("Editar nota:", notas[index].conteudo);

  if (novoConteudo === null) return;

  const conteudo = novoConteudo.trim();

  if (!conteudo) return;

  notas[index].conteudo = conteudo;

  renderizarNotas();
}

function removerNota(index) {
  notas.splice(index, 1);

  renderizarNotas();
}

function renderizarNotas() {
  const container = document.getElementById("notas");

  container.innerHTML = "";

  notas.forEach((nota, index) => {
    const article = document.createElement("article");
    const titulo = document.createElement("h3");
    const conteudo = document.createElement("p");
    const editarButton = document.createElement("button");
    const removerButton = document.createElement("button");

    titulo.textContent = nota.titulo;
    conteudo.textContent = nota.conteudo;
    editarButton.textContent = "Editar";
    removerButton.textContent = "Remover";

    editarButton.addEventListener("click", () => {
      editarNota(index);
    });

    removerButton.addEventListener("click", () => {
      removerNota(index);
    });

    article.appendChild(titulo);
    article.appendChild(conteudo);
    article.appendChild(editarButton);
    article.appendChild(removerButton);

    container.appendChild(article);
  });
}