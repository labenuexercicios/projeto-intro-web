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
    genero: "Animação",
    continuacao: true,
    diretor: ["Roger Allers"],
    mais: "https://pt.wikipedia.org/wiki/White_Chicks",
    imagem: "rei-leao.jpg"
}
let filmeAnimacaoObj2 = {
    nome: "Madagascar",
    ano: 2005,
    genero: "Animação",
    continuacao: true,
    diretor: ["Simon J. Smith"],
    mais: "https://en.wikipedia.org/wiki/Madagascar_(2005_film)",
    imagem: "madagascar.jpg"
}
let filmeAnimacaoObj3 = {
    nome: "Viva – A Vida É uma Festa",
    ano: 2017,
    genero: "Animação",
    continuacao: false,
    diretor: ["Adrian Molina", "Lee Unkrich"],
    mais: "https://pt.wikipedia.org/wiki/Coco_(filme)",
    imagem: "viva.html"
}
let filmeComediaObj = {
    nome: "As branquelas",
    ano: 2004,
    genero: "Comedia",
    continuacao: false,
    diretor: ["Keenen Ivory Wayans"],
    mais: "https://pt.wikipedia.org/wiki/White_Chicks",
    imagem: "branquelas.jpeg"
}
let filmeComediaObj2 = {
    nome: "American Pie",
    ano: 1999,
    genero: "Comedia",
    continuacao: true,
    diretor: ["Paul e Chris Weitz"],
    mais: "https://pt.wikipedia.org/wiki/American_Pie_(filme)",
    imagem: "american.jpg"
}
let filmeComediaObj3 = {
    nome: "Vovózona",
    ano: 2000,
    genero: "Comedia",
    continuacao: true,
    diretor: ["Raja Gosnell"],
    mais: "https://pt.wikipedia.org/wiki/Big_Momma%27s_House",
    imagem: "vovozona.jpg"
}
let filmeAventuraObj = {
    nome: "O Senhor dos Anéis",
    ano: 2001,
    genero: "Aventura",
    continuacao: true,
    diretor: ["Peter Jackson"],
    mais: "https://pt.wikipedia.org/wiki/O_Senhor_dos_An%C3%A9is_(s%C3%A9rie_de_filmes)",
    imagem: "senhor.jpg"
}
let filmeAventuraObj2 = {
    nome: "Harry Potter",
    ano: 2001,
    genero: "Aventura",
    continuacao: true,
    diretor: ["Chris Columbus"],
    mais: "https://pt.wikipedia.org/wiki/Harry_Potter",
    imagem: "harry-potter.jpg"
}
let filmeTerrorObj = {
    nome: "O Exorcista",
    ano: 1973,
    genero: "Terror",
    continuacao: true,
    diretor: ["William Friedkin"],
    mais: "https://pt.wikipedia.org/wiki/O_Exorcista",
    imagem: "exorcista.jpg"
}
let filmeTerrorObj2 = {
    nome: "O Chamado",
    ano: 2002,
    genero: "Terror",
    continuacao: true,
    diretor: ["Gore Verbinski"],
    mais: "https://pt.wikipedia.org/wiki/The_Ring_(2002)",
    imagem: "chamado.jpg"
}
let filmes = []
if (filmeAnimacaoObj.continuacao === true){
    filmes.push(filmeAnimacaoObj)
}else{
    //alert("Um filme de Animação não foi adicionado")
}
if (filmeAnimacaoObj2.continuacao === true){
    filmes.push(filmeAnimacaoObj2)
}else{
    //alert("Um filme de Terror não foi adicionado")
}
if (filmeTerrorObj.continuacao === true){
    filmes.push(filmeTerrorObj)
}else{
    //alert("Um filme de Terror não foi adicionado")
}
if (filmeTerrorObj2.continuacao === true){
    filmes.push(filmeTerrorObj2)
}else{
    //alert("Um filme de Terror não foi adicionado")
}
if (filmeComediaObj.continuacao === true){
    filmes.push(filmeComediaObj)
}else{
    //alert("Um filme de Comédia não foi adicionado")
}
if (filmeComediaObj2.continuacao === true){
    filmes.push(filmeComediaObj2)
}else{
    //alert("Um filme de Comédia não foi adicionado")
}
if (filmeComediaObj3.continuacao === true){
    filmes.push(filmeComediaObj3)
}else{
    //alert("Um filme de Comédia não foi adicionado")
}

if (filmeAventuraObj.continuacao === true){
    filmes.push(filmeAventuraObj)
}else{
    //alert("Um filme de Aventura não foi adicionado")
}
if (filmeAventuraObj2.continuacao === true){
    filmes.push(filmeAventuraObj2)
}else{
    //alert("Um filme de Aventura não foi adicionado")
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
// let filmeDoUsuario = prompt("Escolha um filme")
// function escolhaOFilme(filmesEscolhidos, texto){
//     const filmesMaisString = filmesEscolhidos.filter((elemento) => {
//         return elemento.nome === texto
//     })
//     if(filmesMaisString.length===1){
//         return filmesMaisString[0]
//     }else{
//         alert("nenhum filme foi encontrado")
//         return;
//     }
// }
// console.log(escolhaOFilme(filmes, filmeDoUsuario))

//semana 6 - DOM

const filtroFilmes = document.querySelector(".corpo-site")
filmes.filter(tipoFilme =>{
    function ordenarFilmes(){
        filtroFilmes.innerHTML += `<section class="bloco">
        <img src="./img/${tipoFilme.imagem}" alt="filme" class="imagem-filmes">
            <li> <a href="${tipoFilme.mais}" target="_blank">${tipoFilme.nome}</a></li>
            <li>Ano: ${tipoFilme.ano}</li>
            <li>Gênero: ${tipoFilme.genero}</li>
            <li>Contunuação: ${tipoFilme.continuacao}</li>
            <li>Diretor: ${tipoFilme.diretor}</li>
    </section>`
    }
    ordenarFilmes()
})

function procurarFilme(event){
    event.preventDefault()
    let lista = document.getElementById("corpo-site")
    console.log(document.getElementById("botao"))
    console.log(document.getElementById("buscar"))
    console.log(document.getElementById("buscar").value)
    let nomeFilme = document.getElementById("buscar").value.toUpperCase()
    if(nomeFilme === ""){
        alert("Digite um valor válido!")
        document.getElementById("buscar").value = "";
        return;
    }
    for (let i = 0; i < filmes.length; i++) {
        if(nomeFilme === filmes[i].nome.toUpperCase()){
            return (lista.innerHTML = `<section class="bloco">
            <img src="./img/${filmes[i].imagem}" alt="filme" class="imagem-filmes">
            <li> <a href="${filmes[i].mais}" target="_blank">${filmes[i].nome}</a></li>
            <li>Gênero: ${filmes[i].genero}</li>
            <li>Ano: ${filmes[i].ano}</li>
            <li>Contunuação: ${filmes[i].continuacao}</li>
            <li>Diretor: ${filmes[i].diretor}</li>
        </section>`)
        }
    }
    alert("Nada foi encontrado!");
    document.getElementById("buscar").value = "";
    return;
}
