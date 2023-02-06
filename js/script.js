const pets = [
{
  nome: "Agnes",
  img: "../acents/imgs/agnes.png",
  idade: 2,
  raca: "Buldogue Francês",
  vacinado: false,
  produtosPet: ["Ração", "Shampoo", "Brinquedos"], //resoluçãoExercicio2
  
},

{
  nome: "Alfrêdo",
  img:'../acents/imgs/alfredo.png',
  idade: 5,
  raca: "Spitz",
  vacinado: true,
  produtosPet: ["Guloseimas", "Petiscos", "Bolinha"],  //resoluçãoExercicio2
  
},

{
  nome: "Bob",
  img:'../acents/imgs/bob.png',
  idade: 1,
  raca: "rottweiler",
  vacinado: true,
  produtosPet: ["Petiscos", " Coleira", "Shampoo"], //resoluçãoExercicio2
  
},

]





// console.log(pets)

const media = (valorPets, valorPets1, valorPets2) => {
    const medias = (valorPets + valorPets1 + valorPets2) / 3
    return `Valor da média é ${medias.toFixed(1)}`
}
// console.log(media(pet.idade, pet1.idade, pet2.idade))



const vacinacao = (vacPet, vacPet1, vacPet2) => {
    const verificacaoVac = vacPet && vacPet1 && vacPet2
    return `Todos os pets estão vacinaos? ${verificacaoVac}`
}
//  console.log(vacinacao(pet.vacinado, pet1.vacinado, pet2.vacinado))




const produtosPet = ["Ração", "Shampoo", "Brinquedos"]
const produtosPet1 = ["Guloseimas", "Petiscos", "Bolinha"]
const produtosPet2 = ["Petiscos", " Coleira", "Shampoo"]




// console.log(`
// Nome: ${pet.nome}
// Idade: ${pet.idade}
// Raça: ${pet.raca}
// Vacinado? ${pet.vacinado}
// Produtos Adquiridos no PetShop: ${pet.produtosPet}
// `)


// console.log(`
// Nome: ${pet1.nome}
// Idade: ${pet1.idade}
// Raça: ${pet1.raca}
// Vacinado? ${pet1.vacinado}
// Produtos Adquiridos no PetShop: ${pet1.produtosPet}
// `)

// console.log(`
// Nome: ${pet2.nome}
// Idade: ${pet2.idade}
// Raça: ${pet2.raca}
// Vacinado? ${pet2.vacinado}
// Produtos Adquiridos no PetShop: ${pet2.produtosPet}
// `)


// let carrinhoDeCompra = ""
// for(let i of pet.produtosPet){
//   carrinhoDeCompra = pet.produtosPet +""
// }

// console.log(`Itens do seu carrinho de compras: ${carrinhoDeCompra}`)
// console.log(typeof carrinhoDeCompra)


const btn = document.getElementById("pesquisa")
const inputText = document.getElementById("text")
const containerPets = document.getElementById("containerPets")
btn.addEventListener("click", (e) => {
  e.preventDefault()
  let filterPets = pets.filter(petsFiltrados => {
    return petsFiltrados.nome.toLowerCase().includes(inputText.value.toLowerCase())
  })
  let html = ""
  for(let i of filterPets ) {
    html += `
    <div class="i">
      <img id="imgCao" src="${i.img}" alt="${i.nome}">
      <h2>Nome: ${i.nome}</h2>
      <h3>Idade: ${i.idade}</h3>
      <h3>Raça: ${i.raca}</h3>
      <p>Vacinado? ${i.vacinado}</p>
      <p>Produtos comprados: ${i.produtosPet}</p>
    </div>
    
    `
  }
  containerPets.innerHTML = html 
})










/*
const inptSearchInput = document.getElementsByClassName("inptSearchInput")[0]

  inptSearchInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter")
*/
