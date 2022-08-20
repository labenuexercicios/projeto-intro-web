//Filmes para ver antes de morrer
let array = [
{
    nome: "TENET",
    anoLancamento: 2020,
    valeAPena: true,
    diretor: "Christopher Nolan",
    roteiro: ["Chistopher Nolan"],
},

{
    nome: "THE SUN SHINES BRIGHT",
    anoLancamento: 1953,
    valeAPena: true,
    diretor: "John Ford",
    roteiro: ["Frank Hotaling"],
},

{
    nome: "GREEN BOOK",
    anoLancamento: 2018,
    valeAPena: true,
    diretor: "Peter Farrely",
    roteiro: ["Peter Farrely", "Nick Vallelonga", "Bryan Hayes Currie"],
},

{
    nome: "WHIPLASH",
    anoLancamento: 2014,
    valeAPena: true,
    diretor: "Damien Chazelle",
    roteiro: ["Damien Chazelle", "Olivia Hamil"]
},
]


let media = 0
for(let i in array){
    media = media + array[i].anoLancamento
}
console.log(`Media dos anos de lançamento: ${media/array.length}`)

let verificarValeAPena = array[0].valeAPena && array[1].valeAPena && array[2].valeAPena && array[3].valeAPena
    console.log(verificarValeAPena)
    
    

let lista = []


for(i in array){
    array[i].valeAPena ? lista.push(array[i]) : alert(`Filme da posição ${i} não foi adicionado`)
}


console.log(lista)

let string1 = []
    
for(i in array[0].roteiro){
    if(i < array[0].roteiro.length - 1){
        string1 += `${array[0].roteiro[i]}, `
    }else{
        string1 += `${array[0].roteiro[i]}`
    } 
}

let string2 = []


for(i in array[1].roteiro){
    if(i < array[1].roteiro.length - 1){
        string2 += `${array[1].roteiro[i]}, `
    }else{
        string2 += `${array[1].roteiro[i]}`
    } 
}


let string3 = []

for(i in array[2].roteiro){
    if(i < array[2].roteiro.length - 1){
        string3 += `${array[2].roteiro[i]}, `
    }else{
        string3 += `${array[2].roteiro[i]}`
    } 
}


let roteiros = []
roteiros.push(string1, string2, string3)

for(i in array){
 console.log(`nome: ${array[i].nome} \nlançamento: ${array[i].anoLancamento} \nvale a pena?: ${array[i].valeAPena} \ndiretor: ${array[i].diretor} \nroteiro: ${array[i].roteiro}`)
}