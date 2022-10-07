// cria os pokemons equivalente ao numero de pokemons no obj e dps add as informações
let i = 0;

const createContainer = () => {
  const container = document.getElementById("section-article");
  
  const newArticle = document.createElement("article");
  newArticle.classList.add("pokeSection");
  
  const newImg = document.createElement("img");
  newImg.addEventListener("click", bigPicture);
  newImg.style.width = "20%";
  newImg.setAttribute('id', `${pokemonsInicial[i].nome}`)
  newImg.src = `${pokemonsInicial[i].image}`;
  i++;
  
  newArticle.appendChild(newImg);
  
  const newDiv = document.createElement("div");
  
  const newH2 = document.createElement("h2");
  newH2.classList.add("pokeNameSection");
  
  const newP1 = document.createElement("p");
  newP1.classList.add("lv");
  
  const newP2 = document.createElement("p");
  newP2.classList.add("evolução");
  
  newDiv.appendChild(newH2);
  newDiv.appendChild(newP1);
  newDiv.appendChild(newP2);
  
  newArticle.appendChild(newDiv);
  
  container.insertAdjacentElement("beforeend", newArticle);
};

const AddHtm = () => {
  const pokemonNameSection = document.getElementsByClassName("pokeNameSection");
  const pokeLv = document.getElementsByClassName("lv");
  const pokeEvolution = document.getElementsByClassName("evolução");

  for (i in pokemonsInicial) {
    for (evolucao in pokemonsInicial[i]) {
      pokemonsInicial[i].evolucao = pokemonsInicial[i].evolucao.toString()
    }
  }  

  for (i in pokemonsInicial) {
    pokemonNameSection[i].innerHTML = pokemonsInicial[i].nome;
    pokeLv[i].innerHTML = `Nível ${pokemonsInicial[i].nivel}`;
    pokeEvolution[i].innerHTML = `Evoluções: ${
      pokemonsInicial[i].evolucao.split(",")[0]
    }, ${pokemonsInicial[i].evolucao.split(",")[1]}`;
  }
};

for (i in pokemonsInicial) {
  createContainer();
}

AddHtm()