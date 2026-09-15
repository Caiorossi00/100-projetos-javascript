function simularInvestimento() {
  const inicial = Number(document.getElementById("inicial").value);
  const mensal = Number(document.getElementById("mensal").value);
  const juros = Number(document.getElementById("juros").value);
  const periodo = Number(document.getElementById("periodo").value);

  if (inicial < 0 || mensal < 0 || juros < 0 || periodo <= 0) return;

  const taxa = juros / 100;

  let montante;

  if (taxa === 0) {
    montante = inicial + mensal * periodo;
  } else {
    const montanteInicial = inicial * (1 + taxa) ** periodo;

    const montanteAportes =
      mensal * (((1 + taxa) ** periodo - 1) / taxa);

    montante = montanteInicial + montanteAportes;
  }

  const totalInvestido = inicial + mensal * periodo;
  const rendimento = montante - totalInvestido;

  mostrarResultado(montante, totalInvestido, rendimento);
}

function mostrarResultado(montante, totalInvestido, rendimento) {
  const resultado = document.getElementById("resultado");

  resultado.innerHTML = `
    <p>Total investido: R$ ${totalInvestido.toFixed(2)}</p>
    <p>Rendimento: R$ ${rendimento.toFixed(2)}</p>
    <p>Valor final: R$ ${montante.toFixed(2)}</p>
  `;
}