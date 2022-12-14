let dia = window.prompt("Introduce un día de la semana", "");
dia = dia.toLowerCase();
if (
  (dia == "luns") |
  (dia == "martes") |
  (dia == "mercores") |
  (dia == "xoves") |
  (dia == "venres")
) {
  let resultado = "";
  resultado = window.alert("É un día laborable");
} else {
  resultado = window.alert("Non é un día laborable");
}
