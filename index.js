//1. Transforme os itens que criamos nas últimas semanas em objetos.

const personagem1 = {
    nome: "Dr. Charles Francis Xavier",
    identidade: "Professor X",
    altura: 1.83,
    generoMasculino: true,
    outrasIdentidades: ["\"X\"", "\"Prisioneiro M-13\"", "\"Acushla\""]
}

const personagem2 = {
    nome: "Natalia Alianovna \"Natasha\" Romanoff",
    identidade: "Black Widow",
    altura: 1.65,
    generoMasculino: false,
    outrasIdentidades: ["\"Natalie Rushman\"", "\"Tatiana Sokova\"", "\"Melina Vostokoff\""]
}

const personagem3 = {
    nome: "T'Challa",
    identidade: "Black Panther",
    altura: 1.83,
    generoMasculino: true,
    outrasIdentidades: ["\"Tigre de carvão\"", "\"Haramu-Sarki\"", "\"Gato do Bairro\""]
}

//2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;

const personagens = []

//3. Adicione os objetos criados no item 1 ao array de objetos criado no item 2, utilizando o push()

// personagens.push(personagem1, personagem2, personagem3)
// console.log(personagens)

//4. Altere o item “Adicione os novos objetos no array de objetos, utilizando o push()” (item 3), para criar uma verificação antes de dar o push. A caraterística booleana do objeto deve ser validada. Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;

const personagensMasculinos = []

if(personagem1.generoMasculino === true){
    personagensMasculinos.push(personagem1)
    alert("Personagem adicionado à lista de personagens masculinos.")
}else{
    alert("Personagem é do gênero feminino e não foi adicionado à lista de personagens.")
}
if(personagem2.generoMasculino === true){
    personagensMasculinos.push(personagem2)
    alert("Personagem adicionado à lista de personagens masculinos.")
}else{
    alert("Personagem é do gênero feminino e não foi adicionado à lista de personagens masculinos.")
}

if(personagem3.generoMasculino === true){
    personagensMasculinos.push(personagem3)
    alert("Personagem adicionado à lista de personagens masculinos.")
}else{
    alert("Personagem é do gênero feminino e não foi adicionado à lista de personagens.")
}

console.log(personagensMasculinos)

//Resolução usando o IF TERNÁRIO

// personagem1.generoMasculino ? personagensMasculinos.push(personagem1) : alert("Personagem é do gênero feminino e não foi adicionado à lista de personagens.")
// personagem2.generoMasculino ? personagensMasculinos.push(personagem2) : alert("Personagem é do gênero feminino e não foi adicionado à lista de personagens.")
// personagem3.generoMasculino ? personagensMasculinos.push(personagem3) : alert("Personagem é do gênero feminino e não foi adicionado à lista de personagens.")

// console.log(personagensMasculinos)

// //3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;
// const mediaAlturas = (altura1 + altura2 + altura3)/3;
// console.log(mediaAlturas);

// //4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.
// const verificaGenerosMasculinos = generoMasculino1 && generoMasculino2 && generoMasculino3;
// console.log(verificaGenerosMasculinos);

// //5. Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.
// //Criado no item 1

// //6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
// console.log(`${nomePersonagem1.toUpperCase()}
// Identidade: ${identidade1}
// Altura: ${altura1} m
// Personagem do gênero masculino? ${generoMasculino1}
// Outras Identidades: ${outrasIdentidades1}

// ${nomePersonagem2.toUpperCase()}
// Identidade: ${identidade2}
// Altura: ${altura2} m
// Personagem do gênero masculino? ${generoMasculino2}
// Outras Identidades: ${outrasIdentidades2}

// ${nomePersonagem3.toUpperCase()}
// Identidade: ${identidade3}
// Altura: ${altura3} m
// Personagem do gênero masculino? ${generoMasculino3}
// Outras Identidades: ${outrasIdentidades3}

// `)

//TESTE