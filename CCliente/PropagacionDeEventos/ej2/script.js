const ul = document.body.querySelector("#tree");

ul.addEventListener("click", (e) => {
  if (e.target.closest("li").children[0] != null) {
    if (e.target.closest("li").children[0].style.display == "none") {
      e.target.closest("li").children[0].style.display = "block";
    } else if ( e.target.closest("li").children[0].style.display = "block") {
      e.target.closest("li").children[0].style.display = "none";
    }
  }
});
