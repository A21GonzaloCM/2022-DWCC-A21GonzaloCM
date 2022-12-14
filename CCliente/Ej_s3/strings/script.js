"use strict";
/* 1. Crea unha función á que se lle pase unha cadea e devolva a cadea en sentido
inverso. */

function reverseString(string) {
  let rvString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    rvString = rvString + string[i];
  }
  return "ej1: " + rvString;
}

console.log(reverseString("Hola"));

/* 2. Crea unha función á que se lle pase unha cadea e un array de caracteres e devolva
a cadea orixinal eliminando os caracteres do array.  */

function delCaracteres(cadena, array) {
  for (let i = 0; i <= array.length; i++) {
    cadena = cadena.replaceAll(array[i], "");
  }
  return "ej2: " + cadena;
}
let array = ["a", "e", "h", "n"];
let cadena = "Hola que tal estas en ...";
console.log(delCaracteres(cadena, array));

/* 3. Crea unha función á que se lle pase unha cadea e devolva o carácter máis repetido */

/* 4. Crea unha función á que se lle pase unha cadea de números e devolva unha cadea
da mesma lonxitude formada por * e as últimas 4 cifras do parámetro de entrada.  */

function enmascarar(numeros) {
  if (numeros.length >= 4) {
    let ultimos4 = numeros.slice(-4);
    let cifrados = numeros.slice(0, -4);

    for (let i = 0; i <= numeros.length; i++) {
      cifrados = cifrados.replaceAll(cifrados[i], "*");
    }
    return "Ej4: " + cifrados.concat(ultimos4);
  } else {
    return "Ej4: O número ten menos de 4 cifras";
  }
}

console.log(enmascarar("97846513217984651979"));

/* 5. Escribe o código necesario para procesar unha cadea con información de voos
como a do exemplo e mostrar a información por consola formateada como aparece
na imaxe:  */

const flightsInfo =
  "_Delayed_Departure;scq93766109;bio2133758440;11:25+_Arrival;bio0943384722;scq93766109;11:45+_Delayed_Arrival;svq7439299980;scq93766109;12:05+_Departure;scq93766109;svq2323639855;12:30";

function formatter1(flightsInfo) {
  flightsInfo = flightsInfo.replaceAll("_", " ").replaceAll(";", " ");
  return flightsInfo;
}

console.log(formatter1(flightsInfo));
