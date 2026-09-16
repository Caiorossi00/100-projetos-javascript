const textoInput = document.getElementById("texto");

function atualizarEditor() {
  const texto = textoInput.value;

  document.getElementById("contador").textContent =
    `Caracteres: ${texto.length}`;

  document.getElementById("previa").textContent = texto;
}

function limparTexto() {
  textoInput.value = "";

  atualizarEditor();
}

textoInput.addEventListener("input", atualizarEditor);