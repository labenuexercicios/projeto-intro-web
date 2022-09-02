console.log("Lista de Pets da Casa")

const nomePet1 = "Brisa"
let idadePet1 = 9
const especiePet1 = "Canina"
const racaPet1 = "Pastor Alemão"
let vacinaPet1 = 1 < 9
let vermifugoPet1 = 5 <= 9
const arrayBriquedos1 = ["[Bolinha", " ossinho.]"]
console.log(`${nomePet1.toUpperCase()}
Idade: ${idadePet1}
Espécie: ${especiePet1}
Raça: ${racaPet1}
Vacina: ${vacinaPet1}
Vermifugo: ${vermifugoPet1}
Brinquedos: ${arrayBriquedos1}
`)

const nomePet2 = "Janis"
let idadePet2 = 8
const especiePet2 = "Felina"
const racaPet2 = "SRD"
let vacinaPet2 = 1 < 8
let vermifugoPet2 = 5 <= 8
const arrayBriquedos2 = ["[Caixa de papelão", " arranhador de tecido", " ervinha de gato.]"]
console.log(`${nomePet2.toUpperCase()}
Idade: ${idadePet2}
Espécie: ${especiePet2}
Raça: ${racaPet2}
Vacina: ${vacinaPet2}
Vermifugo: ${vermifugoPet2}
Brinquedos: ${arrayBriquedos2}
`)

const nomePet3 = "Lua"
let idadePet3 = 2
const especiePet3 = "Canina"
const racaPet3 = "Shin Tzu"
let vacinaPet3 = 1 < 2
let vermifugoPet3 = 5 <= 2
const arrayBriquedos3 = ["[Bolinha", " ossinho", " orelha de boi", " ursinho.]"]
console.log(`${nomePet3.toUpperCase()}
Idade: ${idadePet3}
Espécie: ${especiePet3}
Raça: ${racaPet3}
Vacina: ${vacinaPet3}
Vermifugo: ${vermifugoPet3}
Brinquedos: ${arrayBriquedos3}
`)

const nomePet4 = "Marilyn"
let idadePet4 = 7
const especiePet4 = "Felina"
const racaPet4 = "SRD"
let vacinaPet4 = 1 < 7
let vermifugoPet4 = 5 <= 7
const arrayBriquedos4 = ["[Caixa de papelão", " barbante enrolado", " erva de gato", " bolinha de lã.]"]
console.log(`${nomePet4.toUpperCase()}
Idade: ${idadePet4}
Espécie: ${especiePet4}
Raça: ${racaPet4}
Vacina: ${vacinaPet4}
Vermifugo: ${vermifugoPet4}
Brinquedos: ${arrayBriquedos4}
`)

//média
let mediaPets = (idadePet1+idadePet2+idadePet3+idadePet4) / 4
console.log(mediaPets)

//verificar booleanos
const verificarVacinas = vacinaPet1 && vacinaPet2 && vacinaPet3 && vacinaPet4
const verificarVermifugo = vermifugoPet1 && vermifugoPet2 && vermifugoPet3 && vermifugoPet4
console.log(`Verificar Vacinas: ${verificarVacinas}
Verificar Vermifugo: ${verificarVermifugo}
`)

