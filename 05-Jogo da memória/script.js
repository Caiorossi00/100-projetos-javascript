const cartas = [1, 2, 3, 4, 5];

let n1 = null;
let n2 = null;

let carta1 = null;
let carta2 = null;

let bloqueado = false;

let paresEncontrados = 0;

const tabuleiro = document.querySelector("#tabuleiro");

iniciarJogo();

function iniciarJogo() {
  tabuleiro.innerHTML = "";

  paresEncontrados = 0;

  const cartasEmbaralhadas = embaralharCartas();

  cartasEmbaralhadas.forEach((valor) => {
    const carta = document.createElement("div");

    carta.classList.add("carta");
    carta.textContent = valor;

    carta.onclick = function () {
      exibirCarta(carta, valor);
    };

    tabuleiro.appendChild(carta);
  });
}

function embaralharCartas() {
  return [...cartas, ...cartas].sort(() => Math.random() - 0.5);
}

function exibirCarta(cartaElement, valor) {
  if (bloqueado) return;

  if (cartaElement.classList.contains("frente")) return;

  cartaElement.classList.add("frente");

  if (n1 === null) {
    n1 = valor;
    carta1 = cartaElement;
  } else {
    n2 = valor;
    carta2 = cartaElement;

    bloqueado = true;

    compararEscolhas();
  }
}

function compararEscolhas() {
  if (n1 === n2) {
    paresEncontrados++;

    setTimeout(() => {
      alert("Par encontrado!");

      if (paresEncontrados === cartas.length) {
        setTimeout(() => {
          alert("Parabéns! Você completou o jogo!");
          reiniciarJogo();
        }, 100);
      }
    }, 300);

    resetTurno();
  } else {
    setTimeout(() => {
      carta1.classList.remove("frente");
      carta2.classList.remove("frente");

      resetTurno();
    }, 400);
  }
}

function resetTurno() {
  n1 = null;
  n2 = null;

  carta1 = null;
  carta2 = null;

  bloqueado = false;
}

function reiniciarJogo() {
  resetTurno();
  iniciarJogo();
}
