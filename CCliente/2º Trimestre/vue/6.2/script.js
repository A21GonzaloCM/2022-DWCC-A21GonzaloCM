
const { createApp } = Vue;
    createApp({
        data() {
            return {
                cambiado1: true,
                cambiado2: false,
            };
        },
        methods: {

            change(event){
                if(this.cambiado1==false && event.target.id==1 && this.cambiado2==true){
                    this.cambiado1=true;
                    this.cambiado2=false;
                }

                if(this.cambiado2==false && event.target.id==2 && this.cambiado1==true){
                    this.cambiado2=true;
                    this.cambiado1=false;
                }
            }
        }
    }).mount("#app");
