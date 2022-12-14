let lista = document.body.querySelector("#lista");
let sweeties = document.body.getElementsByTagName("a")[0];

sweeties.addEventListener("click", () => {
  // comprobar valor display
  // se o display é none cambialo a block
  // se o display é block cambialo a none
  if (lista.style.display == "none") {
    lista.style.display = "block";
  } else {
    lista.style.display = "none";
  }
});
