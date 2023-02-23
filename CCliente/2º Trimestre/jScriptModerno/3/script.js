const map = L.map("map").setView([42.87876, -8.547238], 15);

var Stadia_AlidadeSmoothDark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);







var popup = L.popup();
function onMapClick(e) {
 let txtArea= document.createElement("input");
 let TituloTxtArea= document.createElement("h2");
 TituloTxtArea.innerHTML="Introduce datos do punto señalado:"

 txtArea.id="txtArea"
 txtArea.type="text";
if(!document.getElementById("txtArea")){



let aside= document.getElementById("aside-section");
 aside.append(TituloTxtArea);
 aside.append(txtArea);
 txtArea.focus();
 txtArea.addEventListener("keypress", (event)=>{
if (event.key=="Enter"){
    popup
.setLatLng(e.latlng)
.setContent(txtArea.value)
.openOn(map);

txtArea.remove();
TituloTxtArea.remove();

let divInfo= document.createElement("div");
divInfo.innerText= txtArea.value;
divInfo.id="divinfo";
aside.append(divInfo);
let closeButton= document.createElement("button");
closeButton.innerText="X";
closeButton.id="cbutton";

divInfo.addEventListener("click", (event)=>{
	
let boton= event.target.closest("button");
if(event.target=boton){
	boton.parentElement.remove();
}


})

divInfo.append(closeButton);

var marker = L.marker(e.latlng).addTo(map);
}






 

 })
}
}
map.on('click', onMapClick);

