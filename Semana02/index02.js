console.log("Pizzas e molhos:");

//1. Transforme os itens que criamos
//nas últimas semanas em objetos.
//Tipos de pizza:
//Pizza 01:
objetoPizzaSal01 = {
    pizza1: "Pizza de calabresa com mozarela",
    rendimento: 24,
    tempoPreparo: 60,
    pizzaSalgada: true,
    ingredientes: [`
    * 1 receita de massa para pizza de forno
    * 1 receita de molho básico de tomate
    * 300g de calabresa fatiada
    * 400g de queijo mozarela fatiado`]    
}
//console.log(objetoPizzaSal01)

// const totalRendSal01 = rendimentoPorcoeSal01 >= 24
// console.log(totalRendSal01)
// const totalTempPrepSal01 = tempPrepSal01 >= 60
// console.log(totalTempPrepSal01)

// console.log(`${pizzaSal01.toUpperCase()}
// -Rendimento:${rendimentoPorcoeSal01} porções
// -Tempo de preparo:${tempPrepSal01}m
// ${ingredSal01}
// ${totalIngrPizzaSal01}
// `)

//Pizza 02:
objetoPizzaSal02 = {
    pizza2: "Pizza de quatro queijos",
    rendimento: 24,
    tempoPreparo: 60,
    pizzaSalgada: true,
    ingredientes: [`
    * 1 receita de massa para pizza de forno
    * 1 receita de molho básico de tomate
    * 100g de queijo parmesão
    * 150g de queijo provolone
    * 150g de queijo mozarela
    * 100g de queijo gorgonzola`]
}
//console.log(objetoPizzaSal02)

// const totalRendSal02 = rendimentoPorcoeSal02 >= 24
// console.log(totalRendSal02)
// const totalTempPrepSal02 = tempPrepSal02 >= 60
// console.log(totalTempPrepSal02)

// console.log(`${pizzaSal02.toUpperCase()}
// -Rendimento:${rendimentoPorcoeSal02} porções
// -Tempo de preparo:${tempPrepSal02}m
// ${ingredSal02}
// ${totalIngrPizzaSal02}
// `)

//Pizza 03:
objetoPizzaSal03 = {
    pizza3: "Pizza de abobrinha",
    rendimento: 24,
    tempoPreparo: 50,
    pizzaSalgada: true,
    ingredientes: [`
    * 1 receita de massa para pizza de forno
    * 1 receita de molho básico de tomate
    * 2 abobrinhas cortadas em rodelas finas
    * 300g de queijo mozarela de búfala ralada ou cortada em fatias
    * 1 dente de alho amassado
    * 4 colheres de sopa de azeite
    * Sal a gosto`]    
}
//console.log(objetoPizzaSal03)

// const totalRendSal03 = rendimentoPorcoeSal03 >= 24
// console.log(totalRendSal03)
// const totalTempPrepSal03 = tempPrepSal03 >= 60
// console.log(totalTempPrepSal03)

// console.log(`${pizzaSal03.toUpperCase()}
// -Rendimento:${rendimentoPorcoeSal03} porções
// -Tempo de preparo:${tempPrepSal03}m
// ${ingredSal03}
// ${totalIngrPizzaSal03}
// `)

//Pizza 04:
//Tipos de pizza doces:
objetoPizzaDoce01 = {
    pizza4: "Pizza de chocolate",
    rendimento: 24,
    tempoPreparo: 60,
    pizzaSalgada: false,
    ingredientes: [`
    * 2 xícaras (de chá) de chocolate forneável ao leite
    * 1 disco de massa doce para pizza - pré assado
    * 1 colher de sopa de chocolate em pó
    * 1/2 xícara (de chá) de chocolate granulado (para povilhar)
    * 1/2 xícara (de chá) de cereja em calda (para decorar)`]    
}
//console.log(objetoPizzaDoce01)


//2. Crie um array para guardar os objetos.
//Este array deve estar vazio, por enquanto;
var pizzaSaborosas = []

// 3. Adicione os objetos criados no item 1 ao
// array de objetos criado no item 2, utilizando o push()
// Ao fim, você deve ter algo parecido com isso:
// [
//     {
//       nome: "Fulano",
//       idade: 33,
//       verificouEmail: false
//     },
//     {
//       nome: "Beltrano",
//       idade: 41,
//       verificouEmail: true
//     },
//     {
//       nome: "Fulano",
//       idade: 27,
//       verificouEmail: true
//     },]

//Como fiz:
//pizzaSalgadas.push(objetoPizzaSal01, objetoPizzaSal02, objetoPizzaSal03)
//console.log(pizzaSalgadas)

//4. Altere o item “Adicione os novos objetos no array
//de objetos, utilizando o push()” (item 3),
//para criar uma verificação antes de dar o push.
//A caraterística booleana do objeto deve ser validada.
//Isto é, o objeto só deve ser adicionado ao array se a
//propriedade booleana for true;
// 5. Crie uma condição else, que,
// em caso de valor false na condição acima,
// exiba um **ALERT** avisando para o usuário
// que o item não foi adicionado, e não faça o push

//Primeira opção:
 const pizzasSimouNao = prompt("Você deseja fazer o push dos objetos para o array?")
if(pizzasSimouNao.toLowerCase() === "sim") {
    pizzaSaborosas.push(objetoPizzaSal01, objetoPizzaSal02, objetoPizzaSal03, objetoPizzaDoce01)
    } else if (pizzasSimouNao.toLowerCase() === "não") {
        alert("O item NÃO foi adicionado com o push!")
    } else {
        console.log(`Resposta inadequada, por favor responda com "sim" ou "não"`)
    }
 console.log(pizzaSaborosas)
 
//Média das porções de fatias das pizzas salgadas.
//3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item.
//Imprima o valor da média utilizando um console.log.
//Guarde este valor em uma const;
//💡A média deve ser igual à soma dos itens, dividida pelo total de itens.
// const mediaPorcoesSal = (rendimentoPorcoeSal01 + rendimentoPorcoeSal02 + rendimentoPorcoeSal03) / 3 //média com base na quantidade de receitas de pizzas salgadas listadas.
// console.log(`Média de fatias dos 3 sabores salgados: ${mediaPorcoesSal}`);
// const mediaTempoPreparo = (tempPrepSal01 + tempPrepSal02 + tempPrepSal03) / 3 //média com base no tempo de prepra das pizzas salgadas listadas.
// console.log(`Média de tempo para prepara cada uma das 3 pizzas: ${mediaTempoPreparo}`)

//4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.
//verificar booleanos
// const mediaRendimentoPizzaSalgadas = totalRendSal01 && totalRendSal02 && totalRendSal03
// console.log(`Média de fatias das pizzas salgadas são iguais? ${mediaRendimentoPizzaSalgadas}`)
// const mediaTempoPreparoPizzasSalgadas = totalTempPrepSal01 && totalTempPrepSal02 && totalTempPrepSal03
// console.log(`Média de tempo para preparo é igual em todas? ${mediaTempoPreparoPizzasSalgadas}`)

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