// Item escolhido foi animais,
// características dos animais: nome, origem, quantas pesoAdulto, é voador ou não


const nomeShibaInu = "Shiba Inu"
const origemShibaInu = "Japão"
const pesoAdultoShibaInu = 8
const voaOuNaoShibaInu = false
const coresComunsShibaInu = ["Sésamo Vermelho", "Preto e canela", "Creme", "Preto sésamo", " Sésamo", " Vermelho"]

const nomeArara = "Arara"
const origemArara = "America do Sul"
const pesoAdultoArara = 1
const voaOuNaoArara = true
const coresComunsArara = ["Azul e Amarela", "Vermelha e Verde", "Amarela, Azul e Vermelho"]

const nomeFoca = "Foca"
const origemFoca = "Hemisfério do Norte"
const pesoAdultoFoca = 90
const voaOuNaoFoca = false
const coresComunsFoca = ["Branca", " Acizentada", "Marrom Escuro"]

const mediaDePesoAdulto = (pesoAdultoShibaInu + pesoAdultoArara + pesoAdultoFoca) / 3 + "kg"
console.log(mediaDePesoAdulto)

const verificarTodosAnimaisVoadoresOuNao = voaOuNaoShibaInu && voaOuNaoArara && voaOuNaoFoca
console.log(verificarTodosAnimaisVoadoresOuNao)

console.log(
    `Informações sobre animais:
    
    Nome: ${nomeShibaInu.toLocaleUpperCase()}
    Origem: ${origemShibaInu}
    Quanto pesa quando adulto? ${pesoAdultoShibaInu}
    Quais são as cores comuns do animal? ${coresComunsShibaInu}
    
    Nome: ${nomeArara.toLocaleUpperCase()}
    Origem: ${origemArara}
    Quanto pesa quando adulto? ${pesoAdultoArara}
    Quais são as cores comuns do animal? ${coresComunsArara}
    
    Nome: ${nomeFoca.toLocaleUpperCase()}
    Origem: ${origemFoca}
    Quanto pesa quando adulto? ${pesoAdultoFoca}
    Quais são as cores comuns do animal? ${coresComunsFoca}`
)

const shibaInu = { nome: nomeShibaInu, origem: origemShibaInu, pesoAdulto: pesoAdultoShibaInu, cores: coresComunsShibaInu }
const arara = { nome: nomeArara, origem: origemArara, pesoAdulto: pesoAdultoArara, cores: coresComunsArara }
const foca = { nome: nomeFoca, origem: origemFoca, pesoAdulto: pesoAdultoFoca, cores: coresComunsFoca }
console.log(shibaInu.nome)
let animais = []

if (animais.includes(shibaInu || arara || foca) === false) {
    animais.push(shibaInu, arara, foca)
}

else {
    alert(`Objeto não adicionado! Já existia no array.`)
}

console.log(animais)

let concateneCoresAnimal = function (array) {
    let coresConcatenadasAnimal = ``
    for (i in array) {
        if (i == array.length - 1) {
            coresConcatenadasAnimal += `${array[i]}.`
        }
        else {
            coresConcatenadasAnimal += `${array[i]}, `
        }
    }
    return coresConcatenadasAnimal
}

console.log(
    `Informações sobre animais:
    
    Nome: ${nomeShibaInu.toLocaleUpperCase()}
    Origem: ${origemShibaInu}
    Quanto pesa quando adulto? ${pesoAdultoShibaInu}
    Quais são as cores comuns do animal? ${concateneCoresAnimal(coresComunsShibaInu)}
    
    Nome: ${nomeArara.toLocaleUpperCase()}
    Origem: ${origemArara}
    Quanto pesa quando adulto? ${pesoAdultoArara}
    Quais são as cores comuns do animal? ${concateneCoresAnimal(coresComunsArara)}
    
    Nome: ${nomeFoca.toLocaleUpperCase()}
    Origem: ${origemFoca}
    Quanto pesa quando adulto? ${pesoAdultoFoca}
    Quais são as cores comuns do animal? ${concateneCoresAnimal(coresComunsFoca)}`
)

function dadosAnimalEmString(object) {
    let relatorioDoAnimal = ``
    for (info of Object.entries(object)) {
        relatorioDoAnimal = `${Object.entries(object)}`
    }
    return relatorioDoAnimal
}

console.log(dadosAnimalEmString(shibaInu))


function acheRetorneAnimalEncontrado(animais) {
    let animalPesquisado = document.getElementById("input-usuario").value.trim().toLowerCase()
    let haAnimalNaLista = false
    for (i in animais) {
        if (animais[i].nome.toLowerCase() == animalPesquisado.toLowerCase()) {
            if (animalPesquisado.includes(" ")) {
                let animalPesquisadoComHifen = animalPesquisado.replace(" ", "-")
                haAnimalNaLista = true
                location.href = `${animalPesquisadoComHifen}.html`
            }
            else {
                haAnimalNaLista = true
                location.href = `${animalPesquisado}.html`
            }
        }
    }
    if (haAnimalNaLista === false) {
        alert(`O animal não foi encontrado na lista.`)
    }
}

document.getElementById("nome-shiba-inu-link").innerHTML = `${shibaInu.nome}`;
document.getElementById("origem-shiba-inu").innerHTML = `Origem: ${shibaInu.origem}`;
document.getElementById("peso-shiba-inu").innerHTML = `Peso quando adulto: ${shibaInu.pesoAdulto}kg`;
document.getElementById("cores-shiba-inu").innerHTML = `Quais cores são comuns? ${shibaInu.cores}`;

document.getElementById("nome-arara").innerHTML = `${arara.nome}`;
document.getElementById("origem-arara").innerHTML = `Origem: ${arara.origem}`;
document.getElementById("peso-arara").innerHTML = `Peso quando adulto: ${arara.pesoAdulto}kg`;
document.getElementById("cores-arara").innerHTML = `Quais cores são comuns? ${arara.cores}`;

document.getElementById("nome-foca").innerHTML = `${foca.nome}`;
document.getElementById("origem-foca").innerHTML = `Origem: ${foca.origem}`;
document.getElementById("peso-foca").innerHTML = `Peso quando adulto: ${foca.pesoAdulto}kg`;
document.getElementById("cores-foca").innerHTML = `Quais cores são comuns? ${foca.cores}`;