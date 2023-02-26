let celular = function(){

    this.cor = "prata";



    this.ligar = function(){

        console.log("Recebendo Ligação");
        return "Atendendo a ligação...";//Aqui será para que quando no console a função indefinida ela precisa retornar alguma coisa
    
    }
}
let objeto = new celular();

console.log(objeto.ligar()); //Quando for chamar a função que está dentro da função celular deve-se usar o parenteses no final 

/**
 * Usando o metodo this conseguimos imprimir na tela a variavel que virou um atributo atraves do comando "this"
 */

/**
 * let celular = function(){

    let cor = "prata";


}

let objeto = new celular();

console.log(objeto);
 * Dessa forma não conseguimos visualizar a cor do celular somente o nome da função
 */