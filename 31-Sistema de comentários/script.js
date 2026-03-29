let comentarios = [];

function criarComentario() {
  const input = document.querySelector("#comentar");
  const comentario = input.value;

  if (!comentario) return;

  enviarComentario(comentario);
  renderizarComentarios();

  input.value = "";
}

function enviarComentario(comentario) {
  comentarios.push(comentario);
}

function renderizarComentarios() {
  const container = document.querySelector("#lista");

  container.innerHTML = "";

  comentarios.forEach((comentario) => {
    const p = document.createElement("p");
    p.textContent = comentario;

    container.appendChild(p);
  });
}
