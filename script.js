// Item Escolhido - Pink Floyd

// SEMANA 1
const nomeDaBanda = "Pink Floyd";
const anoDeFormacao = 1964;
const emAtividade = false;
const albuns = ["Wish You Were Here", "Pulse", "The Dark Side of The Moon"];

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

console.log(albumMaisVendido1 && albumMaisVendido2 && albumMaisVendido3);

console.log(
  `${nomeDaBanda.toUpperCase().trim()}
  Ano de Formação: ${anoDeFormacao}
  Banda em Atividade? ${emAtividade}
  Albuns Favoritos: ${albuns}`
);

// SEMANA 2

const bandaObjeto = {
  nomeDaBanda: `Pink Floyd`,
  anoDeFormacao: 1964,
  emAtividade: false,
};

const album1Objeto = {
  album1: "Wish You Were Here",
  vendasAlbum1: 40000000,
  albumMaisVendido: false,
};

const album2Objeto = {
  album1: "Pulse",
  vendasAlbum1: 2500000,
  albumMaisVendido: false,
};

const album3Objeto = {
  album1: "The Dark Side of The Moon",
  vendasAlbum1: 45000000,
  albumMaisVendido: true,
};

const bandaArray = [];

if (emAtividade === true) {
  bandaArray.push(bandaObjeto, album1Objeto, album2Objeto, album3Objeto);
} else {
  alert("O item não foi adicionado ao array");
}

console.log(bandaArray);
