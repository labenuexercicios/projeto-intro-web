
//Como estava na semana 02(concluída):

objetoPizzaSal01 = {
    pizza: "Pizza de calabresa com mozarela",
    tempoPreparo: 30,
    pizzaSalgada: true,
    ingredientes: ["* 1 receita de massa para pizza de forno","* 1 receita de molho básico de tomate","* 300g de calabresa fatiada","* 400g de queijo mozarela fatiado"]
}
//console.log(objetoPizzaSal01)
//console.table(objetoPizzaSal01)

//Pizza 02:
objetoPizzaSal02 = {
    pizza: "Pizza de quatro queijos",
    tempoPreparo: 30,
    pizzaSalgada: true,
    ingredientes: `* 1 receita de massa para pizza de forno,* 1 receita de molho básico de tomate,* 100g de queijo parmesão,* 150g de queijo provolone",* 150g de queijo mozarela, * 100g de queijo gorgonzola`
}
//console.log(objetoPizzaSal02)
//console.table(objetoPizzaSal02)

//Pizza 03:
objetoPizzaSal03 = {
    pizza: "Pizza de abobrinha",
    tempoPreparo: 30,
    pizzaSalgada: true,
    ingredientes: `"* 1 receita de massa para pizza de forno","* 1 receita de molho básico de tomate","* 2 abobrinhas cortadas em rodelas finas","* 300g de queijo mozarela de búfala ralada ou cortada em fatias","* 1 dente de alho amassado","* 4 colheres de sopa de azeite","* Sal a gosto"` 
}
//console.log(objetoPizzaSal03)
//console.table(objetoPizzaSal03)

//Pizza 04:
//Tipos de pizza doces:
objetoPizzaDoce01 = {
    pizza: "Pizza de chocolate",
    tempoPreparo: 30,
    pizzaSalgada: false,
    ingredientes: `"* 2 xícaras (de chá) de chocolate forneável ao leite","* 1 disco de massa doce para pizza - pré assado","* 1 colher de sopa de chocolate em pó","* 1/2 xícara (de chá) de chocolate granulado (para povilhar)","* 1/2 xícara (de chá) de cereja em calda (para decorar)"`
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
if (objetoPizzaDoce01.pizzaSalgada === true) {
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
// let relatorio = (Array) => {
//     let string = []
//     for(let i in pizzaSaborosas0){
//         string.push(`${Number(i)+1}:${pizzaSaborosas1[i].ingredientes}`)
//     }
//     return string
// }
// for (let i in pizzaSaborosas0) {
//     console.log(pizzaSaborosas0[i].pizza.toUpperCase(), pizzaSaborosas0[i].tempoPreparo, pizzaSaborosas0[i].pizzaSalgada, pizzaSaborosas0[i].ingredientes.join())
// }
// console.log(pizzaSaborosas0)

//ESSE É O QUE VALE DE VERDADE! SEGUE ABAIXO:(PESQUISAR SOBRE - NÃO ENTENDI DIREITO ESSE PONTO)

for(pizzaString of pizzaArraySaborosas0){
    for (propriedadeObjeto in pizzaString){
        console.log(`${propriedadeObjeto}: ${pizzaString[propriedadeObjeto]}`)
    }
}

// 3. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.

let saborDePizza = "Pizza de calabresa com mozarela"

const separarSabores = pizzaArraySaborosas0.filter((substitutoPizza) =>{
    return substitutoPizza.pizza===saborDePizza
} )

console.log(separarSabores)

const pizzasSalgadas = (saborosasSalgadas) => {
    for(let i = 0; i < saborosasSalgadas.length; i++){
        console.log(`${saborosasSalgadas[i].pizza}, ${saborosasSalgadas[i].tempoPreparo}, ${saborosasSalgadas[i].pizzaSalgada}, ${saborosasSalgadas[i].ingredientes}`)
    }
}

 pizzasSalgadas(separarSabores)


// 4. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, 
//e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. 
//Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.


const recebeArrayObjetos = (arrayInformado, stringInformada) => {
    const resultado = arrayInformado.filter((pizzaArraySaborosas0) => {

        return pizzaArraySaborosas0.pizza === stringInformada
    })
    if (resultado.length > 0) {
        console.log(resultado)
    } else {
        alert("Nenhuma pizza encontrada")
    }
}

 recebeArrayObjetos(pizzaArraySaborosas0, "pizza de anchovas")

//----------------------------------------------------------------------------------------------------------------------------------------------//