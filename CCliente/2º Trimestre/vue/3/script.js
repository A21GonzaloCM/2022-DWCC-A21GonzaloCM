
const { createApp } = Vue;
    createApp({
        data() {
            return {
                contenido: ""
            };
        },
        methods: {
            txtP(event){

                this.contenido= event.target.value;

            }
        }
    }).mount("#app");
