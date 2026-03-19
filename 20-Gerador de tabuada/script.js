function gerarTabuada() {
  const input = document.getElementById("numero");
  const numero = Number(input.value);
  const resultado = document.getElementById("resultado");

  if (!numero && numero !== 0) {
    resultado.textContent = "Digite um número válido!";
    return;
  }

  let tabuada = "";

  for (let i = 1; i <= 10; i++) {
    tabuada += numero + " x " + i + " = " + numero * i + "<br>";
  }

  resultado.innerHTML = tabuada;
}
