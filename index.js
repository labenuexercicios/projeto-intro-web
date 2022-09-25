// Item escolhido foi animais,
// características dos animais: nome, origem, quantas patas, é voador ou não


const nomeAnimal1 = "Shiba Inu"
const origemAnimal1 = "Japão"
const patasAnimal1 = 4;
const voaOuNaoAnimal1 = false 
const coresComunsAnimal1 = ["Sésamo Vermelho", " Preto e canela", " Creme", " Preto sésamo", " Sésame", " Vermelho"]

const nomeAnimal2 = "Arara"
const origemAnimal2 = "America do Sul"
const patasAnimal2 = 2
const voaOuNaoAnimal2 = true
const coresComunsAnimal2 = ["Azul e Amarela", " Vermelha e Verde", " Amarela, Azul e Vermelho"]

const nomeAnimal3 = "Foca"
const origemAnimal3 = "Hemisfério do Norte"
const patasAnimal3 = 0
const voaOuNaoAnimal3 = false
const coresComunsAnimal3 = ["Branca", " Acizentada", " Marrom Escuro"]

const mediaDePatas = (patasAnimal1+patasAnimal2+patasAnimal3)/3
console.log(mediaDePatas)

const verificarTodosAnimaisVoadoresOuNao = voaOuNaoAnimal1 && voaOuNaoAnimal2 && voaOuNaoAnimal3
console.log(verificarTodosAnimaisVoadoresOuNao)

console.log(
    `Informações sobre animais:
    
    Nome: ${nomeAnimal1.toLocaleUpperCase()}
    Origem: ${origemAnimal1}
    Quantas patas tem? ${patasAnimal1}
    Quais são as cores comuns do animal? ${coresComunsAnimal1}
    
    Nome: ${nomeAnimal2.toLocaleUpperCase()}
    Origem: ${origemAnimal2}
    Quantas patas tem? ${patasAnimal2}
    Quais são as cores comuns do animal? ${coresComunsAnimal2}
    
    Nome: ${nomeAnimal3.toLocaleUpperCase()}
    Origem: ${origemAnimal3}
    Quantas patas tem? ${patasAnimal3}
    Quais são as cores comuns do animal? ${coresComunsAnimal3}`
)

const shibaInu = {nome: nomeAnimal1, origem: origemAnimal1, patas: patasAnimal1, cores: coresComunsAnimal1}
const arara = {nome: nomeAnimal2, origem: origemAnimal2, patas: patasAnimal2, cores: coresComunsAnimal2}
const foca = {nome: nomeAnimal3, origem: origemAnimal3, patas: patasAnimal3, cores: coresComunsAnimal3}

let animais = []