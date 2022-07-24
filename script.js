//Para o item que você decidiu, pense nas características que são importantes para construí-lo. Vamos usar estas características
//para definir exemplos destes objetos usando o código.
const perso1 = "Harry Potter";
const altura1 = 1.82;
const casa1 = " Grifinória";
const bruxo1 = true;

const perso2 = "Alvo Dumbledore";
const altura2 = 1.80;
const casa2 = "Grifinória";
const bruxo2 = true;

const perso3 = "Hermione Granger";
const altura3 = 1.67;
const casa3 = "Grifinória";
const bruxo3 = true;

const perso4 = "Rony Weasley";
const altura4 = 1.87;
const casa4 = "Grifinória";
const bruxo4 = true;

const perso5 = "Luna Lovegood";
const altura5 = 1.58;
const casa5 = "Corvinal";
const bruxo5 = true;

const perso6 = "Severo Snape";
const altura6= 1.85;
const casa6 = "Sonserina";
const bruxo6 = true;

const perso7 = "Tom Riddle";
const altura7 = 1.80;
const casa7 = "Sonserina";
const bruxo7= true;

const perso8 = "Newton Scamander";
const altura8 = 1.88;
const casa8 = "Lufa-Lufa";
const bruxo8 = true;

//Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log.
// Guarde este valor em uma const
const somaAltura = (altura1+altura2+altura3+altura4+altura5+altura6+altura7+altura8)/8;
console.log(somaAltura)

//Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas
//criadas até aqui são verdadeiras.

const veriBruxo = bruxo1 && bruxo2 && bruxo3 && bruxo4 && bruxo5 && bruxo6 && bruxo7 && bruxo8;
console.log(veriBruxo); //true pq todas as const são verdadeiras.