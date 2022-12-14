/* 
Engade os eventos que se indican:
● Cando o cursor do rato entre e saia do botón, mostra unha mensaxe por consola indicándoo.
*/
const btInput = document.querySelector("#ocultar");
btInput.addEventListener("mouseover", () => console.log("Raton encima"));
btInput.addEventListener("mouseout", () => console.log("Raton fora"));
/*
● Ao pulsar o botón debe desaparecer o div con id=texto.
*/
const texto = document.querySelector("div#texto");
btInput.addEventListener("click", () => (texto.style.visibility = "hidden"));

/*
● Cando se escriba algo na caixa de texto, debe mostrarse a tecla pulsada no div e tamén o código da tecla pulsada. Ademais, se o div estaba oculto, debe mostrarse.
*/

const txtBox = document.querySelector("input#textoExercicio1");
txtBox.addEventListener(
  "keypress",
  () =>
    (texto.style.visibility =
      "" && texto.insertAdjacentElement("afterbegin", txtBox.value))
);
