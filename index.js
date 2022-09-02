const comida = "Hambúrguer de costela"
let preco = 29.90
const ingredientes = ["Pão australiano", "Costelinha", "Bacon", "Queijo cheddar", "Cebola caramelizada"]
const vegano = false

const comida2 = "Hambúrguer gourmet"
let preco2 = 28.90
const vegano2 = false
const ingredientes2 = ["Pão brioche", "Carne bovina", "Bacon", "Queijo cheddar", "Cebola caramelizada"]

const comida3 = "Hambúrguer de frango"
let preco3 = 25.50
let ingredientes3 = ["Pão brioche", "Filé de frango", "Alface", "Tomate", "Queijo prato"]
const vegano3 = false

const comida4 = "Veggie hambúrguer"
let preco4 = 24.90
let ingredientes4 = ["Pão brioche", "Hambúrguer de falafel", "Alface", "Tomate", "Cebola"]
const vegano4 = true

const mediaPreco = (preco + preco2 + preco3 + preco4) / 4
console.log(`A média dos preço da lanchonete é R$${mediaPreco}`)

const verificarVegano = (vegano && vegano2 && vegano3 && vegano4)
console.log(`Todos são veganos? ${verificarVegano}.`)

console.log(`${comida.toUpperCase()} 
R$ ${preco}
Ingredientes:${ingredientes}
É vegano?${vegano}`)

console.log(`${comida2.toUpperCase()} 
R$${preco2}
Ingredientes:${ingredientes2}
É vegano?${vegano2}`)

console.log(`${comida3.toUpperCase()} 
R$${preco3}
Ingredientes:${ingredientes3}
É vegano?${vegano3}`)

console.log(`${comida4.toUpperCase()} 
R$${preco4}
Ingredientes:${ingredientes4}
É vegano?${vegano4}`)

