const pokemon = [
  {
    nome: "bumbasaur",
    nivel: 5,
    tipo: "grama",
    isInicial: true,
    evolução: ["Ivysaur", "Venusaur"],
  },
  {
    nome: "charmander",
    nivel: 5,
    tipo: "fogo",
    isInicial: true,
    evolução: ["Charmeleon", "Charizard"],
  },
  {
    nome: "squirtle",
    nivel: 5,
    tipo: "agua",
    isInicial: true,
    evolução: ["Wartortle", "Blastoise"],
  },
  {
    nome: "Caterpie",
    nivel: 5,
    tipo: "inseto",
    isInicial: false,
    evolução: ["Metapod", "Butterfree"],
  },
];

const pokemonsInicial = [];

for (i in pokemon) {
  // mudar para alert
  pokemon[i].isInicial === true
    ? pokemonsInicial.push(pokemon[i])
    : console.log(`${pokemon[i].nome} não foi adicionado`);
}

console.log('------------------')

for (i in pokemonsInicial) {
  for (evolução in pokemonsInicial[i]) {
    pokemonsInicial[i].evolução = pokemonsInicial[i].evolução.toString();

  }
}

const check = obj => {
  let string = `${obj.nome},${obj.nivel},${obj.tipo},${obj.isInicial},${obj.evolução}`
}

check(pokemonsInicial[0])

const search = (arr, str) => {
  for ( i in arr ) {
    if (arr[i].nome === str.toLowerCase()) {
      console.log(arr[i])
    }
  }
}

search(pokemonsInicial, 'charmander')


// ---------------------------------------

let toTop = document.getElementById("scroll-top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
} 