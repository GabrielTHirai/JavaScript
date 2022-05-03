console.log("Trabalhando com atribuição de variáveis");

let nome = "Gabriel";//o let pode ser mudado
const sobrenome = "Hirai";

console.log(nome+" "+ sobrenome);
console.log(nome,sobrenome); 
console.log(`Meu nome é: ${nome} ${sobrenome}`);//a crase dupla serve para string, e o ${} serve para atribuição de variavel

nome = nome + sobrenome;//nesse caso vai dar erro, ja que a variavel está declarada como const (constante), ou seja, não muda
console.log(nome);

let contador = 0;
contador = contador + 1;
//usar o maximo que puder o const
let idade;
idade = 26;
idade = idade + 1;

console.log(idade);