// Função responsável por criar array de livros
function geraLivros() {
    objeto1 = {
        titulo: "O Pequeno Principe",
        anoDeLancamento: 1943,
        linkDoTitulo: "https://pt.wikipedia.org/wiki/Le_Petit_Prince",
        categorias: ["infantil", "filosofica", "poetica", "romantico"],
        imagemLivro: "https://m.media-amazon.com/images/I/51nNwwVSclL.jpg"
    }
    
    objeto2 = {
        titulo: "After",
        anoDeLancamento: 2014,
        linkDoTitulo: "https://pt.wikipedia.org/wiki/After_(s%C3%A9rie_de_livros)",
        categorias: ["adolescente", "romantico", "drama", "autoastral"],
        imagemLivro: "https://m.media-amazon.com/images/I/810FrINgfYS.jpg"
    }
    
    objeto3 = {
        titulo: "O Hobbit 🔎",
        anoDeLancamento: 1937,
        linkDoTitulo: "hhttps://pt.wikipedia.org/wiki/O_Hobbit",
        categorias: ["tecnico", "filosofico", "ciencia"],
        imagemLivro: "https://m.media-amazon.com/images/I/511+-lOOtsL._SX319_BO1,204,203,200_.jpg"
    
    }
    
    objeto4 = {
        titulo: "Clean Code",
        anoDeLancamento: 2008,
        linkDoTitulo: "https://de.wikipedia.org/wiki/Clean_Code",
        categorias: ["tecnico", "filosofico", "ciencia"],
        imagemLivro: "https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg"
    
    }
    
    objeto5 = {
        titulo: "É Assim que Acaba 🔎",
        anoDeLancamento: 2008,
        linkDoTitulo: "https://en.wikipedia.org/wiki/It_Ends_with_Us",
        categorias:["adolescente", "romantico", "drama", "autoastral"],
        imagemLivro: "https://m.media-amazon.com/images/I/51i7kH+rh9L._SY344_BO1,204,203,200_.jpg"
    
    }
    
    objeto6 = {
        titulo: "O diário de Anne Frank 🔎",
        anoDeLancamento: 1944,
        linkDoTitulo: "https://pt.wikipedia.org/wiki/Di%C3%A1rio_de_Anne_Frank",
        categorias: ["adolescente", "romantico", "drama", "autoastral"],
        imagemLivro: "https://m.media-amazon.com/images/I/41+PZUZS7LL._SX346_BO1,204,203,200_.jpg"
    
    }
    
    objeto7 = {
        titulo: "O homem mais rico da Babilônia 🔎",
        anoDeLancamento: 1926,
        linkDoTitulo: "https://pt.wikipedia.org/wiki/O_Homem_Mais_Rico_da_Babil%C3%B4nia",
        categorias: ["adolescente", "romantico", "drama", "autoastral"],
        imagemLivro: "https://m.media-amazon.com/images/I/51cB4wSNxQL._SX333_BO1,204,203,200_.jpg"
    
    }
    
    objeto8 = {
        titulo: "Mulheres que correm com os lobos 🔎",
        anoDeLancamento: 1992,
        linkDoTitulo: "https://pt.wikipedia.org/wiki/Clarissa_Pinkola_Est%C3%A9s",
        categorias: ["tecnico", "filosofico", "ciencia"],
        imagemLivro: "https://m.media-amazon.com/images/I/41ogXvQ5WYL._SX341_BO1,204,203,200_.jpg"
    
    }
    
    objeto9 = {
        titulo: "Os sete maridos de Evelyn Hugo 🔎",
        anoDeLancamento: 2017,
        linkDoTitulo: "https://en.wikipedia.org/wiki/The_Seven_Husbands_of_Evelyn_Hugo",
        categorias: ["tecnico", "filosofico", "ciencia"],
        imagemLivro: "https://m.media-amazon.com/images/I/41xVhz5sL1L._SX346_BO1,204,203,200_.jpg"
    
    }

    const livros = []

    livros.push(objeto1)
    livros.push(objeto2)
    livros.push(objeto3)
    livros.push(objeto4)
    livros.push(objeto5)
    livros.push(objeto6)
    livros.push(objeto7)
    livros.push(objeto8)
    livros.push(objeto9)
    
    // Manipulando categorias - convertendo em string
    for (let livroObjeto of livros) {
        livroObjeto.categorias = livroObjeto.categorias.join(", ")
    }

    return livros
}

// Função responsável por listar livros na tela
function criaTela(livrosFiltrados) {
    for (let livroObjeto of livrosFiltrados) {
        const articleElement = document.getElementById("biblioteca")
        const sectionElement = document.createElement("section")
    
        const titulo = document.createElement("h1")
        titulo.setAttribute("class", "titulo")
    
        const linkW = document.createElement("a")
        linkW.setAttribute("href", livroObjeto.linkDoTitulo)
    
        linkW.innerHTML = `"${livroObjeto.titulo} 🔎"`
    
        const imagem = document.createElement("img")
        imagem.setAttribute("src", livroObjeto.imagemLivro)
        imagem.setAttribute("alt", livroObjeto.titulo)
    
        titulo.insertAdjacentElement('beforeend', linkW)
        
        const anoDeLancamento = document.createElement("p")
        anoDeLancamento.innerHTML = `Ano de Lançamento: ${livroObjeto.anoDeLancamento}`
    
        const categorias = document.createElement("p")
        categorias.innerHTML = `Categorias: ${livroObjeto.categorias}`
    
    
        articleElement.insertAdjacentElement('beforeend', sectionElement)
        sectionElement.insertAdjacentElement('beforeend', titulo)
        sectionElement.insertAdjacentElement('beforeend', imagem)
        sectionElement.insertAdjacentElement('beforeend', anoDeLancamento)
        sectionElement.insertAdjacentElement('beforeend', categorias)
    }
}

// Função responsável por filtrar lista de livros
function buscaLivro() { 
    const valorDoInput = document.getElementById("Livro")
    const filtro = valorDoInput.value
    
    
    const articleElement = document.getElementById("biblioteca")
    articleElement.innerHTML = ""

    const livrosFiltrados = []

    for (let LivroEscolhido of livros) {
        if (LivroEscolhido.titulo.toLocaleLowerCase() == filtro.toLocaleLowerCase()) {
            livrosFiltrados.push(LivroEscolhido)
        }
    }

    if(livrosFiltrados.length > 0) {
        criaTela(livrosFiltrados)
    } else if (filtro.length === 0) {
        criaTela(livros)
    } else {
        alert("Livro não encontrado")
        criaTela(livros)
    }

   
}


// Inicio do sistema
const livros = geraLivros();

criaTela(livros)


// Anotações

// semana 1 : Pense em algum item ( livro )

//livro

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


// livros.push(objeto1,objeto2,objeto3)
// console.log(livros)

// if (objeto1.valido) {
    
// } else {
//     alert("o item n foi adicionado")
// }

// if (objeto2.valido) {
//     livros.push(objeto2)
// } else {
//     alert("o item não foi adicionado")
// }

// if (objeto3.valido) {
//     livros.push(objeto3)
// } else {
//     alert("o item n foi adicionado")
// }

// if (objeto4.valido) {
//     livros.push(objeto4)
// } else {
//     alert("o item não foi adicionado")
// }

// if (objeto5.valido) {
//     livros.push(objeto5)
// } else {
//     alert("o item n foi adicionado")
// }

// if (objeto6.valido) {
//     livros.push(objeto6)
// } else {
//     alert("o item não foi adicionado")
// }

// if (objeto7.valido) {
//     livros.push(objeto7)
// } else {
//     alert("o item n foi adicionado")
// }

// if (objeto8.valido) {
//     livros.push(objeto8)
// } else {
//     alert("o item não foi adicionado")
// }

// if (objeto9.valido) {
//     livros.push(objeto9)
// } else {
//     alert("o item não foi adicionado")
// }

// for (let livro of livros) {
//     objetoParaString(livro)

//     console.log("----------------------");
// }

// function objetoParaString(livroParafuncao) {
//     for (let propriedade in livroParafuncao) {
//         console.log(`${propriedade}: ${livroParafuncao[propriedade]}`)
//     }

// }

// function buscaLivroTitulo(titulo, arrayDeObjetos) {
//     for (let LivroEscolhido of arrayDeObjetos) {
//         if (LivroEscolhido.titulo.toLocaleLowerCase() == titulo.toLocaleLowerCase()) {
//             console.log(LivroEscolhido)
//             return LivroEscolhido
//         }

//     } alert("Livro não encontrado")

// }

// buscaLivroTitulo("after", livros)