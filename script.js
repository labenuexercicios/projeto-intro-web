
const animal1 = {
    nome1: "Aranha-marrom",
    tempoMedioDeVida1: 2,
    arrayCor1: [ "Marrom" ],
    extinto1: false
}

const animal2 = {
    nome2: "Viuva-negra",
    tempoMedioDeVida2: 3,
    arrayCor2: [ "preta" ],
   extinto2: false
}


const animal3 = {
    nome3: "Aranha-armadeira",
    tempoMedioDeVida3: 2 ,
    arrayCor3: [ "marrom" ],
    extinto3: false
}







let mediaDeTempoDeVida = animal1.tempoMedioDeVida1 + animal2.tempoMedioDeVida2 + animal3.tempoMedioDeVida3
let mediaDeTempoDeVidaFinal =  mediaDeTempoDeVida / 3

let media = mediaDeTempoDeVidaFinal

console.log("A media de vida é:",media)

const verificarExtinto = animal1.extinto1 && animal2.extinto2 && animal3.extinto3;

console.log(verificarExtinto)

console.log(

`${animal1.nome1.toLocaleUpperCase()} 
Tempo de vida media: ${animal1.tempoMedioDeVida1}
Qual a cor da aranha: ${animal1.arrayCor1}
Ela esté extinta? ${animal1.extinto1}`
    
           )
console.log(

`${animal2.nome2.toLocaleUpperCase()} 
Tempo de vida media: ${animal2.tempoMedioDeVida2}
Qual a cor da aranha: ${animal2.arrayCor2}
Ela esté extinta? ${animal2.extinto2}`
    
           )
console.log(

`${animal3.nome3.toLocaleUpperCase()} 
Tempo de vida media: ${animal3.tempoMedioDeVida3}
Qual a cor da aranha: ${animal3.arrayCor3}
Ela esté extinta? ${animal3.extinto3}`
    
           )

const arrayAnimais = []


arrayAnimais.push(animal1 , animal2 , animal3)

console.log(arrayAnimais)



arrayAnimais.push({nome4: "Aranha de Jardim" , 
tempoMedioDeVida4: 2,
arrayCor4: [ "Marrom" ],
extinto4: false})


const aranha4 = {
    nome4: "Aranha de Jardim" , 
    tempoMedioDeVida4: 2,
    arrayCor4: [ "Marrom" ],
    extinto4: false}

if(aranha4.extinto4){
    arrayAnimais.push(aranha4)
}else{
    console.log("o item não foi adicionado")
    alert("o item não foi adicionado")
}





// for(const arrayCores of clientes){
//     console.log(cliente)
//     for(const cliente2 of cliente.empreendimento){
//       console.log(cliente2)
//     }
//   }






const devolver = (relatorio)=>{
    
    console.log(animal1, animal2, animal3)
   

}

devolver()


let nomes1 = [animal1.nome1 , animal2.nome2 , animal3.nome3]


const nomes = (array) =>{

[{nomes1}]

if(nomes1){

    console.log(nomes1)
    
}else{
    console.log("o item não foi adicionado")
    alert("o item não foi adicionado")
}

}

nomes(nomes)

   




// 2. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado


// //TRAZ TODO MUNDO DO ARRAY
// const top1 = pokemons.map( (item, indice, array) => {
//   return item * 3 //traz todos vezes 3
// })


// //TRAZ O ARRAY FILTRADO
// const top2 = pokemons.filter( (item) => {
//   return item % 2 ===0 //traz so os pares
// })





// console.log(top2)
// console.log(top1)






//1. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.









// for(let valor of array){
//     valor.cores
// }

// console.log(array)

// if (maioresPaises.length === 5) {
//     for (let i in maioresPaises) {
//       let sorteio = `Sorteio ${+i + 1}: `
//       for (let j of maioresPaises[i]) {
//         sorteio += `${j} `
//       }
//       console.log(sorteio)
//     }
//   } else {
//     console.log('É necessário alterar o número de itens do array')
//   }













// //1. Reescrevendo o relatório da semana 2, altere a forma que a característica de array, criada no item 1 da semana 2, faça um laço que guarde todos os valores da propriedade array do objeto em uma mesma string. Utilize esta string no relatório.
// 💡 Chamamos este processo de reescrever um código já escrito, de refatoração
// Exemplo:
// //ANTES ["Projeto de HTML", "Projeto de CSS", "Projeto React"]
// //DEPOIS "Projeto de HTML,Projeto de CSS,Projeto React" 
// 2. Ainda no relatório, altere-o para que ele seja criado utilizando um laço. Ou seja, você não deve mais imprimir individualmente cada item do relatório. Cada item deve ser exibido a partir de uma iteração do laço. Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.

 