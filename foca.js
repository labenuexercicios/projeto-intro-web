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


const shibaInu = { nome: nomeShibaInu, origem: origemShibaInu, pesoAdulto: pesoAdultoShibaInu, cores: coresComunsShibaInu }
const arara = { nome: nomeArara, origem: origemArara, pesoAdulto: pesoAdultoArara, cores: coresComunsArara }
const foca = { nome: nomeFoca, origem: origemFoca, pesoAdulto: pesoAdultoFoca, cores: coresComunsFoca }

let animais = [shibaInu, arara, foca]

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

document.getElementById("nome-foca").innerHTML = `${foca.nome}`;
document.getElementById("origem-foca").innerHTML = `Origem: ${foca.origem}`;
document.getElementById("peso-foca").innerHTML = `Peso quando adulto: ${foca.pesoAdulto}kg`;
document.getElementById("cores-foca").innerHTML = `Quais cores são comuns? ${foca.cores}`;

