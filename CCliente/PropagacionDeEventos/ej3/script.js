const thead=document.body.getElementsByTagName("thead")[0];
const table=document.getElementById("grid");


thead.addEventListener("click", (e)=>{

    const target= e.target;
    let dataArray= Array.from(table.getElementsByTagName("tbody")[0].children); // Array de tr's
    let sectionArray= Array.from(thead.children[0].children); //Array de th's
    let  SelTh= sectionArray.indexOf(target);
    if (target.dataset.type=="string"){

        dataArray.sort(
            (dato1, dato2)=>{
                if(dato1.children[SelTh].innerText > dato2.children[SelTh].innerText){return 0 } else {return -1};
            })

            for (const iterator of dataArray) {
                table.children[1].append(iterator);
            }
    }else if(target.dataset.type=="number"){


        dataArray.sort(

            (dato1,dato2)=>(dato1.children[SelTh].innerText - dato2.children[SelTh].innerText)

        );

        for (const iterator of dataArray) {
            table.children[1].append(iterator);
        }

    }
})