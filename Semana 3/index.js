

const praia1 = {
    praia:  "PITANGUEIRAS",
    anodeImplante: 2011,
    acessibilidade: true, 
    diasdoAcontecimento: ["Quinta-feira", " sexta-feira", " sábado", "domingo"]

}


//Praia 2

const praia2 = {
    praia: "BOA VIAGEM",
    anodeImplante: 2013,
    acessibilidade: true,
    diasdoAcontecimento: ["Segunda-feira", " terça-feira", " quarta-feira", " Quinta-feira", " sexta-feira", " sábado", " domingo"]
}


// Praia3
const praia3 = {
    praia: "CAMBURI",
    anodeImplante: 2017,
    acessibilidade: true,
    diasdoAcontecimento: ["Quinta-feira", " sexta-feira", " sábado", " domingo" ]
}


const praias = []






if (praia1.acessibilidade === true) {
    praias.push(praia1)
  
} else {
    alert("A praia Pitangueiras não foi adicionado")
  
}
if (praia2.acessibilidade === true) {
    praias.push(praia2)
   
} else {
    alert("A praia Boa Viagem não foi adicionado")
   
}
if (praia3.acessibilidade === true) {
    praias.push(praia3)
   
} else {
    alert("A praia Camburi não foi adicionado")
   
}

// console.log(praias)
const mediaTodos = ( praia1.anodeImplante + praia2.anodeImplante + praia3.anodeImplante) / 3
console.log("Média =", mediaTodos) 

// 1. Reescrevendo o relatório criado utilizando console.log() que começamos na semana 2, altere a forma que a característica de array dos itens seja escrita como um laço que guarde todos os valores da propriedade array do objeto em uma mesma string. Utilize esta string no relatório.
// 💡 Chamamos este processo de reescrever um código já escrito, de refatoração.
// Exemplo:
// //ANTES 
// FULANO
// idade: 33
// verificou email?: false
// projetos: ["Projeto de HTML", "Projet o de CSS", "Projeto React"] 
// Praia 1

// //DEPOIS
// FULANO
// idade: 33
// verificou email?: false
// projetos: "Projeto de HTML,Projeto de CSS,Projeto React"

// function arrayVa(array){
//     let arrayString =""
//     for(let i in array){
//     arrayString+=`\"${array[i]}\"` 
//     }
//     return arrayString
// }
//  arrayVa(praias)
    
const alterarArray= (array)=>{
    let novoarray= [...array]
    for(objeto in novoarray){
         novoarray[objeto] = {...novoarray[objeto] }
    
    }
    for(i=0; i<novoarray.length; i++){
        let string = novoarray[i].diasdoAcontecimento.toString();
        novoarray[i].diasdoAcontecimento=string
    }
     

return novoarray
 }


console.log("item 1:", alterarArray(praias))
// console.log(praias)






    // let novoarray=""
    // for(let i =0; i<praia1.diasdoAcontecimento.length; i++){
    //      novoarray = novoarray+praia1.diasdoAcontecimento[i] + ", " 
       
    // }
    // console.log(novoarray)


// 2. Ainda no relatório, altere-o para que ele seja criado utilizando um laço. Ou seja, você não deve mais imprimir individualmente cada item do relatório. Cada item deve ser exibido a partir de uma iteração do laço. Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.


// let cars = [
//     {
//       "color": "purple",
//       "type": "minivan",
//       "registration": new Date('2017-01-03'),
//       "capacity": 7
//     },
//     {
//       "color": "red",
//       "type": "station wagon",
//       "registration": new Date('2018-03-03'),
//       "capacity": 5
//     }
//   ];
//  //ANTES 
//  console.log("color: "+cars[0].color);
//  console.log("type: "+cars[0].type);
//  console.log("registration: "+cars[0].registration);
//  console.log("capacity: "+cars[0].capacity);
 
//  console.log("----------------------");
 
//  console.log("color: "+cars[
//  1].color);
//  console.log("type: "+cars[1].type);
//  console.log("registration: "+cars[1].registration);
//  console.log("capacity: "+cars[1].capacity);
 
 
//  //DEPOIS
//  for(car of cars){
//      for (propriedade in car){
//          console.log(`${propriedade}: ${car[propriedade]}`)
//      }
//  console.log("----------------------");
//  }

console.log("item 2:")

     for(i of praias){
        for(prai in i){
            console.log( `${prai}: ${i[prai]}`)
        }
        console.log("----------------------");
   }
  

  
//   
// 3. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.


 
console.log("item 3:")
 const funcaoObjeto = (objeto) =>{
    for(i of praias){  
        for(objeto in i){
            console.log(`${objeto}: ${i[objeto]}`)
            // console.log("---------------------")
        }
 } 

  
}
funcaoObjeto(praias)
   
 
 
//resolver isso acima






    //  console.log(`Você tem  ${praias.length} praias  acessivéis`)
    // relatorioTudo(praias) 

// 4. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.
function objetoString(array, string){
    for(objeto of array){ 
    if (objeto.praia ===string){
        return objeto
    } 
}
  return alert(`o ${objeto} não foi encontrado `)
}

const praia= objetoString(praias, prompt("Digite o nome de uma praia para conferir  àcessibilidade a PCDs").toUpperCase().trim())
console.log( "item 4", praia)






