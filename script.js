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
  linkTitulo: "",
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
  thumbnail: "imgs/greysanatomy.webp",
  linkTitulo: "https://pt.wikipedia.org/wiki/Grey%27s_Anatomy",
};
// ---------------------------
const laCasaDePapel = {
  ...Serie,
  titulo: "la casa de papel",
  elenco: ["alvaro morte", "alba flores", "miguel herran"],
  totTemporadas: 4,
  genero: ["assalto", "drama", "suspense", "crime"],
  sinopse:
    "Oito ladrões se trancam com reféns na Casa da Moeda da Espanha. Seu líder manipula a polícia para realizar um plano que pode ser o maior roubo da história ou uma missão em vão.",
  transmissao: ["netflix"],
  isBrasileira: false,
  anoLancamento: 2017,
  thumbnail: "imgs/laCasaDePapelLogo.png",
  linkTitulo: "https://pt.wikipedia.org/wiki/La_casa_de_papel",
};
// ---------------------------
const vikings = {
  ...Serie,
  titulo: "vikings",
  elenco: ["travis fimmel", "clive standen", "gustaf skarsgard"],
  totTemporadas: 6,
  genero: ["guerra", "drama", "obra de epoca", "aventura"],
  sinopse:
    "A série acompanha a saga dos navegadores nórdicos que exploram - e conquistam - novos territórios nos tempos medievais.",
  transmissao: ["netflix"],
  isBrasileira: false,
  anoLancamento: 2013,
  thumbnail: "imgs/vikings.png",
  linkTitulo:
    "https://pt.wikipedia.org/wiki/Vikings_(s%C3%A9rie_de_televis%C3%A3o)",
};
// ---------------------------
const lost = {
  ...Serie,
  titulo: "lost",
  elenco: ["Jorge garcia", "Matthew Fox", "Evangeline Lily"],
  totTemporadas: 6,
  genero: ["guerra", "drama", "obra de epoca", "aventura"],
  sinopse:
    "Os sobreviventes de um voo que estava milhas fora do curso caem em uma ilha que abriga um sistema de segurança monstruoso, uma série de abrigos subterrâneos e um grupo de sobrevivencialistas violentos escondidos nas sombras.",
  transmissao: ["globoplay", "star+"],
  isBrasileira: false,
  anoLancamento: 2004,
  thumbnail: "imgs/lost.jpg",
  linkTitulo:
    "https://pt.wikipedia.org/wiki/Lost_(s%C3%A9rie_de_televis%C3%A3o)",
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
arrayComObjSerie.push(lost);

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
if (lost.isBrasileira === true) {
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
  for (let i in array) {
    for (let j in array[i]) {
      if (array[i][j] === str) {
        const main = document.getElementById("main");
        const div = document.createElement("div");
        const section = document.createElement("section");
        const imagem = document.createElement("img");
        const ancora = document.createElement("a");
        const ul = document.createElement("ul");
        const li1 = document.createElement("li");
        const li2 = document.createElement("li");
        const li3 = document.createElement("li");
        const li4 = document.createElement("li");
        const li5 = document.createElement("li");

        div.setAttribute("id", "container");
        imagem.setAttribute("class", "img");
        ancora.setAttribute("href", arrayComObjSerie[i].linkTitulo);
        ancora.innerHTML += arrayComObjSerie[i].titulo;
        section.setAttribute("class", "card");
        ul.setAttribute("class", "listaInformacoes");

        imagem.src = arrayComObjSerie[i].thumbnail;
        ancora.setAttribute("target", "_blank");

        li1.innerHTML += `nome: `;
        li1.appendChild(ancora);
        li2.innerHTML += `Genero: ${arrayComObjSerie[i].genero}`;
        li3.innerHTML += arrayComObjSerie[i].totTemporadas;
        li4.innerHTML += arrayComObjSerie[i].elenco;
        li5.innerHTML += arrayComObjSerie[i].sinopse;

        main.appendChild(div);
        div.appendChild(section);
        section.appendChild(imagem);
        section.appendChild(ul);
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        ul.appendChild(li4);
      }
    }
  }
  // return alert("Seriado não encontrado");
}

// Semana 11
console.log("");
console.log("Semana 11");
console.log("");

function criaObj(array) {
  for (i in arrayComObjSerie) {
    const div = document.getElementById("container");

    const section = document.createElement("section");
    const imagem = document.createElement("img");
    const ancora = document.createElement("a");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    const li4 = document.createElement("li");
    const li5 = document.createElement("li");

    imagem.setAttribute("class", "img");
    ancora.setAttribute("href", arrayComObjSerie[i].linkTitulo);
    ancora.innerHTML += arrayComObjSerie[i].titulo;
    section.setAttribute("class", "card");
    ul.setAttribute("class", "listaInformacoes");

    imagem.src = arrayComObjSerie[i].thumbnail;
    ancora.setAttribute("target", "_blank");

    li1.innerHTML += `nome: `;
    li1.appendChild(ancora);
    li2.innerHTML += `Genero: ${arrayComObjSerie[i].genero}`;
    li3.innerHTML += `Total de temporadas: ${arrayComObjSerie[i].totTemporadas}`;
    li4.innerHTML += `Elenco ${arrayComObjSerie[i].elenco}`;
    li5.innerHTML += `Sinopse: ${arrayComObjSerie[i].sinopse}`;

    main.appendChild(div);
    div.appendChild(section);
    section.appendChild(imagem);
    section.appendChild(ul);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);
  }
}

// Semana 12
console.log("");
console.log("Semana 12");
console.log("");

function btnBusca(event) {
  event.preventDefault();
  let input = document.getElementById("input").value.toLowerCase();
  if (input == " ") {
    console.log("Seriado não encontrado");
  } else {
    document.getElementById("container").remove();
    buscaTitulo(arrayComObjSerie, input);
  }
}

criaObj(arrayComObjSerie);
