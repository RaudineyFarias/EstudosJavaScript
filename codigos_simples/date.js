let agora = new Date();
//Dessa forma ela está instaciada formatada.
console.log(agora);
console.log(agora.getDate()); //para o dia
console.log(agora.getFullYear()); //para o Ano com 4 digitos
console.log(agora.getMonth());//para o mês 
console.log(agora.toLocaleDateString("pt-BR"))//Localização do sistema operacional do usuário
console.log(agora.toLocaleTimeString("pt-br"))//para o horário do usuário
console.log(agora.toISOString("pt-BR"))


/**
 * let agora = Date.now();
    Desta forma ela apresente os segundos desde a data em que ele foi criado
    console.log(agora);

 */