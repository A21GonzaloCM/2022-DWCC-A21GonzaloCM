let dni = "";

function dniCorrecto(dni) {
  if (dni != /[0-9]{8}([A-Z]{1}|[a-z]{1})/) {
    window.alert("O texto introducido non é un DNI");
  } else {
    let parteNumerica = dni.substring(0, 8);
    let letra = dni.substring(8);
    let letrasCorrectas = [
      "T",
      "R",
      "W",
      "A",
      "G",
      "M",
      "Y",
      "F",
      "P",
      "D",
      "X",
      "B",
      "N",
      "J",
      "D",
      "S",
      "Q",
      "V",
      "H",
      "L",
      "C",
      "K",
      "E",
    ];
    let letraCorrecta = "";
  }
}
