//TEMA Series
//Para o item que você decidiu, pense nas características que são importantes para construí-lo. Vamos usar estas características para definir exemplos destes objetos usando o código.
// Você precisará criar pelo menos:
// * uma característica String;
// * uma característica Number;
// * uma característica Boolean;

let himym= {
 nome:"How I met your mother",
 AnoDeLancamento: 2005,
 episodios: 208,
 continuaLancando: "nao",
 genero:["siticom"," romance"," drama"," comedia"," misterio"],
 notaPessoal: 9.5,
 imagem: "https://br.web.img3.acsta.net/pictures/210/609/21060989_20131126123652773.jpg"
}

// console.log(`nome:${nomeHimym}
// ano de lancamento:${AnoDeLancamentoHimym}
// Continua sendo lancado novos episodios? ${continuaLancandoHimym}
// Generos:${generoHimym}`)
//2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.

let friends= {
    nome:"Friends",
    AnoDeLancamento: 1994,
    episodios: 236,
    continuaLancando: "nao",
    genero:["siticom", "romance", "comedia"],
    NotaPessoal: 10,
    imagem: "https://hbomax-images.warnermediacdn.com/images/GXdbR_gOXWJuAuwEAACVH/tileburnedin?size=1280x720&partner=hbomaxcom&v=6a409f09891f75549fdb8d07dc969b63&host=art-gallery.api.hbo.com&language=pt-br&w=1280",
}
// console.log(`nome:${nomeFriends}
// ano de lancamento:${AnoDelancamentoFriends}
// Continua sendo lancado novos episodios? ${continuaLancandoFriends}
// Generos:${generoFriends}`)


let blackMirror= {
    nome:"Black Mirror",
    AnoDeLancamento: 2011,
    episodios: 22,
    continuaLancando: "sim",
    genero:["Distopia", " Ficção científica", " Suspense", " Drama", " Sátira", " Ficção especulativa"],
    NotaPessoal:9,
    imagem: "https://m.media-amazon.com/images/I/81UcD17TMrL.jpg"
}

let theBoys={
    nome:"The Boys",
    AnoDeLancamento: 2019,
    episodios: 24,
    continuaLancando: "sim",
    genero:[" Super-herói", " Suspense"," Drama", " Humor ácido", " Ação"],
    NotaPessoal:9,
    imagem: "https://sm.ign.com/ign_br/screenshot/default/butcher-clean-rgb_8snc.jpg"
}
// console.log(`nome:${nomeBlackMirror}
// ano de lancamento:${AnoDeLancamentoBlackMirror}
// Continua sendo lancado novos episodios? ${continuaLancandoBlackMirror}
// Generos:${generoBlackMirror}`)

//ideia posso tamber criar outro boolean "continua no ar?" ou seja continua na tv aberta ou em programas de streaming.

//semana 1, exercicio 3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log. Guarde este valor em uma const.
const media= (blackMirror.episodios + himym.episodios + friends.episodios+ theBoys.episodios)/4;
console.log("A media de episodios das series e de: "+ media) 


// 4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.

const continuamLancando= (friends.continuaLancando && himym.continuaLancando && blackMirror.continuaLancando && theBoys.continuaLancando);
console.log(`Checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras: ${continuamLancando}`)


// 6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
//   1. O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo.

for (const i in friends) {
    console.log(`${i}: ${friends[i]}`)
}
for (const i in himym) {
    console.log(`${i}: ${himym[i]}`)
}
for (const i in blackMirror) {
    console.log(`${i}: ${blackMirror[i]}`)
}
for (const i in theBoys) {
    console.log(`${i}: ${theBoys[i]}`)
}

// Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é,
//  se é um array de strings, só deve receber strings.
//crie uma array para guardar os objetos
const array= []


// if(friends.continuaLancando===true){
//     array.push(friends)
// }else{
//     alert('Objeto "friends" nao foi adcionado na array')
// }
// if(himym.continuaLancando===true){
//     array.push(himym)
// }else{
//     alert('Objeto "himym" nao foi adcionado na array')
// }
// if(blackMirror.continuaLancando===true){
//     array.push(blackMirror)
// }else{
//     alert('objeto "Black Mirror" nao foi adcionado na array')
// }
// if(theBoys.continuaLancando===true){
//     array.push(theBoys)
// }else{
//     alert('objeto "The Boys" nao foi adcionado na array')
// }

// for (const i in array) {
//     console.log(array[i])
// }


// ArrayParaString=(array) =>{
//     for(let i in array){
//         for(let j in array){
//             let arrayString ="";
//         arrayString+= array[i].genero
//         console.log(arrayString)
//         }
//     }
// }
// ArrayParaString(array)

//semana 3 exercicio 3. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.
// function mostrarProps(obj) {
//     var resultado = "";
//     for (var i in obj) {
//       if (obj.hasOwnProperty(i)) {
//           resultado += i + " = " + obj[i] + "\n";
//       }
//     }
//     return resultado;
// }

// console.log(mostrarProps(blackMirror))

const Series= [ himym, blackMirror, friends, theBoys ]

// function buscaPorNome(Series, string) {
//     const resultado = Series.filter((objeto) => {
//      if(objeto.nome.toLowerCase() === string.toLowerCase()){
//         return true
//      }

//     })
//     console.log(resultado)
//     return resultado
// }

// buscaPorNome(Series, buscar())


// let valorInput= document.getElementById("busca")
// const buscar = () => {
//     return valorInput.value
// };
// tenho que fazer uma funcao que pego valor e filtre a array de objetos pelo valor do input

let valorInput= document.getElementById("busca");
novaSeries= [...Series]
function buscaPorNome(){
    if(valorInput.value===""){
        alert("Nenhum programa encontrado")
    }
        novaSeries= Series.filter((series) =>{
            return series.nome.toLocaleLowerCase().includes(valorInput.value.toLocaleLowerCase())
        })
    
    let limpa = document.getElementsByClassName("programas")
   const tamanho= limpa.length 
   imprime(novaSeries)
   for(let i =0; i <tamanho; i++){
    console.log(limpa)
    limpa[0].remove()
   }
}
    
let novoArticle= document.getElementsByClassName("article")
    const arrayNomesCorretos= ["Nome", "Ano de lançamento", "Numero de episodios", "Continua sendo lançado?", "Generos", "Nota Pessoal" ]
const imprime = (novaSeries) =>{

    for(let i in novaSeries){
        let contador= 0;
        
        let novoSection = document.createElement('section')
        let novoUl = document.createElement('ul')
        novoSection.appendChild(novoUl)

        for(let j in novaSeries[i]){
            if(j !== "imagem"){
            let novoLi = document.createElement('li')
            let conteudoLi = document.createTextNode(`${arrayNomesCorretos[contador]}: ${novaSeries[i][j]}`)
            novoLi.appendChild(conteudoLi)
            novoUl.appendChild(novoLi).setAttribute("class", j)
            contador++
            }else{
                let novaImagem = document.createElement("img")
                let novoLi= document.createElement("li")
                novaImagem.setAttribute('src', novaSeries[i][j])
                novoLi.appendChild(novaImagem)
                novoUl.insertAdjacentElement('afterbegin', novoLi).setAttribute('class', j)
            }
        }
        novoArticle[0].insertAdjacentElement("beforeend", novoSection).setAttribute("class", "programas")

    }
}

imprime(novaSeries)