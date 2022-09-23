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

//Proejto Intro Webb - Semana 2


//1
receita1 = {
    nome: "Strogonof",
    ingredientes:6,
    vegetariano: false
}

receita2 = {
    nome: "Lasanha",
    ingredientes: 4,
    vegetariano: false
}

receita3 = {
    nome: "Vegetariano",
    ingredientes: 5,
    vegetariano: true
}

//2
const receita = []

//3
//receitas.push(receita1, receita2, receita3)

//4
if(receita1 === receita2 === receita3){
    console.log(receita.push(receita1, receita2, receita3))
} else{
    alert("O item nao foi adicionado")
}

//Proejto Intro Webb - Semana 3
//1
for(i = 0; i < receitas.length; i++){
    console.log(receitas[i])
}

//2
for(nome in receita1){
    console.log(receita1.nome);
}

//3

function recebeObjeto(receitas){
    console.log(`${receitas}`)
    return receitas
}
recebeObjeto(receita2.nome)

//4




let pesquisa = Number(0)
function recebeObjetosStrings(receita, stringFunction)
{
    pesquisa = +0
    for(i=0; i<receita.length; i++) 
    {    
        if(receita[i]. receita1 === stringFunction)
        {
            pesquisa = Number(1)
            console.log("o resultado da pesquisa foi: ", receita[i])

        }
    }
    if(pesquisa !== 1)
    {
    return alert("ALERT item não encontrado")
    }
}

let frase = prompt("digite algo")
recebeObjetosStrings(receita, frase)






