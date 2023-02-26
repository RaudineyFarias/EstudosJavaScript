function somar(x1, x2, operator){
    return eval(`${x1}  ${operator} ${x2}`);
    //Lembrando que o instrutor usou crase!!!

}

let resultado = somar(1,2,"+");

console.log(resultado);
/**
 * (function(x1, x2, operator){
    return eval(`${x1}  ${operator} ${x2}`);
    //Lembrando que o instrutor usou crase!!!

}) (1,2,"+");

como declarar função anonima:  retira o nome dela depois coloca entre parenteses.
 */