/*1. Para o item que você decidiu, pense nas características que são importantes para construí-lo. 
Vamos usar estas características para definir exemplos destes objetos usando o código.*/

/*2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. 
Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes. */

const pizza1 = [
    nome = "pizza de calabresa",
    preco =  Number(15.00.toFixed(2)),
    vegetarino = false,
]

const pizza2 = [
    nome = "pizza vegetariana",
    preco = Number(18.00.toFixed(2)),
    vegetarino = true,
]

const pizza3 = [
    nome = "pizza de chocolate",
    preco =  Number(20.00.toFixed(2)),
    vegetarino = false,
]

console.log(pizza1,pizza2,pizza3)

/*3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. 
Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;*/

const precoMedio = (pizza1[1]+pizza2[1]+pizza3[1]) / 3

console.log(`A média dos preços das pizzas é: $ ${precoMedio.toFixed(2)}`)

/*4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras. */

const verificaVeg = (pizza1[2] && pizza2[2] && pizza3[2])
console.log(`Todas as pizzas são vegetarianas? ${verificaVeg}`)

/*5. Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. 
Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings. */

ingredientesPizza1 = ['cebola',' calabresa',' molho de tomate',' queijo']
pizza1.push(ingredientesPizza1)

ingredientesPizza2 = ['pimentão',' cebola',' molho de tomate',' queijo']
pizza2.push(ingredientesPizza2)

ingredientesPizza3 = ['chocolate',' molho de tomate',' queijo',' morango']
pizza3.push(ingredientesPizza3)




/*6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui

  1. O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo. */

  console.log(`${pizza1[0].toLocaleUpperCase()}
  Preço: $ ${pizza1[1].toFixed(2)}
  Ela é vegetariana?: ${pizza1[2]}
  Ingredientes: ${pizza1[3]}
  `)