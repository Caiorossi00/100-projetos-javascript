let eventos = [];

function adicionarEvento() {
  const nomeInput = document.getElementById("nome");
  const dataInput = document.getElementById("data");
  const horaInput = document.getElementById("hora");

  const nome = nomeInput.value.trim();
  const data = dataInput.value;
  const hora = horaInput.value;

  if (!nome || !data || !hora) return;

  eventos.push({
    nome,
    data,
    hora,
  });

  nomeInput.value = "";
  dataInput.value = "";
  horaInput.value = "";

  renderizarEventos();
}

function removerEvento(index) {
  eventos.splice(index, 1);

  renderizarEventos();
}

function renderizarEventos() {
  const lista = document.getElementById("lista");

  lista.innerHTML = "";

  eventos.sort((a, b) => {
    const eventoA = new Date(`${a.data}T${a.hora}`);
    const eventoB = new Date(`${b.data}T${b.hora}`);

    return eventoA - eventoB;
  });

  eventos.forEach((evento, index) => {
    const li = document.createElement("li");
    const removerButton = document.createElement("button");

    li.textContent = `${evento.nome} - ${evento.data} às ${evento.hora}`;

    removerButton.textContent = "Remover";

    removerButton.addEventListener("click", () => {
      removerEvento(index);
    });

    li.appendChild(removerButton);
    lista.appendChild(li);
  });
}