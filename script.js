// Item Escolhido - Pink Floyd

// SEMANA 1
const nomeDaBanda = "Pink Floyd";
const anoDeFormacao = 1964;
const emAtividade = false;
let albuns = ["Wish You Were Here", "Pulse", "The Dark Side of The Moon"];

const album1 = "Wish You Were Here";
const vendasAlbum1 = 40000000;
const albumMaisVendido1 = false;

const album2 = "Pulse";
const vendasAlbum2 = 2500000;
const albumMaisVendido2 = false;

const album3 = "The Dark Side of The Moon";
const vendasAlbum3 = 45000000;
const albumMaisVendido3 = true;

const mediaVendas = (vendasAlbum1 + vendasAlbum2 + vendasAlbum3) / 3;

console.log(
  `A média de vendas dos 3 albuns listados é de ${mediaVendas.toFixed(0)}`
);

console.log(albumMaisVendido1 && albumMaisVendido2 && albumMaisVendido3);

console.log(
  `${nomeDaBanda.toUpperCase().trim()}
  Ano de Formação: ${anoDeFormacao}
  Banda em Atividade? ${emAtividade}
  Albuns Favoritos: ${albuns}`
);

// SEMANA 2

const bandaObjeto = {
  nomeDaBanda: `PINK FLOYD`,
  anoDeFormacao: 1964,
  emAtividade: false,
};

const album1Objeto = {
  nomeAlbum1: "WISH YOU WERE HERE",
  vendasAlbum1: 40000000,
  anoLancamento1: 1975,
  albumMaisVendido1: false,
};

const album2Objeto = {
  nomeAlbum2: "PULSE",
  vendasAlbum2: 2500000,
  anoLancamento2: 1995,
  albumMaisVendido2: false,
};

const album3Objeto = {
  nomeAlbum3: "THE DARK SIDE OF THE MOON",
  vendasAlbum3: 45000000,
  anoLancamento3: 1973,
  albumMaisVendido3: true,
};

const bandaArray = [];

if (emAtividade === false) {
  bandaArray.push(bandaObjeto, album1Objeto, album2Objeto, album3Objeto);
} else {
  alert("O item não foi adicionado ao array");
}

console.log(bandaArray);

// SEMANA 3

let albunsString = "";

const transformandoString = (albuns) => {
  for (let i of albuns) {
    albunsString += i + ", ";
  }
  console.log(albunsString);
};

transformandoString(albuns);

// console.log(
//   `${nomeDaBanda.toUpperCase().trim()}
//   Ano de Formação: ${anoDeFormacao}
//   Banda em Atividade? ${emAtividade}
//   Albuns Favoritos: ${albunsString}`
// );

for (album of bandaArray) {
  for (informacao in album) {
    console.log(`${informacao}: ${album[informacao]}`);
  }
  console.log("------------------------------------");
}

let stringRelatorio = (objeto) => {
  for (y in objeto) {
    console.log(`${y}: ${objeto[y].toString()}`);
  }
};

stringRelatorio(bandaArray[3]);

////////
// const funcaoDeArray = (bandaArray, resultadoString) => {
//   for (let album5 of bandaArray) {
//     if (album5.nomeAlbum === resultadoString.toLowerCase()) {
//       novoArray.push(album5);
//     }
//   }

//   if (novoArray.length === 0) {
//     alert("Item não encontrado.");
//   } else {
//     console.log(novoArray);
//   }
// };

////// SEMANA 6

// function pesquisaAlbum() {
//   let inputPesquisar = document.getElementById("pesquisar");

//   let section1 = document.getElementById("section1");
//   let newSection1 = document.createElement("section");
//   // newSection1 = section1.innerHTML;
//   let img1 = document.getElementById("img1");
//   let newImg1 = document.createElement("img");
//   newImg1.innerHTML = img1.innerHTML;
//   let textContainer1 = document.getElementById("textContainer1");
//   let newTextContainer1 = document.createElement("div");
//   newTextContainer1.innerHTML = textContainer1.innerHTML;

//   let section2 = document.getElementById("section2");
//   let newSection2 = document.createElement("section");
//   // newSection2 = section2.innerHTML;
//   let img2 = document.getElementById("img2");
//   let newImg2 = document.createElement("img");
//   newImg2.innerHTML = img2.innerHTML;
//   let textContainer2 = document.getElementById("textContainer2");
//   let newTextContainer2 = document.createElement("div");
//   newTextContainer2.innerHTML = textContainer2.innerHTML;

//   let section3 = document.getElementById("section3");
//   let newSection3 = document.createElement("section");
//   // newSection3 = section3.innerHTML;
//   let img3 = document.getElementById("img3");
//   let newImg3 = document.createElement("img");
//   newImg3.innerHTML = img3.innerHTML;
//   let textContainer3 = document.getElementById("textContainer3");
//   let newTextContainer3 = document.createElement("div");
//   newTextContainer3.innerHTML = textContainer3.innerHTML;

//   if (inputPesquisar === album1) {
//     newSection1.appendChild(newImg1, newTextContainer1);
//   } else if (inputPesquisar === album2) {
//     newSection2.appendChild(newImg2, newTextContainer2);
//   } else if (inputPesquisar === album3) {
//     newSection3.appendChild(newImg3, newTextContainer3);
//   } else {
//     newSection3.appendChild(newImg3, newTextContainer3);
//   }
// }

function pesquisaAlbum() {
  const inputPesquisar = document.getElementById("pesquisar");

}

// Sei que ficou faltando a parte de colocar os elementos no DOM e de fazer a pesquisa. Sinto que estou defasado de conteúdo com relação a funções e a parte de DOM. 
// Eu ia (está comentado), fazer adicionar os elementos e remover os outros quando fosse pesquisado, mas não ficaria nada funcional, então não fiz.
