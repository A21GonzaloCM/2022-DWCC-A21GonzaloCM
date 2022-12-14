button = document.body.querySelector("#button");
button.addEventListener("click", () => console.log("1"));
button.removeEventListener("click", () => console.log("3"));
button.onclick = () => console.log(2);

//Solo se executan o addEventListener e o onclick
