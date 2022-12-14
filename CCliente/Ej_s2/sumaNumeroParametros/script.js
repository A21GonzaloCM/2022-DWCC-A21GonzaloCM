let sumaTotal = 0;

function suma(...theArgs) {
  for (const arg of theArgs) {
    sumaTotal += arg;
  }
  return sumaTotal;
}
console.log(suma(1, 2, 3, 4, 1, 4));
