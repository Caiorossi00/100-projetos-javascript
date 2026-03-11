let palavra = "javascript";
let letrasPalavra = palavra.split("");

let letrasCorretas = [];
let letrasErradas = [];

let maxTentativas = 6;
let tentativasRestantes = maxTentativas;

function validarEntrada(letra) {
  const mensagem = document.querySelector("#mensagem");

  if (!letra) {
    mensagem.textContent = "Digite uma letra.";
    return false;
  }

  if (letra.length !== 1) {
    mensagem.textContent = "Digite apenas uma letra.";
    return false;
  }

  if (!/^[a-zà-ú]$/i.test(letra)) {
    mensagem.textContent = "Digite apenas letras.";
    return false;
  }

  if (letrasCorretas.includes(letra) || letrasErradas.includes(letra)) {
    mensagem.textContent = "Você já tentou essa letra.";
    return false;
  }

  return true;
}

function verificarLetra(letra) {
  const mensagem = document.querySelector("#mensagem");

  if (letrasPalavra.includes(letra)) {
    letrasCorretas.push(letra);
    mensagem.textContent = "Letra correta!";
  } else {
    letrasErradas.push(letra);
    tentativasRestantes--;
    mensagem.textContent = "Letra errada!";
  }
}

function exibirPalavra() {
  let palavraExibida = letrasPalavra
    .map((letra) => (letrasCorretas.includes(letra) ? letra : "_"))
    .join(" ");

  document.querySelector("#palavra").textContent = palavraExibida;
}

function exibirLetrasErradas() {
  document.querySelector("#erradas").textContent = letrasErradas.join(" ");
}

function exibirTentativas() {
  document.querySelector("#tentativas").textContent = tentativasRestantes;
}

function verificarFimDeJogo() {
  const mensagem = document.querySelector("#mensagem");

  const venceu = letrasPalavra.every((letra) => letrasCorretas.includes(letra));

  if (venceu) {
    mensagem.textContent = "Você venceu!";
    encerrarJogo();
    return;
  }

  if (tentativasRestantes <= 0) {
    mensagem.textContent = `Você perdeu! A palavra era "${palavra}".`;
    encerrarJogo();
  }
}

function encerrarJogo() {
  document.querySelector("#btnChutar").disabled = true;
  document.querySelector("#inputLetra").disabled = true;
}

function jogar() {
  const input = document.querySelector("#inputLetra");
  const letra = input.value.toLowerCase().trim();

  if (!validarEntrada(letra)) {
    input.value = "";
    input.focus();
    return;
  }

  verificarLetra(letra);
  exibirPalavra();
  exibirLetrasErradas();
  exibirTentativas();
  verificarFimDeJogo();

  input.value = "";
  input.focus();
}

document.querySelector("#btnChutar").addEventListener("click", jogar);

exibirPalavra();
exibirTentativas();
