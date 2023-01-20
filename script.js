

   const jogo1 = {
    
        titulo: "THE LAST OF US: PART II",
        preco: 29.99,
        nota: 93,
        multiplayer: false,
        duracao: "24h",
        desenvolvedora: "Naughty Dog",
        genero: "Ação, Aventura, Terror",
        capa:"https://www.arkade.com.br/wp-content/uploads/2020/06/the-last-of-us-2-capa.jpg",
        site: "https://pt.wikipedia.org/wiki/The_Last_of_Us_Part_II"
    
    };
    
  const  jogo2 = {
    
        titulo: "RED DEAD REDEMPTION 2",
        preco: 39.99,
        nota: 97,
        multiplayer: true,
        duracao: "50h",
        desenvolvedora: "Rockstar",
        genero: "Mundo Aberto, Ação, Faroeste",
        capa:"https://psxbrasil.com.br/wp-content/uploads/2018/08/reddeadredemption2.jpg",
        site: "https://pt.wikipedia.org/wiki/Red_Dead_Redemption_2"
    };
    
    
   const jogo3 = {
        
        titulo: "NIER",
        preco: 9.99,
        nota: 68,
        multiplayer: false,
        duracao: "20h",
        desenvolvedora: "PlatinumGames",
        genero: "Hack And Slash, RPG, Drama",
        capa:"https://upload.wikimedia.org/wikipedia/pt/9/96/Nier_capa.jpg",
        site: "https://pt.wikipedia.org/wiki/Nier_(jogo_eletr%C3%B4nico)"
    };
    
   const jogo4 = {
    
        titulo: "MASS EFFECT 2",
        preco: 19.99,
        nota: 94,
        multiplayer: false,
        duracao: "25h",
        desenvolvedora: "BioWare",
        genero: "RPG, Sci-fi, Ação",
        capa:"https://upload.wikimedia.org/wikipedia/pt/0/05/MassEffect2_cover.PNG",
        site: "https://pt.wikipedia.org/wiki/Mass_Effect_2"
    };
    
    
     let jogos=[]
     jogos.push(jogo1, jogo2, jogo3, jogo4)

     console.log(jogos)

    
// function buscarJogos(jogos){

//     const nome = prompt("Digite o nome do jogo").toUpperCase()

//     let objeto = jogos.filter(
//         jogo=>{


//             return jogo.titulo.toUpperCase().includes(titulo)
//         }
//     )
//     if(objeto.length===0){
//         alert("jogo não encontrado!")
//     }else{
//         console.log("JOGO ENCONTRADO")
//         return objeto
//     }
// }


function criarCard (obj){

    const card = document.createElement("div")
    const imgJogo = document.createElement("img")
    const nomeJogo = document.createElement("a")
    const dados = document.createElement("ul")
    const duracaoJogo = document.createElement("li")
    const desenvolvedora = document.createElement("li")
    const notaJogo = document.createElement("li")
    const temMultiplayer = document.createElement("li")
    const genero = document.createElement("li")
    const precoDoJogo = document.createElement("li")

    imgJogo.src=obj.capa
    nomeJogo.innerText = obj.titulo
    nomeJogo.href = obj.site
    nomeJogo.target = "_blank"
    duracaoJogo.innerText = `DURAÇÃO: ${obj.duracao}`
    desenvolvedora.innerText = `DESENVOLVEDORA: ${obj.desenvolvedora}`
    notaJogo.innerText = `NOTA: ${obj.nota} *Dados do metacritc`
    temMultiplayer.innerText = `POSSUI MULTIPLAYER? ${obj.multiplayer? "Sim" : "Não"}`
    genero.innerText = `GENERO: ${obj.genero}` 
    precoDoJogo.innerText = `PREÇO DO ALUGUEL: R$ ${obj.preco} por mes`

    card.className = "card"
    dados.className = "texto"

    dados.append(nomeJogo, duracaoJogo, desenvolvedora, notaJogo, temMultiplayer, genero, precoDoJogo)
    card.append(imgJogo, dados)

    return card
}

function renderizarJogos (list) {

    const secaoJogos = document.getElementById("secaoJogos")

    secaoJogos.innerHTML = ""
    console.log(list)


    list.forEach(produto => {

        const cardJogoCriado = criarCard(produto)
        secaoJogos.appendChild(cardJogoCriado)


    })
    
}

renderizarJogos(jogos)


function pesquisarJogos() {

    const inputPesquisa = document.getElementById("txtBusca")

    const botaoPesquisa = document.getElementById("btnBusca")


    botaoPesquisa.addEventListener("click", () => {

        const valor = inputPesquisa.value.toUpperCase()

        const filtro = jogos.filter(produto => produto.titulo === valor)

        console.log(filtro)

        if(filtro.length){

            renderizarJogos(filtro)
    
        }else {

            renderizarJogos(jogos)
            alert("Jogo não encontrado")
        }
    
    })

}

pesquisarJogos()



