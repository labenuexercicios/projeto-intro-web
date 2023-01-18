/*1. Para o item que você decidiu, pense nas características que são importantes para construí-lo. 
Vamos usar estas características para definir exemplos destes objetos usando o código.*/

/*2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. 
Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes. */

const pizza1 = "pizza de calabresa";
const preco1 = Number(15.00.toFixed(2));
const vegetariano1 = false;
const diponivel = true

const pizza2 = "pizza vegetariana";
const preco2 = Number(18.00.toFixed(2));
const vegetariano2 = true;
const diponive2 = false

const pizza3 = "pizza chocolate";
const preco3 = Number(20.00.toFixed(2));
const vegetariano3 = false;
const diponive3 = true

const pizza4 = "pizza marguerita";
const preco4 = Number(15.00.toFixed(2));
const vegetariano4 = true;
const diponive4 = true

const pizza5 = "pizza frango com catupiry";
const preco5 = Number(17.00.toFixed(2));
const vegetariano5 = true;
const diponive5 = true

/*3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. 
Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;*/

const precoMedio = (preco1 + preco2 + preco3 + preco4 + preco5) / 5

console.log(`A média dos preços das pizzas é: $ ${precoMedio}`)

/*4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras. */


console.log(`Todas as pizzas são vegetarianas? ${vegetariano1 && vegetariano2 && vegetariano3 && vegetariano4 && vegetariano5 === true}`)

/*5. Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. 
Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings. */

ingredientesPizza1 = ['cebola',' calabresa',' molho de tomate',' queijo']

ingredientesPizza2 = ['pimentão',' cebola',' molho de tomate',' queijo']

ingredientesPizza3 = ['chocolate',' molho de tomate',' queijo',' morango']

ingredientesPizza4 = [' molho de tomate',' queijo',' manjericão']

ingredientesPizza5 = ['frango',' molho de tomate',' queijo','catupiry']


/*6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui

  1. O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo. */

console.log(`${pizza1.toLocaleUpperCase()}
Preço: $ ${preco1.toFixed(2)}
Ela é vegetariana?: ${vegetariano1}
Ingredientes: ${ingredientesPizza1}
`)

console.log(`${pizza2.toLocaleUpperCase()}
Preço: $ ${preco2.toFixed(2)}
Ela é vegetariana?: ${vegetariano2}
Ingredientes: ${ingredientesPizza2}
`)

console.log(`${pizza3.toLocaleUpperCase()}
Preço: $ ${preco3.toFixed(2)}
Ela é vegetariana?: ${vegetariano3}
Ingredientes: ${ingredientesPizza3}
`)

console.log(`${pizza4.toLocaleUpperCase()}
Preço: $ ${preco4.toFixed(2)}
Ela é vegetariana?: ${vegetariano4}
Ingredientes: ${ingredientesPizza4}
`)

console.log(`${pizza5.toLocaleUpperCase()}
Preço: $ ${preco5.toFixed(2)}
Ela é vegetariana?: ${vegetariano5}
Ingredientes: ${ingredientesPizza5}
`)