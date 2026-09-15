let despesas = [];

function adicionarDespesa() {
  const descricaoInput = document.getElementById("descricao");
  const categoriaInput = document.getElementById("categoria");
  const valorInput = document.getElementById("valor");

  const descricao = descricaoInput.value.trim();
  const categoria = categoriaInput.value.trim();
  const valor = Number(valorInput.value);

  if (!descricao || !categoria || !valor || valor < 0) return;

  despesas.push({
    descricao,
    categoria,
    valor,
  });

  descricaoInput.value = "";
  categoriaInput.value = "";
  valorInput.value = "";

  renderizarDespesas();
}

function removerDespesa(index) {
  despesas.splice(index, 1);

  renderizarDespesas();
}

function calcularTotal() {
  return despesas.reduce((total, despesa) => {
    return total + despesa.valor;
  }, 0);
}

function renderizarDespesas() {
  const lista = document.getElementById("lista");
  const total = document.getElementById("total");

  lista.innerHTML = "";

  despesas.forEach((despesa, index) => {
    const li = document.createElement("li");
    const removerButton = document.createElement("button");

    li.textContent = `${despesa.descricao} - ${despesa.categoria} - R$ ${despesa.valor.toFixed(2)}`;

    removerButton.textContent = "Remover";

    removerButton.addEventListener("click", () => {
      removerDespesa(index);
    });

    li.appendChild(removerButton);

    lista.appendChild(li);
  });

  total.textContent = `Total: R$ ${calcularTotal().toFixed(2)}`;
}