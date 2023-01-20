//Pense em alguma coisa do cotidiano que seja contável e estruturada. Por enquanto, vamos chamar esta coisa de item. Com esse item, nós vamos construir nossas lógicas e evoluir no projeto através das semanas. Pode ser qualquer coisa que possa ser descrita com características escritas. 


//ITEM 3:

/* Titulo: The Last Of Us
    Nota: 95
    Multiplayer: false
    Duração: 15h
    Desenvoldora: Naugthy Dog
    Genero: Ação, Aventura, Terror

ITEM 2:

    /* Titulo: Red Dead Redemption
    Nota: 95
    Multiplayer: true
    Duração: 18h
    Desenvoldora: Rockstar
    Genero: Mundo Aberto, ação, faroteste

ITEM 3

    /* Titulo: Nier
    Nota: 68
    Multiplayer: false
    Duração: 20h
    Desenvoldora: PlatinumGames
    Genero: Hack and slash, RPG, Drama


ITEM 4


    /* Titulo: Mass Effect 2
    Nota: 94
    Multiplayer: false
    Duração: 25
    Desenvoldora: Bioware
    Genero: RPG, Scifi, Ação

    */
   
//  2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.

// Exemplo:

// const nome1 = "Fulano";
// const idade1 = 33;
// const verificouEmail1 = false;


// const titulo1 = "The Last Of US";
// const nota1 = 95;
// const multiplayer1 = false;
// const duracao1 = "15h"
// const desenvolvedora1 = "Naughty Dog";
// const genero1= "Acao, Aventura, Terror";

// const titulo2 = "Red Dead Redemption";
// const nota2 = 95;
// const multiplayer2 = true;
// const duracao2= "18h"
// const desenvolvedora2 = "Rockstar";
// const genero2= "Acao, mundo aberto, faroeste";

// const titulo3 = "Nier";
// const nota3 = 68;
// const multiplayer3 = false;
// const duracao3="20h"
// const desenvolvedora3 = "PlatinumGames";
// const genero3= "ack and slash, RPG, Drama";

// const titulo4 = "Mass Effect 2";
// const nota4 = 94;
// const multiplayer4 = false;
// const duracao4 ="25h"
// const desenvolvedora4 = "BioWare";
// const genero4 = "RPG, Scifi, Ação";

//Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;


const mediaDasNotas = (nota1 + nota2 + nota3+ nota4)/4

console.log(mediaDasNotas)


//5. Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.



const titulo1 = "The Last Of US";
const nota1 = 95;
const multiplayer1 = false;
const duracao1 = "15h"
const desenvolvedora1 = "Naughty Dog";
const genero1= [Acao, Aventura, Terror]

const titulo2 = "Red Dead Redemption";
const nota2 = 95;
const multiplayer2 = true;
const duracao2= "18h"
const desenvolvedora2 = "Rockstar";
const genero2= [Acao, mundo aberto, faroeste]

const titulo3 = "Nier";
const nota3 = 68;
const multiplayer3 = false;
const duracao3="20h"
const desenvolvedora3 = "PlatinumGames";
const genero3 = [Hack and slash, RPG, Drama]

const titulo4 = "Mass Effect 2";
const nota4 = 94;
const multiplayer4 = false;
const duracao4 ="25h"
const desenvolvedora4 = "BioWare";
const genero4 = [RPG, Scifi, Ação]

// 6. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui

//   1. O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo.


console.log(titulo1.toLocaleUpperCase, nota1, multiplayer1,duracao1, desenvolvedora1,genero1 )

console.log(duracao2.toLocaleUpperCase, nota2, multiplayer2, duracao2, desenvolvedora2, genero2)

console.log(duracao3.toLocaleUpperCase, nota3, multiplayer3, duracao3, desenvolvedora3, genero3)

console.log(duracao4.toLocaleUpperCase, nota4, multiplayer4, duracao4, desenvolvedora4, genero4)