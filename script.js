//Filmes para ver antes de morrer
let array = [
{
    nome: "OS VINGADORES",
    anoLancamento: 2012,
    valeAPena: true,
    diretor: "Joss Whedon",
    elenco: ["Robert Downey Jr.", "Scarlett Johansson", "Chris Evans", "Mark Rufallo", "Chris Hemsworth", "Jeremy Renner",
"Tom Hiddleston", "Samuel L. Jackson"],
},

{
    nome: "VINGADORES: ERA DE ULTRON",
    anoLancamento: 2015,
    valeAPena: true,
    diretor: "Joss Whedon",
    elenco: ["Robert Downey Jr.", "Scarlett Johansson", "Chris Evans", "Mark Rufallo", "Chris Hemsworth", "Jeremy Renner",
    "Tom Hiddleston", "Samuel L. Jackson", "Elizabeth Olsen", "James Spader", "Paul Bettany", ],
},

{
    nome: "VINGADORES: GUERRA INFINITA",
    anoLancamento: 2018,
    valeAPena: true,
    diretor: "Anthony e Joe Russo",
    elenco: ["Robert Downey Jr.", "Scarlett Johansson", "Chris Evans", "Mark Rufallo", "Chris Hemsworth", "Jeremy Renner",
    "Tom Hiddleston", "Samuel L. Jackson", "Elizabeth Olsen", "Paul Bettany",],
},

{
    nome: "VINGADORES: ULTIMATO",
    anoLancamento: 2019,
    valeAPena: true,
    diretor: "Anthony e Joe Russo",
    elenco: ["Robert Downey Jr.", "Scarlett Johansson", "Chris Evans", "Mark Rufallo", "Chris Hemsworth", "Jeremy Renner",
    "Tom Hiddleston", "Samuel L. Jackson", "Elizabeth Olsen", "Paul Bettany"]
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
    
for(i in array[0].elenco){
    if(i < array[0].elenco.length - 1){
        string1 += `${array[0].elenco[i]}, `
    }else{
        string1 += `${array[0].elenco[i]}`
    } 
}

let string2 = []


for(i in array[1].elenco){
    if(i < array[1].elenco.length - 1){
        string2 += `${array[1].elenco[i]}, `
    }else{
        string2 += `${array[1].elenco[i]}`
    } 
}


let string3 = []

for(i in array[2].elenco){
    if(i < array[2].elenco.length - 1){
        string3 += `${array[2].elenco[i]}, `
    }else{
        string3 += `${array[2].elenco[i]}`
    } 
}


let roteiros = []
roteiros.push(string1, string2, string3)

for(i in array){
 console.log(`nome: ${array[i].nome} \nlançamento: ${array[i].anoLancamento} \nvale a pena?: ${array[i].valeAPena} \ndiretor: ${array[i].diretor} \nroteiro: ${array[i].elenco}`)
}