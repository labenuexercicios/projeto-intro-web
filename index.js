const jogos = [
    {
        jogo: "Minecraft",
        anoLancamento: Number(2009),
        jogoGratuito: false,
        plataformas: "PC, PlayStation, Xbox, Mobile"
    }, 
    {
        jogo: "Grand Theft Auto V",
        anoLancamento: Number(2013),
        jogoGratuito: false,
        plataformas: "PC, PlayStation ,Xbox"
    },
    {
        jogo: "Fortnite",
        anoLancamento: Number(2017),
        jogoGratuito: true,
        plataformas: "PC, PlayStation, Xbox, Mobile, Nintendo Switch"
    },
]

let mediaAnosEntreLancamento = (4 + 1 + 3) / 4
let jogosGratuitos = []
let naoGratuitos = []
for(let i in jogos){
    jogos[i].jogoGratuito ? jogosGratuitos.push(jogos[i]) : naoGratuitos.push(jogos[i])
} 

for(jogo of jogos){
    for(propriedade in jogo){
        console.log(`${propriedade}: ${jogo[propriedade]}`)
    }
console.log("=========================================")
} 
    
const minecraft = [ 
    document.getElementById("link-jogo1").innerHTML = jogos[0].jogo,
    document.getElementById("ano-lancamento-1").innerHTML = "Ano de lançamento: " + jogos[0].anoLancamento,
    document.getElementById("jogo-gratuito-1").innerHTML = "Gratuito: não",
    document.getElementById("plataformas-1").innerHTML = "Plataformas: " + jogos[0].plataformas
]

const gta = [
    document.getElementById("link-jogo2").innerHTML = jogos[1].jogo, 
    document.getElementById("ano-lancamento-2").innerHTML = "Ano de lançamento: " + jogos[1].anoLancamento,
    document.getElementById("jogo-gratuito-2").innerHTML = "Gratuito: não",
    document.getElementById("plataformas-2").innerHTML = "Plataformas: " + jogos[1].plataformas
]

const fortnite = [
    document.getElementById("link-jogo3").innerHTML = jogos[2].jogo, 
    document.getElementById("ano-lancamento-3").innerHTML = "Ano de lançamento: " + jogos[2].anoLancamento,
    document.getElementById("jogo-gratuito-3").innerHTML = "Gratuito: sim" ,
    document.getElementById("plataformas-3").innerHTML = "Plataformas: " + jogos[2].plataformas
]

const inputBusca = document.getElementById("buscar")

const sectionJogo1 = document.getElementById("section-jogo-1")
const sectionJogo2 = document.getElementById("section-jogo-2")
const sectionJogo3 = document.getElementById("section-jogo-3")

const todasSections = [sectionJogo1, sectionJogo2, sectionJogo3]  

const buscar = (event) => {
    const jogoNaoEncontrado = document.getElementById("jogo-nao-encontrado")
    const inputVazio = document.getElementById("inputvazio")

    for(i in todasSections){
        if(!jogos[i].jogo.toLowerCase().includes(inputBusca.value.toLowerCase())){
            todasSections[i].classList.add("invisible")
        } else {
            todasSections[i].classList.remove("invisible")
        }
    }
    
    if(!jogos[0].jogo.toLowerCase().includes(inputBusca.value.toLowerCase()) && !jogos[1].jogo.toLowerCase().includes(inputBusca.value.toLowerCase()) && !jogos[2].jogo.toLowerCase().includes(inputBusca.value.toLowerCase())){
        jogoNaoEncontrado.classList.remove("invisible")
    } else {
        jogoNaoEncontrado.classList.add("invisible")
    }

    if(inputBusca.value === ""){
        inputVazio.classList.remove("invisible")
    } else {
        inputVazio.classList.add("invisible")
    }
}

inputBusca.addEventListener("keypress", function(event) {
    if(event.key === "Enter"){ 
        event.preventDefault();
        document.getElementById("botaoBusca").click();
    }
})