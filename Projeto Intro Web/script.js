// SEMANA 1: #################################################################################################################


const jogo01 = "Mortal kombat 11"
const genero01 = "Ação"
const preco01 = 159.99
const multiplayer01 = true

const jogo02 = "Resident Evil Village"
const genero02 = "Ação"
const preco02 = 139.90
const multiplayer02 = false

const jogo03 = "F1 2022"
const genero03 = "Corrida"
const preco03 = 249.00
const multiplayer03 = true

const jogo04 = "God Of War"
const genero04 = "Ação"
const preco04 = 199.90
const multiplayer04 = false

const mediaDePreco = ((preco01+preco02+preco03+preco04)/4)

console.log(`Média numérica: ${mediaDePreco}`)

const todosSaoMultiplayer = multiplayer01 && multiplayer02 && multiplayer03 && multiplayer04

console.log(`Todos os valores booleanos são true? ${todosSaoMultiplayer}`)



// SEMANA 2: #################################################################################################################


const jogo001 = "Mortal kombat 11"
const genero001 = "Ação"
const preco001 = 159.99
const multiplayer001 = true
const marcadores001 =["Luta", "Violência detalhada", "Violento", "Multiplayer"]

const jogo002 = "Resident Evil Village"
const genero002 = "Ação"
const preco002 = 139.90
const multiplayer002 = false
const marcadores002 = ["Terro de Sobrevivência", "Terror", "Primeira Pessoa", "Zumbis" ]

const jogo003 = "F1 2022"
const genero003 = "Corrida"
const preco003 = 249.00
const multiplayer003 = true
const marcadores003 = ["Corrida", "Esportes", "Simulação", "Cooperativo"]

const jogo004 = "God Of War"
const genero004 = "Ação"
const preco004 = 199.90
const multiplayer004 = false
const marcadores004 = ["Aventura", "Um Jogador", "Boa Trama", "RPG"]

console.log(jogo001.toUpperCase(), "\nGênero:"+ genero001, "\nPreço:"+ preco001, "\nMultiplayer:"+ multiplayer001, "\nMarcadores:"+ marcadores001)

console.log(jogo002.toUpperCase(), "\nGênero:"+ genero002, "\nPreço:"+ preco002, "\nMultiplayer:"+ multiplayer002, "\nMarcadores:"+ marcadores002)

console.log(jogo003.toUpperCase(), "\nGênero:"+ genero003, "\nPreço:"+ preco003, "\nMultiplayer:"+ multiplayer003, "\nMarcadores:"+ marcadores003)

console.log(jogo004.toUpperCase(), "\nGênero:"+ genero004, "\nPreço:"+ preco004, "\nMultiplayer:"+ multiplayer004, "\nMarcadores:"+ marcadores004)



// SEMANA 3: #################################################################################################################


const jogo1 = {
    titulo: "Mortal Kombat 11",
    genero: "Ação",
    preco: 159.99,
    multiplayer: true,
    marcadores: ["Luta", "Violência detalhada", "Violento", "Multiplayer"],
    imagem: "./Midia/Mortal Kombat 11.jpg",
    video: "./Midia/Mortal Kombat 11 - Trailer Oficial de Lançamento.mp4",
    link: "https://store.steampowered.com/app/976310/Mortal_Kombat11/"
}
const jogo2 = {
    titulo: "Resident Evil Village",
    genero: "Ação",
    preco: 139.90,
    multiplayer: false,
    marcadores: ["Terror de Sobrevivência", "Terror", "Primeira Pessoa", "Zumbis"],
    imagem: "./Midia/Mortal Kombat 11.jpg",
    video: "./Midia/Mortal Kombat 11 - Trailer Oficial de Lançamento.mp4",
    link: "https://store.steampowered.com/app/976310/Mortal_Kombat11/"
}

const jogo3 = {
    titulo: "F1 2022",
    genero: "Corrida",
    preco: 249.00,
    multiplayer: true,
    marcadores: ["Corrida", "Esportes", "Simulação", "Cooperativo"],
    imagem: "./Midia/Mortal Kombat 11.jpg",
    video: "./Midia/Mortal Kombat 11 - Trailer Oficial de Lançamento.mp4",
    link: "https://store.steampowered.com/app/976310/Mortal_Kombat11/"
}

const jogo4 = {
    titulo: "God Of War",
    genero: "Ação",
    preco: 199.90,
    multiplayer: false,
    marcadores: ["Aventura", "Um Jogador", "Boa Trama", "RPG"],
    imagem: "./Midia/Mortal Kombat 11.jpg",
    video: "./Midia/Mortal Kombat 11 - Trailer Oficial de Lançamento.mp4",
    link: "https://store.steampowered.com/app/976310/Mortal_Kombat11/"
}


const jogos = []

jogos.push(jogo1, jogo2, jogo3, jogo4)

console.log(jogos)



// SEMANA 4: #################################################################################################################

let jogosMultiplayer = []

if (jogo1.multiplayer === true){
    jogosMultiplayer.push(jogo1)
}else{
    alert("O jogo 1 não foi adicionado")
}

if (jogo2.multiplayer === true){
    jogosMultiplayer.push(jogo2)
}else{
    alert("O jogo 2 não foi adicionado")
}

if (jogo3.multiplayer === true){
    jogosMultiplayer.push(jogo3)
}else{
    alert("O jogo 3 não foi adicionado")
}

if (jogo4.multiplayer === true){
    jogosMultiplayer.push(jogo4)
}else{
    alert("O jogo 4 não foi adicionado")
}


// SEMANA 5: #################################################################################################################

for(let i in jogos){
    let string = jogos[i].marcadores.toString()
    console.log(string)
}

// SEMANA 6: #################################################################################################################

for(i in jogos){

    console.log(`Título:${jogos[i].titulo} \nGênero:${jogos[i].genero} \nPreço:${jogos[i].preco} \nMultiplayer: ${jogos[i].multiplayer}\nMarcadores:${jogos[i].marcadores}`)
}

function pesquisa(arrayDeObjetos, valorString){

    let objetoARetornar = {};

    for(let i = 0; i < arrayDeObjetos.length; i++){

        if(arrayDeObjetos[i].titulo === valorString){
            objetoARetornar.titulo = arrayDeObjetos[i].titulo;
            objetoARetornar.genero = arrayDeObjetos[i].genero;
            objetoARetornar.preco = arrayDeObjetos[i].preco;
            objetoARetornar.multiplayer = arrayDeObjetos[i].multiplayer;
            objetoARetornar.marcadores = arrayDeObjetos[i].marcadores;
            objetoARetornar.imagem = arrayDeObjetos[i].imagem;
            objetoARetornar.video = arrayDeObjetos[i].video;
            objetoARetornar.link = arrayDeObjetos[i].link
        }
    }

    if(objetoARetornar.titulo !== valorString){
        alert("Jogo não encontrado");
    }else{
        return objetoARetornar;
    }
}

const objetoDoJogo = pesquisa(jogos, "Resident Evil Village")
console.log(objetoDoJogo)

// SEMANA 11: #################################################################################################################


function criarJogos (array){

    const secaoJogo = document.getElementById("menu") 

    secaoJogo.innerHTML = ""
    
    for(i=0; i<array.length; i++){
        
        secaoJogo.innerHTML += `<section>
        <ul>  <div class="imagem" id="imagem-de-jogo"> 
        <img src= '${array[i].imagem}' alt="Foto cachorro" id="imagem1"></div>
        <video class="video" src='${array[i].video}' controls>Trailer</video>
        <div class="lista"><li><strong>Nome:</strong> <a href="${array[i].link}" target="_blank"> ${array[i].titulo}</a></li>
        <li><strong>Gênero:</strong> ${array[i].genero}</li>
        <li><strong>Preço:</strong> ${array[i].preco}</li>
        <li><strong>Multiplayer:</strong> ${array[i].multiplayer}</li>
        <li><strong>Marcadores:</strong> ${array[i].marcadores}</li>
        </div>
        </ul>
        </section>`
        }
    
    }
    


    


// SEMANA 12: #################################################################################################################

 function buscaJogo() {
    
    const elementoDeCampo = document.getElementById("pesquisa");

    
    const textoABuscar = elementoDeCampo.value;

    const jogoRetornado = pesquisa(jogos, textoABuscar);

    if (jogoRetornado.Titulo) {

        const secaoJogo = document.getElementById("container-de-jogos");

        secaoJogo.innerHTML = `<section id="jogo" class="jogos">
               
                   <img class="imagem" src="${jogoRetornado.img}" alt="Mortal Kombat 11">
                   <video class="video" src="${jogoRetornado.video}"
               <ul>
                   <li id="titulo">
                   <a href="${jogoRetornado.href}" target="_blank">Título:"${jogoRetornado.Titulo}"</a>
                   </li>
                   <li>Gênero: ${jogoRetornado.Genero}</li>
                   <li>Preço: ${jogoRetornado.Preco}</li>
                   <li>Multiplayer: ${jogoRetornado.Multiplayer}</li>
                   <li>Marcadores: ${jogoRetornado.Marcadores}</li>
               </ul>
           </section>`
        
    }else{
        alert("Jogo naõ encontrado");
    }

}





















