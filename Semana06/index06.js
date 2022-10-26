//Como estava na semana 02(concluída):

objetoPizzaSal01 = {
    foto: "./mídiasparasite/Pizza-calabresaemozarela.png",
    // fonte:,
    pizza: "Pizza de calabresa com mozarela",
    codigo: "01",
    tempoPreparo: 60,
    pizzaSalgada: true,
    ingredientes: ["🍕 1 receita de massa para pizza de forno", "🍕 1 receita de molho básico de tomate", "🍕 300g de calabresa fatiada", "🍕 400g de queijo mozarela fatiado"]
}
//console.log(objetoPizzaSal01)
//console.table(objetoPizzaSal01)

//Pizza 02:
objetoPizzaSal02 = {
    foto: "./mídiasparasite/Pizza-quatroqueijos.png",
    pizza: "Pizza de quatro queijos",
    codigo: "02",
    tempoPreparo: 60,
    pizzaSalgada: true,
    ingredientes: ["🍕 1 receita de massa para pizza de forno", "🍕 1 receita de molho básico de tomate", "🍕 100g de queijo parmesão", "🍕 150g de queijo provolone", "🍕 150g de queijo mozarela", "🍕 100g de queijo gorgonzola"]
}
//console.log(objetoPizzaSal02)
//console.table(objetoPizzaSal02)

//Pizza 03:
objetoPizzaSal03 = {
    foto: "./mídiasparasite/Pizza-abobrinhacomqueijo.png",
    pizza: "Pizza de abobrinha",
    codigo: "03",
    tempoPreparo: 50,
    pizzaSalgada: true,
    ingredientes: ["🍕 1 receita de massa para pizza de forno", "🍕 1 receita de molho básico de tomate", "🍕 2 abobrinhas cortadas em rodelas finas", "🍕 300g de queijo mozarela de búfala ralada ou cortada em fatias", "🍕 1 dente de alho amassado", "🍕 4 colheres de sopa de azeite", "🍕 Sal a gosto"]
}
//console.log(objetoPizzaSal03)
//console.table(objetoPizzaSal03)

//Pizza 04:
//Tipos de pizza doces:
objetoPizzaDoce01 = {
    foto: "./mídiasparasite/Pizza-chocolate.png",
    pizza: "Pizza de chocolate",
    codigo: "04",
    tempoPreparo: 60,
    pizzaSalgada: false,
    ingredientes: ["🍕 2 xícaras (de chá) de chocolate forneável ao leite", "🍕 1 disco de massa doce para pizza - pré assado", "🍕 1 colher de sopa de chocolate em pó", "🍕 1/2 xícara (de chá) de chocolate granulado (para povilhar)", "🍕 1/2 xícara (de chá) de cereja em calda (para decorar)"]
}
//console.log(objetoPizzaDoce01)
//console.table(objetoPizzaDoce01)

let pizzaArraySaborosas0 = []

// const pizzasSimouNao = prompt("Você deseja fazer o push dos objetos para o array?")
// if(pizzasSimouNao.toLowerCase() === "sim") {
//     pizzaSaborosas.push(objetoPizzaSal01, objetoPizzaSal02, objetoPizzaSal03, objetoPizzaDoce01)
//     } else if (pizzasSimouNao.toLowerCase() === "não") {
//         alert("O item NÃO foi adicionado com o push!")
//     } else {
//         console.log(`Resposta inadequada, por favor responda com "sim" ou "não"`)
//     }
//  console.log(pizzaSaborosas)
//  console.table(pizzaSaborosas)

if (objetoPizzaSal01.pizzaSalgada === true) {
    pizzaArraySaborosas0.push(objetoPizzaSal01)
} else {
    alert("PizzaSal01 NÃO foi adicionada no array!")
}
if (objetoPizzaSal02.pizzaSalgada === true) {
    pizzaArraySaborosas0.push(objetoPizzaSal02)
} else {
    alert("PizzaSal02 NÃO foi adicionada no array!")
}
if (objetoPizzaSal03.pizzaSalgada === true) {
    pizzaArraySaborosas0.push(objetoPizzaSal03)
} else {
    alert("PizzaSal03 NÃO foi adicionada no array!")
}
if (objetoPizzaDoce01.pizzaSalgada !== true) {
    pizzaArraySaborosas0.push(objetoPizzaDoce01)
} else {
    alert("PizzaDoce01 NÃO foi adicionada no array!")
}
// console.log(`${objetoPizzaSal01.pizza}\n ${objetoPizzaSal01.tempoPreparo}\n ${objetoPizzaSal01.pizzaSalgada}\n ${objetoPizzaSal01.ingredientes.join(", ")}`)
// console.log(`${objetoPizzaSal02.pizza}\n ${objetoPizzaSal02.tempoPreparo}\n ${objetoPizzaSal02.pizzaSalgada}\n ${objetoPizzaSal02.ingredientes.join(", ")}`)
// console.log(`${objetoPizzaSal03.pizza}\n ${objetoPizzaSal03.tempoPreparo}\n ${objetoPizzaSal03.pizzaSalgada}\n ${objetoPizzaSal03.ingredientes.join(", ")}`)
//console.log(`${objetoPizzaDoce01.pizza}\n ${objetoPizzaDoce01.tempoPreparo}\n ${objetoPizzaDoce01.pizzaSalgada}\n ${objetoPizzaDoce01.ingredientes.join(",")}`)

console.log(pizzaArraySaborosas0)

//----------------------------------------------------------------------------------------------------------------------------------------------

//Projeto semana 03:

// 1. Reescrevendo o relatório criado utilizando console.log() que começamos na semana 2, 
//altere a forma que a característica de array dos itens seja escrita como um laço que guarde todos os valores da propriedade array do objeto em uma mesma string. 
//Utilize esta string no relatório.
// 💡 Chamamos este processo de reescrever um código já escrito, de refatoração.
// Exemplo:
// //ANTES 
// FULANO
// idade: 33
// verificou email?: false
// projetos: ["Projeto de HTML", "Projeto de CSS", "Projeto React"] 

//Obs: ver na semana 02 que está acima.

// //DEPOIS
// FULANO
// idade: 33
// verificou email?: false
// projetos: "Projeto de HTML,Projeto de CSS,Projeto React" 

//Como ficou:
// console.log(`${objetoPizzaSal01.pizza}\n ${objetoPizzaSal01.tempoPreparo}\n ${objetoPizzaSal01.pizzaSalgada}\n ${objetoPizzaSal01.ingredientes.join(", ")}`)
// console.log(`${objetoPizzaSal02.pizza}\n ${objetoPizzaSal02.tempoPreparo}\n ${objetoPizzaSal02.pizzaSalgada}\n ${objetoPizzaSal02.ingredientes.join(", ")}`)
// console.log(`${objetoPizzaSal03.pizza}\n ${objetoPizzaSal03.tempoPreparo}\n ${objetoPizzaSal03.pizzaSalgada}\n ${objetoPizzaSal03.ingredientes.join(", ")}`)

// console.log(`${objetoPizzaSal01.pizza}\n ${objetoPizzaSal01.tempoPreparo}\n ${objetoPizzaSal01.pizzaSalgada}\n ${objetoPizzaSal01.ingredientes.join(", ")}
// ${objetoPizzaSal02.pizza}\n ${objetoPizzaSal02.tempoPreparo}\n ${objetoPizzaSal02.pizzaSalgada}\n ${objetoPizzaSal02.ingredientes.join(", ")}
// ${objetoPizzaSal03.pizza}\n ${objetoPizzaSal03.tempoPreparo}\n ${objetoPizzaSal03.pizzaSalgada}\n ${objetoPizzaSal03.ingredientes.join(", ")}`)

// 2. Ainda no relatório, altere-o para que ele seja criado utilizando um laço. Ou seja, 
//você não deve mais imprimir individualmente cada item do relatório. 
//Cada item deve ser exibido a partir de uma iteração do laço. 
//Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.
// //ANTES 
// console.log(elementos[0].item);

// //DEPOIS
// FULANO
// for(elemento in elementos){
//   console.log(elemento.item);
// }

//Como ficou:
// console.log("Exercício 2")
// let relatorio = (array) => {
//     let string = []
//     for(let i in pizzaArraySaborosas0){
//         string.push(`${Number(i)+1}:${pizzaSaborosas1[i].ingredientes}`)
//     }
//     return string
// }
// for (let i in pizzaArraySaborosas0) {
//     console.log(pizzaArraySaborosas0[i].pizza.toUpperCase(), pizzaArraySaborosas0[i].tempoPreparo, pizzaArraySaborosas0[i].pizzaSalgada, pizzaArraySaborosas0[i].ingredientes.join())
// }
// console.log(pizzaArraySaborosas0)

//ESSE É O QUE VALE DE VERDADE! SEGUE ABAIXO:
console.log("Exercício 2")
for (pizzaString of pizzaArraySaborosas0) {
    for (propriedadeObjeto in pizzaString) {
        console.log(`${propriedadeObjeto}: ${pizzaString[propriedadeObjeto]}`)
    }
}

// 3. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.

//Como fiz:
console.log("Exercício 3")
let saborDePizza = "Pizza de calabresa com mozarela"

const separarSabores = pizzaArraySaborosas0.filter((substitutoPizza) => {
    return substitutoPizza.pizza === saborDePizza
})
console.log(separarSabores)


const pizzasSalgadas = (saborosasSalgadas) => {
    for (let i = 0; i < saborosasSalgadas.length; i++) {
        console.log(`${saborosasSalgadas[i].pizza}, ${saborosasSalgadas[i].tempoPreparo}, ${saborosasSalgadas[i].pizzaSalgada}, ${saborosasSalgadas[i].ingredientes}`)
    }
}
pizzasSalgadas(separarSabores)


// 4. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, 
//e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. 
//Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.
//Como fiz:
console.log("Exercício 4")
const inputPizza = document.getElementById("pizzaBuscador")
const inputCodigoPizza = inputPizza.value
function clicadoPesquisar() {
    // consolelog que me ajuda a ver o valor exato que está sendo impresso:
    console.log(inputPizza.value)
    recebeArrayObjetos(pizzaArraySaborosas0, inputPizza.value)
}
const recebeArrayObjetos = (arrayInformado, codigoInformado) => {
    const resultado = arrayInformado.filter((pizza) => {
        console.log(codigoInformado)
        return pizza.codigo === codigoInformado
    })
    if (resultado.length > 0) {
        console.log(resultado[0])
    } else {
        //  alert("Nenhuma pizza de anchovas encontrada")
    }

}


// recebeArrayObjetos(pizzaArraySaborosas0,"pizza de anchovas")


//----------------------------------------------------------------------------------------------------------------------------------------------//
// SEMANA 06 - PASSANDO TUDO POR MEIO DO DOM

const minhasPizzas = document.getElementsByClassName("ajusteIngredientes")

console.log(minhasPizzas)
for (let i in objetoPizzaSal01.ingredientes) {
    let linhasIngrendientes = document.createElement("li")
    const novoConteudoPizza = document.createTextNode(objetoPizzaSal01.ingredientes[i])
    linhasIngrendientes.appendChild(novoConteudoPizza)
    minhasPizzas[0].insertAdjacentElement("beforeend", linhasIngrendientes)
    console.log(minhasPizzas)
}
for (let i in objetoPizzaSal02.ingredientes) {
    let linhasIngrendientes = document.createElement("li")
    const novoConteudoPizza = document.createTextNode(objetoPizzaSal02.ingredientes[i])
    linhasIngrendientes.appendChild(novoConteudoPizza)
    minhasPizzas[1].insertAdjacentElement("beforeend", linhasIngrendientes)
    console.log(minhasPizzas)
}
for (let i in objetoPizzaSal03.ingredientes) {
    let linhasIngrendientes = document.createElement("li")
    const novoConteudoPizza = document.createTextNode(objetoPizzaSal03.ingredientes[i])
    linhasIngrendientes.appendChild(novoConteudoPizza)
    minhasPizzas[2].insertAdjacentElement("beforeend", linhasIngrendientes)
    console.log(minhasPizzas)
}
for (let i in objetoPizzaDoce01.ingredientes) {
    let linhasIngrendientes = document.createElement("li")
    const novoConteudoPizza = document.createTextNode(objetoPizzaDoce01.ingredientes[i])
    linhasIngrendientes.appendChild(novoConteudoPizza)
    minhasPizzas[3].insertAdjacentElement("beforeend", linhasIngrendientes)
    console.log(minhasPizzas)
}


let linhasIngrendientes01 = document.createElement("li")
const novoConteudoPizza01 = document.createTextNode(`⏲️Tempo de preparo:${objetoPizzaSal01.tempoPreparo}min`)
linhasIngrendientes01.appendChild(novoConteudoPizza01)
minhasPizzas[0].insertAdjacentElement("beforeend", linhasIngrendientes01)
console.log(minhasPizzas)

let linhasIngrendientes02 = document.createElement("li")
const novoConteudoPizza02 = document.createTextNode(`⏲️Tempo de preparo:${objetoPizzaSal02.tempoPreparo}min`)
linhasIngrendientes02.appendChild(novoConteudoPizza02)
minhasPizzas[1].insertAdjacentElement("beforeend", linhasIngrendientes02)
console.log(minhasPizzas)

let linhasIngrendientes03 = document.createElement("li")
const novoConteudoPizza03 = document.createTextNode(`⏲️Tempo de preparo:${objetoPizzaSal03.tempoPreparo}min`)
linhasIngrendientes03.appendChild(novoConteudoPizza02)
minhasPizzas[2].insertAdjacentElement("beforeend", linhasIngrendientes03)
console.log(minhasPizzas)

let linhasIngrendientes04 = document.createElement("li")
const novoConteudoPizza04 = document.createTextNode(`⏲️Tempo de preparo:${objetoPizzaDoce01.tempoPreparo}min`)
linhasIngrendientes04.appendChild(novoConteudoPizza02)
minhasPizzas[3].insertAdjacentElement("beforeend", linhasIngrendientes04)
console.log(minhasPizzas)

//------------------------------

const paiPizzasHtml = document.querySelectorAll(".paiDasPizzas")
const padraoPizzasHtml = document.querySelectorAll(".padraoContainerPizzas")
const imagemPizzasHtml = document.querySelectorAll(".imagensPizza")
const tituloPizzasHtml = document.querySelectorAll(".tituloPizza")
const ingredientePizzasHtml = document.querySelectorAll(".ingredientePizza")
const ajusteIngredientesPizzasHtml = document.querySelectorAll(".ajusteIngredientes")
// -----------------
const removerpaiPizza01 = document.querySelector("#pizza01")
const paiPizza01 = removerpaiPizza01.parentNode

const removerpaiPizza02 = document.querySelector("#pizza02")
const paiPizza02 = removerpaiPizza02.parentNode

const removerpaiPizza03 = document.querySelector("#pizza03")
const paiPizza03 = removerpaiPizza03.parentNode

const removerpaiPizza04 = document.querySelector("#pizza04")
const paiPizza04 = removerpaiPizza04.parentNode
// ----------
function removerPizza() {
    if (objetoPizzaSal01.codigo === inputPizza.value) {
        paiPizza02.removeChild(removerpaiPizza02)
        paiPizza03.removeChild(removerpaiPizza03)
        paiPizza04.removeChild(removerpaiPizza04)
        inputPizza.value = ""
    } else if (objetoPizzaSal02.codigo === inputPizza.value) {
        removerpaiPizza01.parentNode.removeChild(removerpaiPizza01)
        removerpaiPizza03.parentNode.removeChild(removerpaiPizza03)
        removerpaiPizza04.parentNode.removeChild(removerpaiPizza04)
        inputPizza.value = ""
    } else if (objetoPizzaSal03.codigo === inputPizza.value) {
        removerpaiPizza01.parentNode.removeChild(removerpaiPizza01)
        removerpaiPizza02.parentNode.removeChild(removerpaiPizza02)
        removerpaiPizza04.parentNode.removeChild(removerpaiPizza04)
        inputPizza.value = ""
    } else if (objetoPizzaDoce01.codigo === inputPizza.value) {
        removerpaiPizza01.parentNode.removeChild(removerpaiPizza01)
        removerpaiPizza02.parentNode.removeChild(removerpaiPizza02)
        removerpaiPizza03.parentNode.removeChild(removerpaiPizza03)
        inputPizza.value = ""
    } else {
        inputPizza.value = ""   
        alert("nenhuma pizza encontrada")
       
    }

    // fazer das outras pizzas conforme acima e acrescentar 
}

function devolverPesquisaDasPizzas() {
    if (inputPizza.value === "") {
        paiPizza01.appendChild(removerpaiPizza01)
        paiPizza02.appendChild(removerpaiPizza02)
        paiPizza03.appendChild(removerpaiPizza03)
        paiPizza04.appendChild(removerpaiPizza04)
    }
}