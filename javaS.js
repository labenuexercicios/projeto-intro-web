const leao = {
    nome: "leão",
    tempoMedioDeVida: 15, 
    classe: true,
}

const urso = {
    nome: "urso-pardo",
    tempoMedioDeVida: 26,
    classe: true,
}

const cachorro = {
    nome: "cachorro",
    tempoMedioDeVida: 13,
    classe: true,
}

const media = ((leao.tempoMedioDeVida + urso.tempoMedioDeVida + cachorro.tempoMedioDeVida) / 3)

console.log (media)

console.log (leao.classe && urso.classe && cachorro.classe)






