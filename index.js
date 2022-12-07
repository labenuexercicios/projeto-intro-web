const especime = []
const compostoQuimico1 = {
    nome: "Hipoclorito de sódio",
    nomeMaisConhecido: "Água Sanitária",
    atomosDaFormula: [" Sódio", " Cloro", " Oxigênio"],
    massaMolar: 74.44,
    usos: [" Remoção de manchas de roupas sujas", " Desenfetar superfícies", " Desinfecção da água potável"],
    solubilidadeEmAgua: true
}

const compostoQuimico2 = {
    nome: "Ácido acético",
    nomeMaisConhecido: "Vinagre",
    atomosDaFormula: [" Carbono", " Hidrogênio", " Oxigênio"],
    massaMolar: 60.052,
    usos: [" Condimentar saladas", " Produção da aspirina", " Síntese de perfumes e corantes"],
    solubilidadeEmAgua: true
}
const compostoQuimico3 = {
    nome: "Ácido ascórbico",
    nomeMaisConhecido: "Vitamina C",
    atomosDaFormula: ["Carbono", " Hidrogênio", " Oxigênio"],
    massaMolar: 176.09,
    usos: [" Suplementação alimentar", " Adubo para plantas", " Conservação de alimentos industrializados"],
    solubilidadeEmAgua: true
}

function verificar(compostoQuimico) {
    if (compostoQuimico.solubilidadeEmAgua === true) {
        especime.push(compostoQuimico)
    }
    else {
        alert("Não é solúvel em água")
    }
}
verificar(compostoQuimico1)
verificar(compostoQuimico2)
verificar(compostoQuimico3)

let numerador = 0
for (let index = 0; index < especime.length; index++) {
    numerador += especime[index].massaMolar
    console.log(`Composto químico: ${especime[index].nome.toUpperCase()}`)

    console.log(`Nome mais conhecido: ${especime[index].nomeMaisConhecido}`)

    console.log(`Átomos da fórmula: ${especime[index].atomosDaFormula}`)

    console.log(`Massa molar em gramas por mol: ${especime[index].massaMolar}`)

    console.log(`Usos mais comuns: ${especime[index].usos}`)

    console.log(`É solúvel em água? ${especime[index].solubilidadeEmAgua}`)
    console.log("\n")

}

if (especime.length > 0) {
    const media = numerador / especime.length
    console.log(`A média dos valores de massa molar é: ${media.toFixed(2)}`)
    console.log("\n")

}

