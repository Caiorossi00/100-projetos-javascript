function calcularIMC() {
  const peso = Number(document.querySelector("#peso").value);
  const altura = Number(document.querySelector("#altura").value);

  if (!peso || !altura) {
    alert("Preencha peso e altura corretamente.");
    return;
  }

  const imc = peso / (altura * altura);

  let classificacao = "";

  if (imc < 18.5) {
    classificacao = "Magreza";
  } else if (imc < 25) {
    classificacao = "Normal";
  } else if (imc < 30) {
    classificacao = "Sobrepeso";
  } else {
    classificacao = "Obesidade";
  }

  const resultado = document.querySelector("#resultado");

  resultado.textContent = `Seu IMC é ${imc.toFixed(2)} — ${classificacao}`;
}
