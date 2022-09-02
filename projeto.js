// O tema que escolhi para o projeto é Serial Killers. 

const nome1 = "Ted Bundy"
const modusOperandi1 = "Sequestro e estrangulamento"
const ano1 = 1974
const vitimas1 = 30
const condenado1 = true

const nome2 = "Andrew Cunanan"
const modusOperandi2 = "Violência randômica"
const ano2 = 1997
const vitimas2 = 5
const condenado2 = false

const nome3 = "Jeffrey Dahmer"
const modusOperandi3 = "Sequestro, necrofilia e canibalismo"
const ano3 = 1978
const vitimas3 = 17
const condenado3 = true

const nome4 = "Dennis Rader (BTK)"
const modusOperandi4 = "Invasão, tortura e estrangulamento"
const ano4 = 1974
const vitimas4 = 10
const condenado4 = true

const nome5 = "John Wayne Gacy"
const modusOperandi5 = "Tortura, estupro e estrangulamento"
const ano5 = 1972
const vitimas5 = 33
const condenado5 = true

// Cálculo da média entre as variáveis vítimas. 

let media = ((vitimas1+vitimas2+vitimas3+vitimas4+vitimas5)/5) 
console.log (`Média das vítimas: ${media}`)

// Resultado que checa se todos os booleanas até aqui são verdadeiros.

const condenacao = condenado1 && condenado2 && condenado3 && condenado4 && condenado5
console.log (condenacao)

// Criando novos arrays

const crimes1 = ["Sequestro", "Tentativa de homicídio", "Homicídio", "Roubo", "Estupro", "Tortura"]
const crimes2 = ["Sequestro", "homicídio", "Roubo"]
const crimes3 = ["Homicídio em primeiro grau", "Abuso sexual infantil", "Estupro","Exposição indecente", "conduta desordeira", "intoxicação pública"]
const crimes4 = ["Homicídio em primeiro grau", "Tortura", "Estupro"]
const crimes5 = ["Abuso infantil", "Homicídio", "Estupro", "Agressão sexual"]

// Console log de todas os itens

console.log (`nome: ${nome1.toUpperCase()} 
Modus Operandi: ${modusOperandi1} 
Ano da primeira vítima: ${ano1} 
Quantidade de vítimas: ${vitimas1} 
Condenado: ${condenado1} 
Crimes: ${crimes1}`)

console.log (`nome: ${nome2.toUpperCase()} 
Modus Operandi: ${modusOperandi2} 
Ano da primeira vítima: ${ano2} 
Quantidade de vítimas: ${vitimas2} 
Condenado: ${condenado2}
Crimes: ${crimes2} `)

console.log (`nome: ${nome3.toUpperCase()} 
Modus Operandi: ${modusOperandi3} 
Ano da primeira vítima: ${ano3} 
Quantidade de vítimas: ${vitimas3} 
Condenado: ${condenado3} 
Crimes: ${crimes3}`)

console.log (`nome: ${nome4.toUpperCase()} 
Modus Operandi: ${modusOperandi4} 
Ano da primeira vítima: ${ano4} 
Quantidade de vítimas: ${vitimas4} 
Condenado: ${condenado4}
Crimes: ${crimes4} `)

console.log (`nome: ${nome5.toUpperCase()} 
Modus Operandi: ${modusOperandi5} 
Ano da primeira vítima: ${ano5} 
Quantidade de vítimas: ${vitimas5} 
Condenado: ${condenado5}
Crimes: ${crimes5} `)
