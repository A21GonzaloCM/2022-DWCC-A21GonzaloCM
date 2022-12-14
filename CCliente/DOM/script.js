//1. Dado o seguinte código HTML:
//Indica, polo menos, unha forma de acceder aos seguintes nodos:
// o nodo <div> document.body.firstElementChild
// o nodo <ul>  document.body.children[1]
// o segundo <li> document.body.children[1].lastElementChild

/* 2. Dado un elemento calquera dunha árbore DOM
a. ¿É certo que elemento.lastChild.nextSibling é sempre null?
    Si
b. ¿É certo que elemento.children[0].previousSibling é sempre null?
    No, pode haber nodos antes (non ten por que ser siempre nulo)
 */

/*let rowNumber = taboa.rows.length;
for (let i = 0; i<rowNumber; i++){
    taboa.rows[i].cells[i].style.backgroundColor="red";
}


*/

/* 1. Descarga o código fonte 02-accesoNodos01.html e indica, polo menos, unha forma
de acceder aos seguintes nodos:
● A táboa con id="age-table". 
document.getElementById("age-table");
● Todos os elementos label dentro da táboa (debería haber 3).
document.getElementById("age-table").getElementsByTagName("label")
● O primeiro td da     táboa.    document.getElementById("age-list").previousElementSibling
                                          
● O form con name="search". document.getElementsByName("search")
document.body.firstElementChild
● O primeiro input do formulario anterior.
document.body.firstElementChild.firstElementChild.lastElementChild
● O último input do formulario anterior. 
document.body.firstElementChild.lastElementChild
*/

/* 
2. Descarga o código fonte 02-accesoNodos02.html e indica, polo menos, unha forma
de acceder aos seguintes nodos:
● O elemento con id “input2”. 
document.getElementById("input2")
● A colección de parágrafos
document.getElementsByTagName("p")
● Todos os parágrafos dentro do div con id “lipsum”.
document.getElementById("lipsum").getElementsByTagName("p")
● O formulario
document.body.lastElementChild.previousElementSibling
● Todos os inputs
document.getElementsByTagName("input")
● Só os inputs con nome “sexo”.
document.getElementsByName("sexo")
● Os items da lista con clase “important”.
document.body.children[5].getElementsByClassName("important")
 */

/*  
1. Descarga o código fonte 03-propiedadesNodo01.html e indica, polo menos, unha
forma de acceder ao seguinte contido:
● O innerHTML da etiqueta “Escolle sexo”:
document.getElementsByTagName("label")[3].innerHTML;
● O textContent da etiqueta anterior
igualAnterior.textContent
● O valor do primeiro input de sexo
document.querySelector("input" [name='sexo']).value;
● O valor do sexo que estea seleccionado.
document.querySelector("input" [name='sexo'] :checked).value;
● O texto de cada un dos elementos <li>
for(const item of document.getElementsByTagName("li")){cl(item.textContent)}
● Indica cantos elementos <li> hai.
document.getElementsByTagName("li").length
● Indica o valor do atributo data-widget-name
document.querySelector("div [data-widget-name]").dataset.widgetName;
*/

/* 2. Descarga o código fonte 03-propiedadesNodo02.html e indica:
● O número de ligazóns da páxina. document.getElementsByTagName("a").length
● A dirección da penúltima ligazón. document.body.children[2].lastElementChild.previousElementSibling.href 
● O número de ligazóns que apuntan a http://proba document.body.lastElementChild.previousElementSibling.lastElementChild
● O número de ligazóns do terceiro parágrafo. document.body.lastElementChild.previousElementSibling.getElementsByTagName("a").length
● Fai que as ligazóns que apuntan a http://proba teñan o texto de cor laranxa. */
