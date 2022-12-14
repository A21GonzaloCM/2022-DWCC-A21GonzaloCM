let numero1 = Number(window.prompt("Introduce o 1º número", ""));
let numero2 = Number(window.prompt("Introduce o 2º número", ""));
let numero3 = Number(window.prompt("Introduce o 3º número", ""));

if ((numero1 == numero2) == numero3) {
  window.alert("Os 3 números son iguais.");
} else if (numero1 > numero2 && numero1 > numero3) {
  window.alert(`${numero1} é maior que ${numero2} e ${numero3}`);
} else if (numero2 > numero1 && numero2 > numero3) {
  window.alert(`${numero2} é maior que ${numero1} e ${numero3}`);
} else if (numero3 > numero1 && numero3 > numero2) {
  window.alert(`${numero3} é maior que ${numero1} e ${numero2}`);
}
