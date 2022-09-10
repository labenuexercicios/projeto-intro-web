//# Projeto de Introdução ao desenvolvimento web

//Pense em alguma coisa do cotidiano que seja contável e estruturada. Por enquanto, vamos chamar esta coisa de item. Com esse item, nós vamos construir nossas lógicas e evoluir no projeto através das semanas. Pode ser qualquer coisa que possa ser descrita com características escritas.

/*1. Para o item que você decidiu, pense nas características que são importantes para construí-lo. Vamos usar estas características para definir exemplos destes objetos usando o código.
Você precisará criar pelo menos:
* uma característica String;
* uma característica Number;
* uma característica Boolean; */

/* RESPOSTA:
const filme = String
const duracao = Number
const venceuOscar = Boolean */

//2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.

const filme1 = "Gladiador";
const duracao1 = 155;
const venceuOscar1 = true;

const filme2 = "O Resgate do Soldado Ryan";
const duracao2 = 169;
const venceuOscar2 = true;

const filme3 = "O Patriota";
const duracao3 = 175;
const venceuOscar3 = false;

//3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;

const mediaDuracao = (duracao1 + duracao2 + duracao3) / 3;
console.log(mediaDuracao);

//4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.

const verificarVenceuOscar = venceuOscar1 && venceuOscar2 && venceuOscar3;
console.log(verificarVenceuOscar);

//5. Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.

const elenco1 = [
  "Russell Crowe",
  "Joaquin Phoenix",
  "Connie Nielsen",
  "Oliver Reed",
  "Derek Jacobi",
  "Djimon Hounsou",
  "Richard Harris",
];
const elenco2 = [
  "Tom Hanks",
  "Tom Sizemore",
  "Matt Damon",
  "Edward Burns",
  "Barry Pepper",
  "Vin Diesel",
];
const elenco3 = [
  "Mel Gibson",
  "Heath Ledger",
  "Joely Richardson",
  "Jason Isaacs",
  "Chris Cooper",
];

//6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
// O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS.

console.log(
  `Filme: ${filme1.toUpperCase()}\nDuração: ${duracao1} min \nVencedor de Oscar?: ${venceuOscar1}\nElenco: ${elenco1}`
);
console.log(
  `Filme: ${filme2.toUpperCase()}\nDuração: ${duracao2} min \nVencedor de Oscar?: ${venceuOscar2}\nElenco: ${elenco2}`
);
console.log(
  `Filme: ${filme3.toUpperCase()}\nDuração: ${duracao3} min \nVencedor de Oscar?: ${venceuOscar3}\nElenco: ${elenco3}`
);
