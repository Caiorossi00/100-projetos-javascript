const perguntas = [
  {
    pergunta: "Quanto é 2 + 2?",
    opcoes: ["3", "4", "5"],
    resposta: "4",
  },
  {
    pergunta: "Capital do Brasil?",
    opcoes: ["Rio de Janeiro", "Brasília", "São Paulo"],
    resposta: "Brasília",
  },
  {
    pergunta: "Qual linguagem roda no navegador?",
    opcoes: ["Python", "Java", "JavaScript"],
    resposta: "JavaScript",
  },
];

let indice = 0;
let pontuacao = 0;

function renderizarPergunta() {
  const perguntaEl = document.getElementById("pergunta");
  const opcoesEl = document.getElementById("opcoes");

  opcoesEl.innerHTML = "";

  if (indice >= perguntas.length) {
    mostrarResultado();
    return;
  }

  const atual = perguntas[indice];

  perguntaEl.textContent = atual.pergunta;

  atual.opcoes.forEach((opcao) => {
    const btn = document.createElement("button");
    btn.textContent = opcao;

    btn.addEventListener("click", () => {
      verificarResposta(opcao);
    });

    opcoesEl.appendChild(btn);
  });
}

function verificarResposta(respostaEscolhida) {
  const correta = perguntas[indice].resposta;

  if (respostaEscolhida === correta) {
    pontuacao++;
  }

  indice++;
  renderizarPergunta();
}

function mostrarResultado() {
  const perguntaEl = document.getElementById("pergunta");
  const opcoesEl = document.getElementById("opcoes");
  const resultadoEl = document.getElementById("resultado");

  perguntaEl.textContent = "Fim do quiz";
  opcoesEl.innerHTML = "";
  resultadoEl.textContent = `Você acertou ${pontuacao} de ${perguntas.length}`;
}

renderizarPergunta();
