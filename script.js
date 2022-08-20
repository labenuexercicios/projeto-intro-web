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
}
]

const media = (array[0].anoLancamento + array[1].anoLancamento + array[2].anoLancamento)/3
    console.log(media)
    
const verificarValeAPena = array[0].valeAPena && array[1].valeAPena && array[2].valeAPena
    console.log(verificarValeAPena)

    
    

let lista = []

array[0].valeAPena ? lista.push(array[0]) : alert(`Tenet não foi adicionado`)
array[1].valeAPena ? lista.push(array[1]) : alert(`The Sun Shines Bright não foi adicionado`)
array[2].valeAPena ? lista.push(array[2]) : alert(`Green Book não foi adicionado`)

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
 console.log(`nome: ${array[i].nome} \nlançamento: ${array[i].anoLancamento} \nvale a pena?: ${array[i].valeAPena} \ndiretor: ${array[i].diretor} \nroteiro: ${roteiros[i]}`)
}