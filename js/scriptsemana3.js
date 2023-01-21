/*

SEMANA 3

1. Reescrevendo o relatório criado que foi feito na semana 1, altere a forma que a característica do tipo array dos itens seja escrita como um laço que guarde todos os valores da propriedade array do objeto em uma mesma string. Utilize esta string no relatório.

💡 Chamamos este processo de reescrever um código já escrito, de refatoração.

Exemplo:

//ANTES 
FULANO
idade: 33
verificou email?: false
projetos: ["Projeto de HTML", "Projeto de CSS", "Projeto React"] 

//DEPOIS
FULANO
idade: 33
verificou email?: false
projetos: "Projeto de HTML,Projeto de CSS,Projeto React"

*/


const pet = {
    nome: "Scooby",
    idade: 2,
    raca: "salsicha",
    vacinado: false,
    produtosPet: ["Ração", "Shampoo", "Brinquedos"]
}

// const produtosPet = ["Ração", "Shampoo", "Brinquedos"]
let carrinhoDeCompra = ""
for(let i of pet.produtosPet){
    carrinhoDeCompra = pet.produtosPet +""
}
console.log(`Itens do seu carrinho de compras: ${carrinhoDeCompra}`)
console.log(typeof carrinhoDeCompra)



/*

const pet1 = {
    nome: "Pudim",
    idade: 5,
    raca: "Poodle",
    vacinado: true,
    produtosPet1: ["Guloseimas", "Petiscos", "Bolinha"]  //resoluçãoExercicio2
}
// const produtosPet1 = ["Guloseimas", "Petiscos", "Bolinha"]
let carrinhoDeCompra1 = ""
for(let i of pet1.produtosPet1){
    carrinhoDeCompra1 = pet1.produtosPet1 +""
}
console.log(`Itens do seu carrinho de compras: ${carrinhoDeCompra1}`)
console.log(typeof carrinhoDeCompra1)





const pet2 = {
    nome: "Olávo",
    idade: 1,
    raca: "rottweiler",
    vacinado: true,
    produtosPet2: ["Petiscos", " Coleira", "Shampoo"] //resoluçãoExercicio2
}
// const produtosPet2 = ["Petiscos", " Coleira", "Shampoo"]
let carrinhoDeCompra2 = ""
for(let i of pet2.produtosPet2){
    carrinhoDeCompra2 = pet2.produtosPet2 + ""
}
console.log(`Itens do seu carrinho de compras: ${carrinhoDeCompra2}`)
console.log(typeof carrinhoDeCompra2)

*/

console.log("Nome: "+pet[1])
console.log("Idade: " + pet[2])

