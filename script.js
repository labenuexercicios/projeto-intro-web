// Semana 1
// ------------------
console.log("");
console.log("SEMANA 1");
console.log("");

const Serie = {
  titulo: "",
  totTemporadas: 0,
  genero: [],
  sinopse: "",
  transmissao: [],
  isBrasileira: Boolean,
  anoLancamento: 0,
  thumbnail: "",
};
// --------------------
const greysAnatomy = {
  ...Serie,
  titulo: "greys anatomy",
  totTemporadas: 19,
  genero: ["drama", "ficção medica", "romance", "comedia dramatica"],
  sinopse:
    "Greys Anatomy é uma série de TV americana transmitida originalmente pelo canal American Broadcasting Company (ABC). O drama acompanha a vida pessoal e profissional de estagiários de cirurgia e seus supervisores do Grey Sloan Memorial Hospital, anteriormente conhecido como o Seattle Grace Hospital.",
  transmissao: ["netflix", "amazon", "star plus"],
  isBrasileira: false,
  anoLancamento: 2005,
  thumbnail: "imgs/greysanatomy.webp"
};
// ---------------------------
const laCasaDePapel = {
  ...Serie,
  titulo: "la casa de papel",
  elenco: ["alvaro morte", "alba flores", "miguel herran"],
  totTemporadas: 4,
  sinopse:
    "Oito ladrões se trancam com reféns na Casa da Moeda da Espanha. Seu líder manipula a polícia para realizar um plano que pode ser o maior roubo da história ou uma missão em vão.",
  transmissao: ["netflix"],
  isBrasileira: false,
  anoLancamento: 2017,
  thumbnail: "imgs/laCasaDePapelLogo.png",
};
// ---------------------------
const vikings = {
  ...Serie,
  titulo: "vikings",
  elenco: ["travis fimmel", "clive standen", "gustaf skarsgard"],
  totTemporadas: 6,
  sinopse:
    "A série acompanha a saga dos navegadores nórdicos que exploram - e conquistam - novos territórios nos tempos medievais.",
  transmissao: ["netflix"],
  isBrasileira: false,
  anoLancamento: 2013,
  thumbnail: "imgs/vikings.png",
};

const media =
  (vikings.totTemporadas +
    laCasaDePapel.totTemporadas +
    greysAnatomy.totTemporadas) /
  3;
console.log(`Semana 1, exercicio 3. A media e igual a ${media}`);

if (greysAnatomy.isBrasileira === true) {
  console.log(`Semana 1, exercicio 4. A variavel e verdadeira`);
} else {
  console.log(`Semana 1, exercicio 4. A variavel e falsa`);
}

if (laCasaDePapel.isBrasileira === true) {
  console.log(`Semana 1, exercicio 4. A variavel e verdadeira`);
} else {
  console.log(`Semana 1, exercicio 4. A variavel e falsa`);
}

if (vikings.isBrasileira === true) {
  console.log(`Semana 1, exercicio 4. A variavel e verdadeira`);
} else {
  console.log(`Semana 1, exercicio 4. A variavel e falsa`);
}

// Semana 2
// -----------------------
console.log("");
console.log("SEMANA 2");
console.log("");

greysAnatomy.elenco = ["ellen pompeo", "patrick dempsey", "sandra oh"];
// -------------------------
vikings.elenco = ["guerra", "drama", "ação", "aventura"];
// ------------------------
laCasaDePapel.elenco = ["assalto", "drama", "suspense", "crime"];

// ------------------------

console.log("Semana 2, exercicio 2", greysAnatomy);
// console.log('Semana 2, exercicio 2', vikings);
// console.log('Semana 2, exercicio 2', laCasaDePapel);

const arrayComObjSerie = [];

arrayComObjSerie.push(greysAnatomy);
arrayComObjSerie.push(vikings);
arrayComObjSerie.push(laCasaDePapel);

// Semana 4
console.log("");
console.log("SEMANA 4");
console.log("");

const arrayComObjSerieComVerificacao = [];

if (greysAnatomy.isBrasileira === true) {
  arrayComObjSerieComVerificacao.push(greysAnatomy);
} else {
  console.log(`O objeto ${greysAnatomy.titulo} não foi adicionado`);
}

if (vikings.isBrasileira === true) {
  arrayComObjSerieComVerificacao.push(vikings);
} else {
  console.log(`O objeto ${vikings.titulo} não foi adicionado`);
}

if (laCasaDePapel.isBrasileira === true) {
  arrayComObjSerieComVerificacao.push(laCasaDePapel);
} else {
  console.log(`O objeto ${laCasaDePapel.titulo} não foi adicionado`);
}

// Semana 5
console.log("");
console.log("SEMANA 5");
console.log("");
const propiedadesSerie = [
  "titulo",
  "total de temporadas",
  "genero",
  "sinopse",
  "transmmissão",
  "E uma serie brasileira?",
  "Ano de lançamento",
];

let propiedades = 0;
for (let i = 0; i < arrayComObjSerie.length; i++) {
  console.log(`${propiedadesSerie[0]}: ${arrayComObjSerie[i].titulo}`);
  console.log(`${propiedadesSerie[1]}: ${arrayComObjSerie[i].totTemporadas}`);
  console.log(`${propiedadesSerie[2]}: ${arrayComObjSerie[i].genero}`);
  console.log(`${propiedadesSerie[4]}: ${arrayComObjSerie[i].transmissao}`);
  console.log(`${propiedadesSerie[3]}: ${arrayComObjSerie[i].sinopse}`);
  console.log("");
}

// Semana 6
console.log("");
console.log("Semana 6");
console.log("");

function relatorioObjetos(obj) {
  const dados = `Titulo: ${obj.titulo}.

Total de temporadas: ${obj.totTemporadas}.

genero: ${obj.genero}.

Transmissão: ${obj.transmissao}.

Sinopse: ${obj.sinopse}

`;
  return dados;
}

const teste = relatorioObjetos(greysAnatomy);
console.log(teste);

console.log("");
console.log("Semana 6");
console.log("");

function buscaTitulo(array, str) {
  let objeto = {};
  str = str.toLowerCase();

  for (let i = 0; i < array.length; i++) {
    let obj = {};
    let nome = array[i].titulo.toLowerCase();
    if (nome === str) {
      return (obj = { ...array[i] });
    }
  }
    return alert('Seriado não encontrado')
}

// Semana 11

function addElem(obj){
    const main = document.getElementById('main')
    const section = document.createElement('section')
    const article = document.createElement('article')
    const ul = document.createElement('ul')
    const liTitulo = document.createElement('li')
    const liTotTemporadas = document.createElement('li')
    const liTransmissao = document.createElement('li')
    const liSinopse = document.createElement('li')
    const liGenero = document.createElement('li')
    const figure = document.createElement('figure')
    const thumbnail = document.createElement('img')

    section.setAttribute('class','card')
    thumbnail.setAttribute('class', 'img')
    thumbnail.setAttribute('src', obj.thumbnail)
    ul.setAttribute('class','listaInformacoes')

    main.insertAdjacentElement('beforeend',section)
    section.insertAdjacentElement('beforeend', figure)
    figure.insertAdjacentElement('beforeend', thumbnail)
    section.insertAdjacentElement('beforeend',article)
    article.insertAdjacentElement('beforeend',ul)
    ul.insertAdjacentElement('beforeend',liTitulo)
    ul.insertAdjacentElement('beforeend',liTotTemporadas)
    ul.insertAdjacentElement('beforeend',liGenero)
    ul.insertAdjacentElement('beforeend',liTransmissao)
    ul.insertAdjacentElement('beforeend',liSinopse)

    liTitulo.innerHTML += `Titulo: ${obj.titulo}.`
    liTotTemporadas.innerHTML += `Total de temporadas: ${obj.totTemporadas}.` 
    liGenero.innerHTML += `Generos: ${obj.genero}.`
    liTransmissao.innerHTML += `Onde assistir: ${obj.transmissao}.`
}
addElem(greysAnatomy)
addElem(greysAnatomy)
addElem(greysAnatomy)
addElem(greysAnatomy)
addElem(greysAnatomy)
addElem(greysAnatomy)
addElem(greysAnatomy)
addElem(greysAnatomy)
addElem(greysAnatomy)
addElem(greysAnatomy)
addElem(greysAnatomy)
