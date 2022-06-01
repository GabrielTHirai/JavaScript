export class Conta{
    constructor(saldoInicial, cliente, agencia){
        this._saldo= saldoInicial;
        this._cliente=cliente;
        this._agencia=agencia;
    }

    set cliente(novoValor){/* colocar um valor */
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }   

    get cliente(){//o get só serve para leitura
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
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