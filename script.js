const filme1 = {
    nome : "Suspiria",
    genero : ["Terror", "Dança"],
    duracao : 150,
    remake : true 

}
    
    
const filme2 = {
    nome : "Jeca tatu",
    genero : ["Comédia", "Drama","Nacional"],
    duracao : 95,
    remake : false
}
 const filme3 = {
    nome: "Lagoa Azul",
    genero : ["Romance", "Drama"], 
    duracao : 105,
    remake : false
 }

 let listaDeFilmes = []

listaDeFilmes.push(filme1, filme2, filme3)

let temp = 0 
for ( let i = 0; i  <  listaDeFilmes.length; i++){
    temp += listaDeFilmes[i].duracao
}
const media = temp / listaDeFilmes.length 
console.log("Está é  media da duração dos filmes", media)

let todosTrue = true 
for (let i = 0; i < listaDeFilmes.length; i++){
    if (!listaDeFilmes[i].remake) {
        todosTrue = false
    }
}
console.log("Todos os campos booleanos são verdadeiros?",todosTrue)

for (let i = 0; i < listaDeFilmes.length; i++){
    console.log(listaDeFilmes[i].nome.toUpperCase())
    console.log("Gênero:", listaDeFilmes[i].genero)
    console.log("Duração:", listaDeFilmes[i].duracao)
    console.log("Remake:", listaDeFilmes[i].remake)
}