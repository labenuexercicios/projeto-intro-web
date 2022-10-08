// SEMANA 1: #################################################################################################################


// const jogo = "Mortal kombat 11"
// const genero = "Ação"
// const preco = 159.99
// const multiplayer = true

// const jogo2 = "Resident Evil Village"
// const genero2 = "Ação"
// const preco2 = 139.90
// const multiplayer2 = false

// const jogo3 = "F1 2022"
// const genero3 = "Corrida"
// const preco3 = 249.00
// const multiplayer3 = true

// const jogo4 = "God Of War"
// const genero4 = "Ação"
// const preco4 = 199.90
// const multiplayer4 = false

// const mediaDePreco = ((preco+preco2+preco3+preco4)/4)

// console.log(mediaDePreco)

// const todosSaoMultiplayer = multiplayer && multiplayer2 && multiplayer3 && multiplayer4

// console.log(todosSaoMultiplayer)



// SEMANA 2: #################################################################################################################


// const jogo = "Mortal kombat 11"
// const genero = "Ação"
// const preco = 159.99
// const multiplayer = true
// const marcadores =["Luta", "Violência detalhada", "Violento", "Multiplayer"]

// const jogo2 = "Resident Evil Village"
// const genero2 = "Ação"
// const preco2 = 139.90
// const multiplayer2 = false
// const marcadores2 = ["Terro de Sobrevivência", "Terror", "Primeira Pessoa", "Zumbis" ]

// const jogo3 = "F1 2022"
// const genero3 = "Corrida"
// const preco3 = 249.00
// const multiplayer3 = true
// const marcadores3 = ["Corrida", "Esportes", "Simulação", "Cooperativo"]

// const jogo4 = "God Of War"
// const genero4 = "Ação"
// const preco4 = 199.90
// const multiplayer4 = false
// const marcadores4 = ["Aventura", "Um Jogador", "Boa Trama", "RPG"]

// console.log(jogo.toUpperCase(), "\nGênero:"+genero, "\nPreço:"+ preco, "\nMultiplayer:"+multiplayer, "\nMarcadores:"+marcadores)

// console.log(jogo2.toUpperCase(), "\nGênero:"+genero2, "\nPreço:"+ preco2, "\nMultiplayer:"+multiplayer2, "\nMarcadores:"+marcadores2)

// console.log(jogo3.toUpperCase(), "\nGênero:"+genero3, "\nPreço:"+ preco3, "\nMultiplayer:"+multiplayer3, "\nMarcadores:"+marcadores3)

// console.log(jogo4.toUpperCase(), "\nGênero:"+genero4, "\nPreço:"+ preco4, "\nMultiplayer:"+multiplayer4, "\nMarcadores:"+marcadores4)



// SEMANA 3: #################################################################################################################


const jogo1 = {
    Titulo: "Mortal Kombat 11",
    Genero: "Ação",
    Preco: 159.99,
    Multiplayer: true,
    Marcadores: ["Luta", "Violência detalhada", "Violento", "Multiplayer"]
}

const jogo2 = {
    Titulo: "Resident Evil Village",
    Genero: "Ação",
    Preco: 139.90,
    Multiplayer: false,
    Marcadores: ["Terror de Sobrevivência", "Terror", "Primeira Pessoa", "Zumbis"]
}

const jogo3 = {
    Titulo: "F1 2022",
    Genero: "Corrida",
    Preco: 249.00,
    Multiplayer: true,
    Marcadores: ["Corrida", "Esportes", "Simulação", "Cooperativo"]
}

const jogo4 = {
    Titulo: "God Of War",
    Genero: "Ação",
    Preco: 199.90,
    Multiplayer: false,
    Marcadores: ["Aventura", "Um Jogador", "Boa Trama", "RPG"]
}


const jogos = []

jogos.push(jogo1, jogo2, jogo3, jogo4)

// console.log(jogos)



// SEMANA 4: #################################################################################################################


// if (jogo1.Multiplayer === true){
//     jogos.push(jogo1)
// }else{
//     alert("O jogo 1 não foi adicionado")
// }

// if (jogo2.Multiplayer === true){
//     jogos.push(jogo2)
// }else{
//     alert("O jogo 2 não foi adicionado")
// }

// if (jogo3.Multiplayer === true){
//     jogos.push(jogo3)
// }else{
//     alert("O jogo 3 não foi adicionado")
// }

// if (jogo4.Multiplayer === true){
//     jogos.push(jogo4)
// }else{
//     alert("O jogo 4 não foi adicionado")
// }


// SEMANA 5: #################################################################################################################

// for(let i in jogos){
//     let string = jogos[i].Marcadores.toString()
//     console.log(string)
// }

// SEMANA 6: #################################################################################################################

// for(i in jogos){

//     console.log(`Título:${jogos[i].Titulo} \nGênero:${jogos[i].Genero} \nPreço:${jogos[i].Preco} \nMultiplayer: ${jogos[i].Multiplayer}\nMarcadores:${jogos[i].Marcadores}`)
// }

function pesquisa(arrayDeObjetos, valorString){

    let objetoARetornar = {};

    for(let i = 0; i < arrayDeObjetos.length; i++){

        if(arrayDeObjetos[i].Titulo === valorString){
            objetoARetornar.Titulo = arrayDeObjetos[i].Titulo;
            objetoARetornar.Genero = arrayDeObjetos[i].Genero;
            objetoARetornar.Preco = arrayDeObjetos[i].Preco;
            objetoARetornar.Multiplayer = arrayDeObjetos[i].Multiplayer;
            objetoARetornar.Marcadores = arrayDeObjetos[i].Marcadores;
        }
    }

    if(objetoARetornar.Titulo !== valorString){
        alert("Jogo não encontrado");
    }else{
        return objetoARetornar;
    }
}

const objetoDoJogo = pesquisa(jogos, "Mortal Kombat 11")
console.log(objetoDoJogo)

















