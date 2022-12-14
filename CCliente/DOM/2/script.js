let ol= document.body.getElementsByTagName("ol")[0];
console.log(ol);


/*
for (const li of ol) {
    console.log(li);
  
}
non funciona con for
*/

while(ol.firstChild){
    ol.removeChild(ol.firstChild);
}
