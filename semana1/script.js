//Pense em alguma coisa do cotidiano que seja contável e estruturada. Por enquanto, vamos chamar esta coisa de item. Com esse item, nós vamos construir nossas lógicas e evoluir no projeto através das semanas. Pode ser qualquer coisa que possa ser descrita com características escritas.

//Para o item que você decidiu, pense nas características que são importantes para construí-lo. Vamos usar estas características para definir exemplos destes objetos usando o código.

//Você precisará criar pelo menos:
//* uma característica String;
//* uma característica Number;
//* uma característica Boolean;

const pizza= ("pepperoni ")
const fatias = (8)
const saborPizza = (true)

console.log(pizza)
console.log(pizza.includes("calabresa"))


//Recomendamos, pensando no futuro, que você também pense em dados que podem receber múltiplos valores de uma só vez. Não vamos usar estes dados até mais pra frente, mas é legal já ter uma ideia.

//2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.

const pizza1 = (" calabresa ")
const fatias1 = ( 12 )
const saborPizza1 = ( true )

const pizza2 = (" queijo ")
const fatias2 = ( 6 )
const saborPizza2 = ( true )

const pizza3 = (" marguerita ")
const fatias3 = ( 4 )
const saborPizza3 = ( true )


//3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;

const mediaFatias = ((fatias + fatias1 + fatias2 + fatias3) / 4)
console.log(mediaFatias)


//4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.

const verificarSabor = (saborPizza && saborPizza1 && saborPizza2 && saborPizza3)
console.log(verificarSabor)


//5. Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.

const pizzaArray =['com ' + 'cebola']
console.log(pizza + pizzaArray)


//6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
  //1. O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo.

  console.log((pizza + pizzaArray + pizza1 + pizza2 + pizza3 + fatias + fatias1 + fatias2 + fatias3+ saborPizza+ saborPizza1 + saborPizza2 + saborPizza3).toUpperCase())
