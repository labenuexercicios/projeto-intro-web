// time semana 1

const time_1 = "flamengo"
const maiorRival_1 = "vasco"
const temMundial_1 = true
const foiRebaixado_1 = false
const libertadores_1 = 2
const brasileirao_1 = 8
const copaDoBrasil_1 = 3
const titulos_1 = ["libertadores: 2", "brasileirão: 9", "copa do brasil: 3"] //=> na ordem: liberta, brasileirão e copa do brasil 

const time_2 = "palmeiras"
const maiorRival_2 = "corinthians"
const temMundial_2 = false
const foiRebaixado_2 = true
const libertadores_2 = 3
const brasileirao_2 = 10
const copaDoBrasil_2 = 4
const titulos_2 = ["libertadores: 3", "brasileirão: 10", "copa do brasil: 4"] //=> na ordem: liberta, brasileirão e copa do brasil 

const time_3 = "athletico paranaense"
const maiorRival_3 = "coritiba"
const temMundial_3 = false
const foiRebaixado_3 = true
const libertadores_3 = 0
const brasileirao_3 = 1
const copaDoBrasil_3 = 1
const titulos_3 = ["libertadores: 0", "brasileirão: 1", "copa do brasil: 1"] //=> na ordem: liberta, brasileirão e copa do brasil 

//total de títulos
const total_1 = libertadores_1 + brasileirao_1 + copaDoBrasil_1
const total_2 = libertadores_2 + brasileirao_2 + copaDoBrasil_2
const total_3 = libertadores_3 + brasileirao_3 + copaDoBrasil_3

//media dos títulos dos 3 times 
const media = (total_1 + total_2 + total_3) / 3
console.log("a média de títulos dos times é: ", media)

//verifica se todos já foram rebaixados
const todosRebaixados = (foiRebaixado_1 && foiRebaixado_2 && foiRebaixado_3)
console.log("todos os times já forma rebaixados?", todosRebaixados)

//verifica se todos possuem mundial
const todosTemMundial = (temMundial_1 && temMundial_2 && temMundial_3)
console.log("todos os times têm mundial?", todosTemMundial)

//resumo dos times
console.log(
    "time: " + time_1.toUpperCase() +
    "\nmaior rival: " + maiorRival_1.toUpperCase() +
    "\no time tem mundial? " + temMundial_1 +
    "\no time já foi rebaixado? " + foiRebaixado_1 +
    "\nquantas libertadores o time tem? " + libertadores_1 +
    "\nquantos brasleirões o time tem? " + brasileirao_1 +
    "\nquantas copas do brasil o time tem? " + copaDoBrasil_1 +
    "\nresumo de títulos time: " + titulos_1)

console.log(
    "time: " + time_2.toUpperCase() +
    "\nmaior rival: " + maiorRival_2.toUpperCase() +
    "\no time tem mundial? " + temMundial_2 +
    "\no time já foi rebaixado? " + foiRebaixado_2 +
    "\nquantas libertadores o time tem? " + libertadores_2 +
    "\nquantos brasleirões o time tem? " + brasileirao_2 +
    "\nquantas copas do brasil o time tem? " + copaDoBrasil_2 +
    "\nresumo de títulos do time: " + titulos_2)

console.log(
    "time: " + time_3.toUpperCase() +
    "\nmaior rival: " + maiorRival_3.toUpperCase() +
    "\no time tem mundial? " + temMundial_3 +
    "\no time já foi rebaixado? " + foiRebaixado_3 +
    "\nquantas libertadores o time tem? " + libertadores_3 +
    "\nquantos brasleirões o time tem? " + brasileirao_3 +
    "\nquantas copas do brasil o time tem? " + copaDoBrasil_3 +
    "\nresumo de títulos time: " + titulos_3)

//// transformar em objeto semana 2
const objeto_1 =
{
    time: "flamengo",
    maiorRival: "vasco",
    temMundial: true,
    foiRebaixado: false,
    libertadores: 2,
    brasileirao: 8,
    copaDoBrasil: 3,
    titulos: ["libertadores: 2", "brasileirão: 9", "copa do brasil: 3"]
}

const objeto_2 =
{
    time: "palmeiras",
    maiorRival: "corinthians",
    temMundial: false,
    foiRebaixado: true,
    libertadores: 3,
    brasileirao: 10,
    copaDoBrasil: 4,
    titulos: ["libertadores: 3", "brasileirão: 10", "copa do brasil: 4"]
}

const objeto_3 =
{
    time: "athletico paranaense",
    maiorRival: "coritiba",
    temMundial: false,
    foiRebaixado: true,
    libertadores: 0,
    brasileirao: 1,
    copaDoBrasil: 1,
    titulos: ["libertadores: 0", "brasileirão: 1", "copa do brasil: 1"]
}

const arrayObjetos = [] // = [...objeto_1.titulos , ...objeto_2.titulos , ...objeto_3.titulos]
arrayObjetos.push(objeto_1)
arrayObjetos.push(objeto_2)
arrayObjetos.push(objeto_3)
console.log(arrayObjetos)

// condição tem mundial
let arrayObjetosIfElse = []
console.log("adicione somente os times que tem mundial: ")
if (temMundial_1 === true) {
    arrayObjetosIfElse.push(objeto_1)
    console.log(" o " + objeto_1.time + " tem mundial")
}
else {
    console.log("**ALERT** o " + objeto_1.time + " não tem mundial")
}

if (temMundial_2 === true) {
    arrayObjetosIfElse.push(objeto_2)
    console.log(" o " + objeto_2.time + " tem mundial")
}
else {
    console.log("**ALERT** o " + objeto_2.time + " não tem mundial")
}

if (temMundial_3 === true) {
    arrayObjetosIfElse.push(objeto_3)
    console.log(" o " + objeto_3.time + " tem mundial")
}
else {
    console.log("**ALERT** o " + objeto_3.time + " não tem mundial")
}

console.log("informações dos times que possuem mundial: ")
console.log(arrayObjetosIfElse)

/////semana 3 loop que guarda os array dos objetos em uma única variável
/////1
let i = 0 
let novaTitulos_1 = "" //variavel que vai receber os arrays no loop
for (i = 0; i < 3; i++) {
    novaTitulos_1 = novaTitulos_1 + objeto_1.titulos[i]
    if (i < 2)
        novaTitulos_1 = novaTitulos_1 + ", " //condição para não acrescentar virgula no fim
}
console.log("\"" + novaTitulos_1 + "\"\n" + "tipo da variável: " + typeof (novaTitulos_1))

/////2 verificar se é isso mesmo

for (i = 0; i < titulos_1.length; i++) ////// se for para fazer a iteração apenas pro array
{
    console.log(titulos_1[i])
    console.log("iteraçao" + (i + 1))
}

for (i = 0; i < titulos_2.length; i++) ////// se for para fazer a iteração apenas pro array
{
    console.log(titulos_2[i])
    console.log("iteraçao" + (i + 1))
}

for (i = 0; i < titulos_3.length; i++) ////// se for para fazer a iteração apenas pro array
{
    console.log(titulos_3[i])
    console.log("iteraçao" + (i + 1))
}

//////3 função 
function objetoString(objeto)
{
    return console.log(objeto);
}

objetoString(objeto_1)
objetoString(objeto_2)
objetoString(objeto_3)

//// 4 (ctrl + f) pesquisa no site

let pesquisa = Number(0) // caso n encontre resultado, retorna um alert
function arrayObjetosToStrings(arrayObjetosFunction, stringFunction)
{
    for(i=0; i<arrayObjetosFunction.length; i++) 
    {    
        if(arrayObjetosFunction[i].time === stringFunction)
        {
            return console.log("o resultado da pesquisa foi: ", arrayObjetosFunction[i])
            pesquisa === Number(1)
        }
    }
    return console.log("ALERT item não encontrado")
}
let string = prompt("digite a string")
arrayObjetosToStrings(arrayObjetos, string)