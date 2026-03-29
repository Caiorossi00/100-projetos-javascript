const botao = document.querySelector(".botao");
const container = document.querySelector("#container");

botao.addEventListener("click", () => {
  const notificacao = document.createElement("div");

  notificacao.textContent = "Você clicou no botão!";

  container.appendChild(notificacao);

  setTimeout(() => {
    notificacao.remove();
  }, 3000);
});
