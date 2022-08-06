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