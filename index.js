// 3 Itens com essas caracteristica: 
// Composto químico: string
// Nome mais conhecido: string 
// Átomos da formula: arrays  
// Massa molar em gramas por mol: number 
// Usos: arrays
// É solúvel em água? bolleano  

console.log("Listas de Compostos Químicos e suas característisca")
const compostoQuimico1 = "Hipoclorito de sódio"
const nomeMaisConhecido = "Água Sanitária"
const atomosDaFormula = ["Sódio", "Cloro", "Oxigênio"]
const massaMolar = 74.44
const usos = ["remoção de manchas de roupas sujas", " desenfetar superfícies", "desinfecção da água potável"]
const solubilidadeEmAgua1 = true

const compostoQuimico2 = "Ácido acético"
const nomeMaisConhecido2 = "Vinagre"
const atomosDaFormula2 = ["Carbono", "Hidrogênio", "Oxigênio"]
const massaMolar2 = 60.052
const usos2 = ["Condimentar saladas", " Produção da aspirina", "Síntese de perfumes e corantes"]
const solubilidadeEmAgua2 = true

const compostoQuimico3 = "Ácido ascórbico"
const nomeMaisConhecido3 = "Vitamina C"
const atomosDaFormula3 = ["Carbono", "Hidrogênio", "Oxigênio"]
const massaMolar3 = 176.09
const usos3 = ["Suplementação alimentar", " Adubo para plantas", "Conservação de alimentos industrializados"]
const solubilidadeEmAgua3 = true

const media = (massaMolar + massaMolar2 + massaMolar3) / 3
console.log (`A média dos valores de massa molar é igual ${media}`)

const solubilidadeEmAgua = (solubilidadeEmAgua1 === solubilidadeEmAgua2 === solubilidadeEmAgua3)
console.log(solubilidadeEmAgua)


console.log(`Composto químico ${compostoQuimico1.toUpperCase()}`)
console.log("\n")
console.log(`Nome mais conhecido ${nomeMaisConhecido}`)
console.log("\n")
console.log(`Átomos da fórmula${atomosDaFormula}`)
console.log("\n")
console.log(`Massa molar em gramas por mol ${massaMolar}`)
console.log("\n")
console.log(`Usos mais comuns ${usos}`)
console.log("\n")
console.log(`É solúvel em água? ${solubilidadeEmAgua1}`)
console.log("\n")

console.log(`Composto químico ${compostoQuimico2.toUpperCase()}`)
console.log("\n")
console.log(`Nome mais conhecido ${nomeMaisConhecido2}`)
console.log("\n")
console.log(`Átomos da fórmula${atomosDaFormula2}`)
console.log("\n")
console.log(`Massa molar em gramas por mol ${massaMolar2}`)
console.log("\n")
console.log(`Usos mais comuns ${usos2}`)
console.log("\n")
console.log(`É solúvel em água? ${solubilidadeEmAgua2}`)
console.log("\n")

console.log(`Composto químico ${compostoQuimico3.toUpperCase()}`)
console.log("\n")
console.log(`Nome mais conhecido ${nomeMaisConhecido3}`)
console.log("\n")
console.log(`Átomos da fórmula${atomosDaFormula3}`)
console.log("\n")
console.log(`Massa molar em gramas por mol ${massaMolar3}`)
console.log("\n")
console.log(`Usos mais comuns ${usos3}`)
console.log("\n")
console.log(`É solúvel em água? ${solubilidadeEmAgua3}`)
console.log("\n")