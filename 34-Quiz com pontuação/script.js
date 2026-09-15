const perguntas = [
  {
    pergunta: "Quanto é 5 + 3?",
    opcoes: ["6", "7", "8", "9"],
    resposta: "8",
  },
  {
    pergunta: "Qual é a capital da França?",
    opcoes: ["Madrid", "Paris", "Roma", "Lisboa"],
    resposta: "Paris",
  },
  {
    pergunta: "Qual linguagem é utilizada para criar interatividade em páginas web?",
    opcoes: ["HTML", "CSS", "JavaScript", "SQL"],
    resposta: "JavaScript",
  },
];

let indice = 0;
let pontuacao = 0;

function renderizarPergunta() {
  const perguntaEl = document.getElementById("pergunta");
  const opcoesEl = document.getElementById("opcoes");
  const pontuacaoEl = document.getElementById("pontuacao");
  const resultadoEl = document.getElementById("resultado");
  const reiniciarEl = document.getElementById("reiniciar");

  opcoesEl.innerHTML = "";
  resultadoEl.textContent = "";

  if (indice >= perguntas.length) {
    perguntaEl.textContent = "Fim do quiz";
    resultadoEl.textContent = `Você acertou ${pontuacao} de ${perguntas.length}`;
    pontuacaoEl.textContent = `Pontuação: ${pontuacao}`;
    reiniciarEl.style.display = "block";
    return;
  }

  reiniciarEl.style.display = "none";

  const atual = perguntas[indice];

  perguntaEl.textContent = atual.pergunta;
  pontuacaoEl.textContent = `Pontuação: ${pontuacao}`;

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

function reiniciarQuiz() {
  indice = 0;
  pontuacao = 0;

  renderizarPergunta();
}

renderizarPergunta();