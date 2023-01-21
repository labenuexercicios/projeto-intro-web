
/*
1. Transforme os itens que criamos nas últimas semanas em objetos.

Exemplo

//ANTES
  const nome1 = "Fulano";
  const idade1 = 33;
  const verificouEmail1 = false; 
//DEPOIS
objeto1 = { 
    nome: "Fulano", 
    idade: 33,
    verificouEmail: false
  } 

2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;

3. Adicione os objetos criados no item 1, ao array de objetos criado no item 2, utilizando o push() .
*/




const pet = {
    nome: "Scooby",
    idade: 2,
    raca: "salsicha",
    vacinado: false,
    produtosPet: ["Ração", "Shampoo", "Brinquedos"], //resoluçãoExercicio2
    poster:'fotoDogCreche4.png'
}

const pet1 = {
    nome: "Pudim",
    idade: 5,
    raca: "Poodle",
    vacinado: true,
    produtosPet1: ["Guloseimas", "Petiscos", "Bolinha"],  //resoluçãoExercicio2
    poster:'fotoDogCreche1.png'
}

const pet2 = {
    nome: "Olávo",
    idade: 1,
    raca: "rottweiler",
    vacinado: true,
    produtosPet2: ["Petiscos", " Coleira", "Shampoo"], //resoluçãoExercicio2
    poster:'fotoDogCreche2.png'
}


/*
2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;
*/

const pets = []








/*
3. Adicione os objetos criados no item 1, ao array de objetos criado no item 2, utilizando o push() .

*/


pets.push(pet, pet1, pet2)

console.log(pets)


/*

4. Altere o item 3 “Adicione os novos objetos no array de objetos, utilizando o push()”, para criar uma verificação antes de dar o push. A caraterística booleana do objeto deve ser validada. Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;

*/

if(pets[0].vacinado){
    pets.verificacaoVac = `Vacinado`
} else {
    pets[0].vacinado = alert(`Seu animal não está vacinado!`)
}


if(pets[1].vacinado){
    pets.verificacaoVac = `Vacinado`
} else {
    pets[1].vacinado = alert(`Seu animal não está vacinado!`)
}

if(pets[2].vacinado){
    pets.verificacaoVac = `Vacinado`
} else {
    pets[2].vacinado = alert(`Seu animal não está vacinado!`)
}


/*

5. Crie uma condição else, que, em caso de valor false na condição acima, exiba um **ALERT** avisando para o usuário que o item não foi adicionado, e não faça o push

*/



