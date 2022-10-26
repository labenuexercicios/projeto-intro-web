/*Pense em alguma coisa do cotidiano que seja contável e estruturada. 
Por enquanto, vamos chamar esta coisa de item. Com esse item, nós vamos 
construir nossas lógicas e evoluir no projeto através das semanas. 
Pode ser qualquer coisa que possa ser descrita com características 
escritas.

1. Para o item que você decidiu, pense nas características 
que são importantes para construí-lo. 
Vamos usar estas características para definir exemplos destes objetos 
usando o código.
Você precisará criar pelo menos:
  * uma característica String;
  * uma característica Number;
  * uma característica Boolean;
 
2. Agora, crie três conjuntos de variáveis utilizando as características 
que você definiu acima. Lembre-se que deve ser o mesmo tipo de item, 
com três conjuntos de dados diferentes.  */

const nome1 = `Beetlejuice - Os Fantasmas se divertem`;
const tempo1 = 92;
const temJohnnyDepp1 = false; 


const nome2 = `Batman`;
const tempo2 = 126;
const temJohnnyDepp2 = false;


const nome3 = `Edward mãos de tesoura`;
const tempo3 = 105;
const temJohnnyDepp3 = true;


/*3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. 
Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;*/

const tempoMedio = (tempo1+tempo2+tempo3)/3;

console.log(tempoMedio)

/*4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos 
os valores de variáveis booleanas criadas até aqui são verdadeiras.*/

let temJohnnyDepp = temJohnnyDepp1 && temJohnnyDepp2 && temJohnnyDepp3;

console.log(temJohnnyDepp)

/*5. Crie pelo menos mais uma característica para o item que você criou. 
Esta característica deve ser um array. Mantenha o tipo de dado do array 
criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.*/

const elenco1 = [`Michael Keaton`, ` Winona Ryder`, ` Alec Baldwin`, ` Geena Davis`]
const elenco2 = [`Michael Keaton`, ` Jack Nicholson`, ` Pat Hingle`, ` Michael Gough`]
const elenco3 = [`Winona Ryder`, ` Johnny Depp`, ` Dianne Wiest`, ` Kathy Baker`]

/* 6.Exiba um relatório utilizando console.log(), mostrando todos os dados de 
cada um dos itens criados até aqui    a.O log deve exibir o dado de nome, título 
ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo.*/

console.log(`Nome do filme: ${nome1}\nDuração: ${tempo1}\nTem o Johnny Depp no Elenco? ${temJohnnyDepp1}\nElenco: ${elenco1}`)
console.log(`Nome do filme: ${nome2}\nDuração: ${tempo2}\nTem o Johnny Depp no Elenco? ${temJohnnyDepp2}\nElenco: ${elenco2}`)
console.log(`Nome do filme: ${nome3}\nDuração: ${tempo3}\nTem o Johnny Depp no Elenco? ${temJohnnyDepp3}\nElenco: ${elenco3}`)

