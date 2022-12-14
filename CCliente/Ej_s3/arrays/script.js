//3-

console.log(diasSemana.some((dia) => dia.toLowercase().startsWith("s")));
console.log(diasSemana.some((dia) => dia.toLowercase().endsWith("s")));

//4-

function primeiraMaiuscula(texto) {
  const palabras = texto.split(" ");
  let saida = [];
  for (const palabra of palabras) {
    saida.push(palabra.replace(palabra[0], palabra[0].toUppercase()));
    console.log(palabra);
  }
  return saida.join(" ");
}

//2.1

console.log(diasSemana.filter((dia) => dia.charAt(0) === "m"));
//2.2
console.log(diasSemana.find((dia) => dia.charAt(0) === "m"));
//2.3
console.log(diasSemana.findIndex((dia) => dia.charAt(0) === "m"));
//2.4
console.log(diasSemana.map((dia) => dia.toLocaleUppercase()));
//2.5
console.log(
  arrayEntrada.reduce((previous, current) => Math.max(previous, current))
);

//3.1

const [players1, players2] = players;
console.log(players1);
console.log(players2);

//3.2

const [gk, ...fieldPlayers] = plaayers1;

console.log(gk);
console.log(fieldPlayers);

//3.3

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//3.4

const playersFinal = [...players1, "Thiago", "Coutinho", "Periscic"];

console.log(playersFinal);

//3.5
for (const variable of variables) {
  const [first, second] = variable.toLowercase().split("_");
  let saida = first + second.replace(second[0], second[0].toUppercase());
  console.log(saida);
}
