// #SEMANA 01

// Pense em alguma coisa do cotidiano que seja contável e estruturada. 
// Por enquanto, vamos chamar esta coisa de item. Com esse item, nós vamos construir nossas 
// lógicas e evoluir no projeto através das semanas. Pode ser qualquer coisa que possa ser descrita 
// com características escritas.

// 1. Para o item que você decidiu, pense nas características que são importantes para construí-lo. 
// Vamos usar estas características para definir exemplos destes objetos usando o código.

// 2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. 
// Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.

const nome1 = "Cobra Verde";
const tamanho1 = 2;
const extinto1 = false;

const nome2 = "Cobra Azul";
const tamanho2 = 1.5;
const extinto2 = true;

const nome3 = "Cobra Preta";
const tamanho3 = 3;
const extinto3 = false;

// 3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. 
// Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;

const mediaTamanho = (tamanho1 + tamanho2 + tamanho3) / 3;
console.log(mediaTamanho);

// 4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos 
// os valores de variáveis booleanas criadas até aqui são verdadeiras.

const booleanExtinto = extinto1 && extinto2 && extinto3;
console.log(booleanExtinto);

// #SEMANA 02

// 1. Crie pelo menos mais uma característica para o item que você criou. 
// Esta característica deve ser um array. Mantenha o tipo de dado do array criado 
// sempre o mesmo, isto é, se é um array de strings, só deve receber strings.

const alimento1 = ["Rato", "Banana", "Pêssego"];
const alimento2 = ["Peixe", "Maçã", "Abacaxi"];
const alimento3 = ["Aranha", "Uva", "Mamão"];

// 2. Exiba um relatório utilizando console.log(), mostrando todos os dados 
// de cada um dos itens criados até aqui

const cobraVerde = `${nome1.toUpperCase()} \nTamanho: ${tamanho1} \nExtinto? ${extinto1} \nMe alimento de: ${alimento1}`;
const cobraAzul = `${nome2.toUpperCase()} \nTamanho: ${tamanho2} \nExtinto? ${extinto2} \nMe alimento de: ${alimento2}`;
const cobraPreta = `${nome3.toUpperCase()} \nTamanho: ${tamanho3} \nExtinto? ${extinto3} \nMe alimento de: ${alimento3}`;
console.log(cobraVerde);
console.log(cobraAzul);
console.log(cobraPreta);

// #SEMANA 03