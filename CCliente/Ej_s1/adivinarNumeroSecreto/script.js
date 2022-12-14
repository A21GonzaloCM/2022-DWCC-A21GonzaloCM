"use strict";
let numAleatorio = Math.floor(Math.random() * 100);
console.log(numAleatorio);
let numeroIntroducido = window.prompt("Introduce un número entre 0 e 100");
console.log(typeof numeroIntroducido);
console.log(
  "Numero aleatorio = " +
    numAleatorio +
    ". Numero introducido = " +
    numeroIntroducido
);
do {
  if (numAleatorio < numeroIntroducido) {
    console.log("O numero introducido e maior");
    numeroIntroducido = window.prompt("O numero introducido é maior");
  } else if (numAleatorio > numeroIntroducido) {
    console.log("O numero introducido e menor");
    numeroIntroducido = window.prompt("O numero introducido é menor");
  }
  console.log(
    "Numero aleatorio = " +
      numAleatorio +
      ". Numero introducido = " +
      numeroIntroducido
  );
} while (numAleatorio != numeroIntroducido);
console.log("numero adiviñado");
let numAdiviñado = document.write("Adiviñaches o número: " + numeroIntroducido);
