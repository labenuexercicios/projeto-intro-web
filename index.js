
let personagens = [

    {
        "nome": "Goku",
        "idade": Number(42),
        "ki": Number(150),
        "poder": true,
        "caracteristicas": (" Coragem", " Resiliência", " Força"),
    },
    {
        "nome": "Vegeta",
        "idade": Number(48),
        "ki": Number(145),
        "poder": true,
        "caracteristicas": (" Agressividade", " Coragem", " Agilidade"),
    },
    {
        "nome": "Gohan",
        "idade": Number(23),
        "ki": Number(130),
        "poder": true,
        "caracteristicas": (" Velocidade", " Coragem", " Força"),
    },
    {
        "nome": "Freeza",
        "idade": Number(70),
        "ki": Number(50),
        "poder": false,
        "caracteristicas": (" Renascimento", " Resistência", " Maldade"),
    }

];


if (personagem1.poder === true && personagem2.poder === true && personagem3.poder === true && personagem4.poder === false) {
    personagens.push(personagem1, personagem2, personagem3, personagem4)
    console.log(personagens)
} else {
    alert("O item não foi adicionado!")
}
