let contatos = [];

function adicionarContato() {
  const nomeInput = document.getElementById("nome");
  const telefoneInput = document.getElementById("telefone");
  const emailInput = document.getElementById("email");

  const nome = nomeInput.value.trim();
  const telefone = telefoneInput.value.trim();
  const email = emailInput.value.trim();

  if (!nome || !telefone || !email) return;

  contatos.push({
    nome,
    telefone,
    email,
  });

  nomeInput.value = "";
  telefoneInput.value = "";
  emailInput.value = "";

  renderizarContatos();
}

function removerContato(index) {
  contatos.splice(index, 1);

  renderizarContatos();
}

function renderizarContatos() {
  const lista = document.getElementById("lista");

  lista.innerHTML = "";

  contatos.forEach((contato, index) => {
    const li = document.createElement("li");
    const removerButton = document.createElement("button");

    li.textContent = `${contato.nome} - ${contato.telefone} - ${contato.email}`;

    removerButton.textContent = "Remover";

    removerButton.addEventListener("click", () => {
      removerContato(index);
    });

    li.appendChild(removerButton);

    lista.appendChild(li);
  });
}