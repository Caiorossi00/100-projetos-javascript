const frases = [
  "Hoje é um ótimo dia para começar algo novo.",
  "Pequenos passos ainda são progresso.",
  "Você está mais perto do que imagina.",
  "Consistência vence motivação.",
  "Grandes coisas levam tempo.",
  "Erros fazem parte do processo.",
  "Continue, mesmo quando estiver difícil.",
  "Disciplina constrói resultados.",
  "O esforço de hoje é o sucesso de amanhã.",
  "Você é capaz de mais do que pensa.",
  "Tudo começa com uma decisão.",
  "Foque no processo, não apenas no resultado.",
  "A prática leva à melhoria constante.",
  "Não desista no meio do caminho.",
  "Cada dia é uma nova oportunidade.",
  "Seja melhor do que ontem.",
  "A persistência abre portas.",
  "Aprender é evoluir.",
  "Faça acontecer.",
  "O começo pode ser difícil, mas vale a pena.",
  "Você já superou coisas mais difíceis.",
  "A ação vence o medo.",
  "Menos perfeição, mais execução.",
  "Confie no seu progresso.",
  "Resultados vêm para quem continua.",
  "A jornada também importa.",
  "Comece antes de se sentir pronto.",
  "Tudo melhora com prática.",
  "Seu futuro depende do que você faz hoje.",
  "Não espere, construa.",
  "Foco, força e consistência.",
  "O importante é não parar.",
  "Transforme esforço em resultado.",
  "A mudança começa agora.",
  "Se desafie todos os dias.",
];

let fraseAleatoria = "";

function gerarFrase() {
  const randomIndex = Math.floor(Math.random() * frases.length);
  fraseAleatoria = frases[randomIndex];
}

function exibirFrase() {
  const resultado = document.querySelector("#resultado");
  resultado.textContent = fraseAleatoria;
}

function executar() {
  gerarFrase();
  exibirFrase();
}
