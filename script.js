//Filmes para ver antes de morrer

let objeto1 = {
    nome1: "TENET",
    anoLancamento1: 2020,
    valeAPena1: true,
    diretor1: "Christopher Nolan",
    roteiro1: ["Chistopher Nolan"],
}

let objeto2 = {
    nome2: "THE SUN SHINES BRIGHT",
    anoLancamento2: 1953,
    valeAPena2: true,
    diretor2: "John Ford",
    roteiro2: ["Frank Hotaling"],
}

let objeto3 = {
    nome3: "GREEN BOOK",
    anoLancamento3: 2018,
    valeAPena3: true,
    diretor3: "Peter Farrely",
    roteiro3: ["Peter Farrely", "Nick Vallelonga", "Bryan Hayes Currie"],
}


const media = (objeto1.anoLancamento1 + objeto2.anoLancamento2 + objeto3.anoLancamento3)/3
    console.log(media)
    
const verificarValeAPena = objeto1.valeAPena1 && objeto2.valeAPena2 && objeto3.valeAPena3
    console.log(verificarValeAPena)
    
let array = []
    
objeto1.valeAPena1 ? array.push(objeto1) : alert(`Tenet não foi adicionado`)
objeto2.valeAPena2 ? array.push(objeto2) : alert(`The Sun Shines Bright não foi adicionado`)
objeto3.valeAPena3 ? array.push(objeto3) : alert(`Green Book não foi adicionado`)
    
//console.log(array)
    
let string1 = []
    
for(i in objeto1.roteiro1){
    if(i < objeto1.roteiro1.length - 1){
        string1 += `${objeto1.roteiro1[i]}, `
    }else{
        string1 += `${objeto1.roteiro1[i]}`
    } 
}

let string2 = []


for(i in objeto2.roteiro2){
    if(i < objeto2.roteiro2.length - 1){
        string2 += `${objeto2.roteiro2[i]}, `
    }else{
        string2 += `${objeto2.roteiro2[i]}`
    } 
}


let string3 = []

for(i in objeto3.roteiro3){
    if(i < objeto3.roteiro3.length - 1){
        string3 += `${objeto3.roteiro3[i]}, `
    }else{
        string3 += `${objeto3.roteiro3[i]}`
    } 
}



//Relatório
console.log(`${objeto1.nome1} \nMinutos: ${objeto1.duracaoMinutos1}\nRemake: ${objeto1.valeAPena1} \nDiretor: ${objeto1.diretor1} \nRoteiristas: ${string1}`)

console.log(`${objeto2.nome2} \nMinutos: ${objeto2.duracaoMinutos2} \nRemake: ${objeto2.valeAPena2} \nDiretor: ${objeto2.diretor2} \nRoteiristas: ${string2}`)

console.log(`${objeto3.nome3} \nMinutos: ${objeto3.duracaoMinutos3} \nRemake: ${objeto3.valeAPena3} \nDiretor: ${objeto3.diretor3} \nRoteiristas: ${string3}`)
    