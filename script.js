//Proejto Intro Webb - semana 1
//1
const receitas = ["Strogonof", "Lasanha", "Vegetariano"]
const quantidadeIngredientes = [6, 5, 5]
const ehvegetariana = false

//2
let receita1 = "Strogonoff"
let quantitadeIngredientes1 = 6
let ehvegetariana1 = false

let receita2 = "Lasanha"
let quantitadeIngredientes2 = 4
let ehvegetariana2 = false

let receita3 = "Vegetariano"
let quantidadeIngredientes3 = 5
let ehvegetariana3 = true

//3
const soma1 = quantitadeIngredientes1 + quantitadeIngredientes2 + quantidadeIngredientes3
const media = soma1 / 3
console.log(media)

//4
const verificaEhvegetariana = ehvegetariana1 && ehvegetariana2 && ehvegetariana3
console.log(verificaEhvegetariana)

// 5
const arrayDeString = [`Projeto Intro Webb - Priemria Semana`]

//6
let nomeMaiusculo = receita1.toUpperCase()

console.log(`${nomeMaiusculo} \nQuantidade de ingredientes: ${quantitadeIngredientes1} \nÉ vegetariana? ${ehvegetariana1}\n${arrayDeString}`)

//Proejto Intro Webb - semana 1