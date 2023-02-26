class celular{

    constructor(){
        this.cor = "prata";

    }
    
    ligar (){

        console.log("Recebendo Ligação");
        return "Atendendo a ligação...";

    }   
}

let objeto = new celular();

console.log(objeto.ligar())