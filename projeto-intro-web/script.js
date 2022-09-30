//Programa que mostra filmes que ganharam oscars

let filme1 = {
titulo: "Parasita",
duracao: 132,
ganhouOscar: true,
atores: ["Song Kang-ho", "Sun-kyun Lee", "Cho Yeo-jeong"]
}

let filme2 = {
titulo: "Moonlight",
duracao: 111,
ganhouOscar: true,
atores: ["Mahersala Ali", "Naomie Harris", "Trevante Rhodes"]
}

let filme3 = {
titulo: "Green book",
duracao: 130,
ganhouOscar: true,
atores: ["Viggo Mortensen", "Mahersala Ali", "Linda Cardellini"]
}

const media = (filme1.duracao + filme2.duracao + filme3.duracao) / 3
console.log("A média de duração dos filmes é de:",(media), "minutos")

const temOscar = filme1.ganhouOscar && filme2.ganhouOscar && filme3.ganhouOscar
console.log("Os filmes ganharam Oscars?", temOscar)

// console.log(`Título do filme: ${filme1.titulo.toUpperCase()}
// Duração do filme: ${filme1.duracao} minutos
// O filme tem oscar? ${filme1.ganhouOscar}
// Nome dos atores: ${filme1.atores}.
// `)

// console.log(`Título do filme: ${filme2.titulo.toUpperCase()}
// Duração do filme: ${filme2.duracao} minutos
// O filme tem oscar? ${filme2.ganhouOscar}
// Nome dos Atores: ${filme2.atores}.
// `)

// console.log(`Título do filme: ${filme3.titulo.toUpperCase()}
// Duração do filme: ${filme3.duracao} minutos
// O filme tem oscar? ${filme3.ganhouOscar}
// Nome dos Atores: ${filme3.atores}.
// `)

const arrayFilmes = []

if(filme1.ganhouOscar === true){
    arrayFilmes.push(filme1)
} else {
    alert("Erro! O item não foi adicionado")
}

if(filme2.ganhouOscar === true){
    arrayFilmes.push(filme2)
} else {
    alert("Erro! O item não foi adicionado")
}

if(filme3.ganhouOscar === true){
    arrayFilmes.push(filme3)
} else {
    alert("Erro! O item não foi adicionado")
}

console.log("Lista com filmes que ganharam Oscars:", arrayFilmes)

const transformaEmString = (filmes) => {
for (let i = 0; i < 1; i++){
    const stringAtores = filmes.atores.toString()
    filmes.atores = stringAtores
}}

transformaEmString(filme1)
transformaEmString(filme2)
transformaEmString(filme3)

const imprimirArray = (filmes) => {
    for(let i = 0; i < filmes.length; i++){
    console.log(`Título do filme: ${filmes[i].titulo.toUpperCase()}
Duração do filme: ${filmes[i].duracao} minutos
O filme tem oscar? ${filmes[i].ganhouOscar}
Estrelado por ${filmes[i].atores}`)
    }
}
imprimirArray(arrayFilmes)

//Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.

let filme4 = {
    titulo: "No ritmo do Coração",
    duracao: 111,
    ganhouOscar: true,
    atores: ["Emilia Jones", "Marlee Matlin", "Troy Kotsur"]
}

transformaEmString(filme4)
arrayFilmes.push(filme4)
console.log("Lista com filmes que ganharam o Oscar:", arrayFilmes)