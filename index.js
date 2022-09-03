// Pense em alguma coisa do cotidiano que seja contável e estruturada. Por enquanto, vamos chamar esta coisa de item.
// Com esse item, nós vamos construir nossas lógicas e evoluir no projeto através das semanas. 
// Pode ser qualquer coisa que possa ser descrita com características escritas. Alguns exemplos abaixo:

// 1. Para o item que você decidiu, pense nas características que são importantes para construí-lo. 
// Vamos usar estas características para definir exemplos destes objetos usando o código.
// Você precisará criar pelo menos:
//   * uma característica String;
//   * uma característica Number;
//   * uma característica Boolean;
// Exemplos abaixo
// const nome; //string
// const idade; //number 
// const verificouEmail; //boolean 
// Recomendamos, pensando no futuro, que você também pense em dados que podem receber múltiplos valores de uma só vez.
// Não vamos usar estes dados até mais pra frente, mas é legal já ter uma ideia.

// 2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. 
// Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.
// Exemplo:
// const nome1 = "Fulano";
// const idade1 = 33;
// const verificouEmail1 = false;

// const nome2 = "Sicrano";
// const idade2 = 41;
// const verificouEmail2 = true;

// const nome3 = "Beltrano";
// const idade3 = 27;
// const verificouEmail3 = true;

const nome1 = "Banana"
const preco1 = 3.70;
const disponivelEmEstoque1 = true;
const nome2 = "melancia";
const preco2 = 4.00;
const disponivelEmEstoque2 = false;
const nome3 = "melão";
const preco3 = 6.00;
const disponivelEmEstoque3 = true;

// 3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. 
// Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;
// 💡A média deve ser igual à soma dos itens, dividida pelo total de itens.

const precoMedio = (preco1 + preco2 + preco3)/3;
console.log(`O preço médio é: ${precoMedio.toFixed(2)}`);

// 4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis
// booleanas criadas até aqui são verdadeiras.
// 💡 Exemplo
// const verificaEmails = verificouEmail1 && verificouEmail2 && verificouEmail3;
// console.log(verificaEmails);
// // nesse caso, vai imprimir false, pois verificouEmail1 === false

const temNoEstoque = disponivelEmEstoque1 && disponivelEmEstoque2 && disponivelEmEstoque3;
console.log(`A verificação é: ${temNoEstoque}`);

// 5. Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. 
// Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.
// const nome; //string
// const idade; //number
// const verificouEmail; //boolean
// const projetos; //array de strings

const arrayreceitas1 = ["sorvete", " bolo", " panqueca", " pudim"]
const arrayreceitas2 = ["mojito", " caipirinha", " batida", " margarita"]
const arrayreceitas3 = ["sopa", " sorvete", " smoothie", " picolé"]

// 6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
//   1. O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo.
// FULANO
// idade: 33
// verificou email?: false
// projetos: ["Projeto de HTML", "Projeto de CSS", "Projeto React"]

console.log(`
    ${nome1.toUpperCase()}
    Preço em São Paulo: ${preco1} reais o kg
    É a mais consumida no Brasil? ${disponivelEmEstoque1}
    Possíveis receitas: ${arrayreceitas1}
`)

console.log(`
    ${nome2.toUpperCase()}
    Preço em São Paulo: ${preco2} reais o kg
    Está disponível em estoque? ${disponivelEmEstoque2}
    Possíveis receitas: ${arrayreceitas2}
`)
console.log(`
    ${nome3.toUpperCase()}
    Preço em São Paulo: ${preco3} reais o kg
    É a mais consumida no Brasil? ${disponivelEmEstoque3}
    Possíveis receitas: ${arrayreceitas3}
`)
