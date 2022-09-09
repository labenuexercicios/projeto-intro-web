// 1. Transforme os itens que criamos nas últimas semanas em objetos.
// Exemplo
// //ANTES
//   const nome1 = "Fulano";
//   const idade1 = 33;
//   const verificouEmail1 = false; 
// //DEPOIS
// objeto1 = { 
//     nome: "Fulano", 
//     idade: 33,
//     verificouEmail: false
//   } 

// Praia 1
const praia1 = {
    praia: "PRAIA - PITANGUEIRAS",
    anodeImplante: 2011,
    acessibilidade: true,
    diasdoAcontecimento: ["Quinta-feira", " sexta-feira", " sábado", "domingo"]

}




//Praia 2

const praia2 = {
    praia: "PRAIA - BOA VIAGEM",
    anodeImplante: 2013,
    acessibilidade: true,
    diasdoAcontecimento: ["Segunda-feira", " terça-feira", " quarta-feira", " Quinta-feira", " sexta-feira", " sábado", " domingo"]
}


// Praia3
const praia3 = {
    praia: "PRAIA - CAMBURI",
    anodeImplante: 2017,
    acessibilidade: true,
    diasdoAcontecimento: ["Quinta-feira", " sexta-feira", " sábado", " domingo"]
}


// 2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;
const praias = []





// 3. Adicione os objetos criados no item 1 ao array de objetos criado no item 2, utilizando o push()
// Ao fim, você deve ter algo parecido com isso:
// [
//   { 
//     nome: "Fulano", 
//     idade: 33,
//     verificouEmail: false
//   },
//   { 
//     nome: "Beltrano", 
//     idade: 41,
//     verificouEmail: true
//   },
//   { 
//     nome: "Fulano", 
//     idade: 27,
//     verificouEmail: true
//   },
praias.push(praia1)//obj1
praias.push(praia2)//obj2
// 4. Altere o item “Adicione os novos objetos no array de objetos, utilizando o push()” (item 3), para criar uma verificação antes de dar o push. A caraterística booleana do objeto deve ser validada. Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;
// 5. Crie uma condição else, que, em caso de valor false na condição acima, exiba um *ALERT* avisando para o usuário que o item não foi adicionado, e não faça o push
if (praia3.acessibilidade === true) {
    praias.push(praia3)
    console.log(praias)
} else {
    alert("O item não foi adicionado")
    console.log(praias)
}

//A média deve ser igual á somas dos itens, dividida pelo total de itens
//const médiaTodos = ( AnodeImplante + AnodeImplante2 + AnodeImplante3) / 3
//Com um console.log imprima o resultado 
//console.log("Média =", médiaTodos) 