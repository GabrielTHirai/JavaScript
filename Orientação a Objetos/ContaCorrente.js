import {Cliente} from "./Cliente.js"
export class ContaCorrente{
    static numeroDeContas = 0;
    _cliente;
    agencia;

    _saldo = 0;
    
    
    set cliente(novoValor){/* colocar um valor */
        if(novoValor instanceof Cliente){

        }
        this._cliente = novoValor;
    }   

    get cliente(){//o get só serve para leitura
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }
    
    constructor(agencia,cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor<=0){//se é um valor indesejável, o programa vai dar return
            return
        }
        this._saldo+=valor;
    }
    
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
