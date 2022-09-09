//1. Para o item que você decidiu, pense nas características que são importantes para construí-lo. Vamos usar estas características para definir exemplos destes objetos usando o código.
// nome - string
// marca - string
// precoCompra - number
// vencido - boolean

//2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.

const nome1 = "Macarrão";
const marca1 = "Amália";
const precoCompra1 = 2.89;
const vencido1 = false;

const nome2 = "Arroz";
const marca2 = "Tio João";
const precoCompra2 = 26.99;
const vencido2 = false;

const nome3 = "Feijão";
const marca3 = "Supang";
const precoCompra3 = 6.99;
const vencido3 = true;

//3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;

const media = (precoCompra1 + precoCompra2 + precoCompra3)/3;
console.log("A média de preço dos itens existentes é: R$", media);

//4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.

console.log("Os itens checados estão:", (vencido1 && vencido2 && vencido3), "\n*(True para vencidos e false para não vencidos.)");

//5. Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.

const tipo1 = ["Penne", "Grande"];
const tipo2 = ["Branco", "Pequeno"];
const tipo3 = ["Vermelho", "Grande"];

//6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui

console.log(nome1.toLocaleUpperCase(), "\nMarca: ", marca1, "\nPreço: R$", precoCompra1, "\nVencido: ", vencido1, "\nCaracterísticas: [", tipo1[0], " , ", tipo1[1], "]")

console.log(nome2.toLocaleUpperCase(), "\nMarca: ", marca2, "\nPreço: R$", precoCompra2, "\nVencido: ", vencido2, "\nCaracterísticas: [", tipo2[0], " , ", tipo2[1], "]")

console.log(nome3.toLocaleUpperCase(), "\nMarca: ", marca3, "\nPreço: R$", precoCompra3, "\nVencido: ", vencido3, "\nCaracterísticas: [", tipo3[0], " , ", tipo3[1], "]")