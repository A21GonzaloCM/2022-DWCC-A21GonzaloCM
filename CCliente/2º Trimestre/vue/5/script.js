
const { createApp } = Vue;
    createApp({
        data() {
            return {
                n1:0,
                n2:0,
                resultado:"",
                isPar:"",
            };
        },
        watch:{
            
            n1(){
                this.resultado= parseInt(this.n1) + parseInt(this.n2);
            },
            n2(){
                this.resultado= parseInt(this.n1) + parseInt(this.n2);
            },

            resultado(){
                if(parseInt(this.resultado) % 2 ==0){
                    this.isPar="O número é par";
                }else{
                    this.isPar="O número é impar";
                }
            }
        }
    }).mount("#app");