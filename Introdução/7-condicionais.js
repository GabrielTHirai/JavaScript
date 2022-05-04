console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);
const idadeComprador = 15;
const estaAcompanhada = false;
const temPassagemComprada = true;
console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Comprador maior de idade ou está acompanhada, BOA VIAGEM");
    listaDeDestinos.splice(2, 1);//removendo um item
} else {
    console.log("Não é maior de Idade e não vender");
}

console.log("Embarque: \n");
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa Viagem");
}else{
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);