// Semana 01

//const fruta1 = "laranja"
// const peso1 = 110
// const ehdoce1 = true
// const letrinha1 = ["l", "a", "r", "a", "n", "j", "a"]

// const fruta2 = "limão"
// const peso2 = 140
// const ehdoce2 = false
// const letrinha2 = ["l", "i", "m", "ã", "o"]

// const fruta3 = "abacaxi"
// const peso3 = 1400
// const ehdoce3 = true
// const letrinha3 = ["a", "b", "a", "c", "a", "x", "i"]

// const mediapeso = (peso1 + peso2 + peso3) / 3
// console.log(`A média dos pesos das frutas é de: `, mediapeso, `gramas.`)

// const saodoces = ehdoce1 && ehdoce2 && ehdoce3
// console.log(`Todas as frutas são doces? \nR: `, saodoces)

// console.log(fruta1.toUpperCase())
// console.log(`O peso da fruta é de: `, peso1, `gramas.`)
// console.log(`A fruta é doce: `, ehdoce1, `.`)
// console.log(`Como se soletra: `,letrinha1)

// console.log(fruta2.toUpperCase())
// console.log(`O peso da fruta é de: `, peso2, `gramas.`)
// console.log(`A fruta é doce: `, ehdoce2, `.`)
// console.log(`Como se soletra: `,letrinha2)

// console.log(fruta3.toUpperCase())
// console.log(`O peso da fruta é de: `, peso3, `gramas.`)
// console.log(`A fruta é doce: `, ehdoce3, `.`)
// console.log(`Como se soletra: `,letrinha3)


//Semana 02
fruta1 = {
    nome1: "laranja",
    peso1: 110,
    ehdoce1: true,
    letrinha1: ["l", "a", "r", "a", "n", "j", "a"]
}

fruta2 = {
    nome2: "limão",
    peso2: 140,
    ehdoce2: false,
    letrinha2: ["l", "i", "m", "ã", "o"]
}

fruta3 = {
    nome3: "abacaxi",
    peso3: 1400,
    ehdoce3: true,
    letrinha3: ["a", "b", "a", "c", "a", "x", "i"]
}

let cestaFrutas = []

if (fruta1.ehdoce1) {
    cestaFrutas.push(fruta1)
}
else {
    alert(`A fruta ${fruta1.nome1} não é doce!`)
}

if (fruta2.ehdoce2) {
    cestaFrutas.push(fruta2)
}
else {
    alert(`A fruta ${fruta2.nome2} não é doce!`)
}

if (fruta3.ehdoce3) {
    cestaFrutas.push(fruta3)
}
else {
    alert(`A fruta ${fruta3.nome3} não é doce!`)
}

//cestaFrutas.push(fruta1, fruta2, fruta3)

console.log(cestaFrutas)