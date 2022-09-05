const arrayDeJogadores = []

const arrayDeLiga = []

class criarObjetos {
    constructor(player, posicao, time, altura, ganhouLiga, anoTitulo) {
        this.player = player.toUpperCase()
        this.posicao = posicao.toUpperCase()
        this.time = time.toUpperCase()
        this.altura = altura
        this.ganhouLiga = ganhouLiga
        this.anoTitulo = anoTitulo
        arrayDeJogadores.push(this)
        this.ganhouLiga === true ? arrayDeLiga.push(this) : alert('Item não foi adicionado')
    }
}

const jogador1 = new criarObjetos("LeBron James", "Ala-pivô/Ala", "Los Angeles Lakers", 2.06, true, [2012, 2013, 2016, 2020])
const jogador2 = new criarObjetos("Stephen Curry", "Armador", "Golden State Warriors", 1.88, true, [2015, 2017, 2018, 2022])
const jogador3 = new criarObjetos("Giannis Antetokounmpo", "Ala-pivô/Ala/Pivô", "Milwaukee Bucks", 2.11, true, [2021])
const jogador4 = new criarObjetos("Kevin Durant", "Ala-pivô/Ala", "Brooklyn Nets", 2.08, true, [2017, 2018])
const jogador5 = new criarObjetos("Jayson Tatum", "Ala-pivô/Pivô/Ala", "Boston Celtics", 2.03, false, [0])

console.log(arrayDeJogadores)

let mediaAltura = 0

const funcaoMedia = (parametro) => {
    for (i in parametro) {
        mediaAltura += parametro[i].altura
    }
    return mediaAltura /= parametro.length
}

funcaoMedia(arrayDeJogadores)

console.log(mediaAltura.toFixed(2))

//* Variável booleano

//Includes false todos retornam false trabalhar nisso

let booleano = jogador1.ganhouLiga && jogador2.ganhouLiga && jogador3.ganhouLiga && jogador4.ganhouLiga && jogador5.ganhouLiga

console.log(booleano)

console.log(arrayDeLiga)

//* Devolve array dos objetos em string

const arrayEmString = arrayDeJogadores.map((x) => {
    return {
        player: x.player,
        posicao: x.posicao,
        time: x.time,
        altura: x.altura,
        ganhouLiga: x.ganhouLiga,
        anoTitulo: x.anoTitulo.toString()
    }
})

console.log(arrayEmString)

//* Buscador do input com filter na array

function buscador (array, player) {
    let filtered = array.filter((x) => x.player.toUpperCase() === player.toUpperCase())
    if (filtered.length >= 1) {
        return filtered
    } else {
        alert('Não encontrado')
    }
}
console.log(buscador(arrayDeJogadores, prompt('Buscar: ')))