
console.log("Semana 3")

series = [
    { 
       titulo: "Outlander",
       temporadas: 6,
       temNaNetflix: true,
       imagem: "outlander",
       personagensPrincipais: ["Claire Fraser", "Jamie Fraser", "Jonathan Randall"]
      },

      { 
     titulo: "The Handmands Tale",
       temporadas: 5,
       temNaNetflix: false,
       imagem: "hand",
       personagensPrincipais: ["June Osborne", "Serena Joy","Comandante"]
      },

      { 
       titulo: "Greys Anatomy",
       temporadas: 19,
       temNaNetflix: false,
       imagem: "greys",
       personagensPrincipais: ["Meredith Grey", "Derek Shepherd", "Cristina Yang"]
      },
    ]
console.log(series)

//Projeto-integrador - semana 3
//1 Reescrevendo o relatório criado que foi feito na semana 1, altere a caracteristica personagens principais, 
//para que a mesma seja escrita como um laço, guardando todos os valores de propriedade array em uma string unica.

 for ( itemSerie of series){
    for (itemDoSegundoArray of itemSerie.personagensPrincipais){
        console.log("Os personagens principais de", itemSerie.titulo, "são:", itemDoSegundoArray)
    }   
    }
 

//2 Cada item deve ser exibido a partir de uma iteração do laço. 
//Vou utilizar for in para percorrer array com objetos
for (i in series) (
    console.log(`Percorrendo o array de objetos atraves de laços:`, series[i])
)


//DICA DA CLARA: usar um laço no objeto e concatenar cada propriedade dele em uma string, então imprimir a string inteira.
//3 Crie uma função que receba como parâmetro um objeto,
console.log("Relatorio com todos os dados do obejto em formato de String:")
function relatorio(series){
     for(i in series){
          //e devolva a string do relatório com os dados do objeto.
        console.log("O título da serie é" , series[i].titulo , ". \n A serie possue:", series[i].temporadas , 
        "temporadas. Tem como personagens principais:", series[i].personagensPrincipais[i] , ".\n Sendo" , series[i].temNaNetflix , 
        "a afirmação de que a mesma é trasmitida no streaming Netflix")
    
      }
 }
 console.log(relatorio(series))

 

// 4 Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, 
// e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. 
// Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.
const retornaObjetoIgualStringPassada = series.filter((item, indice, array) =>{
  return item.titulo === "Outlander"
})
console.log(retornaObjetoIgualStringPassada)


console.log("Semana 2")
//Projeto-integrador - semana 2
//1 Transformar as variaveis que criamos em objetos

const serie1 = {
     título: "Outlander",
     temporadas: 6,
     temNaNetflix: true,
     imagem: "outlander",
     personagensPrincipais: ["Claire Fraser", "Jamie Fraser", "Jonathan Randall"]
 }

 const serie2 = {
     título: "The Handmands Tale",
     temporadas: 5,
     temNaNetflix: false,
     imagem: "hand",
     personagensPrincipais: ["June Osborne", "Serena Joy","Comandante"]
 }

 const serie3 = {
     título: "Greys Anatomy",
     temporadas: 19,
     temNaNetflix: false,
     imagem: "greys",
     personagensPrincipais: ["Meredith Grey", "Derek Shepherd", "Cristina Yang"]
 }

 console.log(`Melhores séries (em objetos):`, serie1, serie2, serie3)

//2 Crie um array para guardar esses objetos
let series = []

//3 Adicione os objetos ao array de objetos "series"
// series.push(serie1, serie2, serie3)
// console.log(`Melhores séries (em um unico array com objetos):`, series)

//APOS o 2 e 3, ficara assim: (um array que guarda objetos que tem array dentro)

//   series = [
//      { 
//         titulo: "Outlander",
//         temporadas: 6,
//         temNaNetflix: true,
//         imagem: "outlander",
//         personagensPrincipais: ["Claire Fraser", "Jamie Fraser", "Jonathan Randall"]
//        },

//        { 
//       titulo: "The Handmands Tale",
//         temporadas: 5,
//         temNaNetflix: false,
//         imagem: "hand",
//         personagensPrincipais: ["June Osborne", "Serena Joy","Comandante"]
//        },

//        { 
//         titulo: "Greys Anatomy",
//         temporadas: 19,
//         temNaNetflix: false,
//         imagem: "greys",
//         personagensPrincipais: ["Meredith Grey", "Derek Shepherd", "Cristina Yang"]
//        },
//      ]


//4 Altere o item 3.Adicione uma verificação antes de dar o push(antes de adicionar os objetos ao array de objetos). CONDICIONAIS
//5 Crie uma condição else, que, em caso de valor false na condição acima, exiba um **ALERT** avisando para o usuário que o item não foi adicionado. E nesse caso não sera feito o push.
     if (serie1.temNaNetflix===true){
        series.push(serie1)
      alert("O título \'Outlander'\ é exibido no streaming Netflix, e por isso, foi adicionado a lista")
        } else {
      alert("O título \'Outlander'\ não pode ser adicionado a lista, pois não é exibido no streaming Netflix")
     }

     if (serie2.temNaNetflix===true){
       series.push(serie2)
      alert("O título \'The handmands Tale'\ é exibido no streaming Netflix, e por isso, foi adicionado a lista")
        } else {
      alert("O título \'The handmands Tale'\ não pode ser adicionado a lista, pois não é exibido no streaming Netflix")
     }

     if (serie3.temNaNetflix===true){
      series.push(serie3)
      alert("O título \'Greys Anatomy'\ é exibido no streaming Netflix, e por isso, foi adicionado a lista")
        } else {
      alert("O título \'Greys Anatomy'\ não pode ser adicionado a lista, pois não é exibido no streaming Netflix")
     }

  console.log(`Séries com exibição no streaming Netflix:`, series) 
  //impresso no console apenas o que foi para o array SERIES atraves do push (ou seja, apenas os itens que são exibidos na streaming netflix)

console.log("semana 1")
//Projeto-integrador - semana 1

//1 pensar em algo (item) contavel e estruturado
//Criar 3 conjuntos de variáveis
const serie1 = "Outlander"
const temporadasOutlander = 6 
const temNaNetflix1 = true
const personagensPrincipais1 = ["Claire Fraser", " Jamie Fraser", " Jonathan Randall"]

const serie2 = "The Handmands Tale"
const temporadasTheHands = 5 
const temNaNetflix2 = false
const personagensPrincipais2 = ["June Osborne", " Serena Joy", " Comandante"]


const serie3 = "Greys Anatomy"
const temporadasGreys = 19
const temNaNetflix3 = false
const personagensPrincipais3 = ["Meredith Grey", " Derek Shepherd"," Cristina Yang"]

//3 fazendo calculo de média dos valores numericos
const mediaDeTemporadas = ((temporadasOutlander+temporadasTheHands+temporadasGreys)/3)
console.log(`A média de quantidade de temporadas de todas as séries é: ${mediaDeTemporadas}`) //imprime 10

//4 Checando se todas as variaveis apresentadas são verdadeiras
const todasTemNaNetflix = temNaNetflix1 && temNaNetflix2 && temNaNetflix3
console.log (todasTemNaNetflix)  // imprime false

//5 Crie mais uma caracteristica para o item que criou (series). Deve ser um array de mesmo tipo de dado

//Comando para Imprimir primeiro dado em maiusculo
const serie1Maiusculo = serie1.toUpperCase()
const serie2Maiusculo = serie2.toUpperCase()
const serie3Maiusculo = serie3.toUpperCase()

//6 imprima todos os dados
console.log("Imprimindo todos os dados:")
console.log (`${serie1Maiusculo} \n Numero de temporadas: ${temporadasOutlander} \n Titulo disponivel no streaming Netflix? ${temNaNetflix1} \n Principais personagens: ${personagensPrincipais1}`) 
console.log (`${serie2Maiusculo} \n Numero de temporadas: ${temporadasTheHands} \n Titulo disponivel no streaming Netflix? ${temNaNetflix2} \n Principais personagens: ${personagensPrincipais2}`) 
console.log (`${serie3Maiusculo} \n Numero de temporadas: ${temporadasGreys} \n Titulo disponivel no streaming Netflix? ${temNaNetflix3} \n Principais personagens: ${personagensPrincipais3}`)


