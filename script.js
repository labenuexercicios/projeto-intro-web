//Filme
//Título;
//Sinopse;
//Duração em minutos;
//Ano de Lançamento;
//Gênero (terror, suspense, ação, comédia etc);
//É um remake?

// console.log("Semana 1")
// const filme1 = "As bem armadas"
// const anoLançamento1 = 2013
// const remake1 = false
// const elenco1 = ["Sandra Bullock", "Melissa McCarthy", "Demian Bichir"]

// const filme2 = "Harry Potter e o Cálice de Fogo"
// const anoLançamento2 = 2005
// const remake2 = false
// const elenco2 = ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"]

// const filme3 = "Star Trek"
// const anoLançamento3 = 2009
// const remake3 = true
// const elenco3 = ["Chris Pine", "Zachary Quinto", "Eric Bana"]

// const mediaAnos = (anoLançamento1 + anoLançamento2 + anoLançamento3)/3
// console.log("Média dos anos de Lançamento:",mediaAnos)

// const verificaRemakes = (remake1 && remake2 && remake3)
// console.log("Todos os filmes são remakes?",verificaRemakes)

// console.log(filme1.toUpperCase(), "\nAno de lançamento:", anoLançamento1, "\nÉ remake?", remake1, "\nElenco:", elenco1)

// console.log(filme2.toUpperCase(), "\nAno de lançamento:", anoLançamento2, "\nÉ remake?", remake2, "\nElenco:", elenco2)

// console.log(filme3.toUpperCase(), "\nAno de lançamento:", anoLançamento3, "\nÉ remake?", remake3, "\nElenco:", elenco3)

//console.log("Semana 2")
const objeto1 = {
 filme: "As bem armadas",
 anoLançamento: 2013,
 remake: false,
 elenco: ["Sandra Bullock", "Melissa McCarthy", "Demian Bichir"]
};

const objeto2 = {
 filme: 'Harry Potter e o Cálice de Fogo',
 anoLançamento: 2005,
 remake: false,
 elenco: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"]
};

const objeto3 = {
filme: 'Star Trek',
anoLançamento: 2009,
remake: true,
elenco: ["Chris Pine", "Zachary Quinto", "Eric Bana"]
};

let guardarObjetos = [];
guardarObjetos.push(objeto1,objeto2,objeto3)
console.log(guardarObjetos)

// if(objeto1.remake === true){
//     guardarObjetos.push(objeto1);
// }else{
//     alert(`O filme ${objeto1.filme} não pode ser adicionado!`)
// }

// if(objeto2.remake === true){
//     guardarObjetos.push(objeto2);
// }else{
//     alert(`O filme ${objeto2.filme} não pode ser adicionado!`)
// }

// if(objeto3.remake === true){
//     guardarObjetos.push(objeto3);
// }else{
//     alert(`O filme ${objeto3.filme} não pode ser adicionado!`)
// }

// console.log(guardarObjetos)

// console.log("Semana 3")


// const obj = (objetos) => {
//     return{
//         filme:objetos.filme,
//         anoLançamento:objetos.anoLançamento,
//         remake:objetos.remake,
//         elenco:objetos.elenco
//     }
// }
// console.log(obj(objeto1))
// console.log(obj(objeto2))
// console.log(obj(objeto3))

// function string (objeto1){
//     console.log(`${objeto1.filme} ${objeto1.anoLançamento} ${objeto1.remake} ${objeto1.elenco}`)
// }
// string(objeto1)

// function string (objeto2){
//     console.log(`${objeto2.filme} ${objeto2.anoLançamento} ${objeto2.remake} ${objeto2.elenco}`)
// }
// string(objeto2)

// function string (objeto3){
//     console.log(`${objeto3.filme} ${objeto3.anoLançamento} ${objeto3.remake} ${objeto3.elenco}`)
// }
// string(objeto3)

// const array = []

// if (objeto1.remake) {
//     array.push(objeto1)
// }else{
//     alert(`O filme" ${objeto1.filme} "não foi encontrado!"`)
// }

// if (objeto2.remake) {
//     array.push(objeto2)
// }else{
//     alert(`O filme" ${objeto2.filme} "não foi encontrado!"`)
// }

// if (objeto3.remake) {
//     array.push(objeto3)
// }else{
//     alert(`O filme" ${objeto3.filme} "não foi encontrado!"`)
// }
// console.log(array)

// var filmes = [objeto1, objeto2, objeto3]

// function verify(nome){
//     for(i=0; i<=(filmes.length-1); i++){
//     if(nome === filmes[i].filme){
//         console.log("Filme:" +filmes[i].filme)
//     }else{
//         console.log("Filme não encontrado!")
//     }
//     }
// }
// verify(verify(prompt("Digite um filme")))
