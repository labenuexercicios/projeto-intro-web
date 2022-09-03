const jogo = "Minecraft"
const anoLancamento = Number(2009)
const jogoGratuito = false
const plataformas = ["PC", "PlayStation", "Xbox", "Mobile"] 

const jogo2 = "Grand Theft Auto V"
const anoLancamento2 = Number(2013)
const jogoGratuito2 = false
const plataformas2 = ["PC", "PlayStation", "Xbox"]

const jogo3 = "The Sims 4"
const anoLancamento3 = Number(2014)
const jogoGratuito3 = false
const plataformas3 = ["PC", "PlayStation", "Xbox"]

const jogo4 = "Fortnite"
const anoLancamento4 = Number(2017)
const jogoGratuito4 = true
const plataformas4 = ["PC", "PlayStation", "Xbox", "Mobile", "Nintendo Switch"]

const mediaAnosEntreLancamento = (4 + 1 + 3) / 4
console.log(`Media entre os anos de lançamentos de um jogo e outro: ${mediaAnosEntreLancamento} anos`)
console.log(`Todos são gratuitos para jogar? ${jogoGratuito && jogoGratuito2 && jogoGratuito3 && jogoGratuito4}`) // Verifica se todos jogos são gratuitos para jogar

console.log("")

console.log(`Jogo: ${jogo.toUpperCase()}
Ano de lançamento: ${anoLancamento}
Gratuito para jogar? ${jogoGratuito}
Plataformas disponiveis: ${plataformas}
`)

console.log(`Jogo: ${jogo2.toUpperCase()}
Ano de lançamento: ${anoLancamento2}
Gratuito para jogar? ${jogoGratuito2}
Plataformas disponiveis: ${plataformas2}
`)

console.log(`Jogo: ${jogo3.toUpperCase()}
Ano de lançamento: ${anoLancamento3}
Gratuito para jogar? ${jogoGratuito3}
Plataformas disponiveis: ${plataformas3}
`)

console.log(`Jogo: ${jogo4.toUpperCase()}
Ano de lançamento: ${anoLancamento4}
Gratuito para jogar? ${jogoGratuito4}
Plataformas disponiveis: ${plataformas4}
`)