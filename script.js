//Filmes

const nome1 = "Tenet"
const duracaoMinutos1 = 148
const remake1 = false
const diretor1 = "Christopher Nolan"

const nome2 = "The Sun Shines Bright"
const duracaoMinutos2 = 90
const remake2 = false
const diretor2 = "John Ford"

const nome3 = "Green Book"
const duracaoMinutos3 = 130
const remake3 = false
const diretor3 = "Peter Farrelly"

const media = (duracaoMinutos1 + duracaoMinutos2 + duracaoMinutos3)/3
console.log(media)

const verificarRemake = remake1 && remake2 && remake3
console.log(verificarRemake)