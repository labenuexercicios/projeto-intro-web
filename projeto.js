// "Tema do projeto: Melhores jogos de todos os tempos"

let jogos = [
    {
    nome:"Chrono Trigger",
    anoLancamento: 1995,
    temMultiplayer: false,
    plataformas: ["Super Nintendo", "PlayStation", "Nintendo DS", "iOS", "Android", "Windows"]
    },


    {
    nome: "Binding of Isaac: Rebirth",
    anoLancamento: 2014,
    temMultiplayer: true,
    plataformas: ["Linux", "Windows", "PlayStation 4", "PlayStation Vita", "New Nintendo 3DS", "Wii U", "Xbox One",  "iOS", "Nintendo Switch", "PlayStation 5", "Xbox Series X/S"]
    },

    {
    nome: "The Elder Scrolls V: Skyrim",
    anoLancamento: 2011,
    temMultiplayer: false,
    plataformas: ["Windows", "PlayStation 3", "Xbox 360", "PlayStation 4", "Xbox One", "Nintendo Switch", "PlayStation 5", "Xbox Series X/S"]
    }
]

let plataformas1 = ""
let plataformas2 = ""
let plataformas3 = ""

for(let i = 0; i < jogos[0].plataformas.length; i++){
    if(i === 0){
        plataformas1 += jogos[0].plataformas[i]
    } else {
        plataformas1 += ", "
        plataformas1 += jogos[0].plataformas[i]
    }
}

for(let i = 0; i < jogos[1].plataformas.length; i++){
    if(i === 0){
        plataformas2 += jogos[1].plataformas[i]
    } else {
        plataformas2 += ", "
        plataformas2 += jogos[1].plataformas[i]
    }
}

for(let i = 0; i < jogos[2].plataformas.length; i++){
    if(i === 0){
        plataformas3 += jogos[2].plataformas[i]
    } else {
        plataformas3 += ", "
        plataformas3 += jogos[2].plataformas[i]
    }
}

console.log(`${jogos[0].nome.toUpperCase()}
Ano de Lançamento: ${jogos[0].anoLancamento}
Possuí multiplayer?: ${jogos[0].temMultiplayer}
plataformas: ${plataformas1}

${jogos[1].nome.toUpperCase()}
Ano de Lançamento: ${jogos[1].anoLancamento}
Possuí multiplayer?: ${jogos[1].temMultiplayer}
plataformas: ${plataformas2}

${jogos[2].nome.toUpperCase()}
Ano de Lançamento: ${jogos[2].anoLancamento}
Possuí multiplayer?: ${jogos[2].temMultiplayer}
plataformas: ${plataformas3}
`)

// Relatorio no formato pedido na semana 3, mas como nao cumpre os requisitos do projeto deixarei comentado
// for(jogo of jogos){
//     for(propriedade in jogo){
//         console.log(`${propriedade}: ${jogo[propriedade]}`)
//     }
//     console.log("-----------------")
// }

const mediaLancamento = ( jogos[0].anoLancamento + jogos[1].anoLancamento + jogos[2].anoLancamento) / 3
console.log(`A média dos anos de lançamento é ${mediaLancamento}`)

// Como essa parte não foi pedida no checklist, achei melhor deixa-la comentada
// const verificaMultiplayer = jogos[0].temMultiplayer && jogos[1].temMultiplayer && jogos[2].temMultiplayer
// console.log(verificaMultiplayer)

jogosComMultiplayer = []

if(jogos[0].temMultiplayer){
    jogosComMultiplayer.push(jogos[0])
} else {
    alert(`O jogo ${jogos[0].nome} não foi adicionado ao Array, pois não tem opção de jogo multiplayer.
    `)
}

if(jogos[1].temMultiplayer){
    jogosComMultiplayer.push(jogos[1])
} else {
    alert(`O jogo ${jogos[1].nome} não foi adicionado ao Array, pois não tem opção de jogo multiplayer.
    `)
}

if(jogos[2].temMultiplayer){
    jogosComMultiplayer.push(jogos[2])
} else {
    alert(`O jogo ${jogos[2].nome} não foi adicionado ao Array, pois não tem opção de jogo multiplayer.
    `)
}
console.log(jogosComMultiplayer)
