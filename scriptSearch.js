// pega o valor de input e apaga todos os pokemons que não tenham o msm nome, add a função que reseta todos os pokemons
const pokemonSection = document.getElementsByClassName("pokeSection");

const filterElement = (pokemonFilter) => {
  for ( i in pokemonsInicial) {
    if (pokemonsInicial[i].nome !== pokemonFilter) {
      pokemonSection[i].style.display = "none"; 
    }
  }
}

const reset = () => {
  for ( i in pokemonsInicial) {
      pokemonSection[i].style.display = "flex"; 
  }
}

const search = () => {
  const searchPokemon = document.getElementById('buscar')

  for ( i in pokemon ) {
    if (pokemon[i].nome.toLowerCase() === searchPokemon.value.toLowerCase()) {
      filterElement(pokemon[i].nome)
    } 
  }
}