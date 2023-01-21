/*
PROJETO INTEGRADOR LABENU:

DEFINIÇÃO DE PROJETO. 

        NINA BANANA CRECHE HOTEL PARA PETS.


semana1: 1. Para o item que você decidiu, pense nas características que são importantes para construí-lo. Vamos usar estas características para definir exemplos destes objetos usando o código.

Você precisará criar pelo menos:

* uma característica String;
* uma característica Number;
* uma característica Boolean;

Exemplos abaixo

const nome; //string
const idade; //number 
const verificouEmail; //boolean 

Recomendamos, pensando no futuro, que você também pense em dados que podem receber múltiplos valores de uma só vez. Não vamos usar estes dados até mais pra frente, mas é legal já ter uma ideia.

*/

const nome = "Pongo"
const idade = 2
const raca = "Dálmata"
let vacinado = true

const nome1 = "Pudim"
const idade1 = 3
const raca1 = "Poodle"
let vacinado1 = true

const nome2 = "Olaff"
const idade2 = 6
const raca2 = "Rottweiler"
let vacinado2 = false


/*
2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.

Exemplo:

const nome1 = "Fulano";
const idade1 = 33;
const verificouEmail1 = false;

const nome2 = "Sicrano";
const idade2 = 41;
const verificouEmail2 = true;

const nome3 = "Beltrano";
const idade3 = 27;
const verificouEmail3 = true;

*/

const media = (valorPets, valorPets1, valorPets2) => {
    const medias = (valorPets + valorPets1 + valorPets2) / 3
    return `Valor da média é ${medias.toFixed(1)}`
}
console.log(media(idade, idade1, idade2))

/*
4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.

*/


const vacinacao = (vacPet, vacPet1, vacPet2) => {
    const verificacaoVac = vacPet && vacPet1 && vacPet2
    return `Todos os pets estão vacinaos? ${verificacaoVac}`
}
 console.log(vacinacao(vacinado, vacinado1, vacinado2))



 /*
 5. Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.

const nome; //string
const idade; //number
const verificouEmail; //boolean
const projetos; /a/arry de strings

*/

const produtosPet = ["Ração", "Shampoo", "Brinquedos"]
const produtosPet1 = ["Guloseimas", "Petiscos", "Bolinha"]
const produtosPet2 = ["Petiscos", " Coleira", "Shampoo"]


/*
6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui

  1. O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo.

FULANO
idade: 33
verificou email?: false
projetos: ["Projeto de HTML", "Projeto de CSS", "Projeto React"] 
*/

console.log(`
Nome: ${nome} 
Idade: ${idade}
Raça: ${raca}
Vacinado? ${vacinado}
Produtos Adquiridos no PetShop: ${produtosPet}
`)


console.log(`
Nome: ${nome1} 
Idade: ${idade1}
Raça: ${raca1}
Vacinado? ${vacinado1}
Produtos Adquiridos no PetShop: ${produtosPet1}
`)

console.log(`
Nome: ${nome2} 
Idade: ${idade2}
Raça: ${raca2}
Vacinado? ${vacinado2}
Produtos Adquiridos no PetShop: ${produtosPet2}
`)



/*==============================================================
listagem de Aulunos:
*/



