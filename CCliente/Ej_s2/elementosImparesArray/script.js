let arrayEntrada = [10, 2, 3, 5, 7, 8, 23, 50];
let arraySaida;

const arrayImpares = function (arrayEntrada) {
  arraySaida = [];
  for (let i = 0; i < arrayEntrada.length; i++) {
    console.log(i);
    if (Number(arrayEntrada[i]) % 2 != 0) {
      arraySaida.push(arrayEntrada[i]);
    }
  }
  return arraySaida;
};

arrayImpares(arrayEntrada);

console.log(arraySaida);
