let ul= document.getElementById("ul");
let listLi= ul.children;
ul.addEventListener("click", (event)=>{
let target=event.target;
let li=target.closest("li");

if(target==li){
    for (const line of listLi) {
        line.setAttribute("class","")
    }
    li.setAttribute("class","selected")
};
})