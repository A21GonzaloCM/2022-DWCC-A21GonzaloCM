let lip = document.body.querySelector("#one");

let li = document.createElement("li");
let li1 = document.createElement("li");

li.textContent = "2";
li1.textContent = "3";

lip.after(li);
li.after(li1);
