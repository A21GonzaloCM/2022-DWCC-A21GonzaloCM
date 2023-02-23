
const { createApp } = Vue;
    createApp({
        data() {
            return {
                cambiado1: false,
                cambiado2: false,
            };
        },
        methods: {

            change(event){
                if(this.cambiado1==false && event.target.id==1){
                    this.cambiado1=true
                }else{
                    this.cambiado1=false
                }

                if(this.cambiado2==false && event.target.id==2){
                    this.cambiado2=true
                }else{
                    this.cambiado2=false
                }
            }
        }
    }).mount("#app");
