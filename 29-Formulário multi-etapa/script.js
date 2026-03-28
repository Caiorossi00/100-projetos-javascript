let stepAtual = 0;

const formData = {
  nome: "",
  email: "",
  senha: "",
};

function atualizarSteps() {
  document.getElementById("step-0").style.display =
    stepAtual === 0 ? "block" : "none";
  document.getElementById("step-1").style.display =
    stepAtual === 1 ? "block" : "none";
  document.getElementById("step-2").style.display =
    stepAtual === 2 ? "block" : "none";

  document.getElementById("progresso").textContent = `Passo ${
    stepAtual + 1
  } de 3`;
}

function proximo() {
  if (stepAtual === 0) {
    const nome = document.getElementById("nome").value;
    if (!nome) return;
    formData.nome = nome;
  }

  if (stepAtual === 1) {
    const email = document.getElementById("email").value;
    if (!email) return;
    formData.email = email;
  }

  stepAtual++;
  atualizarSteps();
}

function voltar() {
  stepAtual--;
  atualizarSteps();
}

function enviar() {
  const senha = document.getElementById("senha").value;
  if (!senha) return;

  formData.senha = senha;

  document.getElementById(
    "resultado"
  ).textContent = `Enviado: ${formData.nome}, ${formData.email}, ${formData.senha}`;
}

atualizarSteps();
