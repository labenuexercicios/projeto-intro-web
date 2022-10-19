
/*Pense em alguma coisa do cotidiano que seja contável e estruturada. Por enquanto, vamos chamar esta coisa de item. Com esse item, nós vamos construir nossas lógicas e evoluir no projeto de inclusão através das semanas. Pode ser qualquer coisa que possa ser descrita com características escritas.*/ 

/*1. Para o item que você decidiu, pense nas características que são importantes para construí-lo. Vamos usar estas características para definir exemplos destes objetos usando o código.
Você precisará criar pelo menos:*/
 //* uma característica String;/*
//Lista de praias com acessibilidade para PCDs
//Praia 1
const Praia1 = "PRAIA - PITANGUEIRAS"
//* uma característica Number;
const AnodeImplante  = Number(2011)
//* uma característica Boolean;
const acessibilidade = Praia1 === "PRAIA - PITANGUEIRAS"
const diasdoAcontecimento = ["Quinta-feira", " sexta-feira", " sábado", "domingo"]
console.log(`${Praia1}\nLocalizada em: Guarujá - São Paulo  \nAno de implante do programa: ${AnodeImplante}\nA praia de Pitangueiras é acessível a PCDs? ${acessibilidade}, \nDias de funcionamento: ${diasdoAcontecimento} \nObservação: Os monitores do projeto de inclusão levam os cadeirantes de 30 em 30 minutos para o mar.  A cadeira antifibra é especial, pois não afunda na áreia e é flutuante.`) 
    

/*2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.*/

//Praia 2
//* uma característica String;/*
const Praia2 = "PRAIA - BOA VIAGEM"
//* uma característica Number;
const AnodeImplante2  = Number(2013)
//* uma característica Boolean;
const acessibilidade2 = Praia2 === "PRAIA - BOA VIAGEM"
const diasdoAcontecimento2 = ["Segunda-feira", " terça-feira", " quarta-feira", " Quinta-feira", " sexta-feira", " sábado", " domingo" ]

console.log(`${Praia2}\nLocalizada em: Recife - Pernambuco  \nAno de implante do programa: ${AnodeImplante2}\nA praia de Boa Viagem é acessível a PCDs? ${acessibilidade2}, \nDias de funcionamento: ${diasdoAcontecimento2} \nObservação: Os monitores do projeto de inclusão levam os cadeirantes para banhos de mar com cadeiras anfíbias, a gestão do projeto de inclusão é feita pela prefeitura de Reciife com o Centro Universitário que fornece monitores do curso de Ed. Física. A cadeira antifibra é especial, pois não afunda na áreia e é flutuante.`)



//Praia 3
//* uma característica String;/*
const Praia3 = "PRAIA - CAMBURI"
//* uma característica Number;
const AnodeImplante3  = Number(2017)
//* uma característica Boolean;
const acessibilidade3 = Praia3 === "PRAIA - CAMBURI"
const diasdoAcontecimento3 = ["Quinta-feira", " sexta-feira", " sábado", " domingo"]
console.log(`${Praia3}\nLocalizada em: Vitória - Espirito Santo  \nAno de implante do programa: ${AnodeImplante3}\nA praia de Camburi é acessível a PCDs? ${acessibilidade3}\nDias de funcionamento: ${diasdoAcontecimento3} \nObservação: Profissionais da prefeitura ficam em uma tenda instalada no locall auxiliando e orientando as pessoas com deficiência para que tenham um lazer seguro. A cadeira antifibra é especial, pois não afunda na áreia e é flutuante.`)

//A média deve ser igual á somas dos itens, dividida pelo total de itens
const médiaTodos = ( AnodeImplante + AnodeImplante2 + AnodeImplante3) / 3
//Com um console.log imprima o resultado 
console.log("Média =", médiaTodos) 