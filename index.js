// Título ---------------------------
console.log("Eventos Disponíveis")

// Francisco El Hombre ----------------------------
const evento1 = {
    nome: "Francisco El Hombre".toUpperCase(),
    diaDoEvento: "9/11/22",
    estiloMusical: "Pop",
    tempoDoEvento: 40,
    tipoDeEvento: "Híbrido",
    chatComIdolo: true,
    musicasTocadas: ["Calor na Rua", " Triste, Louco ou Má", " Batida do Amor", " O Tempo é sua Morada", " La Pachanga!"],
    imagem: `./asset/Francisco-El-Hombre1.jpeg`
};

console.log(evento1)

// Guitaura Medieval ----------------------------
const evento2 = {
    nome: "Guitaura Medieval".toUpperCase(),
    diaDoEvento: "15/11/22",
    estiloMusical: "Folk Musical",
    tempoDoEvento: 50,
    tipoDeEvento: "Online",
    chatComIdolo: true,
    musicasTocadas: ["Solomon's Fire", "Running Up That Hill", " What's your legacy", " This is Guitaura."],
    imagem: `./asset/IMG_3350.jpg`
};

console.log(evento2)

// Plutão Já Foi Planeta ----------------------------
const evento3 = {
    nome: "Plutão Já Foi Planeta".toUpperCase(),
    diaDoEvento: "7/12/22",
    estiloMusical: "Pop",
    tempoDoEvento: 30,
    tipoDeEvento: "Online",
    chatComIdolo: false,
    musicasTocadas: ["Você Não É Mais Planeta", " Viagem Perdida", " Daqui pra Lá", " O Ficar e o Ir da Gente."],
    imagem: `./asset/plutao01.jpeg`,
};

console.log(evento3)

// Emicida ----------------------------
const evento4 = {
    nome: "Emicida".toUpperCase(),
    diaDoEvento: "15/12/22",
    estiloMusical: "Hip-Hop/Rap",
    tempoDoEvento: 40,
    tipoDeEvento: "Híbrido",
    chatComIdolo: true,
    musicasTocadas: ["Passarinhos", " AmarElo", " A Ordem Natural das Coisas", " Pequenas Alegrias da Vida Adulta", " Principia"],
    imagem: `./asset/emicida-grid.webp`
};

console.log(evento4)

//média
let mediaTemporEvento = (evento1.tempoDoEvento + evento2.tempoDoEvento + evento3.tempoDoEvento + evento4.tempoDoEvento) / 4

console.log(`Média de tempo dos eventos disponíveis: ${mediaTemporEvento} minutos`)

//verificar booleanos
const verificarchatComIdolos = evento1.chatComIdolo && evento2.chatComIdolo && evento3.chatComIdolo && evento4.chatComIdolo
console.log(`Todos os eventos iram bater papo com o Ídolo? ${verificarchatComIdolos}`)

//array pra guardar os objetos

const todosEventos = []

if (evento1.chatComIdolo) {
    todosEventos.push(evento1)
    //console.log(`Francisco El Hombre aceitou fazer o Chat com o Ídolo!`)
} else {
    alert(`Francisco El Hombre não aceitou fazer o Chat com o Ídolo!`)
}

if (evento2.chatComIdolo) {
    todosEventos.push(evento2)
    //console.log(`Guitaura Medieval aceitou fazer o Chat com o Ídolo!`)
} else {
    alert(`Guitaura Medieval não aceitou fazer o Chat com o Ídolo!`)
}

if (evento3.chatComIdolo) {
    todosEventos.push(evento3)
    //console.log(`Plutão Já Foi Planeta aceitou fazer o Chat com o Ídolo!`)
} else {
    alert(`Plutão Já Foi Planeta não aceitou fazer o Chat com o Ídolo!`)
}

if (evento4.chatComIdolo) {
    todosEventos.push(evento4)
    //console.log(`Emicida aceitou fazer o Chat com o Ídolo!`)
} else {
    alert(`Emicida não aceitou fazer o Chat com o Ídolo!`)
}

console.log(`Eventos que irão utilizar o Chat com o Ídolo:`)
console.log(todosEventos)

//valores da propriedade array do objeto em uma mesma string

console.log("=====EX01 - NOVO ARRAY STRING=====")

let arrayStringEventos = []

for (let i = 0; i < todosEventos.length; i++) {
    arrayStringEventos.push(todosEventos[i].nome)
    arrayStringEventos.push(todosEventos[i].diaDoEvento)
    arrayStringEventos.push(todosEventos[i].estiloMusical)
    arrayStringEventos.push(todosEventos[i].tipoDeEvento)
    arrayStringEventos.push(todosEventos[i].chatComIdolo)
    arrayStringEventos.push(todosEventos[i].musicasTocadas.join())
}

console.log(arrayStringEventos)

console.log("=====EX02 - LOOP ARRAY STRING=====")

//Ainda no relatório, altere-o para que ele seja criado utilizando um laço. Ou seja, você não deve mais imprimir 
// individualmente cada item do relatório. Cada item deve ser exibido a partir de uma iteração do laço. 
// Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.

for (let evento of todosEventos) {
    for (let i in evento) {
        console.log(`${i}: ${evento[i]}`)
    }
}

//Crie uma função que receba como parâmetro um objeto, e devolva a string 
//do relatório com os dados do objeto.

console.log("=====EX03 - FUNÇÃO RECEBE OBJETO=====")

const funcaoEventos = (novoEventos) => {
    for (let i = 0; i < todosEventos.length; i++) {
        console.log(`${novoEventos[i].nome}, ${novoEventos[i].diaDoEvento}, ${novoEventos[i].estiloMusical}, ${novoEventos[i].tipoDeEvento}, ${novoEventos[i].chatComIdolo}, ${novoEventos[i].musicasTocadas}`)
    }
}

funcaoEventos(todosEventos)

//Crie uma função que recebe um array de objetos e uma string. 
//Esta função deve retornar um objeto, e o objeto 
// retornado deve possuir apenas os itens que tenham o nome/título igual 
//à string passada como parâmetro. Caso não exista um item, exiba um 
//ALERT indicando que nenhum item foi encontrado.

console.log("=====EX04 - FUNÇÃO RECEBE OBJETO=====")

const recebeArrayObjetos = (arrayInformado, stringInformada) => {
    const resultado = arrayInformado.filter((item) => {

        return item.nome === stringInformada
    })
    if (resultado.length > 0) {
        console.log(resultado)
    } else {
        alert("Nenhum Evento encontrado")
    }
}

console.log(recebeArrayObjetos(todosEventos, "GUITAURA MEDIEVAL"))

//DOM INSERIR OBJETOS

const valoresObjeto = ["Data", "Estilo Musical", "Tempo de Show(min)", "Tipo de Evento", "Chat com o Ídolo", "Playlist Principal", "", ""]
const tabela = document.getElementsByClassName("listaEvento")

let c = 0
for (let i in evento1) {
    if (i !== "imagem" && i !== "nome") {
        let linha = document.createElement("li")
        const conteudoNovo = document.createTextNode(`${valoresObjeto[c]}: ${evento1[i]}`)
        linha.appendChild(conteudoNovo)
        tabela[0].insertAdjacentElement("beforeend", linha)
        console.log(i)
        c++
    }
}

let c1 = 0
for (let i in evento2) {
    if (i !== "imagem" && i !== "nome") {
        let linha = document.createElement("li")
        const conteudoNovo = document.createTextNode(`${valoresObjeto[c1]}: ${evento2[i]}`)
        linha.appendChild(conteudoNovo)
        tabela[1].insertAdjacentElement("beforeend", linha)
        console.log(i)
        c1++
    }
}

let c2 = 0
for (let i in evento3) {
    if (i !== "imagem" && i !== "nome") {
        let linha = document.createElement("li")
        const conteudoNovo = document.createTextNode(`${valoresObjeto[c2]}: ${evento3[i]}`)
        linha.appendChild(conteudoNovo)
        tabela[2].insertAdjacentElement("beforeend", linha)
        console.log(i)
        c2++
    }
}

let c3 = 0
for (let i in evento4) {
    if (i !== "imagem" && i !== "nome") {
        let linha = document.createElement("li")
        const conteudoNovo = document.createTextNode(`${valoresObjeto[c3]}: ${evento4[i]}`)
        linha.appendChild(conteudoNovo)
        tabela[3].insertAdjacentElement("beforeend", linha)
        console.log(i)
        c3++
    }
}

//DOM INSERIR TÍTULO
let titulo = document.getElementsByClassName("tituloH2")


//Evento 1
const criarTagH1 = document.createElement("h2")
const novoConteudo1 = document.createTextNode(evento1.nome)
criarTagH1.appendChild(novoConteudo1)
titulo[0].insertAdjacentElement("afterbegin", criarTagH1)

//Evento 2

const criarTagH2 = document.createElement("h2")
const novoConteudo2 = document.createTextNode(evento2.nome)
criarTagH2.appendChild(novoConteudo2)
titulo[1].insertAdjacentElement("afterbegin", criarTagH2)

//Evento 3

const criarTagH3 = document.createElement("h2")
const novoConteudo3 = document.createTextNode(evento3.nome)
criarTagH3.appendChild(novoConteudo3)
titulo[2].insertAdjacentElement("afterbegin", criarTagH3)

//Evento 2

const criarTagH4 = document.createElement("h2")
const novoConteudo4 = document.createTextNode(evento4.nome)
criarTagH4.appendChild(novoConteudo4)
titulo[3].insertAdjacentElement("afterbegin", criarTagH4)


//DOM BUSCADOR

let input = document.getElementById("nome")
const todosEventosHtml = document.querySelectorAll(".todosEventos")
const listaEvento = document.querySelectorAll(".listaEvento")
const imagemEvento = document.querySelectorAll(".imagem")
const tituloEvento = document.querySelectorAll(".tituloH2")
const geralEventos = document.querySelectorAll(".geralEventos")

const removerEvento1 = document.querySelector("#removerEvento1")
const paiEvento1 = removerEvento1.parentNode
const removerEvento2 = document.querySelector("#removerEvento2")
const paiEvento2 = removerEvento2.parentNode
const removerEvento3 = document.querySelector("#removerEvento3")
const paiEvento3 = removerEvento3.parentNode
const removerEvento4 = document.querySelector("#removerEvento4")
const paiEvento4 = removerEvento4.parentNode

function selecionarEvento() {
    if (evento1.nome === input.value) {
        paiEvento2.removeChild(removerEvento2)
        paiEvento3.removeChild(removerEvento3)
        paiEvento4.removeChild(removerEvento4)
        input.value = ""
    } else if (evento2.nome === input.value) {
        removerEvento1.parentNode.removeChild(removerEvento1)
        removerEvento3.parentNode.removeChild(removerEvento3)
        removerEvento4.parentNode.removeChild(removerEvento4)
        input.value = ""
    } else if (evento3.nome === input.value) {
        removerEvento1.parentNode.removeChild(removerEvento1)
        removerEvento2.parentNode.removeChild(removerEvento2)
        removerEvento4.parentNode.removeChild(removerEvento4)
        input.value = ""
    } else if (evento4.nome === input.value) {
        removerEvento1.parentNode.removeChild(removerEvento1)
        removerEvento2.parentNode.removeChild(removerEvento2)
        removerEvento3.parentNode.removeChild(removerEvento3)
        input.value = ""
    } else {
        alert("Nenhum Evento encontrado")
    }
}

function devolverPesquisaEvento() {
    if (input.value === "") {
        paiEvento1.appendChild(removerEvento1)
        paiEvento2.appendChild(removerEvento2)
        paiEvento3.appendChild(removerEvento3)
        paiEvento4.appendChild(removerEvento4)    
    }
}


//DOM ADD LADO BOTÃO COMPRAR

// const dadosIngressos1 = {
//     online: 'R$50,00',
//     pista: 'R$100,00',
//     arquibancada: 'R$120,00',
//     camarote: 'R$150,00',
//     alaVip: 'R$300,00',
// }

// const dadosIngressos2 = {
//     online: 'R$50,00',
//     pista: 'R$100,00',
//     arquibancada: 'R$120,00',
//     camarote: 'R$150,00',
//     alaVip: 'R$300,00',
// }

// const dadosIngressos3 = {
//     online: 'R$50,00',
//     pista: 'R$100,00',
//     arquibancada: 'R$120,00',
//     camarote: 'R$150,00',
//     alaVip: 'R$300,00',
// }

// const dadosIngressos4 = {
//     online: 'R$50,00',
//     pista: 'R$100,00',
//     arquibancada: 'R$120,00',
//     camarote: 'R$150,00',
//     alaVip: 'R$300,00',
// }

// const valoresObjetoIngressos = ["Online", "Pista", "Arquibancada", "Camarote", "Área Vip"]
// const tabelaIngressos = document.getElementsByClassName("listaIngressoVenda")

// let e = 0
// for (let i in dadosIngressos1) {
//         let linha = document.createElement("li")
//         const conteudoNovo = document.createTextNode(`${valoresObjetoIngressos[e]}: ${dadosIngressos1[i]}`)
//         linha.appendChild(conteudoNovo)
//         tabela[0].insertAdjacentElement("beforeend", linha)
//         console.log(i)
//         e++
// }

// let f = 0
// for (let i in dadosIngressos2) {
//         let linha = document.createElement("li")
//         const conteudoNovo = document.createTextNode(`${valoresObjetoIngressos[f]}: ${dadosIngressos2[i]}`)
//         linha.appendChild(conteudoNovo)
//         tabela[0].insertAdjacentElement("beforeend", linha)
//         console.log(i)
//         f++
// }

// let g = 0
// for (let i in dadosIngressos3) {
//         let linha = document.createElement("li")
//         const conteudoNovo = document.createTextNode(`${valoresObjetoIngressos[g]}: ${dadosIngressos3[i]}`)
//         linha.appendChild(conteudoNovo)
//         tabela[0].insertAdjacentElement("beforeend", linha)
//         console.log(i)
//         g++
// }

// let h = 0
// for (let i in dadosIngressos4) {
//         let linha = document.createElement("li")
//         const conteudoNovo = document.createTextNode(`${valoresObjetoIngressos[h]}: ${dadosIngressos4[i]}`)
//         linha.appendChild(conteudoNovo)
//         tabela[0].insertAdjacentElement("beforeend", linha)
//         console.log(i)
//         h++
// }
