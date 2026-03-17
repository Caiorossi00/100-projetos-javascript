const taxas = {
  USD: 1,
  BRL: 5,
  EUR: 0.92,
};

function obterValorEntrada() {
  const valor = Number(document.getElementById("valor").value);
  if (!valor) {
    alert("Digite um valor válido");
    return null;
  }
  return valor;
}

function obterMoedas() {
  const origem = document.getElementById("origem").value;
  const destino = document.getElementById("destino").value;
  return { origem, destino };
}

function converter(valor, origem, destino) {
  const taxaOrigem = taxas[origem];
  const taxaDestino = taxas[destino];

  const valorEmUSD = valor / taxaOrigem;
  const resultado = valorEmUSD * taxaDestino;

  return resultado;
}

function exibirResultado(valor) {
  document.getElementById("resultado").textContent =
    "Resultado: " + valor.toFixed(2);
}

function executarConversao() {
  const valor = obterValorEntrada();
  if (valor === null) return;

  const { origem, destino } = obterMoedas();

  const resultado = converter(valor, origem, destino);

  exibirResultado(resultado);
}
