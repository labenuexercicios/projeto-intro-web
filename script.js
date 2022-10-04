const pokemonPadrao = [
  {
    nome: "Bumbasaur",
    nivel: 5,
    tipo: "grama",
    isInicial: true,
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    imageEvolution1: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
    imageEvolution2: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
    evolucao: ["Ivysaur", "Venusaur"],
  },
];

let pokemon = [...pokemonPadrao, 
  {
    ...pokemonPadrao[0],
      nome: "Charmander",
      tipo: "fogo",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
      imageEvolution1: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
      imageEvolution2: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
      evolucao: ["Charmeleon", "Charizard"],
    },
    {
      ...pokemonPadrao[0],
      nome: "Squirtle",
      tipo: "agua",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
      imageEvolution1: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
      imageEvolution2: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
      evolucao: ["Wartortle", "Blastoise"],
    },
    {
      ...pokemonPadrao[0],
      nome: "Caterpie",
      tipo: "inseto",
      isInicial: true,
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
      imageEvolution1: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png",
      imageEvolution2: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
      evolucao: ["Metapod", "Butterfree"],
    },
    {
      ...pokemonPadrao[0],
      nome: 'Chikorita',
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png",
      imageEvolution1: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/153.png",
      imageEvolution2: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/154.png",
      evolucao: ["Bayleef", "Meganium"]
    },
    {
      ...pokemonPadrao[0],
      nome: 'Cyndaquil',
      tipo: "fogo",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png",
      imageEvolution1: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/156.png",
      imageEvolution2: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/157.png",
      evolucao: ["Quilava", "Typhlosion"]
    },
    {
      ...pokemonPadrao[0],
      nome: 'Totodile',
      tipo: "agua",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png",
      imageEvolution1: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/159.png",
      imageEvolution2: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/160.png",
      evolucao: ["Croconaw", "Feraligatr"]
    },
    {
      ...pokemonPadrao[0],
      nome: 'Abra',
      tipo: "psiquico",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png",
      imageEvolution1: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/064.png",
      imageEvolution2: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png",
      evolucao: ["kadabra", "Alakazan"]
    },
    {
      ...pokemonPadrao[0],
      nome: 'Nidorina',
      tipo: "normal",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png",
      imageEvolution1: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png",
      imageEvolution2: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png",
      evolucao: ["Nidoran", "Nidoqueen"]
    }
]

const pokemonsInicial = [];

for (i in pokemon) {
  // mudar para alert
  if (pokemon[i].isInicial === true) {
    pokemonsInicial.push(pokemon[i])
  } 
}

for (i in pokemonsInicial) {
  for (evolucao in pokemonsInicial[i]) {
    pokemonsInicial[i].evolucao = pokemonsInicial[i].evolucao.toString();

  }
}

// const check = obj => {
//   let string = `${obj.nome},${obj.nivel},${obj.tipo},${obj.isInicial},${obj.evolucao}`
// }