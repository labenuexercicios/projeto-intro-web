//crie três conjuntos de variáveis com três conjuntos de dados diferentes
let filmeAnimacao = ["O Rei Leão"]
let anoAnimacao = [1994]
let continuacaoAnimacao = [true]

let filmeComedia = ["As branquelas"]
let anoComedia = [2004]
let continuacaoComedia = [false]

let filmeAventura = ["Harry Potter"]
let anoAventura = [2001]
let continuacaoAventura = [true]


//Faça um cálculo de média, entre os valores numéricos respectivos de cada item. 
//Imprima o valor da média utilizando um console.log. Guarde este valor em uma const
let media =  (anoAnimacao[0] + anoComedia[0] + anoAventura[0]) / (anoAnimacao.length + anoComedia.length + anoAventura.length)
console.log("A média entre os anos de lançamento dos filmes é:", media)


//imprima o resultado de uma operação lógica que checa se todos os valores 
//de variáveis booleanas criadas até aqui são verdadeiras
let verifCont = continuacaoAnimacao[0] && continuacaoComedia[0] && continuacaoAventura[0]
console.log("As informações recebidas até aqui são verdadeiras?", verifCont)


//Crie pelo menos mais uma característica para o item que você criou
// let filmeAnimacao = ["O Rei Leão"]
// let anoAnimacao = [1994]
// let continuacaoAnimacao = [true]
let diretorAnimacao = ["Roger Allers"]

// let filmeComedia = ["As branquelas"]
// let anoComedia = [2004]
// let continuacaoComedia = [false]
let diretorComedia = ["Keenen Ivory Wayans"]

// let filmeAventura = ["Harry Potter"]
// let anoAventura = [2001]
// let continuacaoAventura = [true]
let diretorAventura = ["Chris Columbus"]


//Exiba um relatório utilizando console.log()
//exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS
console.log("\nFilmes de Animação: " + filmeAnimacao + "\nAno de Lançamento: " + anoAnimacao + "\nTeve continuação? " + continuacaoAnimacao + "\nDiretor: " + diretorAnimacao)
console.log("\nFilmes de Comédia: " + filmeComedia + "\nAno de Lançamento: " + anoComedia + "\nTeve continuação? " + continuacaoComedia + "\nDiretor: " + diretorComedia)
console.log("\nFilmes de Aventura: " + filmeAventura + "\nAno de Lançamento: " + anoAventura + "\nTeve continuação? " + continuacaoAventura + "\nDiretor: " + diretorAventura)

let filmeAnimacaoObj = {
    nome: "O Rei Leão",
    ano: 1994,
    continuacao: true
}

let filmeComediaObj = {
    nome: "As branquelas",
    ano: 2004,
    continuacao: false
}

let filmeAventuraObj = {
    nome: "Harry Potter",
    ano: 2001,
    continuacao: true
}

let array = []
if (filmeAnimacaoObj.continuacao === true){
    array.push(filmeAnimacaoObj)
}else{
    alert("O filme de Animação não foi adicionado")
}
if (filmeComediaObj.continuacao === true){
    array.push(filmeComediaObj)
}else{
    alert("O filme de Comédia não foi adicionado")
}
if (filmeAventuraObj.continuacao === true){
    array.push(filmeAventuraObj)
}else{
    alert("O filme de Aventura não foi adicionado")
}