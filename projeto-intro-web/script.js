//Programa que mostra vencedores do oscar

let filme1 = {
    titulo: "Parasita",
    duracao: 132,
    ganhouOscar: true,
    anoDeLançamento: 2019,
    atores: ["Song Kang-ho", "Sun-kyun Lee", "Cho Yeo-jeong"],
    imagem: "./midia/parasita.jpg"
}

let filme2 = {
    titulo: "Moonlight",
    duracao: 111,
    ganhouOscar: true,
    anoDeLançamento: 2016,
    atores: ["Mahersala Ali", "Naomie Harris", "Trevante Rhodes"],
    imagem: "./midia/Moonlight.jpg"
}

let filme3 = {
    titulo: "Green book",
    duracao: 130,
    ganhouOscar: true,
    anoDeLançamento: 2018,
    atores: ["Viggo Mortensen", "Mahersala Ali", "Linda Cardellini"],
    imagem: "./midia/green book.jpg"
}

let filme4 = {
    titulo: "No Ritmo do Coração",
    duracao: 111,
    ganhouOscar: true,
    anoDeLançamento: 2021,
    atores: ["Emilia Jones", "Marlee Matlin", "Troy Kotsur"],
    imagem: "./midia/codamovie.jpg"
}

const media = (filme1.duracao + filme2.duracao + filme3.duracao + filme4.duracao) / 4
console.log("A média de duração dos filmes é de:", (media), "minutos")

const temOscar = filme1.ganhouOscar && filme2.ganhouOscar && filme3.ganhouOscar && filme4.ganhouOscar
console.log("Os filmes ganharam Oscars?", temOscar)

// console.log(`Título do filme: ${filme1.titulo.toUpperCase()}
// Ano de Lançamento: ${filme1.anoDeLançamento}
// Duração do filme: ${filme1.duracao} minutos
// O filme tem oscar? ${filme1.ganhouOscar}
// Nome dos atores: ${filme1.atores}.
// `)

// console.log(`Título do filme: ${filme2.titulo.toUpperCase()}
// Ano de Lançamento: ${filme2.anoDeLançamento}
// Duração do filme: ${filme2.duracao} minutos
// O filme tem oscar? ${filme2.ganhouOscar}
// Nome dos Atores: ${filme2.atores}.
// `)

// console.log(`Título do filme: ${filme3.titulo.toUpperCase()}
// Ano de Lançamento: ${filme3.anoDeLançamento}
// Duração do filme: ${filme3.duracao} minutos
// O filme tem oscar? ${filme3.ganhouOscar}
// Nome dos Atores: ${filme3.atores}.
// `)

// console.log(`Título do filme: ${filme4.titulo.toUpperCase()}
// Ano de Lançamento: ${filme4.anoDeLançamento}
// Duração do filme: ${filme4.duracao} minutos
// O filme tem oscar? ${filme4.ganhouOscar}
// Nome dos Atores: ${filme4.atores}.
// `)

const arrayFilmes = []

if (filme1.ganhouOscar === true) {
    arrayFilmes.push(filme1)
} else {
    alert("Erro! O item não foi adicionado")
}

if (filme2.ganhouOscar === true) {
    arrayFilmes.push(filme2)
} else {
    alert("Erro! O item não foi adicionado")
}

if (filme3.ganhouOscar === true) {
    arrayFilmes.push(filme3)
} else {
    alert("Erro! O item não foi adicionado")
}

if (filme4.ganhouOscar === true) {
    arrayFilmes.push(filme4)
} else {
    alert("Erro! O item não foi adicionado")
}

console.log("Lista com filmes que ganharam Oscars:", arrayFilmes)

const transformaEmString = (filmes) => {
    for (let i = 0; i < 1; i++) {
        const stringAtores = filmes.atores.join(", ")
        filmes.atores = stringAtores
    }
}

transformaEmString(filme1)
transformaEmString(filme2)
transformaEmString(filme3)
transformaEmString(filme4)

function relatorio(filmes){
    for(item in filmes){
        console.log(`${item}: ${filmes[item]}`)
    }
}

relatorio(filme1)
relatorio(filme2)
relatorio(filme3)
relatorio(filme4)

const imprimirArray = (filmes) => {
    for(let i = 0; i < filmes.length; i++){
    console.log(`Título do filme: ${filmes[i].titulo.toUpperCase()}
Duração do filme: ${filmes[i].duracao} minutos
O filme tem oscar? ${filmes[i].ganhouOscar}
Lançado no ano de ${filmes[i].anoDeLançamento}
Estrelado por ${filmes[i].atores}`)
    }
}


imprimirArray(arrayFilmes)

//Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.


let animaçao1 = {
    titulo: "Divertida Mente",
    duracao: 95,
    ganhouOscar: true,
    anoDeLançamento: 2015,
    atores: ["Amy Poehler", "Bill Hader", "Lewis Black"],
    imagem: "./midia/divertida-mente.jpg"
}

let animaçao2 = {
    titulo: "Viva: A Vida é uma Festa",
    duracao: 105,
    ganhouOscar: true,
    anoDeLançamento: 2017,
    atores: ["Anthony Gonzalez", "Gael García Bernal", "Benjamin Bratt"],
    imagem: "./midia/viva-poster.jpg"
}

let animaçao3 = {
    titulo: "Toy Story 4",
    duracao: 100,
    ganhouOscar: true,
    anoDeLançamento: 2019,
    atores: ["Tom Hanks", "Tim Allen", "Annie Potts"],
    imagem: "./midia/toy-story4.jpg"
}

let animaçao4 = {
    titulo: "Soul",
    duracao: 100,
    ganhouOscar: true,
    anoDeLançamento: 2020,
    atores: ["Jamie Foxx", "Tina Fey", "Graham Norton"],
    imagem: "./midia/soul.jpg"
}

const mediaAnimaçao = (animaçao1.duracao + animaçao2.duracao + animaçao3.duracao + animaçao4.duracao) / 4
console.log("A média de duração das animações é de:", (mediaAnimaçao), "minutos")

const temOscar2 = animaçao1.ganhouOscar && animaçao2.ganhouOscar && animaçao3.ganhouOscar && animaçao4.ganhouOscar
console.log("Os filmes ganharam Oscars?", temOscar)

if (temOscar2 === true) {
    arrayFilmes.push(animaçao1, animaçao2, animaçao3, animaçao4)
} else {
    alert("Erro! O item não foi adicionado")
}

transformaEmString(animaçao1)
transformaEmString(animaçao2)
transformaEmString(animaçao3)
transformaEmString(animaçao4)

let documentario1 = {
    titulo: "Indústria Americana",
    duracao: 90,
    ganhouOscar: true,
    anoDeLançamento: 2019,
    atores: ["Junming Wang", "Sherrod Brown", "Robert Allen"],
    imagem: "./midia/industria-americana.jpg"
}

let documentario2 = {
    titulo: "Summer of Soul",
    duracao: 98,
    ganhouOscar: true,
    anoDeLançamento: 2021,
    atores: ["Dorinda Drake", "Barbara Bland-Acosta", "Darryl Lewis"],
    imagem: "./midia/summer-of-soul.jpg"
}

let documentario3 = {
    titulo: "Oj: Made In America",
    duracao: 467,
    ganhouOscar: true,
    anoDeLançamento: 2016,
    atores: ["OJ Simpson", "Marcia Clark", "F. Lee Bailey"],
    imagem: "./midia/oj-madeinamerica.jpg"
}

let documentario4 = {
    titulo: "Ícaro",
    duracao: 120,
    ganhouOscar: true,
    anoDeLançamento: 2017,
    atores: ["Bryan Fogel", "Dave Zabriskie", "Don Caitlin"],
    imagem: "./midia/icaro.jpg"
}

arrayFilmes.push(documentario1, documentario2, documentario3, documentario4)
transformaEmString(documentario1)
transformaEmString(documentario2)
transformaEmString(documentario3)
transformaEmString(documentario4)

imprimirArray(arrayFilmes)
console.log("Lista com filmes que ganharam o Oscar:", arrayFilmes)

function adicionarLista (filme) {
    let filmeDuracao = document.createElement("li")
    let filmeAtores = document.createElement("li")
    let filmeDoAno = document.createElement("li")

    filmeDuracao.innerHTML = "Duração: " + filme.duracao + " minutos"
    filmeAtores.innerHTML = "Elenco: " + filme.atores
    filmeDoAno.innerHTML = "Ano de Lançamento: " +  filme.anoDeLançamento

    switch(filme.titulo){
        case "Parasita":
            const listaFilme1 = document.getElementsByTagName("ul")[0];
            listaFilme1.appendChild(filmeDoAno)
            listaFilme1.appendChild(filmeDuracao)
            listaFilme1.appendChild(filmeAtores)
            const tituloDoFilme1 = document.getElementsByClassName("titulo-filme")[0];
            tituloDoFilme1.innerHTML += filme.titulo.toUpperCase()
            const imagem1 = document.getElementById("parasita");
            imagem1.src = filme.imagem
            break
        case "Moonlight":
            const listaFilme2 = document.getElementsByTagName("ul")[1];
            listaFilme2.appendChild(filmeDoAno)
            listaFilme2.appendChild(filmeDuracao)
            listaFilme2.appendChild(filmeAtores)
            const tituloDoFilme2 = document.getElementsByClassName("titulo-filme")[1];
            tituloDoFilme2.innerHTML += filme.titulo.toUpperCase()
            const imagem2 = document.getElementById("moonlight");
            imagem2.src = filme.imagem
            break
        case "Green book":
            const listaFilme3 = document.getElementsByTagName("ul")[2];
            listaFilme3.appendChild(filmeDoAno)
            listaFilme3.appendChild(filmeDuracao)
            listaFilme3.appendChild(filmeAtores)
            const tituloDoFilme3 = document.getElementsByClassName("titulo-filme")[2];
            tituloDoFilme3.innerHTML += filme.titulo.toUpperCase()
            const imagem3 = document.getElementById("green-book");
            imagem3.src = filme.imagem
            break
        case "No Ritmo do Coração":
            const listaFilme4 = document.getElementsByTagName("ul")[3];
            listaFilme4.appendChild(filmeDoAno)
            listaFilme4.appendChild(filmeDuracao)
            listaFilme4.appendChild(filmeAtores)
            const tituloDoFilme4 = document.getElementsByClassName("titulo-filme")[3];
            tituloDoFilme4.innerHTML += filme.titulo.toUpperCase()
            const imagem4 = document.getElementById("coda");
            imagem4.src = filme.imagem
            break
        case "Divertida Mente":
            const listaFilme5 = document.getElementsByTagName("ul")[4];
            listaFilme5.appendChild(filmeDoAno)
            listaFilme5.appendChild(filmeDuracao)
            listaFilme5.appendChild(filmeAtores)
            const tituloDoFilme5 = document.getElementsByClassName("titulo-filme")[4];
            tituloDoFilme5.innerHTML += filme.titulo.toUpperCase()
            const imagem5 = document.getElementById("divertida-mente");
            imagem5.src = filme.imagem
            break
        case "Viva: A Vida é uma Festa":
            const listaFilme6 = document.getElementsByTagName("ul")[5];
            listaFilme6.appendChild(filmeDoAno)
            listaFilme6.appendChild(filmeDuracao)
            listaFilme6.appendChild(filmeAtores)
            const tituloDoFilme6 = document.getElementsByClassName("titulo-filme")[5];
            tituloDoFilme6.innerHTML += filme.titulo.toUpperCase()
            const imagem6 = document.getElementById("viva");
            imagem6.src = filme.imagem
            break
        case "Toy Story 4":
            const listaFilme7 = document.getElementsByTagName("ul")[6];
            listaFilme7.appendChild(filmeDoAno)
            listaFilme7.appendChild(filmeDuracao)
            listaFilme7.appendChild(filmeAtores)
            const tituloDoFilme7 = document.getElementsByClassName("titulo-filme")[6];
            tituloDoFilme7.innerHTML += filme.titulo.toUpperCase()
            const imagem7 = document.getElementById("toy-story");
            imagem7.src = filme.imagem
            break
        case "Soul":
            const listaFilme8 = document.getElementsByTagName("ul")[7];
            listaFilme8.appendChild(filmeDoAno)
            listaFilme8.appendChild(filmeDuracao)
            listaFilme8.appendChild(filmeAtores)
            const tituloDoFilme8 = document.getElementsByClassName("titulo-filme")[7];
            tituloDoFilme8.innerHTML += filme.titulo.toUpperCase()
            const imagem8 = document.getElementById("soul");
            imagem8.src = filme.imagem
            break
        case "Indústria Americana":
            const listaFilme9 = document.getElementsByTagName("ul")[8];
            listaFilme9.appendChild(filmeDoAno)
            listaFilme9.appendChild(filmeDuracao)
            listaFilme9.appendChild(filmeAtores)
            const tituloDoFilme9 = document.getElementsByClassName("titulo-filme")[8];
            tituloDoFilme9.innerHTML += filme.titulo.toUpperCase()
            const imagem9 = document.getElementById("industria-americana");
            imagem9.src = filme.imagem
            break
        case "Summer of Soul":
            const listaFilme10 = document.getElementsByTagName("ul")[9];
            listaFilme10.appendChild(filmeDoAno)
            listaFilme10.appendChild(filmeDuracao)
            listaFilme10.appendChild(filmeAtores)
            const tituloDoFilme10 = document.getElementsByClassName("titulo-filme")[9];
            tituloDoFilme10.innerHTML += filme.titulo.toUpperCase()
            const imagem10 = document.getElementById("summer-of-soul");
            imagem10.src = filme.imagem
            break
        case "Oj: Made In America":
            const listaFilme11 = document.getElementsByTagName("ul")[10];
            listaFilme11.appendChild(filmeDoAno)
            listaFilme11.appendChild(filmeDuracao)
            listaFilme11.appendChild(filmeAtores)
            const tituloDoFilme11 = document.getElementsByClassName("titulo-filme")[10];
            tituloDoFilme11.innerHTML += filme.titulo.toUpperCase()
            const imagem11 = document.getElementById("oj");
            imagem11.src = filme.imagem
            break
        case "Ícaro":
            const listaFilme12 = document.getElementsByTagName("ul")[11];
            listaFilme12.appendChild(filmeDoAno)
            listaFilme12.appendChild(filmeDuracao)
            listaFilme12.appendChild(filmeAtores)
            const tituloDoFilme12 = document.getElementsByClassName("titulo-filme")[11];
            tituloDoFilme12.innerHTML += filme.titulo.toUpperCase()
            const imagem12 = document.getElementById("icaro");
            imagem12.src = filme.imagem
            break
        default:
            console.log("Filme não encontrado")
    }
}

adicionarLista(filme1);
adicionarLista(filme2);
adicionarLista(filme3);
adicionarLista(filme4);
adicionarLista(animaçao1);
adicionarLista(animaçao2);
adicionarLista(animaçao3);
adicionarLista(animaçao4);
adicionarLista(documentario1);
adicionarLista(documentario2);
adicionarLista(documentario3);
adicionarLista(documentario4);

const enviar = () => {
    const input = document.getElementById("meu-input")
    const itemBuscado = input.value.toUpperCase()
    console.log(itemBuscado);
    if(itemBuscado === "PARASITA"){
        document.querySelector("#documentarios").style.display = 'none'
        document.querySelector("#animaçoes").style.display = 'none'
        document.getElementsByClassName("card")[1].style.display = 'none'
        document.getElementsByClassName("card")[2].style.display = 'none'
        document.getElementsByClassName("card")[3].style.display = 'none'
    } else if (itemBuscado === "MOONLIGHT"){
        document.querySelector("#documentarios").style.display = 'none'
        document.querySelector("#animaçoes").style.display = 'none'
        document.getElementsByClassName("card")[0].style.display = 'none'
        document.getElementsByClassName("card")[2].style.display = 'none'
        document.getElementsByClassName("card")[3].style.display = 'none'
    } else if (itemBuscado === "GREEN BOOK"){
        document.querySelector("#documentarios").style.display = 'none'
        document.querySelector("#animaçoes").style.display = 'none'
        document.getElementsByClassName("card")[0].style.display = 'none'
        document.getElementsByClassName("card")[1].style.display = 'none'
        document.getElementsByClassName("card")[3].style.display = 'none'
    } else if (itemBuscado === "NO RITMO DO CORAÇÃO"){
        document.querySelector("#documentarios").style.display = 'none'
        document.querySelector("#animaçoes").style.display = 'none'
        document.getElementsByClassName("card")[0].style.display = 'none'
        document.getElementsByClassName("card")[1].style.display = 'none'
        document.getElementsByClassName("card")[2].style.display = 'none'
    } else if (itemBuscado === "DIVERTIDA MENTE"){
        document.querySelector("#documentarios").style.display = 'none'
        document.querySelector("#filmes").style.display = 'none'
        document.getElementsByClassName("card")[5].style.display = 'none'
        document.getElementsByClassName("card")[6].style.display = 'none'
        document.getElementsByClassName("card")[7].style.display = 'none'
    } else if (itemBuscado === "VIVA: A VIDA É UMA FESTA"){
        document.querySelector("#documentarios").style.display = 'none'
        document.querySelector("#filmes").style.display = 'none'
        document.getElementsByClassName("card")[4].style.display = 'none'
        document.getElementsByClassName("card")[6].style.display = 'none'
        document.getElementsByClassName("card")[7].style.display = 'none'
    } else if (itemBuscado === "TOY STORY 4"){
        document.querySelector("#documentarios").style.display = 'none'
        document.querySelector("#filmes").style.display = 'none'
        document.getElementsByClassName("card")[4].style.display = 'none'
        document.getElementsByClassName("card")[5].style.display = 'none'
        document.getElementsByClassName("card")[7].style.display = 'none'
    } else if (itemBuscado === "SOUL"){
        document.querySelector("#documentarios").style.display = 'none'
        document.querySelector("#filmes").style.display = 'none'
        document.getElementsByClassName("card")[4].style.display = 'none'
        document.getElementsByClassName("card")[5].style.display = 'none'
        document.getElementsByClassName("card")[6].style.display = 'none'
    } else if (itemBuscado === "INDÚSTRIA AMERICANA"){
        document.querySelector("#animaçoes").style.display = 'none'
        document.querySelector("#filmes").style.display = 'none'
        document.getElementsByClassName("card")[9].style.display = 'none'
        document.getElementsByClassName("card")[10].style.display = 'none'
        document.getElementsByClassName("card")[11].style.display = 'none'
    } else if (itemBuscado === "SUMMER OF SOUL"){
        document.querySelector("#animaçoes").style.display = 'none'
        document.querySelector("#filmes").style.display = 'none'
        document.getElementsByClassName("card")[8].style.display = 'none'
        document.getElementsByClassName("card")[10].style.display = 'none'
        document.getElementsByClassName("card")[11].style.display = 'none'
    } else if (itemBuscado === "OJ: MADE IN AMERICA"){
        document.querySelector("#animaçoes").style.display = 'none'
        document.querySelector("#filmes").style.display = 'none'
        document.getElementsByClassName("card")[8].style.display = 'none'
        document.getElementsByClassName("card")[9].style.display = 'none'
        document.getElementsByClassName("card")[11].style.display = 'none'
    } else if (itemBuscado === "ÍCARO"){
        document.querySelector("#animaçoes").style.display = 'none'
        document.querySelector("#filmes").style.display = 'none'
        document.getElementsByClassName("card")[8].style.display = 'none'
        document.getElementsByClassName("card")[9].style.display = 'none'
        document.getElementsByClassName("card")[10].style.display = 'none'
    } else {
        alert("Busca não encontrada")
    }
}


