/* 1. Crea un obxecto chamado televisión coas propiedades marca, categoría
(televisores), unidades (4), prezo (354.99) e un método chamado importe que
devolva o prezo total das unidades (unidades x prezo). */

const television = {
  marca: "",
  categoria: "televisores",
  unidades: 4,
  prezo: 354.99,
  importe() {
    return this.unidades * this.prezo;
  },
};
console.log(television);
console.log(television.importe());

/* 2. Imaxinar que se recolle a seguinte información relativa a un xogo dun servidor: 
Utilizando a desestruturación de obxectos crea unha variable para cada unha das
propiedades do obxecto odds. Estas variables deben levar os nomes “team1”,
“draw” e “team2”.*/

const game = {
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const {
  odds: { team1: team1 },
  odds: { x: draw },
  odds: { team2: team2 },
} = game;

console.log(team1, draw, team2);

/* 3. Dado o seguinte obxecto: 

a. Recorre o array game.scored e mostra por pantalla información do xogador
que marcou e o número de gol marcado. Exemplo: “Gol 1: Lewandowski”.
b. Crea un novo obxecto chamado scorers que conteña o nome dos xogadores
que marcaron e o número de goles que marcaron como valor. Neste exemplo
sería algo así: {Lewandowski: 2, Gnarby: 1, Hummels: 1}

*/

//a)

const game2 = {
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
};

for (let i = 0; i < game2.scored.length; i++) {
  console.log("Gol " + (i + 1) + " " + game2.scored[i]);
}

//b)

/*const scorers = {};
for (const xogador of game.scored) {
  scorers[xogador] ? scorers[xogador]++ : (scorers[xogador] = 1);
}
console.log(scorers);*/

/* 4. Dada a seguinte información:  

a. Filtra o array de inventores e crea un array só cos inventores que naceron no
século XVI.
b. Crea un array co nome completo dos inventores. Por exemplo: ["Albert
Einstein", "Isaac Newton", ...]
c. Unha vez obtido o array co nome completo dos inventores do exercicio
anterior, ordénao alfabeticamente polo apelido
d. Ordena o array de inventores alfabeticamente polo apelido
e. Ordena o array de inventores pola data de nacemento
f. Calcula a suma dos anos que viviron todos os inventores.
g. Ordena os inventores polos anos que viviron, primeiro o máis lonxevo
*/

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

//a con programacion funcional

const inventoresSeculoXVI = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
console.table(inventoresSeculoXVI);

//b con programacion funcional
const nomeCompleto = inventors.map(
  (inventor) => inventor.first + " " + inventor.last
);

console.log(nomeCompleto);

//c con programacion funcional

//d)

inventors.sort((a, b) => (a.last < b.last ? -1 : 1));

console.table(inventors);

//e)

inventors.sort((a, b) => (a.year < b.year ? -1 : 1));

console.table(inventors);

//f)

const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);

//g)

console.table(
  inventors.sort((a, b) => (a.passed - a.year > b.passed - b.year ? -1 : 1))
);

/*5. Dada a seguinte información, obtén un obxecto con unha propiedade para cada
medio de transporte, indicando o número de veces que se repite no array. É dicir, o
resultado debería ser {car: 5, truck: 3, bike: 2, walk: 2, van: 2, pogostick: 1} */

const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
  "pogostick",
];

let duplicatedData = {};

for (const medioTransporte of data) {
  if (duplicatedData[medioTransporte]) {
    duplicatedData[medioTransporte]++;
  } else duplicatedData[medioTransporte] = 1;
}

console.log(duplicatedData);
