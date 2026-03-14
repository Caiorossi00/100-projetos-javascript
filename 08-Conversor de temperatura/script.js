function converterCelsiusParaFarenheit() {
  const celsius = Number(document.querySelector("#celsius").value);

  if (isNaN(celsius)) {
    alert("Digite um valor válido para Celsius.");
    return;
  }

  const valorConvertido = (celsius * 9) / 5 + 32;

  exibirResultado(valorConvertido, "F");
}

function converterFarenheitParaCelsius() {
  const farenheit = Number(document.querySelector("#farenheit").value);

  if (isNaN(farenheit)) {
    alert("Digite um valor válido para Farenheit.");
    return;
  }

  const valorConvertido = ((farenheit - 32) * 5) / 9;

  exibirResultado(valorConvertido, "C");
}

function exibirResultado(valorConvertido, escala) {
  const resultado = document.querySelector("#resultado");

  resultado.textContent = `Temperatura convertida: ${valorConvertido.toFixed(
    2
  )} °${escala}`;
}
