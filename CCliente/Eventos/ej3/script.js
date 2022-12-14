let texto = document.body.querySelector("#texto");
let engadir = document.body.querySelector("#engadir");
let lista = document.body.getElementsByTagName("ul")[0];

engadir.addEventListener("click", () => {
  let li = document.createElement("li");
  li.textContent = texto.value;
  lista.append(li);
});
