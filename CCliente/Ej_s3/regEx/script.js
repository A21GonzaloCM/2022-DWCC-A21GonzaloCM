/*. Escribe unha expresión regular para comprobar que cada un dos seguintes
elementos aparece nunha cadea.
a. car e cat
b. pop e prop
c. ferret, ferry e ferrari
d. Calquera palabra rematada en ious
e. Un espazo seguido de punto, como, dous puntos ou punto e coma.
f. Unha palabra con máis de 6 letras.
g. Unha palabra sen a letra e (ou E).*/

function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  for (let str of yes)
    if (!regexp.test(str)) {
      console.log(`Failure to match '${str}'`);
    }
  for (let str of no)
    if (regexp.test(str)) {
      console.log(`Unexpected match for '${str}'`);
    }
}

verify(/ca[tr]/, ["my car", "bad cats"], ["camper", "high art"]);
verify(/pr?op/, ["pop culture", "mad props"], ["plop", "prrrop"]);
verify(
  /ferr(et|y|ari)+/,
  ["ferret", "ferry", "ferrari"],
  ["ferrum", "transfer A"]
);
verify(
  /[a-z]*ious\b/,
  ["how delicious", "spacious room"],
  ["ruinous", "consciousness"]
);
verify(/\s[,;.:]/, ["bad punctuation ."], ["escape the period"]);

verify(
  /[A-Za-z]{7,}/,
  ["Siebentausenddreihundertzweiundzwanzig"],
  ["no", "three small words"]
);
verify(
  /\b([^e ]+)\b/i,
  ["red platypus", "wobbling nest"],
  ["earth bed", "learning ape", "BEET"]
);

/*2. Unha dirección de rede MAC está composta por 6 grupos de dous números
hexadecimais separados por “:”. Por exemplo "01:32:54:67:89:AB". 

([0-9A-F]{2}:){5}[0-9A-Z]{2}


*/

/* 3. Crea unha expresión regular para buscar códigos de cores no formato #RGB ou
#RRGGBB nun texto. Un código de color é unha cadea formada polo carácter “#”
seguido de 3 ou 6 cifras hexadecimais.

[#]([0-9A-F]{6}|[0-9A-F]{3})\b

*/

/* 4. Escribe unha expresión regular para números. Debe incluír números enteiros,
decimais e números negativos. Así, na cadea "-1.2 4 0 -123.5." debe encontrar 4
números

[-]?[0-9]+[.]?([0-9]+)?

*/

/* 

5. Crea unha función que comprobe se un contrasinal é válido, é dicir, cumpre as
seguintes condicións:
a. Mínimo 8 caracteres.

\w{8,}

b. Sen espazos en branco.

[^ ]

c. Que teña, polo menos, 3 das seguintes tipos de caracteres:
i. maiúsculas

[A-Z]+

ii. minúsculas

[a-z]+

iii. números

[0-9]+

iv. caracteres especiais: ¡!$?%&#@/\()=¿?*[];,:._<>+-

[¡!$?%&#@/\()=¿?*[];,:._<>+-]+

*/

let contraseña = "#asdlASFds99";

function checkContraseña(contraseña) {
  let char8 = /\w{8,}/;

  let whitespaces = /[^ ]/;

  let maiusculas = /[A-Z]+/;

  let minusculas = /[a-z]+/;

  let numeros = /[0-9]+/;

  let specialchars = /[¡!$?%&#@/\\()=¿?*[\];,:._<>+-]+/g;

  if (contraseña.match(char8) && contraseña.match(whitespaces)) {
    let matchs = 0;

    if (matchs.length() >= 3) {
      return "Contrasinal válido";
    } else {
      return "Contrasinal inválido";
    }
  }
}

console.log(checkContraseña(contraseña));

//7

function substituirInsulto(palabra) {
  return match.substring(0, 1) + "*".repeat(match.length - 1);
}

//revisar array.join();
//pasar funcion como segundo elemento do .replace()
