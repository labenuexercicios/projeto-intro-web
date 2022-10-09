const filmes = [
    {
        nome: "O senhor dos anéis: a sociedade do anel",
        ano: 2001,
        oscar: true,
        atores: ["Viggo Mortensen", "Cate Blachet", "Elijah Wood", "Ian McKellen"],
        imagem: "imagens/senhordosaneis.jpg"
    },
    {
        nome: "Conan, o Bárbaro",
        ano: 1982,
        oscar: false,
        atores: ["Arnold Schwarzeneg", "James Earl Jones", "Valerie Quennessen", "William Smith"],
        imagem: "imagens/conan.jpg"
    },
    {
        nome: "De volta para o futuro",
        ano: 1985,
        oscar: false,
        atores: ["Michael J Fox", "Christopher Lloyd", "Lea Thompson", "Crispin Glover"],
        imagem: "imagens/devoltaparaofuturo.jpg"
    }

]
console.log(filmes);

function funcaoGeraStringFilme(filme) {
    let imprime = `
    nome: ${filme.nome}
    ano: ${filme.ano}
    oscar: ${filme.oscar ? "Sim" : "Não"}
    atores: ${filme.atores.join(", ")}`
    console.log(imprime);
}
// funcaoGeraStringFilme(filmes[0])

function geraStringFilmes(filmes) {
    for (const filme of filmes) {
        funcaoGeraStringFilme(filme)
        console.log("=".repeat(50));
    }
}
// geraStringFilmes(filmes)


function buscarFilmes() {
    let nome = document.getElementById("pesquisarFilme").value
    console.log(nome);
    let filmesFiltrados = filmes.filter(
        filme => {
            return filme.nome.toLowerCase().includes(nome.toLowerCase())
        }
    )
    if (filmesFiltrados.length) {
        geraCards(filmesFiltrados)

    } else {
        /* alert("Filme não encontrado!") */
        principal.innerHTML = ""
        principal.innerHTML = "<h1 style='color: white;' >Filme não encontrado!!!</h1>"
    }
}


// let busca = prompt("Digite o nome do filme")

// buscarFilmes(filmes, busca)

let principal = document.getElementById("principal")

function geraCards(filmes) {
    principal.innerHTML = ""
    for (const filme of filmes) {
        geraCard(filme)
    }
}
function geraCard(filme) {
    
    let filmeCard = document.createElement("article")
    filmeCard.classList.add("filme")
    const filmeInnerHtml = `
        <figure>
            <img src=${filme.imagem} alt="poster ${filme.nome}">
        </figure>
        <ul>
            <li> <b>${filme.nome}</b> </li>
            <li>Ano: ${filme.ano}</li>
            <li>Ganhou Oscar: ${filme.oscar ? "Sim" : "Não"}</li>
            <li>Atores: ${filme.atores.join(", ")} </li>
        </ul>   
        `
    filmeCard.innerHTML = filmeInnerHtml
    principal.appendChild(filmeCard)
}

geraCards(filmes)

const idade = filmes[0].ano + filmes[1].ano + filmes[2].ano
console.log(idade);

const mediaIdade = idade / 3

console.log(mediaIdade);

console.log(`${filmes[0].nome.toLocaleUpperCase()} - ${filmes[1].nome.toLocaleUpperCase()} - ${filmes[2].nome.toUpperCase()}`);

if (filmes[0].oscar === true && filmes[1].oscar === true && filmes[2].oscar === true ) {
    console.log("Verdadeiro");
}else{
    console.log("Nem todos ganharam um oscar");
}