const enlaces = document.body.getElementsByTagName("a");
const fieldset = document.body.querySelector("#contents");

fieldset.addEventListener("click", (event) => {
  
  if (event.target == enlaces[0] || event.target == enlaces[1].children[0]) {
   const meu= window.confirm("Continuar á páxina");
   if(meu==0){event.preventDefault()}
  }

});
