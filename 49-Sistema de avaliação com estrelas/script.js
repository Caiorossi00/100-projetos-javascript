let avaliacao = 0;

function avaliar(nota) {
  avaliacao = nota;

  document.getElementById(
    "resultado"
  ).textContent = `Avaliação: ${avaliacao} de 5`;

  renderizarEstrelas();
}

function renderizarEstrelas() {
  const estrelas = document.getElementById("estrelas");

  estrelas.innerHTML = "";

  for (let i = 1; i <= 5; i++) {
    const button = document.createElement("button");

    button.textContent = i <= avaliacao ? "★" : "☆";

    button.addEventListener("click", () => {
      avaliar(i);
    });

    estrelas.appendChild(button);
  }
}

renderizarEstrelas();