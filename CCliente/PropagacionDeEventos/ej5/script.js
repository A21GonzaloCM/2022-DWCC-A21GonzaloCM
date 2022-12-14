
let thumbs= document.getElementById("thumbs");
let image= document.getElementById("largeImg");


thumbs.addEventListener("click", (event)=>{
    let target= event.target.closest("a");
    event.preventDefault();
    image.src=target.href;
    image.alt=target.title;

})
