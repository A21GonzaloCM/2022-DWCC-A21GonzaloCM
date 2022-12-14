let select=document.getElementById("select");

let option3 = document.createElement("option");
option3.value="value3";
option3.innerText="Value 3"
select.append(option3);

select.addEventListener("input",(event)=>{
let target= event.target;
console.log(target.value)
})