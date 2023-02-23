let btn= document.getElementById("submit");
let gender= "";
let cricket= "";
let football= "";
let hockey= "";
localStorage.getItem("userData")

btn.addEventListener("click", (e)=>{
mail= document.getElementById("email").value;
btn= document.getElementById("submit");
gender= document.querySelector("input[type=radio]:checked").value;
cricket= document.getElementById("cricket").value;
football= document.getElementById("football").value;
hockey= document.getElementById("hockey").value;
    localStorage.setItem("userData",JSON.stringify({ 
        mail: mail,
        gender: gender,
        cricket: cricket,
        football: football,
        hockey: hockey }) );
    let data = JSON.parse(localStorage.getItem("userData"))   
console.log(data);

})



