

let allAgentes = []

reyna = {
    nome: "reyna",
    idade: 25,
    classe: "Duelista",
    existe: true,
    habilidades: ["Comedora de Alma", "Intagibilidade", "Olho que cega", "Eles vão temer"],
    imagem: "./img/personagens/reyna_thumbnail-min.png",
    link: "https://playvalorant.com/pt-br/agents/reyna/",
    posicao: 1,
}

viper = {
    nome: "viper",
    idade: 30,
    classe: "Controlador",
    existe: true,
    habilidades: ["Peido Tenebroso", "Parede de fumaça", "Veneninho Slime", "Bob Marley"],
    imagem: "./img/personagens/viper.png",
    link: "https://playvalorant.com/pt-br/agents/viper/",
    posicao: 2,
}

phoenix = {
    nome: "phoenix",
    idade: 26,
    classe: "Duelista",
    existe: true,
    habilidades: ["Bola curva", "Batata quente", "Parede de fogo", "Phoenix Negra"],
    imagem: "./img/personagens/phoenix_thumbnail-min.png",
    link: "https://playvalorant.com/pt-br/agents/phoenix/",
    posicao: 3,
}

sova = {
    nome: "sova",
    idade: 33,
    classe: "Iniciador",
    existe: true,
    habilidades: ["Flecha ricochete", "Flecha Rastreadora", "Drone Abelha", "Não Existe Fusca!"],
    imagem: "./img/personagens/sova_thumbnail-min.png",
    link: "https://playvalorant.com/pt-br/agents/sova/",
    posicao: 4,
}


let media = (sova.idade + reyna.idade + viper.idade) / 3
let existe = (sova.existe && reyna.existe && viper.existe)

console.log(media)
console.log(existe)

// SEMANA 2.2

// SEMANA 4.2 
if (sova.existe) {
    allAgentes.push(reyna)
} else {
    alert("Não foi adicionado ao array porque o agente não existe.")
}
if (reyna.existe) {
    allAgentes.push(viper)
} else {
    alert("Não foi adicionado ao array porque o agente não existe.")
}
if (viper.existe) {
    allAgentes.push(sova)
} else {
    alert("Não foi adicionado ao array porque o agente não existe.")
}

if (phoenix.existe) {
    allAgentes.push(phoenix)
} else {
    alert("Não foi adicionado ao array porque o agente não existe.")
}

console.log(allAgentes)

// // SEMANA 5
let stringAgentes1 = ``
for (i in reyna.habilidades) {
    stringAgentes1 += `${reyna.habilidades[i]}, `
}

console.log(stringAgentes1)

let stringAgentes2 = ``
for (i in sova.habilidades) {
    stringAgentes2 += `${sova.habilidades[i]}, `
}

console.log(stringAgentes2)

let stringAgentes3 = ``
for (i in viper.habilidades) {
    stringAgentes3 += `${viper.habilidades[i]}, `
}

console.log(stringAgentes3)

// console.log(nome.toUpperCase(), idade1, classe1, existe1, habilidade1)
// console.log(nome.toUpperCase(), idade2, classe2, existe2, habilidade2)
// console.log(nome.toUpperCase(), idade3, classe3, existe3, habilidade3)

// SEMANA 5.2 
let agentes = []
agentes.push(reyna, sova, viper)

for (let i in allAgentes) {
    for (j in allAgentes[i]) {
        console.log(allAgentes[i][j])
    }

}

// SEMANA 6.1 

// function imprimiAgente(objeto) {
//     let stringObjeto = ``
//     stringObjeto = objeto
//     console.log(stringObjeto)
// }

// imprimiAgente(reyna)

// SEMANA 6.2

function retornaAgente(allAgentes, string) {
    let retornaAgente;
    for (let i in allAgentes) {      
            if (allAgentes[i].nome === string) {
                retornaAgente = allAgentes[i]
            }
        }
        return retornaAgente
    }


retornaAgente(allAgentes, "")

// SEMANA 11
// Puxar o local do html que queremos alterar(adicionar ou retirar)

const main = document.getElementById("main")
const div = document.createElement("div")
div.setAttribute("id", "divSections")
div.setAttribute("class", "div-sections")

function imprimeObjeto(objeto, div){
    const section1 = document.createElement("section")
    section1.setAttribute("id", `section`)
    section1.innerHTML += `<img src= ${objeto.imagem}>`
    const ul1 = document.createElement("ul")
    ul1.innerHTML += `<li class="texto">Nome: <a target="_blank" href=${objeto.link}>${objeto.nome}</a></li>`
    ul1.innerHTML += `<><li class="texto">Idade: ${objeto.idade}</li>`
    ul1.innerHTML += `<><li class="texto">Classe: ${objeto.classe}</li>`
    ul1.innerHTML += `<><li class="texto">Habilidades: ${objeto.habilidades.join(", ")}`
    section1.appendChild(ul1)
    section1.insertAdjacentElement("beforeend", ul1)
    div.appendChild(section1)
    div.insertAdjacentElement("afterbegin", section1)
}



// ESSA FUNÇÃO RECEBE UM ARRAY DE OBJETOS E RETORNA A IMPRESSÃO DE TODOS OS OBJETOS NA TELA. 

function imprimeItems(div, main) {
    for (i of allAgentes) {
        imprimeObjeto(i, div)
        
    }
    main.appendChild(div)
    main.insertAdjacentElement("beforeend", div)
}
addEventListener(onload,imprimeItems(div, main))


function busca(event){
    event.preventDefault()
    const main = document.querySelector("main")
    const input = document.querySelector("input")
    const string = input.value.toLowerCase().trim()
    if (string.length === 0){
        alert("Digite um agente válido")
        hideAlert()
         //esconde o alerta para não ficar popando na tela.
    }
    document.querySelector("#divSections").remove()
    const objeto = retornaAgente(allAgentes, string)
    const divBusca = document.createElement("div")
    divBusca.setAttribute("class", "divBusca")
    divBusca.setAttribute("id", "divSections")
    imprimeObjeto(objeto, divBusca)
    main.appendChild(divBusca)
    main.insertAdjacentElement("afterend", divBusca)
    main.appendChild(divSections)
}

