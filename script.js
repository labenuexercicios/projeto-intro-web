//Filme
//Título;
//Sinopse;
//Duração em minutos;
//Ano de Lançamento;
//Gênero (terror, suspense, ação, comédia etc);
//É um remake?

//Semana 1
const filme1 = "As bem armadas"
const anoLançamento1 = 2013
const remake1 = false
const elenco1 = ["Sandra Bullock", "Melissa McCarthy", "Demian Bichir"]

const filme2 = "Harry Potter e o Cálice de Fogo"
const anoLançamento2 = 2005
const remake2 = false
const elenco2 = ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"]

const filme3 = "Star Trek"
const anoLançamento3 = 2009
const remake3 = true
const elenco3 = ["Chris Pine", "Zachary Quinto", "Eric Bana"]

const mediaAnos = (anoLançamento1 + anoLançamento2 + anoLançamento3)/3
console.log("Média dos anos de Lançamento:",mediaAnos)

const verificaRemakes = (remake1 && remake2 && remake3)
console.log("Todos os filmes são remakes?",verificaRemakes)

console.log(filme1.toUpperCase(), "\nAno de lançamento:", anoLançamento1, "\nÉ remake?", remake1, "\nElenco:", elenco1)

console.log(filme2.toUpperCase(), "\nAno de lançamento:", anoLançamento2, "\nÉ remake?", remake2, "\nElenco:", elenco2)

console.log(filme3.toUpperCase(), "\nAno de lançamento:", anoLançamento3, "\nÉ remake?", remake3, "\nElenco:", elenco3)
