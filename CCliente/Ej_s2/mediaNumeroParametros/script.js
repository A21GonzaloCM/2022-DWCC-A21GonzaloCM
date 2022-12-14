let resultado = 0;
let suma = 0;

function media(...theArgs) {
  for (const arg of theArgs) {
    suma += arg;
    resultado = suma / theArgs.length;
  }
  return resultado;
}
console.log(media(10, 2, 3));
