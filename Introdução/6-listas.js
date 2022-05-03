console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;     //essa maneira é mais complicada de escrever, usando array é bem mais facil

//listas(array)
const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);
listaDeDestinos.push(`Curitiba`)//o Push do js funciona como o push do github, para todo elemento que 
//será inserido posteriormente, se usa o push para empurrar um novo elemento para uma variavel
console.log("Destinos possíveis: ");
console.log(listaDeDestinos);
//o push não muda o foco principal da variavel, então não é afetado pelo const


//removendo um item da lista


listaDeDestinos.splice(1,1);
//os numeros do parenteses significa respectivamente: posição e quantidade a ser removida
//porém a posição inicial começa no 0
console.log(listaDeDestinos);

//para mostrar 1 unico item

console.log(listaDeDestinos[1], listaDeDestinos[0]);
//tudo o que estiver dentro do [] será a posição do elemento