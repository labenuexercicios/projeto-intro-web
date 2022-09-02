
// championsLeague 22/23

const time01 = "Barcelona"
const qtdGanhouBarcelona = 5
const jogadoresDoAtaqueB = [" Lewandowski", " Raphinha", "Depay", " Ansu Fati", " Ferran"]
const classificacaoB = true

const time02 = "Manchester City"
const qtdGanhouManchesterC = 7
const jogadoresDoAtaqueMC = [" Haaland", " Mahrez", " Julián"]
const classificacaoMC = true

const time03 = "Chelsea"
const qtdGanhouChelsea = 2
const jogadoresDoAtaqueC = [" Armando", " Omarin", " Mitchy", " Sterling"]
const classificacaoC = true

console.log(`Time: ${time01.toLocaleUpperCase()}`, `\nQuantas vezes campeão: ${qtdGanhouBarcelona}`, `\nJogadores do Ataque: ${jogadoresDoAtaqueB}`, `\nSe classificou: ${classificacaoB}`)
console.log(`Time: ${time02.toLocaleUpperCase()}`, `\nQuantas vezes campeão: ${qtdGanhouManchesterC}`, `\nJogadores do Ataque: ${jogadoresDoAtaqueMC}`, `\nSe classificou: ${classificacaoMC}`)
console.log(`Time: ${time03.toLocaleUpperCase()}`, `\nQuantas vezes campeão: ${qtdGanhouChelsea}`, `\nJogadores do Ataque: ${jogadoresDoAtaqueC}`, `\nSe classificou: ${classificacaoC}`)

const valorMedio = ((qtdGanhouBarcelona + qtdGanhouManchesterC + qtdGanhouChelsea) / 3)
console.log("Média de vezes que foram campeões: " + valorMedio)
const verificarClassificacao = classificacaoB && classificacaoMC && classificacaoC
console.log("Os três foram classificados? " + verificarClassificacao)

