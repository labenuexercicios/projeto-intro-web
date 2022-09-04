/* 1. Para o item que você decidiu, pense nas características que são importantes para construí-lo.
Vamos usar estas características para definir exemplos destes objetos usando o código.*/

const nomeCliente1 = "Carlos"
const AnoNascimento1 = 1988
const preferencial1 = false 
let nascionalidade1 = ["BR"] 

/*Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. 
Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes. */

const nomeCliente2 = "José"
const anoNascimento2 = 1959
const preferencial2 = true
let nascionalidade2 = ["FR"]

const nomeCliente3 = "Maria"
const anoNascimento3 = 1960
const preferencial3 = true 
const nascionalidade3 = ["IT"]

const nomeCliente4 = "Ana"
const anoNascimento4 = 1987
const preferencial4 = false
const nascionalidade4 = ["US"]

//3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item.

const mediaDeNascimento = (AnoNascimento1 + anoNascimento2 + anoNascimento3 + anoNascimento4) / 4

//3.1 Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;
    console.log("A média do ano de nascimento é:", mediaDeNascimento)

/* 4. Com um console.log, imprima o resultado de uma operação lógica,
 que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.*/
const verificarPreferencinal = preferencial1 && preferencial2 && preferencial3 && preferencial4    
    console.log("Sua verificação é:", verificarPreferencinal)

/*5. Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. 
Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.*/    
//5.1                                  ((CRIADO, 1 ARRAY EM CADA VARIAVEL))

//6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui.
    console.log(`${nomeCliente1.toUpperCase()} \n ${AnoNascimento1} \n ${preferencial1} \n ${nascionalidade1}`)
    console.log(`${nomeCliente2.toUpperCase()} \n ${anoNascimento2} \n ${preferencial2} \n ${nascionalidade2}`)
    console.log(`${nomeCliente3.toUpperCase()} \n ${anoNascimento3} \n ${preferencial3} \n ${nascionalidade4}`)
    console.log(`${nomeCliente4.toUpperCase()} \n ${anoNascimento4} \n ${preferencial4} \n ${nascionalidade4}`)
    