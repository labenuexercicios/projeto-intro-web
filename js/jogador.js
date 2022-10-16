let jogadores = [
    jogador1 = {
        nome: "Patrick Verhon",
        idade: 18,
        capitão: false,
        estadoCidade: ["ES","Serra"],
        imagem:"imagens/PATRICK VERHON.jpg"
    },

    jogador2 = {
        nome: "Patrick de Lucca",
        idade: 22,
        capitão: true,
        estadoCidade: ["SP", "São Paulo"],
        imagem:"https://www.esporteclubebahia.com.br/elenco/patrick-verhon/"
    },

    jogador3 = {
        nome: 'Emerson Santos',
        idade: 30,
        capitão: false,
        estadoCidade: ["BA", "Feira de Santana"],
        imagem:"imagens/EMERSON SANTOS.jpg"
    }
]

lider = []

if (jogador1.capitão == true) {
    lider.push(jogador1) 
} else {
   alert('Patrick Verhon não entrou') 
}
if (jogador2.capitão == true) {
    lider.push(jogador2.nome) 
} else {
  alert('Patrick de Lucca não entrou') 
}
if (jogador3.capitão == true) {
    lider.push(jogador3) 
} else {
  alert('Emerson Santos não entrou') 
}

console.log("o lider é: " + lider);

function chamaJogador(jogador) {
    console.log(jogador.nome)
}

chamaJogador(jogador1);
chamaJogador(jogador2);
chamaJogador(jogador3);

function filtrarJogador(jogadores, valorString) {
    let retornaJogador = {};

    for (let i = 0; i < jogadores.length; i++) {
        if (jogadores[i].nome.toLowerCase() === valorString.toLowerCase()) {

            retornaJogador.nome = jogadores[i].nome;
            retornaJogador.idade = jogadores[i].idade;
            retornaJogador.capitão = jogadores[i].capitão;
            retornaJogador.estadoCidade = jogadores[i].estadoCidade;

            //retornaJogador = {...jogadores[i]};
        }
    }
    if (retornaJogador.nome && retornaJogador.nome.toLowerCase() !== valorString.toLowerCase()) {
        alert("Não encontrei jogador");
    } else {
        return retornaJogador};
}
console.log(filtrarJogador(jogadores, 'emerson santos'));