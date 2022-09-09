//filme

const titulo1 = "Parasita"
const duracao1 = 132
const ganhouOscar1 = true
const atores1 = ["Song Kang-ho", "Sun-kyun Lee", "Cho Yeo-jeong"] 

const titulo2 = "Moonlight"
const duracao2 = 111
const ganhouOscar2 = true
const atores2 = ["Mahersala Ali", "Naomie Harris", "Trevante Rhodes"]

const titulo3 = "Green book"
const duracao3 = 130
const ganhouOscar3 = true
const atores3 = ["Viggo Mortensen", "Mahersala Ali", "Linda Cardellini"]

const media = (duracao1 + duracao2 + duracao3) / 3
console.log("A média de duração dos filmes é de:",(media), "minutos")

const temOscar = ganhouOscar1 && ganhouOscar2 && ganhouOscar3
console.log("Os filmes ganharam Oscars?", temOscar)

console.log(`Título do filme: ${titulo1.toUpperCase()}
Duração do filme: ${duracao1} minutos
O filme tem oscar? ${ganhouOscar1}
Nome dos atores: ${atores1}.
`)

console.log(`Título do filme: ${titulo2.toUpperCase()}
Duração do filme: ${duracao2} minutos
O filme tem oscar? ${ganhouOscar2}
Nome dos Atores: ${atores2}.
`)

console.log(`Título do filme: ${titulo3.toUpperCase()}
Duração do filme: ${duracao3} minutos
O filme tem oscar? ${ganhouOscar3}
Nome dos Atores: ${atores3}.
`)