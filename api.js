class Biblioteca {
    constructor(name){
        this.name = name;
    }
    busca(){
        return "Possui livros: ";
    }
}

// classes filhas

class Estante extends Biblioteca{
    constructor(name,type){
        super(name)
        this.type = type;
    }
    busca(){
        return `Há livros de diferentes gêneros, como ${this.type}.`;
    }
}

class BancoDeDados extends Biblioteca{
    constructor(name,type,local){
        super(name)
        this.type = type;
        this.local = local;
    }
    busca(){
        return `O banco de dados diz que o livro ${this.name} do gênero ${this.type} se encontra no(a) ${this.local}.`;
    }
}

class CatalogoFisico extends Biblioteca{
    constructor(name,type){
        super(name)
        this.type = type;
    }
    busca(){
        return `O catálogo informa que o livro ${this.name} é do gênero ${this.type}`
    }
}


function displayBiblioteca (biblioteca){
    const output = document.getElementById("output");
    const div = document.createElement("div");
    div.className = "biblioteca";
    div.classList.add(biblioteca.type.toLowerCase());
    div.textContent = `Livro: ${biblioteca.name}; Pesquisa: ${biblioteca.busca()}`;
    output.appendChild(div);
}

document.getElementById("addEstanteButton").addEventListener
("click", () => {
    const fantasia = new Estante("Deusa de Sangue", "fantasia");
    displayBiblioteca(fantasia);
});

document.getElementById("addBDButton").addEventListener
("click", () => {
    const pesquisa = new BancoDeDados("Deusa de Sangue", "fantasia", "Leitura");
    displayBiblioteca(pesquisa);
});

document.getElementById("addCatalogoButton").addEventListener
("click", () => {
    const procura = new CatalogoFisico("Deusa de Sangue", "fantasia");
    displayBiblioteca(procura);
});