/*
Engade o JavaScript necesario para que ao
pulsar no botón [X] se elimine a mensaxe correspondente.
Debes engadir un único listener e só se deben eliminar as mensaxes ao pulsar [X].
*/
const x = document.body.querySelector(".remove-button");
const pane = document.body.querySelector(".pane");

container.addEventListener("click", (e) => {
  if (e.target.tagName == "BUTTON") {
    e.target.closest(".pane").style.display = "none";
  }
});
