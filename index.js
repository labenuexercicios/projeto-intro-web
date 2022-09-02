// Título ---------------------------
console.log("Lista de Pets da Casa")

const vacinacaoPetsSim = "Sim"
const vermifugoPetsSim = "Sim"

// Brisa ----------------------------
const nomePet1 = "Brisa"
let idadePet1 = 9
const especiePet1 = "Canina"
const racaPet1 = "Pastor Alemão"
let vacinaPet1 = "Sim"
let vermifugoPet1 = "Não"
const arrayBriquedos1 = ["[Bolinha", " ossinho.]"]

console.log(`${nomePet1.toUpperCase()}
Idade: ${idadePet1}
Espécie: ${especiePet1}
Raça: ${racaPet1}
Vacina: ${vacinaPet1 === vacinacaoPetsSim}
Vermifugo: ${vermifugoPet1 === vermifugoPetsSim}
Brinquedos: ${arrayBriquedos1}
`)

// Janis ----------------------------
const nomePet2 = "Janis"
let idadePet2 = 8
const especiePet2 = "Felina"
const racaPet2 = "SRD"
let vacinaPet2 = "Sim"
let vermifugoPet2 = "Não"
const arrayBriquedos2 = ["[Caixa de papelão", " arranhador de tecido", " ervinha de gato.]"]
console.log(`${nomePet2.toUpperCase()}
Idade: ${idadePet2}
Espécie: ${especiePet2}
Raça: ${racaPet2}
Vacina: ${vacinaPet2 === vacinacaoPetsSim}
Vermifugo: ${vermifugoPet2 === vacinacaoPetsSim}
Brinquedos: ${arrayBriquedos2}
`)

// Lua ----------------------------
const nomePet3 = "Lua"
let idadePet3 = 2
const especiePet3 = "Canina"
const racaPet3 = "Shin Tzu"
let vacinaPet3 = "Sim"
let vermifugoPet3 = "Não"
const arrayBriquedos3 = ["[Bolinha", " ossinho", " orelha de boi", " ursinho.]"]
console.log(`${nomePet3.toUpperCase()}
Idade: ${idadePet3}
Espécie: ${especiePet3}
Raça: ${racaPet3}
Vacina: ${vacinaPet3 === vacinacaoPetsSim}
Vermifugo: ${vermifugoPet3 === vermifugoPetsSim}
Brinquedos: ${arrayBriquedos3}
`)

// Marilyn ----------------------------
const nomePet4 = "Marilyn"
let idadePet4 = 7
const especiePet4 = "Felina"
const racaPet4 = "SRD"
let vacinaPet4 = "Sim"
let vermifugoPet4 = "Não"
const arrayBriquedos4 = ["[Caixa de papelão", " barbante enrolado", " erva de gato", " bolinha de lã.]"]
console.log(`${nomePet4.toUpperCase()}
Idade: ${idadePet4}
Espécie: ${especiePet4}
Raça: ${racaPet4}
Vacina: ${vacinaPet4 === vacinacaoPetsSim}
Vermifugo: ${vermifugoPet4 === vermifugoPetsSim}
Brinquedos: ${arrayBriquedos4}
`)

//média
let mediaPets = (idadePet1+idadePet2+idadePet3+idadePet4) / 4
console.log(`Média de Idade dos meus pets: ${mediaPets}`)

//verificar booleanos
const verificarVacinas = vacinaPet1 && vacinaPet2 && vacinaPet3 && vacinaPet4
const verificarVermifugo = vermifugoPet1 && vermifugoPet2 && vermifugoPet3 && vermifugoPet4
console.log(`Verificar Vacinas: ${verificarVacinas}
Verificar Vermifugo: ${verificarVermifugo}
`)


