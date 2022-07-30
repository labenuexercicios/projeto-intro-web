// Semana 1
//Para o item que você decidiu, pense nas características que são importantes para construí-lo. Vamos usar estas características
//para definir exemplos destes objetos usando o código.
const perso1 = "Harry Potter";
const altura1 = 1.82;
const casa1 = " Grifinória";
const bruxo1 = true;
const amigos1 = ['Rony', 'Hermione'];

const perso2 = "Alvo Dumbledore";
const altura2 = 1.80;
const casa2 = "Grifinória";
const bruxo2 = true;
const amigos2 = ['Nicolas Flamel', 'Albeforth'];

const perso3 = "Hermione Granger";
const altura3 = 1.67;
const casa3 = "Grifinória";
const bruxo3 = true;
const amigos3 = ['Harry', 'Rony'];

const perso4 = "Rony Weasley";
const altura4 = 1.87;
const casa4 = "Grifinória";
const bruxo4 = true;
const amigos4 = ['harry', 'Hermione'];

const perso5 = "Luna Lovegood";
const altura5 = 1.58;
const casa5 = "Corvinal";
const bruxo5 = true;
const amigos5 = ['Gina','Neville'];

const perso6 = "Severo Snape";
const altura6= 1.85;
const casa6 = "Sonserina";
const bruxo6 = true;
const amigos6 = ['Lilian', 'Belatriz'];

const perso7 = "Tom Riddle";
const altura7 = 1.80;
const casa7 = "Sonserina";
const bruxo7= true;
const amigos7 = ['Belatriz', 'Lucius Malfoy']

const perso8 = "Newton Scamander";
const altura8 = 1.88;
const casa8 = "Lufa-Lufa";
const bruxo8 = true;
const amigos8 = ['Jacob', 'Tina'];

/*Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log.
Guarde este valor em uma const*/
const somaAltura = (altura1+altura2+altura3+altura4+altura5+altura6+altura7+altura8)/8;
console.log(somaAltura)

/*Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas
criadas até aqui são verdadeiras.*/

const verifSeBruxo = bruxo1 && bruxo2 && bruxo3 && bruxo4 && bruxo5 && bruxo6 && bruxo7 && bruxo8;
console.log(verifSeBruxo); //true pq todas as const são verdadeiras.
//Semana 2
/*1. Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.*/
/*2. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
  1. O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo.*/
const relatorio1 = `${perso1.toUpperCase()},\n${altura1},\n${casa1},\n${bruxo1},\n${amigos1}`;  
console.log(relatorio1);
const relatorio2 = `${perso2.toUpperCase()},\n${altura2},\n${casa2},\n${bruxo2},\n${amigos2}`;
console.log(relatorio2);
const relatorio3 = `${perso3.toUpperCase()},\n${altura3},\n${casa3},\n${bruxo3},\n${amigos3}`;  
console.log(relatorio3);
const relatorio4 = `${perso4.toUpperCase()},\n${altura4},\n${casa4},\n${bruxo4},\n${amigos4}`; 
console.log(relatorio4);
const relatorio5 = `${perso5.toUpperCase()},\n${altura5},\n${casa5},\n${bruxo5},\n${amigos5}`;  
console.log(relatorio5);
const relatorio6 = `${perso6.toUpperCase()},\n${altura6},\n${casa6},\n${bruxo6},\n${amigos6}`;  
console.log(relatorio6);
const relatorio7 = `${perso7.toUpperCase()},\n${altura7},\n${casa7},\n${bruxo7},\n${amigos7}`;
console.log(relatorio7);
const relatorio8 = `${perso8.toUpperCase()},\n${altura8},\n${casa8},\n${bruxo8},\n${amigos8}`;
console.log(relatorio8);