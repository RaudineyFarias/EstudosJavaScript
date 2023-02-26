let carros = ["palio 98", "toro", "uno", 10, true, new Date(), function(){}];

console.log(carros);// para ver o quem tem na lista
console.log(carros.length)//para a quantidade de itens dentro da array
console.log(carros[0]);//para imprimir na tela o item na posição desejada
console.log(carros[5].getFullYear());//para ver o ano que está dento do array, na verdade transformar o valor que está dentro do array(carros)
console.log(carros[6]());//para chamar a função que está dentro do array (se ela estiver recebendo algum paramentro ele irá funcionar)


//Lanço para percorrer o itens dentro do array(carros)


carros.forEach(function(values, index){

    console.log(index, values);

});

//perceba que ele vai trazer cada item e a posição em que se encontra