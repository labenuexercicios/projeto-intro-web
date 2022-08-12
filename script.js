const personagem1 = {
  nome: "Harry Potter",
  altura: 1.82,
  casa: " Grifinória",
  bruxo: true,
  amigos: ['Rony', 'Hermione']
};

const personagem2 = {
  nome: "Alvo Dumbledore",
  altura: 1.80,
  casa: "Grifinória",
  bruxo: true,
  amigos: ['Nicolas Flamel', 'Albeforth']
};

const personagem3 = {
  nome: "Hermione Granger",
  altura: 1.67,
  casa: "Grifinória",
  bruxo: true,
  amigos: ['Harry', 'Rony']
};

const personagem4 = {
  nome: "Rony Weasley",
  altura: 1.87,
  casa: "Grifinória",
  bruxo: true,
  amigos: ['harry', 'Hermione']
};

const personagem5 = {
  nome: "Luna Lovegood",
  altura: 1.58,
  casa: "Corvinal",
  bruxo: true,
  amigos: ['Gina', 'Neville']
};

const personagem6 = {
  nome: "Severo Snape",
  altura: 1.85,
  casa: "Sonserina",
  bruxo: true,
  amigos: ['Lilian', 'Belatriz']
};

const personagem7 = {
  nome: "Tom Riddle",
  altura: 1.80,
  casa: "Sonserina",
  bruxo: true,
  amigos: ['Belatriz', 'Lucius Malfoy']
};

const personagem8 = {
  nome: "Newton Scamander",
  altura: 1.88,
  casa: "Lufa-Lufa",
  bruxo: true,
  amigos: ['Jacob', 'Tina']
};

/*Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log.
Guarde este valor em uma const
const somaAltura = (altura1 + altura2 + altura3 + altura4 + altura5 + altura6 + altura7 + altura8) / 8;
console.log(somaAltura)

Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas
criadas até aqui são verdadeiras.

const verifSeBruxo = bruxo1 && bruxo2 && bruxo3 && bruxo4 && bruxo5 && bruxo6 && bruxo7 && bruxo8;
console.log(verifSeBruxo); //true pq todas as const são verdadeiras.

//Semana 2
/*1. Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.
2. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
  1. O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo.
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
console.log(relatorio8);*/

//semana 3 transformar as constantes em objetos, crir um array e colocar os objetos por push:

const bruxosHP = [];
if(personagem1.bruxo){
  bruxosHP.push(personagem1);
}else{
  alert("Personagem não adicionado pois não é bruxo")
}

if(personagem2.bruxo){
  bruxosHP.push(personagem2);
}else{
  alert("Personagem não adicionado pois não é bruxo")
};

if(personagem3.bruxo){
  bruxosHP.push(personagem3);
}else{
  alert("Personagem não adicionado pois não é bruxo")
};
if(personagem4.bruxo){
  bruxosHP.push(personagem4);
}else{
  alert("Personagem não adicionado pois não é bruxo")
};
if(personagem5.bruxo){
  bruxosHP.push(personagem5);
}else{
  alert("Personagem não adicionado pois não é bruxo")
};
if(personagem6.bruxo){
  bruxosHP.push(personagem6);
}else{
  alert("Personagem não adicionado pois não é bruxo")
};
if(personagem7.bruxo){
  bruxosHP.push(personagem7);
}else{
  alert("Personagem não adicionado pois não é bruxo")
};
if(personagem8.bruxo){
  bruxosHP.push(personagem8);
}else{
  alert("Personagem não adicionado pois não é bruxo")
};
console.log(bruxosHP)