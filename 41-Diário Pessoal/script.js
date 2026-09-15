let entradas = [];

function adicionarEntrada() {
  const tituloInput = document.getElementById("titulo");
  const dataInput = document.getElementById("data");
  const conteudoInput = document.getElementById("conteudo");

  const titulo = tituloInput.value.trim();
  const data = dataInput.value;
  const conteudo = conteudoInput.value.trim();

  if (!titulo || !data || !conteudo) return;

  entradas.push({
    titulo,
    data,
    conteudo,
  });

  tituloInput.value = "";
  dataInput.value = "";
  conteudoInput.value = "";

  renderizarEntradas();
}

function removerEntrada(index) {
  entradas.splice(index, 1);

  renderizarEntradas();
}

function renderizarEntradas() {
  const container = document.getElementById("entradas");

  container.innerHTML = "";

  entradas.sort((a, b) => {
    return new Date(b.data) - new Date(a.data);
  });

  entradas.forEach((entrada, index) => {
    const article = document.createElement("article");
    const titulo = document.createElement("h3");
    const data = document.createElement("p");
    const conteudo = document.createElement("p");
    const removerButton = document.createElement("button");

    titulo.textContent = entrada.titulo;
    data.textContent = entrada.data;
    conteudo.textContent = entrada.conteudo;
    removerButton.textContent = "Remover";

    removerButton.addEventListener("click", () => {
      removerEntrada(index);
    });

    article.appendChild(titulo);
    article.appendChild(data);
    article.appendChild(conteudo);
    article.appendChild(removerButton);

    container.appendChild(article);
  });
}