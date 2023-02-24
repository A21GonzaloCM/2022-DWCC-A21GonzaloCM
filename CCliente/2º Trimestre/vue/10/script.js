
const { createApp } = Vue;
createApp({
    data() {
        return {
            lista:["elemento 1", "elemento 2"],
            text:""
        };
    },
    methods: {
        add(){
            this.lista.push(this.text);
            this.text="";
        },

        borrar(lista){
            this.lista = this.lista.filter((e) => e !== lista)
        }

    }
}).mount("#app");
