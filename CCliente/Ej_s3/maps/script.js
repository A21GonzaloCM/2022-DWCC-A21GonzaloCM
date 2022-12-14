//1

const gameEvents = new Map([
  [17, "GOAL"],
  [36, "Substitution"],
  [47, "GOAL"],
  [61, "Substitution"],
  [64, "Yellow card"],
  [69, "Red card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "GOAL"],
  [80, "GOAL"],
  [92, "Yellow card"],
]);
//a

/*
let eventos = new Set(gameEvents, values());

console.log(eventos); */

//B

for (const [chave, valor] of gameEvents) {
  if (chave <= 45) {
    console.log(`[Primeira parte] ${minuto}: ${evento}`);
  } else console.log(`[Segunda parte] ${minuto}: ${evento}`);
}
