// semana 1 : Pense em algum item ( livro )

//livro

objeto1 = {
    titulo: "O Pequeno Principe",
    anoDeLancamento: 1943,
    virouFilme: true,
    categorias: ["infantil", "filosofica", "poetica", "romantico"],
    valido: true
}

objeto2 = {

    titulo: "After",
    anoDeLancamento: 2014,
    virouFilme: true,
    categorias: ["adolescente", "romantico", "drama", "autoastral"],
    valido: true
}

objeto3 = {

    titulo: "Clean Code",
    anoDeLancamento: 2008,
    virouFilme: false,
    categorias: ["tecnico", "filosofico", "ciencia"],
    valido: true

}

objeto4 = {
    valido: false

}

// const mediaDosanos = ((anoDeLancamento + anoDeLancamento2 + anoDeLancamento3) / 3)
// console.log("A media dos anos de lançamento dos 3 livros é :", mediaDosanos)

// const filme = virouFilme && virouFilme2 && virouFilme3
// console.log("Todos esses livros viraram filme ?", filme)

// console.log(`

// Nome do livro: ${titulo.toLocaleUpperCase()}
// Ano de lançamento do livro: ${anoDeLancamento}
// Virou filme: ${virouFilme}
// Categoria que ele se enquadra: ${categorias}

// Nome do livro: ${titulo2.toLocaleLowerCase()}
// Ano de lançamento do livro: ${anoDeLancamento2}
// Virou filme: ${virouFilme2}
// Categoria que ele se enquadra: ${categorias1}

// Nome do livro: ${titulo3.toLocaleUpperCase()}
// Ano de lançamento do livro: ${anoDeLancamento3}
// Virou filme: ${virouFilme3}
// Categoria que ele se enquadra: ${categoria3}
// `)





const livros = []

if (objeto1.valido) {
    livros.push(objeto1)
} else {
    alert("o item n foi adicionado")
}

if (objeto2.valido) {
    livros.push(objeto2)
} else {
    alert("o item não foi adicionado")
}

if (objeto3.valido) {
    livros.push(objeto3)
} else {
    alert("o item n foi adicionado")
}

if (objeto4.valido) {
    livros.push(objeto4)
} else {
    // alert ("o item não foi adicionado")
}

for (let livroObjeto of livros) {
    livroObjeto.categorias = livroObjeto.categorias.join(", ")
}



// livros.push(objeto1,objeto2,objeto3)
// console.log(livros)


for (let livro of livros) {

    objetoParaString(livro)

    console.log("----------------------");
}

function objetoParaString(livroParafuncao) {
    for (let propriedade in livroParafuncao) {
        console.log(`${propriedade}: ${livroParafuncao[propriedade]}`)
    }

}

function buscaLivroTitulo (titulo, arrayDeObjetos){
    for(let LivroEscolhido of arrayDeObjetos){
        if(LivroEscolhido.titulo.toLocaleLowerCase() == titulo.toLocaleLowerCase()){
            console.log(LivroEscolhido)
            return LivroEscolhido
        }

    }alert ("Livro não encontrado")
    
}

buscaLivroTitulo("after",livros)
