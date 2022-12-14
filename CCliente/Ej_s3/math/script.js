//1. Crea unha función á que se lle pase como parámetro o número de minutos e devolva un string indicando a súa equivalencia en horas e minutos.

function minToHorasMin(min) {
  var horas = Math.floor(min / 60);
  var minutos = min % 60;

  if (min > 60) {
    return horas + " h " + minutos + " min";
  } else {
    return min + " min";
  }
}

console.log(minToHorasMin(40));
console.log(minToHorasMin(130));

/* 2. Crea unha función que dado o radio dun círculo, devolva a súa área. E fai outra
función que reciba o radio e devolva o perímetro do círculo. Mostra por consola o
resultado das funcións usando dúas cifras decima */

function areaCirculo(radio) {
  const area = Math.PI * Math.pow(radio, 2);
  return "Area= " + area + " unidades cuadradas";
}

function perimetroCirculo(radio) {
  const perimetro = Math.PI * 2 * radio;
  return "Perimetro= " + perimetro + " unidades";
}

console.log(areaCirculo(2));
console.log(perimetroCirculo(2));
