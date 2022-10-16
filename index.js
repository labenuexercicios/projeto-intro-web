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
