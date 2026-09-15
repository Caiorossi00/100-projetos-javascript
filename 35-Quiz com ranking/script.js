const perguntas = [
  {
    pergunta: "Quanto é 10 + 5?",
    opcoes: ["12", "15", "18", "20"],
    resposta: "15",
  },
  {
    pergunta: "Qual é a capital do Brasil?",
    opcoes: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
    resposta: "Brasília",
  },
  {
    pergunta: "Qual linguagem é executada diretamente pelo navegador?",
    opcoes: ["Python", "JavaScript", "Java", "C++"],
    resposta: "JavaScript",
  },
];

let indice = 0;
let pontuacao = 0;
let nomeJogador = "";
let ranking = [
  { nome: "Caio", pontuacao: 3 },
  { nome: "Luis", pontuacao: 2 },
  { nome: "Clara", pontuacao: 1 },
];

function iniciarQuiz() {
  const nome = document.getElementById("nome").value.trim();

  if (!nome) return;

  nomeJogador = nome;
  indice = 0;
  pontuacao = 0;

  document.getElementById("inicio").style.display = "none";
  document.getElementById("quiz").style.display = "block";

  renderizarPergunta();
}

function renderizarPergunta() {
  const perguntaEl = document.getElementById("pergunta");
  const opcoesEl = document.getElementById("opcoes");
  const pontuacaoEl = document.getElementById("pontuacao");

  if (indice >= perguntas.length) {
    finalizarQuiz();
    return;
  }

  opcoesEl.innerHTML = "";

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

function finalizarQuiz() {
  ranking.push({
    nome: nomeJogador,
    pontuacao,
  });

  ranking.sort((a, b) => b.pontuacao - a.pontuacao);

  document.getElementById("quiz").style.display = "none";
  document.getElementById("resultado").style.display = "block";

  document.getElementById(
    "resultadoFinal"
  ).textContent = `${nomeJogador}, você acertou ${pontuacao} de ${perguntas.length}`;

  renderizarRanking();
}

function renderizarRanking() {
  const lista = document.getElementById("ranking");

  lista.innerHTML = "";

  ranking.forEach((jogador, index) => {
    const li = document.createElement("li");

    li.textContent = `${index + 1}º ${jogador.nome} - ${jogador.pontuacao} pts`;

    lista.appendChild(li);
  });
}

function reiniciarQuiz() {
  nomeJogador = "";
  indice = 0;
  pontuacao = 0;

  document.getElementById("nome").value = "";
  document.getElementById("resultado").style.display = "none";
  document.getElementById("inicio").style.display = "block";
}