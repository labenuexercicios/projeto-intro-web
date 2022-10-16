const firstTitle = "Blue";
const firstDirector = "Hiroshi Ando";
const firstSynopsis =
  "Situada em uma pequena cidade litorânea no Japão, Uma estudante introvertida apaixona-se e começa um relacionamento com uma de suas colegas de classe.";
const firstCountryOfOrigin = "Japão";
const firstRuntime = "116 mins";
const firstYearOfRelease = 2002;
const firstGenre = "Romance e Drama";
const firstProtagonists = [
  "Mikako Ichikawa como Kayako Kirishima",
  "Manami Konishi como Masami Endo",
];
const firsDisponibleOnStreaming = true;

const secondTitle = "The Worst Person in the World";
const secondDirector = "Joachim Trier";
const secondSynopsis =
  "Crônicas de quatro anos na vida de Julie, uma jovem que navega pelas águas turbulentas de sua vida amorosa e luta para encontrar uma carreira com quem se identifica, levando-a a ter uma visão realista de quem ela realmente é.";
const secondCountryOfOrigin = "Noruega";
const secondRuntime = "122 mins";
const secondYearOfRelease = 2021;
const secondGenre = "Drama";
const secondProtagonists = [
  "Renate Reinsve como Julie",
  "Anders Danielsen Lie como Aksel",
  "Herbert Nordrum como Eivind",
];
const secondDisponibleOnStreaming = true;

const thirdTitle = "The Handmaiden";
const thirdDirector = "Park Chan-Wook";
const thirdSynopsis =
  "Coreia do Sul, anos 1930. Durante a ocupação japonesa, a jovem Sook-hee é contratada para trabalhar para uma herdeira nipônica, Hideko, que leva uma vida isolada ao lado do tio autoritário.";
const thirdCountryOfOrigin = "Coreia do Sul";
const thirdRuntime = "145 mins";
const thirdYearOfRelease = 2016;
const thirdGenre = "Romance, Suspense e Drama";
const thirdProtagonists = [
  "Kim Min-hee como Senhorita Hideko",
  "Kim Taeri como Sookee",
  "Ha Jung-woo como Conde Fujiwara",
];
const thirdDisponibleOnStreaming = true;

const fourthTitle = "Raw";
const fourthDirector = "Julia Ducournau";
const fourthSynopsis =
  "Uma jovem vegetariana é obrigada a comer carne crua em um trote de faculdade e começa a ser atormentada por uma vontade incontrolável de devorar carne humana.";
const fourthCountryOfOrigin = "França";
const fourthRuntime = "99 mins";
const fourthYearOfRelease = 2016;
const fourthGenre = "Drama";
const fourthProtagonists = ["Garance Marillier como Justine"];
const fourthDisponibleOnStreaming = true;

const fifthTitle = "Shiva Baby";
const fifthDirector = "Emma Seligman";
const fifthSynopsis =
  "Uma estudante universitária participa de um shiva familiar, onde é abordada por seus parentes, ofuscada por sua ex-namorada e fica cara a cara com o seu sugar daddy e a família dele.";
const fifthCountryOfOrigin = "Canadá e Estados Unidos";
const fifthRuntime = "78 mins";
const fifthYearOfRelease = 2020;
const fifthGenre = "Comédia e Drama";
const fifthProtagonists = [
  "Rachel Sennott como Danielle",
  "Molly Gordon como Maya",
  "Danny Deferrari como Max",
];
const fifthDisponibleOnStreaming = true;

const mathYearOfRelease =
  (firstYearOfRelease +
    secondYearOfRelease +
    thirdYearOfRelease +
    fourthYearOfRelease +
    fifthYearOfRelease) /
  5;
console.log(`Média de ano de lançamento: ${mathYearOfRelease}`);
const averageYearOfRelease = 2015;

const areTheyOnStreaming =
  firsDisponibleOnStreaming &&
  secondDisponibleOnStreaming &&
  thirdDisponibleOnStreaming &&
  fourthDisponibleOnStreaming &&
  fifthDisponibleOnStreaming;
console.log(`Disponiveis em streaming? ${areTheyOnStreaming}`);

const firstMovie = {
  titulo: firstTitle,
  diretor: firstDirector,
  anoDeLançamento: firstYearOfRelease,
  tempoDeDuração: firstRuntime,
  paisDeOrigem: firstCountryOfOrigin,
  genero: firstGenre,
  sinopse: firstSynopsis,
  protagonistas: firstProtagonists,
  disponivelEmStreaming: firsDisponibleOnStreaming,
  imagem:
    "https://img.rgstatic.com/content/movie/1bcee57f-a5b0-4ae5-a2e7-6df5700d23b2/poster-780.jpg",
};

const secondMovie = {
  titulo: secondTitle,
  diretor: secondDirector,
  anoDeLançamento: secondYearOfRelease,
  tempoDeDuração: secondRuntime,
  paisDeOrigem: secondCountryOfOrigin,
  genero: secondGenre,
  sinopse: secondSynopsis,
  protagonistas: secondProtagonists,
  disponivelEmStreaming: secondDisponibleOnStreaming,
  imagem:
    "https://www.themoviedb.org/t/p/original/ilaxC1JMUqmuZP4BAz64h967ms4.jpg",
};

const thirdMovie = {
  titulo: thirdTitle,
  diretor: thirdDirector,
  anoDeLançamento: thirdYearOfRelease,
  tempoDeDuração: thirdRuntime,
  paisDeOrigem: thirdCountryOfOrigin,
  genero: thirdGenre,
  sinopse: thirdSynopsis,
  protagonistas: thirdProtagonists,
  disponivelEmStreaming: thirdDisponibleOnStreaming,
  imagem:
    "https://media-cache.cinematerial.com/p/500x/htxvowdf/the-handmaiden-south-korean-movie-poster.jpg?v=1461751257",
};

const fourthMovie = {
  titulo: fourthTitle,
  diretor: fourthDirector,
  anoDeLançamento: fourthYearOfRelease,
  tempoDeDuração: fourthRuntime,
  paisDeOrigem: fourthCountryOfOrigin,
  genero: fourthGenre,
  sinopse: fourthSynopsis,
  protagonistas: fourthProtagonists,
  disponivelEmStreaming: fourthDisponibleOnStreaming,
  imagem:
    "https://m.media-amazon.com/images/M/MV5BNDJiZTlhYmMtZTQ3Mi00M2FlLWI5ZDUtZjFjODI4OTc5OTNjXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_.jpg",
};

const fifthMovie = {
  titulo: fifthTitle,
  diretor: fifthDirector,
  anoDeLançamento: fifthYearOfRelease,
  tempoDeDuração: fifthRuntime,
  paisDeOrigem: fifthCountryOfOrigin,
  genero: fifthGenre,
  sinopse: fifthSynopsis,
  protagonistas: fifthProtagonists,
  disponivelEmStreaming: fifthDisponibleOnStreaming,
  imagem:
    "https://m.media-amazon.com/images/M/MV5BODUyNzk1YTQtMTNmNy00NDQ3LTgzYTUtZTBlNmZjMmMzOWY3XkEyXkFqcGdeQXVyNjM5NjE5MDc@._V1_.jpg",
};

const movies = [];

firsDisponibleOnStreaming
  ? movies.push(firstMovie)
  : alert("O Primeiro Filme não está disponível em um Streaming");

secondDisponibleOnStreaming
  ? movies.push(secondMovie)
  : alert("O Segundo Filme não está disponível em um Streaming");

thirdDisponibleOnStreaming
  ? movies.push(thirdMovie)
  : alert("O Terceiro Filme não está disponível em um Streaming");

fourthDisponibleOnStreaming
  ? movies.push(fourthMovie)
  : alert("O Quarto Filme não está disponível em um Streaming");

fifthDisponibleOnStreaming
  ? movies.push(fifthMovie)
  : alert("O Quinto Filme não está disponível em um Streaming");

for (i in movies) {
  let papeis = `Protagonistas: `;
  for (j in movies[i].protagonistas) {
    papeis += `${movies[i].protagonistas[j]}, `;
  }
  console.log(`${movies[i].titulo.toUpperCase()} 
    Diretor: ${movies[i].diretor}
    País de Origem: ${movies[i].paisDeOrigem}
    Tempo de Duração: ${movies[i].tempoDeDuração}
    Gênero: ${movies[i].genero}
    Ano de Lançamento: ${movies[i].anoDeLançamento}
    Sinopse: ${movies[i].sinopse}
    ${papeis.substring(0, papeis.length - 2)}
    Está disponível em Streaming? ${movies[i].disponivelEmStreaming} `);
}

movies.push({
  titulo: "Portrait of a Young Girl at the End of the 60s in Brussels",
  diretor: "Chantal Akerman",
  anoDeLançamento: 1994,
  tempoDeDuração: "60 mins",
  paisDeOrigem: "Bélgica",
  genero: "Drama e Romance",
  sinopse:
    "A personagem principal, Michele, passa uma hora discutindo suas visões de vida com alguns velhos e novos amigos, e tenta entender seus próprios sentimentos sobre seu lugar no mundo e sua sexualidade, enquanto uma câmera acompanha de perto.",
  protagonistas: [
    "Circé Lethem como Michele",
    "Joëlle Marlier como Danielle",
    "Julien Rassam como Paul",
  ],
  disponivelEmStreaming: true,
  imagem:
    "https://images.euassisti.com.br/unsafe/300x450/images/6281fd051420a1f50c4fdbd8_0.webp",
});

// semana 6 - 1.
const filmes = (objeto) => {
  let relatorio = `${objeto.titulo.toUpperCase()}
  Diretor: ${objeto.diretor}
  País de Origem: ${objeto.paisDeOrigem}
  Tempo de Duração: ${objeto.tempoDeDuração}
  Gênero: ${objeto.genero} 
  Ano de Lançamento: ${objeto.anoDeLançamento}
  Sinopse: ${objeto.sinopse}
  Protagonistas: ${objeto.protagonistas}
  Está disponível em Streaming? ${objeto.disponivelEmStreaming}`;
  return relatorio;
};

const filmas = filmes(movies[5]);
console.log(filmas);

// primeiro-filme
const listaFilmes = document.createElement("section");
const container = document.getElementById("container");
container.insertAdjacentElement("beforeend", listaFilmes);
listaFilmes.setAttribute("id", "filme");
const conteudo = document.getElementById("filme");
conteudo.innerHTML += `<ul>
<img src="${movies[0].imagem}" width="200px"/>
<li><b>${movies[0].titulo}</b></li>
  <li>Diretor(a): ${movies[0].diretor}</li>
  <li>Ano de Lançamento: ${movies[0].anoDeLançamento}</li>
  <li>Duração: ${movies[0].tempoDeDuração}</li>
  <li>País de origem: ${movies[0].paisDeOrigem}</li>
  <section class = "sinopse">
  <li>Sinopse: ${movies[0].sinopse}</li>
  </section>
  <li>Gênero: ${movies[0].genero}</li>
  </ul>`;

// segundo-filme
const listaFilmes2 = document.createElement("section");
const container2 = document.getElementById("container");
container2.insertAdjacentElement("beforeend", listaFilmes2);
listaFilmes2.setAttribute("id", "filme2");
const elementoDeLista2 = document.getElementById("filme2");
elementoDeLista2.innerHTML += `<ul>
<img src="${movies[1].imagem}" width="200px"/>
<li><b>${movies[1].titulo}</b></li>
  <li>Diretor(a): ${movies[1].diretor}
  <li>Ano de Lançamento: ${movies[1].anoDeLançamento}</li>
  <li>Duração: ${movies[1].tempoDeDuração}</li>
  <li>País de origem: ${movies[1].paisDeOrigem}</li>
  <section class = "sinopse">
  <li>Sinopse: ${movies[1].sinopse}</li>
  </section>
  <li>Gênero: ${movies[1].genero}</li>
  </ul>`;

// terceiro-filme
const listaFilmes3 = document.createElement("section");
const container3 = document.getElementById("container");
container3.insertAdjacentElement("beforeend", listaFilmes3);
listaFilmes3.setAttribute("id", "filme3");
const elementoDeLista3 = document.getElementById("filme3");
elementoDeLista3.innerHTML += `<ul>
<img src="${movies[2].imagem}" width="200px"/>
<li><b>${movies[2].titulo}</b></li>
  <li>Diretor(a): ${movies[2].diretor}
  <li>Ano de Lançamento: ${movies[2].anoDeLançamento}</li>
  <li>Duração: ${movies[2].tempoDeDuração}</li>
  <li>País de origem: ${movies[2].paisDeOrigem}</li>
  <section class = "sinopse">
  <li>Sinopse: ${movies[2].sinopse}</li>
  </section>
  <li>Gênero: ${movies[2].genero}</li>
  </ul>`;

// quarto-filme
const listaFilmes4 = document.createElement("section");
const container4 = document.getElementById("container");
container4.insertAdjacentElement("beforeend", listaFilmes4);
listaFilmes4.setAttribute("id", "filme4");
const elementoDeLista4 = document.getElementById("filme4");
elementoDeLista4.innerHTML += `<ul>
<img src="${movies[3].imagem}" width="200px"/>
<li><b>${movies[3].titulo}</b></li>
  <li>Diretor(a): ${movies[3].diretor}
  <li>Ano de Lançamento: ${movies[3].anoDeLançamento}</li>
  <li>Duração: ${movies[3].tempoDeDuração}</li>
  <li>País de origem: ${movies[3].paisDeOrigem}</li>
  <section class = "sinopse">
  <li>Sinopse: ${movies[3].sinopse}</li>
  </section>
  <li>Gênero: ${movies[3].genero}</li>
  </ul>`;

// quinto-filme
const listaFilmes5 = document.createElement("section");
const container5 = document.getElementById("container");
container5.insertAdjacentElement("beforeend", listaFilmes5);
listaFilmes5.setAttribute("id", "filme5");
const elementoDeLista5 = document.getElementById("filme5");
elementoDeLista5.innerHTML += `<ul>
<img src="${movies[4].imagem}" width="200px"/>
<li><b>${movies[4].titulo}</b></li>
  <li>Diretor(a): ${movies[4].diretor}
  <li>Ano de Lançamento: ${movies[4].anoDeLançamento}</li>
  <li>Duração: ${movies[4].tempoDeDuração}</li>
  <li>País de origem: ${movies[4].paisDeOrigem}</li>
  <section class = "sinopse">
  <li>Sinopse: ${movies[4].sinopse}</li>
  </section>
  <li>Gênero: ${movies[4].genero}</li>
  </ul>`;

// sexto-filme
const listaFilmes6 = document.createElement("section");
const container6 = document.getElementById("container");
container6.insertAdjacentElement("beforeend", listaFilmes6);
listaFilmes6.setAttribute("id", "filme6");
const elementoDeLista6 = document.getElementById("filme6");
elementoDeLista6.innerHTML += `<ul>
<img src="${movies[5].imagem}" width="200px"/>
<li><b>${movies[5].titulo}</b></li>
  <li>Diretor(a): ${movies[5].diretor}
  <li>Ano de Lançamento: ${movies[5].anoDeLançamento}</li>
  <li>Duração: ${movies[5].tempoDeDuração}</li>
  <li>País de origem: ${movies[5].paisDeOrigem}</li>
  <section class = "sinopse">
  <li>Sinopse: ${movies[5].sinopse}</li>
  </section>
  <li>Gênero: ${movies[5].genero}</li>
  </ul>`;

function exibeValorDoCampo(event) {
  const input = document.getElementById("campo").value;
  const input2 = event.target;
  console.log(input);
}

function filtraFilme(arrayDeObj, valorString) {
  let objARetornar = {};

  for (let i = 0; i < arrayDeObj.length; i++) {
    if (arrayDeObj[i].titulo.toLowerCase() === valorString.toLowerCase()) {
      objARetornar.titulo = arrayDeObj[i].titulo;
      objARetornar.diretor = arrayDeObj[i].diretor;
      objARetornar.anoDeLançamento = arrayDeObj[i].anoDeLançamento;
      objARetornar.tempoDeDuração = arrayDeObj[i].tempoDeDuração;
      objARetornar.genero = arrayDeObj[i].genero;
      objARetornar.sinopse = arrayDeObj[i].sinopse;
      objARetornar.protagonistas = arrayDeObj[i].protagonistas;
      objARetornar.disponivelEmStreaming = arrayDeObj[i].disponivelEmStreaming;
      objARetornar.imagem = arrayDeObj[i].imagem;

      //objARetornar = {...arrayDeObj[i]};
    }
  }

  if (
    objARetornar.titulo &&
    objARetornar.titulo.toLowerCase() !== valorString.toLowerCase()
  ) {
    alert("Não encontrei o filme");
  } else {
    return objARetornar;
  }
}

function buscaFilmes() {
  //buscando o elemento do campo (input) por seu id
  const elementoDeCampo = document.getElementById("campo");

  //considerando o elemento de input preenchido, a constante textoABuscar recebe o value, isto é, o valor escrito no input.
  const textoABuscar = elementoDeCampo.value;

  //chamando a função que recebe um array e um parâmetro, e passando como argumento, o array dos meus itens, e a string com o value do campo.
  const filmeRetornado = filtraFilme(movies, textoABuscar);
  if (filmeRetornado.titulo) {
    const elementoDeLista = document.getElementById("container");
    elementoDeLista.innerHTML = `<section class="abr" id="abr">
    <input type="text" id="campo" onkeyup="exibeValorDoCampo(event)" placeholder="Pesquise aqui"/>
    <button id="botao" type="button" onclick="buscaFilmes()" >Buscar</button>
    </section>
    <section id="filme">
    <ul>
    <img src="${filmeRetornado.imagem}" width="200px"/>
    <li><b>${filmeRetornado.titulo}</b></li>
    <li>Diretor(a): ${filmeRetornado.diretor}</li>
    <li>Ano de Lançamento: ${filmeRetornado.anoDeLançamento}</li>
    <li>Duração: ${filmeRetornado.tempoDeDuração}</li>
    <section class = "sinopse">
    <li>Sinopse: ${filmeRetornado.sinopse}</li>
    </section>
    <li>Gênero: ${filmeRetornado.genero}</li>
    </ul>
    </section>`;
  } else {
    alert(
      "Digite o nome do título de um filme da lista para a busca ser realizada."
    );
  }
}
