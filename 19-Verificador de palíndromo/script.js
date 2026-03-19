function verificarPalavra() {
  const input = document.querySelector("#palavra");
  const palavra = input.value.toLowerCase();

  const palavraReversa = palavra.split("").reverse().join("");

  const resultado = document.querySelector("#resultado");

  if (palavra === palavraReversa) {
    resultado.textContent = "É palíndromo";
  } else {
    resultado.textContent = "Não é palíndromo";
  }
}
