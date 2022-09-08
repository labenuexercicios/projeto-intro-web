// Semana 1 - OK
// Semana 2 - OK
// Semana 3 - OK
// Semana 4 - OK
// Semana 5 - OK

// Objetos Séries (itens)
// Objeto 1
const serie1 = {
  titulo: "Game Of Thrones",
  ondeAssistir: "HBO Max",
  lancamento: 2011,
  temporadas: 8,
  episodios: 73,
  remake: false,
  sucesso: true,
  avaliacaoIMDB: 9.2,
  genero: ["Ação", "Aventura", "Drama"],
  elenco: [
    "Emilia Clarke",
    "Kit Harington",
    "Peter Dinklage",
    "Lena Headey",
    "Sophie Turner",
  ],
  criacao: "David Benioff, D.B. Weiss",
  sinopse:
    "Nove famílias nobres lutam pelo controle sobre as terras míticas de Westeros, enquanto um antigo inimigo retorna depois de estar adormecido por milhares de anos.",
};

// Objeto 2
const serie2 = {
  titulo: "Friends",
  ondeAssistir: "HBO Max",
  lancamento: 1994,
  temporadas: 10,
  episodios: 235,
  remake: false,
  sucesso: true,
  avaliacaoIMDB: 8.9,
  genero: ["Comédia", "Romance"],
  elenco: [
    "Jennifer Aniston",
    "Courteney Cox",
    "Lisa Kudrow",
    "Matt LeBlanc",
    "Matthew Perry",
    "David Schwimmer",
  ],
  criacao: "David Crane, Marta Kauffman",
  sinopse:
    "Relata a vida pessoal de seis amigos em seus 30's na cidade de Manhattan.",
};

// Objeto 3
const serie3 = {
  titulo: "The Walking Dead",
  ondeAssistir: "Netflix",
  lancamento: 2010,
  temporadas: 11,
  episodios: 177,
  remake: false,
  sucesso: true,
  avaliacaoIMDB: 8.2,
  genero: ["Drama", "Terror", "Suspense"],
  elenco: [
    "Andrew Lincoln",
    "Norman Reedus",
    "Melissa McBride",
    "Lauren Cohan",
    "Danai Gurira",
    "Jeffrey Dean Morgan",
  ],
  criacao: "Frank Darabont",
  sinopse:
    "Um Xerife acorda de um coma para dar-se conta que o mundo está em ruínas, e deve liderar um grupo de sobreviventes para se manter vivo.",
};

// Objeto 4
const serie4 = {
  titulo: "Stranger Things",
  ondeAssistir: "Netflix",
  lancamento: 2016,
  temporadas: 4,
  episodios: 35,
  remake: false,
  sucesso: true,
  avaliacaoIMDB: 8.7,
  genero: ["Drama", "Fantasia", "Terror"],
  elenco: [
    "Millie Bobby Brown",
    "Finn Wolfhard",
    "Winona Ryder",
    "David Harbour",
    "Natalia Dyer",
    "Charlie Heaton",
  ],
  criacao: "Matt Duffer, Ross Duffer",
  sinopse:
    "Depois do desaparecimento de um menino, sua mãe, um chefe de polícia e seus amigos precisam enfrentar forças aterrorizantes para trazê-lo de volta.",
};

// Objeto 5
const serie5 = {
  titulo: "Sob Pressão",
  ondeAssistir: "Globoplay",
  lancamento: 2017,
  temporadas: 5,
  episodios: 63,
  remake: false,
  sucesso: true,
  avaliacaoIMDB: 8.6,
  genero: ["Drama", "Suspense"],
  elenco: [
    "Júlio Andrade",
    "Marjorie Estiano",
    "Bruno Garcia",
    "Pablo Sanábio",
    "Julia Shimura",
  ],
  criacao: "Jorge Furtado, Renato Fagundes, Luiz Noronha",
  sinopse:
    "Uma série que mostra os dramas entre os médicos e pacientes num hospital do Rio de Janeiro.",
};

// Média das Temporadas (num)
somaTemporadas =
  serie1.temporadas +
  serie2.temporadas +
  serie3.temporadas +
  serie4.temporadas +
  serie5.temporadas;
mediaTemporadas = somaTemporadas / 5;
// console.log (`A média de Temporadas é: ${mediaTemporadas}`)

// Média dos Episódios (num)
somaEps =
  serie1.episodios +
  serie2.episodios +
  serie3.episodios +
  serie4.episodios +
  serie5.episodios;
mediaEps = somaEps / 5;
// console.log (`A média de Episódios é: ${mediaEps}`)

// Média da Avaliação do IMDb (num)
somaAvaliacao =
  serie1.avaliacaoIMDB +
  serie2.avaliacaoIMDB +
  serie3.avaliacaoIMDB +
  serie4.avaliacaoIMDB +
  serie5.avaliacaoIMDB;
mediaAvaliacao = somaAvaliacao / 5;
// console.log (`A média da Avaliação IMDb é: ${mediaAvaliacao}`)

// Verificando se são Remake (Booleano)
verificaRemake =
  serie1.remake &&
  serie2.remake &&
  serie3.remake &&
  serie4.remake &&
  serie5.remake;
// console.log (`As séries são um remake? ${verificaRemake}`)

// Verificando se são um sucesso (Booleano)
verificaSucesso =
  serie1.sucesso &&
  serie2.sucesso &&
  serie3.sucesso &&
  serie4.sucesso &&
  serie5.remake;
// console.log (`As séries são um sucesso? ${verificaSucesso}`)

// // Imprimindo os dados de cada série (Relatório)
// console.log (serie1.titulo.toUpperCase(),serie1.ondeAssistir, serie1.lancamento, serie1.temporadas, serie1.episodios, serie1.remake, serie1.sucesso, serie1.avaliacaoIMDB, serie1.genero, serie1.elenco, serie1.criacao, serie1.sinopse)
// console.log (serie2.titulo.toUpperCase(),serie2.ondeAssistir, serie2.lancamento, serie2.temporadas, serie2.episodios, serie2.remake, serie2.sucesso, serie2.avaliacaoIMDB, serie2.genero, serie2.elenco, serie2.criacao, serie2.sinopse)
// console.log (serie3.titulo.toUpperCase(),serie3.ondeAssistir, serie3.lancamento, serie3.temporadas, serie3.episodios, serie3.remake, serie3.sucesso, serie3.avaliacaoIMDB, serie3.genero, serie3.elenco, serie3.criacao, serie3.sinopse)
// console.log (serie4.titulo.toUpperCase(),serie4.ondeAssistir, serie4.lancamento, serie4.temporadas, serie4.episodios, serie4.remake, serie4.sucesso, serie4.avaliacaoIMDB, serie4.genero, serie4.elenco, serie4.criacao, serie4.sinopse)

// Meu Array de Objetos
const minhasSeries = [];

// Condicional para adicionar no array de Objetos
// Condicional 1
if (serie1.sucesso) {
  minhasSeries.push(serie1);
} else {
  alert(`A série ${serie1.titulo}, não pode ser adicionada`);
}

// Condicional 2
if (serie2.sucesso) {
  minhasSeries.push(serie2);
} else {
  alert(`A série ${serie2.titulo}, não pode ser adicionada`);
}

// Condicional 3
if (serie3.sucesso) {
  minhasSeries.push(serie3);
} else {
  alert(`A série ${serie3.titulo}, não pode ser adicionada`);
}

// Condicional 4
if (serie4.sucesso) {
  minhasSeries.push(serie4);
} else {
  alert(`A série ${serie4.titulo}, não pode ser adicionada`);
}

// Condicional 5
if (serie5.sucesso) {
  minhasSeries.push(serie5);
} else {
  alert(`A série ${serie5.titulo}, não pode ser adicionada`);
}

// Imprimindo as Séries
// console.log (minhasSeries)

// Mudando as Características de array para string (Laços)
// Mudando o Modo de criação do Relatório (Laços)
for (let i = 0; i < minhasSeries.length; i++) {
  minhasSeries[i].titulo = minhasSeries[i].titulo.toUpperCase();

  minhasSeries[i].genero.map(() => {
    minhasSeries[i].genero += `${""}`;

    return minhasSeries[i];
  });

  minhasSeries[i].elenco.map(() => {
    minhasSeries[i].elenco += `${""}`;

    return minhasSeries[i];
  });

  console.log(minhasSeries[i]);
}
