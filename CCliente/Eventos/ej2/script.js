let adicional = document.body.querySelector("#adicional");

let url1 = document.body.querySelector("#ligazon");

url1.addEventListener("click", () => {
  adicional.style.visibility = "visible";
  url1.style.display = "none";
});
