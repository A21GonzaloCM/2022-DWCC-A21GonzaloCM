
const { createApp } = Vue;
    createApp({
        data() {
            return {
                contenido: "",
                message: "",
                checked1: "false",
                checked2: "false",
                picked:"",
                selected:"",
            };
        },
        methods: {
            txtP(event){

                this.contenido= event.target.value;

            },

            clearForm(){
                this.contenido="";
                this.message="";
                this.checked1="false";
                this.checked2="false";
                this.picked="";
                this.selected="";
            }
        }
    }).mount("#app");
