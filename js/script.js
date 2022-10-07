function imprimaPokemon(pokemon) {
    const prev = []
    const next = []
    if (pokemon.prev_evolution != null) {
        pokemon.prev_evolution.map(
            p => {
                prev.push(p.name)
            }
        )
    }
    if (pokemon.next_evolution != null) {

        pokemon.next_evolution.forEach(
            p => {
                next.push(p.name)
            }
        )
    }

    console.log(`numero: ${pokemon.num} \nnome: ${pokemon.name} \ntipo: ${pokemon.type} \npre-evolução: ${prev.join(", ")} \nproxima-evolução: ${next.join(", ")} \nFraquesa: ${pokemon.weaknesses.join(", ")}`)

    console.log("=".repeat(50))

}
function imprimaPokemons(pokemons) {
    if (pokemons.length !== 0) {
        pokemons.map(
            pokemon => {
                imprimaPokemon(pokemon)
            }
        )
    }
}
function filtraPoker(nome, pokemons) {
    let filterpoke = pokemons.filter(
        pokemon => {
            return pokemon.name.toUpperCase().includes(nome.toUpperCase()) || pokemon.num.toUpperCase().includes(nome.toUpperCase()) || pokemon.type[0].toUpperCase().includes(nome.toUpperCase())

        }
    )
    return filterpoke
}
const poke_container = document.getElementById('poke-container')

const createPokemonCard = (pokemon) => {
    // console.log(pokemon)
    const pokemonEl = document.createElement('section')
    pokemonEl.classList.add('pokemon')
    pokemonEl.classList.add(pokemon.type[0].toLowerCase())
    
    const pokemonInnerHTML = `
<figure class="img-container">
    <img src=${pokemon.img} alt="${pokemon.name}">
</figure>
<article class="info">
    <span class="number">#${pokemon.num}</span>
    <h3 class="name">${pokemon.name}</h3>
    <small class="type">Tipo: <span>${pokemon.type.join(", ")}</span> </small><br/>

</article>`
    pokemonEl.innerHTML = pokemonInnerHTML
    poke_container.appendChild(pokemonEl)
}

function imprimirCard(pokemons) {
    pokemons.map(pokemon => {
        createPokemonCard(pokemon)
    })
}


function pesquisa() {
    while (poke_container.firstChild) {
        poke_container.removeChild(poke_container.firstChild);
    }
    const pesquisaPoke = document.getElementById("BuscaPok").value;

    let filterPoke = filtraPoker(pesquisaPoke, pokemons)

    if (filterPoke.length === 0) {
        const pokemonEl = document.createElement('section')
        const pokemonInnerHTML = `<article class="info"><h1>Pokemon não encontrado</h1></article>`
        pokemonEl.innerHTML = pokemonInnerHTML
        poke_container.appendChild(pokemonEl)
    } else {
        imprimirCard(filterPoke)
    }
}
imprimirCard(pokemons)


