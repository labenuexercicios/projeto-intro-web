//Filmes

const nome1 = "Tenet"
const duracaoMinutos1 = 148
const remake1 = false
const diretor1 = "Christopher Nolan"
const roteiro1 = ["Chistopher Nolan"]

const nome2 = "The Sun Shines Bright"
const duracaoMinutos2 = 90
const remake2 = false
const diretor2 = "John Ford"
const roteiro2 = ["Frank Hotaling"]

const nome3 = "Green Book"
const duracaoMinutos3 = 130
const remake3 = false
const diretor3 = "Peter Farrelly"
const roteiro3 = ["Peter Farrely", "Nick Vallelonga", "Bryan Hayes Currie"]

const media = (duracaoMinutos1 + duracaoMinutos2 + duracaoMinutos3)/3
console.log(media)

const verificarRemake = remake1 && remake2 && remake3
console.log(verificarRemake)

//console.log(`Nome: ${pessoa}  \nCor favorita: ${cor}`)

console.log(`${nome1.toUpperCase()} \nMinutos: ${duracaoMinutos1}\nRemake: ${remake1} \nDiretor: ${diretor1} \nRoteiristas: ${roteiro1}`)

console.log(`${nome2.toUpperCase()} \nMinutos: ${duracaoMinutos2} \nRemake: ${remake2} \nDiretor: ${diretor2} \nRoteiristas: ${roteiro2}`)

console.log(`${nome3.toUpperCase()} \nMinutos: ${duracaoMinutos3} \nRemake: ${remake3} \nDiretor: ${diretor3} \nRoteiristas: ${roteiro3}`)