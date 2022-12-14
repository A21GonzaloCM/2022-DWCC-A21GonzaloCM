let ul = document.body.getElementsByTagName("ul")[0];

let li = document.createElement("li");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");

li.textContent = "D";
li1.textContent = "C";
li2.textContent = "B";
li3.textContent = "A";
ul.append(li);
ul.append(li1);
ul.append(li2);
ul.append(li3);
