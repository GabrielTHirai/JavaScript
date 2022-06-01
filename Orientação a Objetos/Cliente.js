export class Cliente{/* serve para exportar isso. Vai mostrar que essa classe vai ser utilizada em outro momento */

    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}