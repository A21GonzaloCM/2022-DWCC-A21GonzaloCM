let numero = Number(window.prompt("Introduce un número: "));
let factorial = 1;
for (let i = 1; i <= numero; i++) {
  factorial = factorial * i;
}
document.write("El factorial de " + numero + " es " + factorial);
