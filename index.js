// Livros

const livro1 = {
  titulo: "Fundação",
  genero: "Ficção Cientifica ",
  valor: 96.00,
  adquirido: true,
  lido: false,
  autor: "Isaac Azimov",
  imagem: "./img/fundacao.png"
};

const livro2 = {
  titulo: "Duna",
  genero: "Ficção Cientifica",
  valor: 58.00,
  adquirido: true,
  lido: false,
  autor: "Frank Herbet",
  imagem: "./img/duna.jpg"
};

const livro3 = {
  titulo: "Jurassic Park",
  genero: "Ficção Cientifica ",
  valor: 38.00,
  adquirido: false,
  lido: false,
  autor: "Michael Crichton",
  imagem: "./img/jurasic.jpg"
};

const livro4 = {
  titulo: "A Guerra do Velho",
  genero: "Ficção Cientifica",
  valor: 38.00,
  adquirido: true,
  lido: true,
  autor: "John Scalzi",
  imagem: "./img/guerradovelho.jpg"
};

const livro5 = {
  titulo: "Bhagavad-Gita: Como Ele É",
  genero: "Filosofia",
  valor: 120.00,
  adquirido: true,
  lido: true,
  autor: "A. C. Bhaktivedanta Swami Prabhupada",
  imagem: "./img/gita.jpg"
};

const livro6 = {
  titulo: "Jaiva Dharma",
  genero: "Filosofia",
  valor: 80.00,
  adquirido: true,
  lido: true,
  autor: "Śrīla Bhaktivinoda Ṭhākura",
  imagem: "./img/jaiva.jpg"
};

const livro7 = {
  titulo: "Joias do Coração",
  genero: "Filosofia",
  valor: 50.00,
  adquirido: true,
  lido: false,
  autor: "Srila Bhaktivedanta Vana Gosvami Maharaj",
  imagem: "./img/joias.jpg",
}

const livro8 = {
  titulo: "Srimad Bhagavatam, Canto 1, Parte 1",
  genero: "Filosofia",
  valor: 78.00,
  adquirido: false,
  lido: false,
  autor: "A. C. Bhaktivedanta Swami Prabhupada",
  imagem: "./img/srimad.jpg"
}

const livro9 = {
  titulo: "Guerra do Trono",
  genero: "Fantasia",
  valor: 58.00,
  adquirido: true,
  lido: true,
  autor: "G. R. R. Martin",
  imagem: "./img/trono.jpg"
}

const livro10 = {
  titulo: "A Sociedade do Anel",
  genero: "Fantasia",
  valor: 38.00,
  adquirido: true,
  lido: true,
  autor: "J. R. R. Tolkien",
  imagem: "./img/sociedade.jpg"
}

const livro11 = {
  titulo: "A Blumas de Avalon",
  genero: "Fantasia",
  valor: 38.00,
  adquirido: false,
  lido: false,
  autor: "Marion Zimmer Bradley",
  imagem: "./img/blumas.jpg"
}

const livro12 = {
  titulo: "Deuses Americanos",
  genero: "Fantasia",
  valor: 62.00,
  adquirido: false,
  lido: false,
  autor: "Neil Gaiman",
  imagem: "deuses.jpg"
}

// Acervo
const acervo = [];

livro1.adquirido
  ? acervo.push(livro1)
  : alert("Fundação ainda não adquirido");
livro2.adquirido
  ? acervo.push(livro2)
  : alert("Duna ainda não adquirido");
livro3.adquirido
  ? acervo.push(livro3)
  : alert("Jurassic Park ainda não adquirido");
livro4.adquirido
  ? acervo.push(livro4)
  : alert("Guerra do Velho ainda não adquirido");
livro5.adquirido
  ? acervo.push(livro5)
  : alert("Bhagavad-Gita: Como Ele É aninda não adiquirido");
livro6.adquirido
  ? acervo.push(livro6)
  : alert("Jaiva Dharma ainda não adquirido");
livro7.adquirido
  ? acervo.push(livro7)
  : alert("Joias do Coração ainda não adquirido");
livro8.adquirido
  ? acervo.push(livro8)
  : alert("Srimad Bhagavatam, Canto 1, Parte 1 ainda não adquirido");
livro9.adquirido
  ? acervo.push(livro9)
  : alert("Guerra do Trono ainda não adquirido");
livro10.adquirido
  ? acervo.push(livro10)
  : alert("Sociedade do Anel ainda não adquirido");
livro11.adquirido
  ? acervo.push(livro11)
  : alert("As Blumas de Avalon ainda não adquirido");
livro12.adquirido
  ? acervo.push(livro12)
  : alert("Deuses Americanos ainda não adquirido");



// console.log(acervo)


// Livros lidos
const lidos = [];

// livro1.lido
//   ? lidos.push(livro1)
//   : alert("Fundação ainda não lido");
// livro2.lido
//   ? lidos.push(livro2)
//   : alert("Duna ainda não lido");
// livro3.lido
//   ? lidos.push(livro3)
//   : alert("Jurassic Park ainda não lido");
// livro4.lido
//   ? lidos.push(livro4)
//   : alert("A Guerra do Velho ainda não lido");
// livro5.lido
//   ? lidos.push(livro5)
//   : alert("Bhagavad-Gita: Como Ele É ainda não lido");
// livro6.lido
//   ? lidos.push(livro6)
//   : alert("Jaiva Dharma ainda não lido");
// livro7.lido
//   ? lidos.push(livro7)
//   : alert("Joias do Coração ainda não lido");
// livro8.lido
//   ? lidos.push(livro8)
//   : alert("Joias do Coração ainda não lido");
// livro9.lido
//   ? lidos.push(livro9)
//   : alert("Guerra do Trono ainda não lido");
// livro10.lido
//   ? lidos.push(livro10)
//   : alert("A Sociedade do Anel ainda não lido");
// livro11.lido
//   ? lidos.push(livro11)
//   : alert("As Blumas de Avalon ainda não lido");
// livro12.lido
//   ? lidos.push(livro12)
//   : alert("Deuses Americanos ainda não lido");

function relatorioAcervo() {
  for (unidade of acervo) {
    console.log(unidade)
  }
}

relatorioAcervo()

// DOM
function limpaInput() {
  document.getElementById('campo-de-busca').value= '';
}

// Função para buscar no array de objetos
function buscarArrayPeloNome(array, name) {
  const titulos = array.filter((acervo)=> acervo.titulo.toLowerCase().includes(name.toLowerCase()));

  if(titulos.length){
    return titulos;
  } else {
    return array;
  }
}

// Função que pega o valor do input e chama a função que busca os objetos
function buscarLivro(event){
  event.preventDefault()

  const input = document.getElementById('campo-de-busca').value;
  const livroFiltro = buscarArrayPeloNome(acervo, input);
  const footer = document.getElementById('footer');
  const container = document.getElementsByClassName('container')[0];

  if(input === ''){
    alert('Digite por favor um titulo válido');
    criarObjetosNoHtml(todasOsLivros);
    footer.classList.remove('footer-fixado');
    container.removeAttribute('id', 'container');
  } else {
    console.log(livroFiltro);
    criarObjetosNoHtml(livroFiltro);
    footer.classList.add('footer-fixado');
    container.setAttribute('id', 'container');
  }
  console.log(livroFiltro.includes(input)); 
  limpaInput()
}

// Habilitar o botão enter do teclado com o botão do campo de busca
const input = document.getElementById('campo-de-busca');
input.addEventListener("keyup", function(event){
  if(event.key === 'Enter'){
    event.preventDefault();
    document.getElementById('botao-buscar').click()
  }
})

// adicionar objetos no HTML
function criarObjetosNoHtml (acervo) {
  let container = document.getElementsByClassName('container')[0]
  container.innerHTML= ""
  let card = ""
  acervo.map(element => {
    card = `<section class="card">
      <img src="${element.imagem}">
      <ul>
        <li>Nome: ${element.titulo.toUpperCase()}</li>
        <li>Autor: ${element.autor}</li>
        <li>Adquirido: ${element.adquirido}</li>
        <li>Tema: ${element.genero}</li>
      </ul>
    </section>`
    container.innerHTML += card;
  });
}

criarObjetosNoHtml(acervo)