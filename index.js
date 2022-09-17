const doces = "Brigadeiro"
const descricao = "docinho"
let estoque = true
let valor = 1


const doces2 = "CupCake"
const descricao2 = "Bolos"
let estoqueCupcake = false
let valorCupCake = 3

const doces3 = "Cone"
const descricao3 = "Cones"
let estoqueCone = true
let valorCone = 5

const verificaEstoque = estoque && estoqueCupcake && estoqueCone
const categorias = ["Bolos", "Docinhos", "Cones"]

let media = ((valorCone + valorCupCake + valor) / 3)
console.log (media)

console.log (`Conferência de estoque: \n ${doces} = ${estoque} \n ${doces2} = ${estoqueCupcake} \n ${doces3} = ${estoqueCone}`)

console.log ("Nosso estoque de doces está em falta de algum item?", verificaEstoque)

console.log (doces.toUpperCase(), "\n", descricao.toUpperCase() , "\n", estoque , "\n" , valor )

console.log (categorias[0])
console.log (categorias[1])
console.log (categorias[2])