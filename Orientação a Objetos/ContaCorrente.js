import { Conta } from "./Conta.js";
export class ContaCorrente extends Conta{//extends ele puxa toda a informação de uma classe para dentro de outra
    static numeroDeContas = 0;
    constructor(cliente, agencia){
        super(0,cliente,agencia);//chama o construtor, as vezes
        ContaCorrente.numeroDeContas += 1;
    }

}
