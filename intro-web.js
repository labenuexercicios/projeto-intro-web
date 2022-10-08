// time semana 1
//item 1 e 2 
const time_1 = "flamengo"
const maiorRival_1 = "vasco"
const temMundial_1 = true
const foiRebaixado_1 = false
const libertadores_1 = 2
const brasileirao_1 = 8
const copaDoBrasil_1 = 3
const titulos_1 = ["libertadores: 2", "brasileirão: 8", "copa do brasil: 3"] //=> na ordem: liberta, brasileirão e copa do brasil 
const imagem_1 = "./midia/Flamengo_braz_logo.svg.png"

const time_2 = "palmeiras"
const maiorRival_2 = "corinthians"
const temMundial_2 = false
const foiRebaixado_2 = true
const libertadores_2 = 3
const brasileirao_2 = 10
const copaDoBrasil_2 = 4
const titulos_2 = ["libertadores: 3", "brasileirão: 10", "copa do brasil: 4"] //=> na ordem: liberta, brasileirão e copa do brasil 
const imagem_2 = "./midia/180px-Palmeiras_logo.svg.png"

const time_3 = "Cruzeiro"
const maiorRival_3 = "Atlético MG"
const temMundial_3 = false
const foiRebaixado_3 = true
const libertadores_3 = 2
const brasileirao_3 = 4
const copaDoBrasil_3 = 6
const titulos_3 = ["libertadores: 2", "brasileirão: 4", "copa do brasil: 6"] //=> na ordem: liberta, brasileirão e copa do brasil 
const imagem_3 = "./midia/CruzeiroEC2021.png"

const time_4 = "athletico paranaense"
const maiorRival_4 = "coritiba"
const temMundial_4 = false
const foiRebaixado_4 = true
const libertadores_4 = 0
const brasileirao_4 = 1
const copaDoBrasil_4 = 1
const titulos_4 = ["libertadores: 0", "brasileirão: 1", "copa do brasil: 1"] //=> na ordem: liberta, brasileirão e copa do brasil 
const imagem_4 = "./midia/CAP.png"


//semana 1 item 3
//total de títulos
const total_1 = libertadores_1 + brasileirao_1 + copaDoBrasil_1
const total_2 = libertadores_2 + brasileirao_2 + copaDoBrasil_2
const total_3 = libertadores_3 + brasileirao_3 + copaDoBrasil_3
const total_4 = libertadores_4 + brasileirao_4 + copaDoBrasil_4

//media dos títulos dos 3 times 
const media = (total_1 + total_2 + total_3 + total_4) / 4
console.log("SEMANA 1 ITEM 3:")
console.log("a média de títulos dos times é: ", media)

// semana 1 item 4
console.log("SEMANA 1 ITEM 4:")
//verifica se todos já foram rebaixados
const todosRebaixados = (foiRebaixado_1 && foiRebaixado_2 && foiRebaixado_3 && foiRebaixado_4)
console.log("todos os times já forma rebaixados?", todosRebaixados)

//verifica se todos possuem mundial
const todosTemMundial = (temMundial_1 && temMundial_2 && temMundial_3 && temMundial_4)
console.log("todos os times têm mundial?", todosTemMundial)

//resumo dos times
//semana 1 item 5 e 6
console.log("SEMANA 1 ITEM 5 e 6:")
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

    console.log(
        "time: " + time_4.toUpperCase() +
        "\nmaior rival: " + maiorRival_4.toUpperCase() +
        "\no time tem mundial? " + temMundial_4 +
        "\no time já foi rebaixado? " + foiRebaixado_4 +
        "\nquantas libertadores o time tem? " + libertadores_4 +
        "\nquantos brasleirões o time tem? " + brasileirao_4 +
        "\nquantas copas do brasil o time tem? " + copaDoBrasil_4 +
        "\nresumo de títulos time: " + titulos_4)    

//// transformar em objeto 
//semana 2 item 1
const objeto_1 =
{
    time: "flamengo",
    maiorRival: "vasco",
    temMundial: true,
    foiRebaixado: false,
    libertadores: 2,
    brasileirao: 8,
    copaDoBrasil: 3,
    //titulos: ["libertadores: 2", "brasileirão: 8", "copa do brasil: 3"],
    //imagem: "./midia/Flamengo_braz_logo.svg.png"
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
    titulos: ["libertadores: 3", "brasileirão: 10", "copa do brasil: 4"],
    imagem: "./midia/180px-Palmeiras_logo.svg.png"
}

const objeto_3 =
{
    time: "cruzeiro",
    maiorRival: "Atlético MG",
    temMundial: false,
    foiRebaixado: true,
    libertadores: 2,
    brasileirao: 4,
    copaDoBrasil: 3,
    titulos: ["libertadores: 2", "brasileirão: 4", "copa do brasil: 6"],
    imagem: "./midia/CruzeiroEC2021.png"
}

const objeto_4 =
{
    time: "athletico paranaense",
    maiorRival: "coritiba",
    temMundial: false,
    foiRebaixado: true,
    libertadores: 0,
    brasileirao: 1,
    copaDoBrasil: 1,
    titulos: ["libertadores: 0", "brasileirão: 1", "copa do brasil: 1"],
    imagem: "./midia/CAP.png"
}


// semana 2 item 2

const arrayObjetos = [] // = [...objeto_1.titulos , ...objeto_2.titulos , ...objeto_3.titulos]
// semana 2 item 3
console.log("SEMANA 2 ITEM 3:")
arrayObjetos.push(objeto_1)
arrayObjetos.push(objeto_2)
arrayObjetos.push(objeto_3)
arrayObjetos.push(objeto_4)
console.log(arrayObjetos)

// condição tem mundial
// semana 2 item 4 e 5
console.log("SEMANA 2 ITEM 4 e 5:")
let arrayObjetosIfElse = []
console.log("adicione somente os times que tem mundial: ")
if (temMundial_1 === true) {
    arrayObjetosIfElse.push(objeto_1)
    console.log(" o " + objeto_1.time + " tem mundial")
}
else {
    //alert("**ALERT** o " + objeto_1.time + " não tem mundial")
}

if (temMundial_2 === true) {
    arrayObjetosIfElse.push(objeto_2)
    console.log(" o " + objeto_2.time + " tem mundial")
}
else {
    //alert("**ALERT** o " + objeto_2.time + " não tem mundial")
}

if (temMundial_3 === true) {
    arrayObjetosIfElse.push(objeto_3)
    console.log(" o " + objeto_3.time + " tem mundial")
}
else {
    //alert("**ALERT** o " + objeto_3.time + " não tem mundial")
}

if (temMundial_4 === true) {
    arrayObjetosIfElse.push(objeto_4)
    console.log(" o " + objeto_4.time + " tem mundial")
}
else {
    //alert("**ALERT** o " + objeto_4.time + " não tem mundial")
}

console.log("informações dos times que possuem mundial: ")
console.log(arrayObjetosIfElse)

/////semana 3 
////item 1 loop que guarda os array dos objetos em uma única variável
console.log("SEMANA 3 ITEM 1:")
let i = 0 
let novaTitulos_1 = "" //variavel que vai receber os arrays no loop
for (i in objeto_1) 
{
    novaTitulos_1 = `${objeto_1.titulos}` //condição para não acrescentar virgula no fim
}
console.log("\"" + novaTitulos_1 + "\"\n" + "tipo da variável: " + typeof (novaTitulos_1))

/////2 verificar se é isso mesmo
console.log("SEMANA 3 ITEM 2:")
let iteracao = 1
for (let elementos in objeto_1) ////// se for para fazer a iteração apenas pro array
{
    console.log(`${elementos}: ${objeto_1[elementos]}`)
    console.log("iteraçao " + iteracao++)
}

iteracao = 1

for (elementos in objeto_2) ////// se for para fazer a iteração apenas pro array
{ 
    console.log(`${elementos}: ${objeto_2[elementos]}`)
    console.log("iteraçao " + iteracao++)
}

iteracao = 1

for (elementos in objeto_3) ////// se for para fazer a iteração apenas pro array
{
    console.log(`${elementos}: ${objeto_3[elementos]}`)
    console.log("iteraçao " + iteracao++)
}

iteracao = 1

for (elementos in objeto_4) ////// se for para fazer a iteração apenas pro array
{
    console.log(`${elementos}: ${objeto_4[elementos]}`)
    console.log("iteraçao " + iteracao++)
}

//////3 função 
console.log("SEMANA 3 ITEM 3:")

function objetoString(objeto)
{   
    text = []
    for(elementos in objeto)
    { 
        text += `${elementos}: ${objeto[elementos]}, ` 
    }
    return text
}

console.log(objetoString(objeto_1))
console.log(objetoString(objeto_2))
console.log(objetoString(objeto_3))
console.log(objetoString(objeto_4))

//// 4 (ctrl + f) pesquisa no site
console.log("SEMANA 3 ITEM 4:")
let pesquisa = Number(0) // caso n encontre resultado, retorna um alert
function arrayObjetosToStrings(arrayObjetosFunction, stringFunction)
{
    pesquisa = +0
    for(i=0; i<arrayObjetosFunction.length; i++) 
    {    
        if(arrayObjetosFunction[i].time === stringFunction.toLowerCase())
        {
            pesquisa = Number(1)
            console.log("o resultado da pesquisa foi: ", arrayObjetosFunction[i])
            return resultadoNaTela(i) 
        }
    }
    if(pesquisa !== 1)
    {
    return alert("ALERT item não encontrado")// depois do retunr, a função para de ser executada 
    }
}

//let string = prompt("digite a string que será pesquisada")
var string
//clique no botão
function pesquisaItem()
{
string = document.getElementById("txtBusca").value
return arrayObjetosToStrings(arrayObjetos, string)
}

//enter
function digitou(e) 
{
    if (e.keyCode == 13) {
      // AO PRESSIONAR A TECLA "ENTER"
      return pesquisaItem()
    }
}
///////DOM esconde itens
//function insereItem()
//{ 
    for (let elementos in objeto_1) ////// se for para fazer a iteração apenas pro array
    {
        lista = document.getElementById("list-lateral-fla")
        item = document.createElement("ul")
        item.innerHTML = `${elementos}: ${objeto_1[elementos]}`
        lista.appendChild(item)
    }
//}

//////Funcao pra aparecer o time pesquisado na tela
function resultadoNaTela(i)
{
    for(j=0; j<=arrayObjetos.length;j++)
    {
        if(j !== i)
        {
            apagar = document.getElementById(`bloco-${j+1}`)
            apagar.setAttribute("id", "apaga")
        }
    }

//}
}