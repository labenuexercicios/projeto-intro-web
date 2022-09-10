//Pense em alguma coisa do cotidiano que seja contável e estruturada. Por enquanto, vamos chamar esta coisa de item. Com esse item, nós vamos construir nossas lógicas e evoluir no projeto através das semanas
// Exemplo: 🎬 Filme
// * Título;
// * Sinopse;
// * Duração em minutos;
// * Ano de Lançamento;
// * Gênero (terror, suspense, ação, comédia etc);
// * É um remake?
// Eu vou esolher Jogos de pc.
// 1. Para o item que você decidiu, pense nas características que são importantes para construí-lo. Vamos usar estas características para definir exemplos destes objetos usando o código.
// Você precisará criar pelo menos:
//   * uma característica String;
//   * uma característica Number;
//   * uma característica Boolean;
// As características escolhidas são o nome, empresa fabricante, ano de lançamento e se tem na Steam

// 2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.

// The Last of Us
// const jogo1 = "The last of us"
// const desenvolvedora1 = "NaughtyDog"
// const lancamento1 = 2013
// const temNaSteam1 = false
// const premios1 = ["Melhor jogo ", "Melhor Audio ", "História ", "Desepenho"]

//Daying Light
// const jogo2 = "Daying Light"
// const desenvolvedora2 = "Techland"
// const lancamento2 = 2015
// const temNaSteam2 = true
// const premios2 = ["Lighting/Texturing ", "Animation ", "Technical"]

//The Witcher 3
// const jogo3 = "The Witcher 3"
// const desenvolvedora3 = "CD PROJEKT RED"
// const lancamento3 = 2016
// const temNaSteam3 = true
// const premios3 = ["Jogo do ano ", "Jogo mais aguardado ", "Melhor RPG"]

// //3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;

// const mediaLancamento = (lancamento1 + lancamento2 + lancamento3) /3
// console.log (mediaLancamento)

// //4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.
// const verifiSteam = temNaSteam1 && temNaSteam2 && temNaSteam3
// console.log(verifiSteam)

// //5. Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.
// //6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
// //6-1. O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo.
// console.log ("Nome do Jogo: " + jogo1.toUpperCase() + "\nDesenvolvedora: " + desenvolvedora1 + "\nLançado em: " + lancamento1 + "\nO jogo esta na steam? " + temNaSteam1 + "\nPremios recebidos pelo jogo: ", premios1)

// console.log ("Nome do Jogo: " + jogo2.toUpperCase() + "\nDesenvolvedora: " + desenvolvedora2 + "\nLançado em: " + lancamento2 + "\nO jogo esta na steam? " + temNaSteam2 + "\nPremios recebidos pelo jogo: ", premios2)

// console.log ("Nome do Jogo: " + jogo3.toUpperCase() + "\nDesenvolvedora: " + desenvolvedora3 + "\nLançado em: " + lancamento3 + "\nO jogo esta na steam? " + temNaSteam3 + "\nPremios recebidos pelo jogo: ",  premios3)

jogo1 = {
  nome: "The last of us",
  desenvolvedora: "NaughtyDog",
  lancamento: 2013,
  temNaSteam: false,
  premios: ["Melhor jogo ", "Melhor Audio ", "História ", "Desepenho"],
};

jogo2 = {
  nome: "Daying Light",
  desenvolvedora: "Techland",
  lancamento: 2015,
  temNaSteam: true,
  premios: ["Lighting/Texturing ", "Animation ", "Technical"],
};

jogo3 = {
  nome: "The Witcher 3",
  desenvolvedora: "CD PROJEKT RED",
  lancamento: 2016,
  temNaSteam: true,
  premios: ["Jogo do ano ", "Jogo mais aguardado ", "Melhor RPG"],
};

let superJogos = [];
//superJogos.push(jogo1, jogo2, jogo3)
if (jogo1.temNaSteam) {
  superJogos.push(jogo1);
} else {
  alert("O jogo " + jogo1.nome + " não tem na steam!");
}
if (jogo2.temNaSteam) {
  superJogos.push(jogo2);
} else {
  alert("O jogo " + jogo2.nome + " não tem na steam!");
}
if (jogo3.temNaSteam) {
  superJogos.push(jogo3);
} else {
  alert("O jogo " + jogo3.nome + " não tem na steam!");
}
 console.log(superJogos)