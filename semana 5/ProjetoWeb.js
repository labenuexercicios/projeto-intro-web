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
    continuacao: true,
    diretor: ["Roger Allers", "Rob Minkoff"]
}

let filmeComediaObj = {
    nome: "As branquelas",
    ano: 2004,
    continuacao: false,
    diretor: ["Keenen Ivory Wayans"]
}

let filmeAventuraObj = {
    nome: "Harry Potter",
    ano: 2001,
    continuacao: true,
    diretor: ["Chris Columbus"]
}

let filmes = []
if (filmeAnimacaoObj.continuacao === true){
    filmes.push(filmeAnimacaoObj)
}else{
    alert("O filme de Animação não foi adicionado")
}
if (filmeComediaObj.continuacao === true){
    filmes.push(filmeComediaObj)
}else{
    alert("O filme de Comédia não foi adicionado")
}
if (filmeAventuraObj.continuacao === true){
    filmes.push(filmeAventuraObj)
}else{
    alert("O filme de Aventura não foi adicionado")
}

console.log(filmes)
console.log(filmes[0].diretor)
//altere a forma que a característica de array dos itens seja escrita como um laço que guarde todos os valores da propriedade array do objeto em uma mesma string. Utilize esta string no relatório.
function semVirgula(texto){
    return texto.substring(0,texto.lastIndexOf(","))
}
for(let i = 0; i<filmes.length; i++){
    let diretores= ""

    for(let j=0; j<filmes[i].diretor.length; j++){
        diretores += filmes[i].diretor[j] + ", " 
    }
    
    filmes[i].diretor = semVirgula(diretores)

    }
console.log(filmes)
//altere-o para que ele seja criado utilizando laços
for(filme of filmes){
    for (propriedade in filme){
        console.log(`${propriedade}: ${filme[propriedade]}`)
    }
}

//Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.
function obejtoConcatenado (objeto){
    let texto =""
    for (propriedade in objeto){
        texto += `${propriedade}: ${objeto[propriedade]}` + ", "
    }
    return texto
}
// console.log(semVirgula(obejtoConcatenado(filmeAnimacaoObj)))

//Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.
let filmeDoUsuario = prompt("Escolha um filme")
function escolhaOFilme(filmesEscolhidos, texto){
    const filmesMaisString = filmesEscolhidos.filter((elemento) => {
        return elemento.nome === texto
    })
    if(filmesMaisString.length===1){
        return filmesMaisString[0]
    }else{
        alert("nenhum filme foi encontrado")
        return;
    }
}
console.log(escolhaOFilme(filmes, filmeDoUsuario))