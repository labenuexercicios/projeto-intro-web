// DRAGON BALL PERSONAGENS

// Personagem 01 -------------------------------------------------------------------------------------------

const personagem1 = { 
    nome : "Goku",
    idade : Number(42),
    ki : Number(150),
    poder : true,
    caracteristicas : [" Coragem" , " Resiliência" , " Força"],
}
    // console.log(`Nome do personagem: ${personagem1.nome.toUpperCase()}
    // Idade: ${personagem1.idade} anos
    // Esse personagem tem o KI de: ${personagem1.ki} bilhões
    // Ele é poderoso? ${personagem1.poder}
    // Suas características: ${personagem1.caracteristicas}`)
    

// Personagem 02 -------------------------------------------------------------------------------------------

const personagem2 = { 
    nome : "Vegeta",
    idade : Number(48),
    ki : Number(145),
    poder : true,
    caracteristicas : [" Agressividade" , " Coragem" , " Agilidade"],
}
    // console.log(`Nome do personagem: ${personagem2.nome.toUpperCase()}
    // Idade: ${personagem2.idade} anos
    // Esse personagem tem o KI de: ${personagem2.ki} bilhões
    // Ele é poderoso? ${personagem2.poder}
    // Suas características: ${personagem2.caracteristicas}`)
    

// Personagem 03 -------------------------------------------------------------------------------------------
 
const personagem3 = { 
    nome : "Gohan",
    idade : Number(23),
    ki : Number(130),
    poder : true,
    caracteristicas : [" Velocidade" , " Coragem" , " Força"],
}
    // console.log(`Nome do personagem: ${personagem3.nome.toUpperCase()}
    // Idade: ${personagem3.idade} anos
    // Esse personagem tem o KI de: ${personagem3.ki} bilhões
    // Ele é poderoso? ${personagem3.poder}
    // Suas características: ${personagem3.caracteristicas}`)


// Personagem 04 -------------------------------------------------------------------------------------------

const personagem4 = { 
    nome : "Freeza",
    idade : Number(70),
    ki : Number(50),
    poder : false,
    caracteristicas : [" Renascimento" , " Resistência" , " Maldade"],
}
    // console.log(`Nome do personagem: ${personagem4.nome.toUpperCase()}
    // Idade: ${personagem4.idade} anos
    // Esse personagem tem o KI de: ${personagem4.ki} bilhões
    // Ele é poderoso? ${personagem4.poder}
    // Suas características: ${personagem4.caracteristicas}`)


// Médias dos Personagens -------------------------------------------------------------------------------------

// const idadeMediaPersonagens = (personagem1.idade + personagem2.idade  + personagem3.idade  + personagem4.idade) / 4 
// console.log(`A média de idade entre os personagens é de: ${idadeMediaPersonagens} anos.`)

// const kiMedioPersonagens = (personagem1.ki + personagem2.ki + personagem3.ki + personagem4.ki) / 4
// console.log(`A média do KI entre os personagens é de: ${kiMedioPersonagens} bilhões.`)


// Array vazio ------------------------------------------------------------------------------------------------

const personagens  = []

// Verificações -----------------------------------------------------------------------------------------------

if(personagem1.poder === true && personagem2.poder === true && personagem3.poder === true && personagem4.poder === false){
    personagens.push(personagem1, personagem2, personagem3, personagem4)
    console.log(personagens)
} else {
    alert("O item não foi adicionado!")
}
