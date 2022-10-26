/*



SEMANA 1 




Pense em alguma coisa do cotidiano que seja contável e estruturada. 
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
com três conjuntos de dados diferentes. 

const nome1 = `Beetlejuice - Os Fantasmas se divertem`;
const tempo1 = 92;
const temJohnnyDepp1 = false; 

const nome2 = `Batman`;
const tempo2 = 126;
const temJohnnyDepp2 = false;

const nome3 = `Edward mãos de tesoura`;
const tempo3 = 105;
const temJohnnyDepp3 = true;

3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. 
Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;

const tempoMedio = (tempo1+tempo2+tempo3)/3;

console.log(tempoMedio)

/*4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos 
os valores de variáveis booleanas criadas até aqui são verdadeiras.

let temJohnnyDepp = temJohnnyDepp1 && temJohnnyDepp2 && temJohnnyDepp3;

console.log(temJohnnyDepp)

/*5. Crie pelo menos mais uma característica para o item que você criou. 
Esta característica deve ser um array. Mantenha o tipo de dado do array 
criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.

const elenco1 = [`Michael Keaton`, ` Winona Ryder`, ` Alec Baldwin`, ` Geena Davis`]
const elenco2 = [`Michael Keaton`, ` Jack Nicholson`, ` Pat Hingle`, ` Michael Gough`]
const elenco3 = [`Winona Ryder`, ` Johnny Depp`, ` Dianne Wiest`, ` Kathy Baker`]

/* 6.Exiba um relatório utilizando console.log(), mostrando todos os dados de 
cada um dos itens criados até aqui    a.O log deve exibir o dado de nome, título 
ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo.

console.log(`Nome do filme: ${nome1}\nDuração: ${tempo1}\nTem o Johnny Depp no Elenco? ${temJohnnyDepp1}\nElenco: ${elenco1}`)
console.log(`Nome do filme: ${nome2}\nDuração: ${tempo2}\nTem o Johnny Depp no Elenco? ${temJohnnyDepp2}\nElenco: ${elenco2}`)
console.log(`Nome do filme: ${nome3}\nDuração: ${tempo3}\nTem o Johnny Depp no Elenco? ${temJohnnyDepp3}\nElenco: ${elenco3}`)





SEMANA 2 
*/



//1. Transforme os itens que criamos nas últimas semanas em objetos.

filme1 = {
    nome: `Beetlejuice - Os Fantasmas se divertem`,
    tempo: 92,
    temJohnnyDepp: false,
    elenco: [`Michael Keaton`, ` Winona Ryder`, ` Alec Baldwin`, ` Geena Davis`]
}

filme2 = {
    nome: `Batman`,
    tempo: 126,
    temJohnnyDepp: false,
    elenco: [`Michael Keaton`, ` Jack Nicholson`, ` Pat Hingle`, ` Michael Gough`]
}

filme3 = {
    nome: `Edward mãos de tesoura`,
    tempo: 105,
    temJohnnyDepp: true,
    elenco: [`Winona Ryder`, ` Johnny Depp`, ` Dianne Wiest`, ` Kathy Baker`]
}

//2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;

let filmesTimBurton = []

//3. Adicione os objetos criados no item 1 ao array de objetos criado no item 2, utilizando o push()

// filmesTimBurton.push(filme1, filme2, filme3)

/*4. Altere o item 3 “Adicione os novos objetos no array de objetos, 
utilizando o push()”, para criar uma verificação antes de dar o push. 
A caraterística booleana do objeto deve ser validada. 
Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;



if (filme1.temJohnnyDepp === true){
  filmesTimBurton.push(filme1);
} 

if (filme2.temJohnnyDepp === true){
  filmesTimBurton.push(filme2);
} 

if (filme3.temJohnnyDepp === true){
  filmesTimBurton.push(filme3);
}


5. Crie uma condição else, que, em caso de valor false na condição acima, exiba um **ALERT** 
avisando para o usuário que o item não foi adicionado, e não faça o push*/

if (filme1.temJohnnyDepp === true){
  filmesTimBurton.push(filme1);
} else{
  alert(`O filme ${filme1.nome} não tem o ator Johnny Depp`)
}

if (filme2.temJohnnyDepp === true){
  filmesTimBurton.push(filme2);
} else{
  alert(`O filme ${filme2.nome} não tem o ator Johnny Depp`)
}

if (filme3.temJohnnyDepp === true){
  filmesTimBurton.push(filme3);
} else{
  alert(`O filme: ${filme3.nome} não tem o ator Johnny Depp`)
}

console.log(filmesTimBurton)
