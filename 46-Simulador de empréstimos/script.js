function simularEmprestimo() {
  const valor = Number(document.getElementById("valor").value);
  const juros = Number(document.getElementById("juros").value);
  const parcelas = Number(document.getElementById("parcelas").value);

  if (valor <= 0 || juros < 0 || parcelas <= 0) return;

  const taxa = juros / 100;

  const valorParcela =
    valor * (taxa * (1 + taxa) ** parcelas) /
    ((1 + taxa) ** parcelas - 1);

  const total = valorParcela * parcelas;

  mostrarResultado(valorParcela, total);
}

function mostrarResultado(valorParcela, total) {
  const resultado = document.getElementById("resultado");

  resultado.innerHTML = `
    <p>Valor da parcela: R$ ${valorParcela.toFixed(2)}</p>
    <p>Total pago: R$ ${total.toFixed(2)}</p>
  `;
}