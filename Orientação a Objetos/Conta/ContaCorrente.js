import { Conta } from "./Conta.js";
export class ContaCorrente extends Conta{//extends ele puxa toda a informação de uma classe para dentro de outra
    static numeroDeContas = 0;
    constructor(cliente, agencia){
        super(0,cliente,agencia);//chama o construtor, as vezes
        ContaCorrente.numeroDeContas += 1;
    }
    sacar(valor){
        //nesse caso o sacar vai sobreescrever o da conta.js
        let taxa = 1.1;
        return this._sacar(valor,taxa);
    }
}
