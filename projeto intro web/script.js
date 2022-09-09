//filme

let filme1 = {
titulo1: "Parasita",
duracao1: 132,
ganhouOscar1: true,
atores1: ["Song Kang-ho", "Sun-kyun Lee", "Cho Yeo-jeong"]
}

let filme2 = {
titulo2: "Moonlight",
duracao2: 111,
ganhouOscar2: true,
atores2: ["Mahersala Ali", "Naomie Harris", "Trevante Rhodes"]
}

let filme3 = {
titulo3: "Green book",
duracao3: 130,
ganhouOscar3: true,
atores3: ["Viggo Mortensen", "Mahersala Ali", "Linda Cardellini"]
}

const media = (filme1.duracao1 + filme2.duracao2 + filme3.duracao3) / 3
console.log("A média de duração dos filmes é de:",(media), "minutos")

const temOscar = filme1.ganhouOscar1 && filme2.ganhouOscar2 && filme3.ganhouOscar3
console.log("Os filmes ganharam Oscars?", temOscar)

console.log(`Título do filme: ${filme1.titulo1.toUpperCase()}
Duração do filme: ${filme1.duracao1} minutos
O filme tem oscar? ${filme1.ganhouOscar1}
Nome dos atores: ${filme1.atores1}.
`)

console.log(`Título do filme: ${filme2.titulo2.toUpperCase()}
Duração do filme: ${filme2.duracao2} minutos
O filme tem oscar? ${filme2.ganhouOscar2}
Nome dos Atores: ${filme2.atores2}.
`)

console.log(`Título do filme: ${filme3.titulo3.toUpperCase()}
Duração do filme: ${filme3.duracao3} minutos
O filme tem oscar? ${filme3.ganhouOscar3}
Nome dos Atores: ${filme3.atores3}.
`)

const arrayFilmes = []

if(filme1.ganhouOscar1 === true){
    arrayFilmes.push(filme1)
} else {
    alert("Erro! O item não foi adicionado")
}

if(filme2.ganhouOscar2 === true){
    arrayFilmes.push(filme2)
} else {
    alert("Erro! O item não foi adicionado")
}

if(filme3.ganhouOscar3 === true){
    arrayFilmes.push(filme3)
} else {
    alert("Erro! O item não foi adicionado")
}

console.log("Lista com filmes que ganharam Oscars:", arrayFilmes)