//1. Mostra o día da semana (en letra) do 25 de xullo de 2000.
const options = { weekday: "long" };
const date1 = new Date(2000 - 07 - 25);
console.log(new Intl.DateTimeFormat("es-ES", options).format(date1));

//2. Mostra o día da semana (en letra).

const today = new Date();
console.log(new Intl.DateTimeFormat("es-ES", options).format(today));

//3. Calcula o número de días que pasaron dende o 25 de xullo de 2000 ata hoxe.

const date2 = new Date("2000-07-25");
const diferenciaDias = today.getTime() - date2.getTime();

const contdias = Math.round(diferenciaDias / (1000 * 60 * 60 * 24));

console.log(contdias);

//4. Crea unha función á que se lle pase un mes (1-12) e un ano e devolva o número de días dese mes.

function GetDias(ano, mes) {
  var fecha = new Date(ano, mes, 0);
  return fecha.getDate();
}
console.log(GetDias(2022, 2));

//5. Crea unha función á que se lle pase unha data e diga se é fin de semana.

function isFinDeSemana(ano, mes, dia) {
  var fecha = new Date(ano, mes, dia);
  dia = fecha.getDay();

  if (dia == 0 || dia == 6) {
    return "Es fin de semana";
  } else {
    return "No es fin de semana";
  }
}

console.log(isFinDeSemana(2022, 9, 16));

//6. Crea unha función que reciba unha data como parámetro e devolva o número de días que pasaron dende que comezou o ano.
function diaDelAño(ano, mes, dia) {
  var data = new Date(ano, mes, dia);
  var inicioAño = new Date(ano, 0, 0);
  const diferenciaDias = data.getTime() - inicioAño.getTime();
  const contdias = Math.round(diferenciaDias / (1000 * 60 * 60 * 24));
  return contdias;
}

console.log(diaDelAño(2022, 9, 18));
