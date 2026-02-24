class Livro {
    constructor(titulo, autor, ano, genero, paginas, editora, isbn, preco) {
        titulo = titulo;
        autor = autor;
        ano = ano;
        genero = genero;
        paginas = paginas;
        editora = editora;
        isbn = isbn;
        preco = preco;
    }
}

let livro1 = {
    titulo: "Olhai os Lírios do Campo",
    autor: "Érico Veríssimo",
    ano: 1938,
    genero: "Romance",
    paginas: 272,
    editora: "Companhia das Letras",
    isbn: "9788535902776",
    preco: 49.90
};

console.log(livro1);