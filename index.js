// seletor de nome, id, imagem etc...

const pokemonName = document.querySelector('.pokemon__name'); // Variavel de procura entre HTML e JS por nome
const pokemonNumber = document.querySelector('.pokemon__number');// Variavel de procura entre HTML e JS por id
const pokemonImage = document.querySelector('.pokemon__image'); // Variavel de procura entre HTML e JS por img auto troca na pesquiza

const form = document.querySelector('.form'); // formulario
const input = document.querySelector('.input__search'); // Pesquiza Input
const buttonPrev = document.querySelector('.btn-prev'); //Botão Retroceder
const buttonNext = document.querySelector('.btn-next'); // Botão Next

let searchPokemon = 1; //Inicio da Pokédex, começa a apartir do 1 pokémon, Let pois muda constantemente


// ligação do trabalho com API
const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`); //Servidor API

  if (APIResponse.status === 200) {
    const data = await APIResponse.json();
    return data;
  }
}

//Função de Procura dentro do servidor "API"
const renderPokemon = async (pokemon) => {

  pokemonName.innerHTML = 'Carregando...';//mensagem de carregando pesquiza
  pokemonNumber.innerHTML = '';

  const data = await fetchPokemon(pokemon);

  if (data) {
    pokemonImage.style.display = 'block';
    pokemonName.innerHTML = data.name; // avança ou retrocedo apartir do nome do pokemon pesquizado na tela
    pokemonNumber.innerHTML = data.id; // avança ou retrocedo apartir da Id do pokemon pesquizado na tela
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    input.value = '';
    searchPokemon = data.id; //Procura dentro da API o pokemon por ID
  } else {
    pokemonImage.style.display = 'none'; // esconder a imgem caso nao ache o pokémon
    pokemonName.innerHTML = 'Falha na Pokédex - ';//mensagem de que nao tem esse pokémon disponivel
    pokemonNumber.innerHTML = ''; //ao pesquizar auto apaga dentro do botao de pesquiza
  }
}
 //Eventos de pesquiza
form.addEventListener('submit', (event) => {
  event.preventDefault();
  renderPokemon(input.value.toLowerCase());
});


//evento de click do votao PREV
buttonPrev.addEventListener('click', () => {
  if (searchPokemon > 1) {
    searchPokemon -= 1; //ao cliecar em Prev ele retorna um numero anterior
    renderPokemon(searchPokemon);
  }
});

//evento de click do votao Next
buttonNext.addEventListener('click', () => {
  searchPokemon += 1; // a cada click adiciona +1, se coloca 2 pula de 2 em 2 pokemon
  renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon);