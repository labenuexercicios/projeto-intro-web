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

console.log(`${objeto1.nome1} \nMinutos: ${objeto1.duracaoMinutos1}\nRemake: ${objeto1.valeAPena1} \nDiretor: ${objeto1.diretor1} \nRoteiristas: ${objeto1.roteiro1}`)

console.log(`${objeto2.nome2} \nMinutos: ${objeto2.duracaoMinutos2} \nRemake: ${objeto2.valeAPena2} \nDiretor: ${objeto2.diretor2} \nRoteiristas: ${objeto2.roteiro2}`)

console.log(`${objeto3.nome3} \nMinutos: ${objeto3.duracaoMinutos3} \nRemake: ${objeto3.valeAPena3} \nDiretor: ${objeto3.diretor3} \nRoteiristas: ${objeto3.roteiro3}`)

let array = []

if(objeto1.valeAPena1){
    array.push(objeto1)
}else{
    alert(`O Tenet não foi adicionado`)
}
if(objeto2.valeAPena2){
    array.push(objeto2)
}else{
    alert(`O The Sun Shines Bright não foi adicionado`)
}
if(objeto3.valeAPena3){
    array.push(objeto3)
}else{
    alert(`O Green Book não foi adicionado`)
}
console.log(array)