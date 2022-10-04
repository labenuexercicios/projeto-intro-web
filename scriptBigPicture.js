const containerModal = document.getElementsByClassName("container-modal");
const modal = document.getElementsByClassName("modal")

const bigPicture = (event) => {
    modal[0].classList.toggle("closed")
    modal[0].classList.toggle("open")
    const pokeNomeTarget = pokemonsInicial.filter(poke => poke.nome === event.target.alt)
    modalHtml(pokeNomeTarget)    
    modalHtml(pokeNomeTarget)    
    modalHtml(pokeNomeTarget)   
}

const closeModal = () => {
    modal[0].classList.toggle("closed")
    modal[0].classList.toggle("open")

}

let num = 0 
const createModal = () => {

    const newArticleModal = document.createElement("article");
    newArticleModal.classList.add(`articlePokemon${num}`)

    const createPokeName = document.createElement("p")
    createPokeName.classList.add(`pokeNome`)
    createPokeName.classList.add(`${num}`)

    const newImgModal = document.createElement("img")
    newImgModal.src = ""
    newImgModal.classList.add("imgModal")

    const createPokeType = document.createElement("p")
    createPokeType.classList.add("pokeTipo")
  
    newArticleModal.appendChild(createPokeName);
    newArticleModal.appendChild(newImgModal);
    newArticleModal.appendChild(createPokeType);
  
    containerModal[0].insertAdjacentElement("beforeend", newArticleModal)
    num++
}  

createModal()
createModal()
createModal()

const pokeNome = document.getElementsByClassName("pokeNome")
const pokeType = document.getElementsByClassName("pokeTipo")
const pokeImg = document.getElementsByClassName("imgModal")

const modalHtml = (pokeTarget) => {

      containerModal[0].style.backgroundColor = "rgb(138, 43, 226)";
      pokeNome[0].innerHTML = pokeTarget[0].nome;
      pokeNome[1].innerHTML = pokeTarget[0].evolucao.split(",")[0];
      pokeNome[2].innerHTML = pokeTarget[0].evolucao.split(",")[1];
      for (let i = 0; i < 3; i++) {
          pokeType[i].innerHTML = `${pokeTarget[0].tipo}`;
          pokeType[i].style.backgroundColor = "rgb(169, 108, 226)";
        }
        pokeImg[0].src = `${pokeTarget[0].image}`;
        pokeImg[1].src = `${pokeTarget[0].imageEvolution1}`;
        pokeImg[2].src = `${pokeTarget[0].imageEvolution2}`;
}