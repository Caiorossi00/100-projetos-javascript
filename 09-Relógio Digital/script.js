let hora = 0;
let minutos = 0;
let segundos = 0;

const relogio = document.querySelector("#relogio");

setInterval(() => {
  segundos++;

  if (segundos === 60) {
    segundos = 0;
    minutos++;
  }

  if (minutos === 60) {
    minutos = 0;
    hora++;
  }

  const horaFormatada = String(hora).padStart(2, "0");
  const minutosFormatados = String(minutos).padStart(2, "0");
  const segundosFormatados = String(segundos).padStart(2, "0");

  relogio.textContent = `${horaFormatada}:${minutosFormatados}:${segundosFormatados}`;
}, 1000);
