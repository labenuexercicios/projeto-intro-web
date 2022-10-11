console.log("Pizzas e molhos:");

//1. Para o item que você decidiu, pense nas características que são importantes para construí-lo. 
//Vamos usar estas características 
//para definir exemplos destes objetos usando o código.
//Você precisará criar pelo menos:
//* uma característica String;
//* uma característica Number;
//* uma característica Boolean;


//2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. 
//Lembre-se que deve ser o mesmo tipo de item, 
//com três conjuntos de dados diferentes.
//Tipos de pizza salgadas:
//Pizza 01:
const pizzaSal01 = "-Pizza de calabresa com mozarela" //pg.57
const rendimentoPorcoeSal01 = 24
const tempPrepSal01 = 60
const ingredSal01 = (`-Ingredientes:
* 1 receita de massa para pizza de forno
* 1 receita de molho básico de tomate
* 300g de calabresa fatiada
* 400g de queijo mozarela fatiado`)
const totalIngrPizzaSal01 = [1, 2, 3, 4]
console.log(`${pizzaSal01}
-Rendimento:${rendimentoPorcoeSal01} porções
-Tempo de preparo:${tempPrepSal01}m
${ingredSal01}
`)

const totalRendSal01 = rendimentoPorcoeSal01 >= 24
console.log(totalRendSal01)
const totalTempPrepSal01 = tempPrepSal01 >= 60
console.log(totalTempPrepSal01)

console.log(`${pizzaSal01.toUpperCase()}
-Rendimento:${rendimentoPorcoeSal01} porções
-Tempo de preparo:${tempPrepSal01}m
${ingredSal01}
${totalIngrPizzaSal01}
`)

//Pizza 02:
const pizzaSal02 = "-Pizza de quatro queijos" //pg.58-59
const rendimentoPorcoeSal02 = 24
const tempPrepSal02 = 60
const ingredSal02 = (`-Ingredientes:
* 1 receita de massa para pizza de forno
* 1 receita de molho básico de tomate
* 100g de queijo parmesão
* 150g de queijo provolone
* 150g de queijo mozarela
* 100g de queijo gorgonzola`)
const totalIngrPizzaSal02 = [1, 2, 3, 4, 5, 6]
console.log(`${pizzaSal02}
-Rendimento:${rendimentoPorcoeSal02} porções
-Tempo de preparo:${tempPrepSal02}m
${ingredSal02}
`)

const totalRendSal02 = rendimentoPorcoeSal02 >= 24
console.log(totalRendSal02)
const totalTempPrepSal02 = tempPrepSal02 >= 60
console.log(totalTempPrepSal02)

console.log(`${pizzaSal02.toUpperCase()}
-Rendimento:${rendimentoPorcoeSal02} porções
-Tempo de preparo:${tempPrepSal02}m
${ingredSal02}
${totalIngrPizzaSal02}
`)

//Pizza 03:
const pizzaSal03 = "-Pizza de abobrinha" //pg.17
const rendimentoPorcoeSal03 = 24
const tempPrepSal03 = 50
const ingredSal03 = (`-Ingredientes:
* 1 receita de massa para pizza de forno
* 1 receita de molho básico de tomate
* 2 abobrinhas cortadas em rodelas finas
* 300g de queijo mozarela de búfala ralada ou cortada em fatias
* 1 dente de alho amassado
* 4 colheres de sopa de azeite
* Sal a gosto`)
const totalIngrPizzaSal03 = [1, 2, 3, 4, 5, 6]
console.log(`${pizzaSal03}
-Rendimento:${rendimentoPorcoeSal03} porções
-Tempo de preparo:${tempPrepSal03}m
${ingredSal03}
`)

const totalRendSal03 = rendimentoPorcoeSal03 >= 24
console.log(totalRendSal03)
const totalTempPrepSal03 = tempPrepSal03 >= 60
console.log(totalTempPrepSal03)

console.log(`${pizzaSal03.toUpperCase()}
-Rendimento:${rendimentoPorcoeSal03} porções
-Tempo de preparo:${tempPrepSal03}m
${ingredSal03}
${totalIngrPizzaSal03}
`)

//Média das porções de fatias das pizzas salgadas.
//3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. 
//Imprima o valor da média utilizando um console.log. 
//Guarde este valor em uma const;
//💡A média deve ser igual à soma dos itens, dividida pelo total de itens.
const mediaPorcoesSal = (rendimentoPorcoeSal01+rendimentoPorcoeSal02+rendimentoPorcoeSal03) / 3 //média com base na quantidade de receitas de pizzas salgadas listadas.
console.log(`Média de fatias dos 3 sabores salgados: ${mediaPorcoesSal}`);
const mediaTempoPreparo = (tempPrepSal01+tempPrepSal02+tempPrepSal03) / 3 //média com base no tempo de prepra das pizzas salgadas listadas.
console.log(`Média de tempo para prepara cada uma das 3 pizzas: ${mediaTempoPreparo}`)

//4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.
//verificar booleanos
const mediaRendimentoPizzaSalgadas = totalRendSal01 && totalRendSal02 && totalRendSal03
console.log(`Média de fatias das pizzas salgadas são iguais? ${mediaRendimentoPizzaSalgadas}`)
const mediaTempoPreparoPizzasSalgadas = totalTempPrepSal01 && totalTempPrepSal02 && totalTempPrepSal03
console.log(`Média de tempo para preparo é igual em todas? ${mediaTempoPreparoPizzasSalgadas}`)

//5. Crie pelo menos mais uma característica para o item que você criou. 
//Esta característica deve ser um array. 
//Mantenha o tipo de dado do array criado sempre o mesmo, 
//isto é, se é um array de strings, só deve receber strings.

//Como ficou:(colocodado na parte 2)
//const totalIngrPizzaSal01 = [1, 2, 3, 4]
//const totalIngrPizzaSal02 = [1, 2, 3, 4, 5, 6]
//const totalIngrPizzaSal03 = [1, 2, 3, 4, 5, 6]

//6. Exiba um relatório utilizando console.log(), 
//mostrando todos os dados de cada um dos itens criados até aqui
//a. O log deve exibir o dado de nome, título ou afim sempre em 
//LETRAS MAIÚSCULAS, como no exemplo abaixo.

//Como ficou:(colocodado na parte 2)
// console.log(`${pizzaSal01.toUpperCase()}
// -Rendimento:${rendimentoPorcoeSal01} porções
// -Tempo de preparo:${tempPrepSal01}m
// ${ingredSal01}
// ${totalIngrPizzaSal01}
// `)
// console.log(`${pizzaSal02.toUpperCase()}
// -Rendimento:${rendimentoPorcoeSal02} porções
// -Tempo de preparo:${tempPrepSal02}m
// ${ingredSal02}
// ${totalIngrPizzaSal02}
// `)
// console.log(`${pizzaSal03.toUpperCase()}
// -Rendimento:${rendimentoPorcoeSal03} porções
// -Tempo de preparo:${tempPrepSal03}m
// ${ingredSal03}
// ${totalIngrPizzaSal03}
// `)




// Trabalhar depois:
//const pizzaDoces =
// const rendimentoDoces =
// const preparoDoces =

// const pizzaMolhos =
// const rendimentoMolhos =
// const = preparoMolhos

// 🍕 Comida
// * Nome;
// * Descrição;
// * Ingredientes;
// * Preço;
// * Categoria (entrada, prato principal, sobremesa etc);
//* É vegetariano?;