const arrayJogadores = [
  {
    nome: "messi",
    idade: 35,
    país: "argentina",
    ganhouCopa: false,
    times: "barcelona,psg",
  },

  {
    nome: "neymar",
    idade: 30,
    país: "brasil",
    ganhouCopa: false,
    times: "santos,barcelona,psg",
  },

  {
    nome: "mbappé",
    idade: 23,
    país: "frança",
    ganhouCopa: true,
    times: "monaco,psg",
  },
];

// const media = (idade1 + idade2 + idade3) / 3

// console.log(media)

// const ganhouCopa = ganhouCopa1 && ganhouCopa2 && ganhouCopa3

// console.log(ganhouCopa)

// console.log(`${nome1.toLocaleUpperCase()}\n ${idade1}\n ${ganhouCopa1}\n ${times1}`)
// console.log(`${nome2.toLocaleUpperCase()}\n ${idade2}\n ${ganhouCopa2}\n ${times2}`)
// console.log(`${nome3.toLocaleUpperCase()}\n ${idade3}\n ${ganhouCopa3}\n ${times3}`)

// const jogadores = [];

// if (jogador1.ganhouCopa === true) {
//   jogadores.push(jogador1);
// } else {
//   alert("MESSI NÃO GANHOU COPA ENTÃO NÃO SERÁ ADICIONADO");
// }
// if (jogador2.ganhouCopa === true) {
//   jogadores.push(jogador2);
// } else {
//   alert("NEYMAR NÃO GANHOU COPA ENTÃO NÃO SERÁ ADICIONADO");
// }
// if (jogador3.ganhouCopa === true) {
//   jogadores.push(jogador3);
// } else {
//   alert("MBAPPÉ NÃO GANHOU COPA ENTÃO NÃO SERÁ ADICIONADO");
// }

// console.log(jogadores);

for (let jogadores1 in arrayJogadores) {
  console.log(`${arrayJogadores[jogadores1].nome}
  ${arrayJogadores[jogadores1].idade}
  ${arrayJogadores[jogadores1].país}
  ${arrayJogadores[jogadores1].ganhouCopa}
  ${arrayJogadores[jogadores1].times}`);
}

function pesquisa() {
  let input = document.getElementById('meu-input').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName('jog');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display='none';
      }
      else {
          x[i].style.display=''; 
      }
  }  
}
