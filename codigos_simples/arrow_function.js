let somar = (x1, x2, operator) =>{
    return eval(`${x1}  ${operator} ${x2}`);
    //Lembrando que o instrutor usou crase!!!

}

let resultado = somar(1,2,"+");

console.log(resultado);
/**
 * ele executa armazena o codigo dentro de uma variável
 * o comando "let" serve pra declarar uma variável
 * DOM - Document Object Model = que pode se dizer que seja a junção do HTML, CSS e JS
 */