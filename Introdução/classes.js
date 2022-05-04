class Livro{//classes são funções
    constructor(nome, editora, paginas){
        this.nome = nome
        this.editora = editora
        this.paginas = paginas
    }
    anunciarTitulo(){//são funções 
        console.log(`Título: ${this.nome}`)
    }
    descreverTitulo(){
        console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} páginas`)
    }
}

const nodeJS = new Livro("Primeiros passos com NodeJS", "Casa do Código", 195)
nodeJS.anunciarTitulo()
nodeJS.descreverTitulo()