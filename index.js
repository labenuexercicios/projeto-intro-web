//JOGADORES DE FUTEBOL

//Jogador 01 ---------------------------------------------------

const nomeJogador1 = "Cristiano Ronaldo"
console.log(nomeJogador1.toUpperCase())

let idadeJogador1 = 37
console.log(`A idade do ${nomeJogador1} é: ${idadeJogador1} anos.`)

let nivelJogador1 = 5
console.log(`O ${nomeJogador1} é um jogador ${nivelJogador1} estrelas.`)

const statusMundial1 = nivelJogador1 >= 4
console.log(`O ${nomeJogador1} é craque? ${statusMundial1}`)

const caracteJogador1 = ["Finalização apurada" , "Censo de posicionamento" , "Capacidade de liderança"]
console.log(`As características do ${nomeJogador1} são: ${caracteJogador1}`)


//Jogador 02 ---------------------------------------------------

const nomeJogador2 = "Lionel Messi"
console.log(nomeJogador2.toUpperCase())

let idadeJogador2 = 35
console.log(`A idade do ${nomeJogador2} é: ${idadeJogador2} anos.`)

let nivelJogador2 = 5
console.log(`O ${nomeJogador2} é um jogador ${nivelJogador2} estrelas.`)

const statusMundial2 = nivelJogador2 >= 4
console.log(`O ${nomeJogador2} é craque? ${statusMundial2}`)

const caracteJogador2 = ["Técnica apurada" , "Habilidade extraordinária" , "Finalização apurada"]
console.log(`As características do ${nomeJogador2} são: ${caracteJogador2}`)


//Jogador 03 ---------------------------------------------------

const nomeJogador3 = "Erling Haaland"
console.log(nomeJogador3.toUpperCase())

let idadeJogador3 = 22
console.log(`A idade do ${nomeJogador3} é: ${idadeJogador3} anos.`)

const nivelJogador3 = 3
console.log(`O ${nomeJogador3} é um jogador ${nivelJogador3} estrelas.`)

const statusMundial3 = nivelJogador3 >=4
console.log(`O ${nomeJogador3} é craque? ${statusMundial3}`)

const caracteJogador3 = ["Força física" , " Finalização apurada" , " Capacidade de evolução"]
console.log(`As características do ${nomeJogador3} são: ${caracteJogador3}`)


//Jogador 04 ---------------------------------------------------

const nomeJogador4 = "Zlatan Ibrahimović"
console.log(nomeJogador4.toUpperCase())

let idadeJogador4 = 40
console.log(`A idade do ${nomeJogador4} é: ${idadeJogador4} anos.`)

let nivelJogador4 = 3
console.log(`O ${nomeJogador4} é um jogador ${nivelJogador4} estrelas.`)

const statusMundial4 = nivelJogador4 >= 4
console.log(`O ${nomeJogador4} é craque? ${statusMundial4}`)

const caracteJogador4 = ["Finalização apurada" , " Censo de posicionamento" , " Propensão a lesões"]
console.log(`As características do ${nomeJogador4} são: ${caracteJogador4}`)


//Médias dos Jogadores -------------------------------------------

const idadeMediaJogadores = (idadeJogador1 + idadeJogador2 + idadeJogador3 + idadeJogador4) / 4
console.log(`A média de idade entre os jogadores é de: ${idadeMediaJogadores} anos.`)

const nivelMedioJogadores = (nivelJogador1 + nivelJogador2 + nivelJogador3 + nivelJogador4) / 4
console.log(`A média do nível entre os jogadores é de: ${nivelMedioJogadores} estrelas.`)