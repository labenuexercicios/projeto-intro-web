//PROJETO WEB SEMANA 1
console.log('Projeto Web - Semana 1')
console.log('')

const nome1 = "HAMSTER SIRIO"
const tempoDeVida = 3
const especieRoedor = true

console.log (`Nome: ${nome1}\nTempo médio de vida: ${tempoDeVida}\nEspecie roedor? ${especieRoedor}`)
console.log("")

const nome2 = "HAMSTER ANÃO RUSSO"
const tempoDeVida2 = 3
const especieRoedor2 = true
console.log (`Nome: ${nome2}\nTempo médio de vida: ${tempoDeVida2}\nEspecie roedor? ${especieRoedor2}`)
console.log("")

const nome3 = "PORQUINHO DA INDIA"
const tempoDeVida3 = 8
const especieRoedor3 = true
console.log (`Nome: ${nome3}\nTempo médio de vida: ${tempoDeVida3}\nEspecie roedor? ${especieRoedor3}`)
console.log("")

const mediaDeVida = Number(tempoDeVida+tempoDeVida2+tempoDeVida3)/ 3
console.log('A média de vida desses aninais é:', mediaDeVida)
const especie = especieRoedor && especieRoedor2 && especieRoedor3
console.log('Os animais são da mesma espécie? ',especie)

