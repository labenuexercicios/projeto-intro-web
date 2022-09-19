const nome = "leão"
const tempoMedioDeVida = 15
const classe = true
const array = ["Natural da Savana", "Rei da selva", "Raçador nato"]

const nome2 = "urso-pardo"
const tempoMedioDeVida2 = 26
const classe2 = false
const array2 = ["Rei da Antarctica", "Rarnívoro", ""]

const nome3 = "cachorro"
const tempoMedioDeVida3 = 13
const classe3 = true
const array3 = ["Melhor amigo do homem", "É um animal domestico", "Gosta muito de brincar"]

const media = ((tempoMedioDeVida + tempoMedioDeVida2 + tempoMedioDeVida3) / 3)

// console.log(media)

console.log(`
${nome.toUpperCase()}\n${tempoMedioDeVida}\n${classe}\n${array}\n
${nome2.toUpperCase()}\n${tempoMedioDeVida2}\n${classe2}\n${array2}\n
${nome3.toUpperCase()}\n${tempoMedioDeVida3}\n${classe3}\n${array3}
`)