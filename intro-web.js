// time 

const time_1 = "flamengo"
const maiorRival_1 = "vasco"
const temMundial_1 = true
const foiRebaixado_1 = false
const libertadores_1 = 2
const brasileirao_1 = 8
const copaDoBrasil_1 = 3
const titulos_1 = [2 , 8 , 3] //=> na ordem: liberta, brasileirão e copa do brasil 

const time_2 = "palmeiras"
const maiorRival_2 = "corinthians"
const temMundial_2 = false
const foiRebaixado_2 = true
const libertadores_2 = 3
const brasileirao_2 = 10
const copaDoBrasil_2 = 4
const titulos_2 = [3 , 10 , 4] //=> na ordem: liberta, brasileirão e copa do brasil 

const time_3 = "athletico paranaense"
const maiorRival_3 = "coritiba"
const temMundial_3 = false
const foiRebaixado_3 = true
const libertadores_3 = 0
const brasileirao_3 = 1
const copaDoBrasil_3 = 1
const titulos_3 = [0 , 1 , 1] //=> na ordem: liberta, brasileirão e copa do brasil 

//total de títulos
const total_1 = libertadores_1 + brasileirao_1 + copaDoBrasil_1
const total_2 = libertadores_2 + brasileirao_2 + copaDoBrasil_2
const total_3 = libertadores_3 + brasileirao_3 + copaDoBrasil_3

//media dos títulos dos 3 times 
const media = (total_1 + total_2 + total_3)/3 
console.log("a média de títulos dos times é: ", media)

//verifica se todos já foram rebaixados
const todosRebaixados = (foiRebaixado_1 && foiRebaixado_2 && foiRebaixado_3)
console.log("todos os times já forma rebaixados?", todosRebaixados)

//verifica se todos possuem mundial
const todosTemMundial = (temMundial_1 && temMundial_2 && temMundial_3)
console.log("todos os times têm mundial?", todosRebaixados)

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

    


