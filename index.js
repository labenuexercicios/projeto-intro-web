// Livros

const livro1 = {
  titulo: "Fundação",
  genero: "Ficção Cientifica ",
  sequecias: 2,
  adquirido: true,
  lido: false,
  autor: "Isaac Azimov",
  imagem: "./img/fundacao.png"
};

const livro2 = {
  titulo: "Duna",
  genero: "Ficção Cientifica",
  sequecias: 4,
  adquirido: true,
  lido: false,
  autor: "Frank Herbet",
  imagem: "./img/fundacao.png"
};

const livro3 = {
  titulo: "Jurassic Park",
  genero: "Ficção Cientifica ",
  sequecias: 1,
  adquirido: false,
  lido: false,
  autor: "Michael Crichton",
  imagem: "./img/jurasic.png"
};

const livro4 = {
  titulo: "A Guerra do Velho",
  genero: "Ficção Cientifica",
  sequecias: 2,
  adquirido: true,
  lido: true,
  autor: "John Scalzi",
  imagem: "./img/fundacao.png"
};

const livro5 = {
  titulo: "Bhagavad-Gita: Como Ele É",
  genero: "Filosofia",
  valor: 80,
  adquirido: true,
  lido: true,
  autor: "A. C. Bhaktivedanta Swami Prabhupada",
  imagem: "./img/gita.png"
};

const livro6 = {
  titulo: "Jaiva Dharma",
  genero: "Filosofia",
  valor: 80,
  adquirido: true,
  lido: true,
  autor: "Śrīla Bhaktivinoda Ṭhākura",
  imagem: "./img/jaiva.jpg"
};

const livro7 = {
  titulo: "Joias do Coração",
  genero: "Filosofia",
  valor: 80,
  adquirido: true,
  lido: false,
  autor: "Srila Bhaktivedanta Vana Gosvami Maharaj",
  imagem: "./img/joias.jpg",
}

const livro8 = {
  titulo: "Srimad Bhagavatam, Canto 1, Parte 1",
  genero: "Filosofia",
  valor: 80,
  adquirido: false,
  lido: false,
  autor: "A. C. Bhaktivedanta Swami Prabhupada"
}

const livro9 = {
  titulo: "Srimad Bhagavatam, Canto 1, Parte 1",
  genero: "Filosofia",
  valor: 80,
  adquirido: false,
  lido: false,
  autor: "A. C. Bhaktivedanta Swami Prabhupada"
}

const livro10 = {
  titulo: "Srimad Bhagavatam, Canto 1, Parte 1",
  genero: "Filosofia",
  valor: 80,
  adquirido: false,
  lido: false,
  autor: "A. C. Bhaktivedanta Swami Prabhupada"
}

const livro11 = {
  titulo: "Srimad Bhagavatam, Canto 1, Parte 1",
  genero: "Filosofia",
  valor: 80,
  adquirido: false,
  lido: false,
  autor: "A. C. Bhaktivedanta Swami Prabhupada"
}

const livro12 = {
  titulo: "Srimad Bhagavatam, Canto 1, Parte 1",
  genero: "Filosofia",
  valor: 80,
  adquirido: false,
  lido: false,
  autor: "A. C. Bhaktivedanta Swami Prabhupada"
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
  : alert("Jaiva Dharma ainda não adquirido");
livro6.adquirido
  ? acervo.push(livro6)
  : alert("Joias do Coração ainda não adquirido");
  livro7.adquirido
  ? acervo.push(livro7)
  : alert("Fundação ainda não adquirido");
livro8.adquirido
  ? acervo.push(livro8)
  : alert("Duna ainda não adquirido");
livro9.adquirido
  ? acervo.push(livro9)
  : alert("Jurassic Park ainda não adquirido");
livro10.adquirido
  ? acervo.push(livro10)
  : alert("Guerra do Velho ainda não adquirido");
livro11.adquirido
  ? acervo.push(livro11)
  : alert("Jaiva Dharma ainda não adquirido");
livro12.adquirido
  ? acervo.push(livro12)
  : alert("Joias do Coração ainda não adquirido");



console.log(acervo)


// Livros lidos
const lidos = [];

livro1.lido
  ? lidos.push(livro1)
  : alert("Fundação ainda não lido");
livro2.lido
  ? lidos.push(livro2)
  : alert("Duna ainda não lido");
livro3.lido
  ? lidos.push(livro3)
  : alert("Jurassic Park ainda não lido");
livro4.lido
  ? lidos.push(livro4)
  : alert("A Guerra do Velho ainda não lido");
livro5.lido
  ? lidos.push(livro5)
  : alert("Bhagavad-Gita: Como Ele É ainda não lido");
livro6.lido
  ? lidos.push(livro6)
  : alert("Jaiva Dharma ainda não lido");
livro7.lido
  ? lidos.push(livro7)
  : alert("Joias do Coração ainda não lido");
  livro8.lido
  ? lidos.push(livro8)
  : alert("Joias do Coração ainda não lido");
console.log(lidos);
livro9.lido
  ? lidos.push(livro9)
  : alert("Fundação ainda não lido");
livro10.lido
  ? lidos.push(livro10)
  : alert("Duna ainda não lido");
livro11.lido
  ? lidos.push(livro11)
  : alert("Jurassic Park ainda não lido");
livro12.lido
  ? lidos.push(livro12)
  : alert("A Guerra do Velho ainda não lido");

function relatorio() {
  for (unidade of acervo) {
    console.log(unidade)
  }
}

relatorio()

// DOM
function limpaInput() {
  document.getElementById('buscador').value= '';
}

// Função para buscar no array de objetos
function buscarArrayPeloNome(array, name) {
  const total = array.filter((acervo)=> acervo.titulo.toLowerCase().includes(titulo.toLowerCase()));

  if(acervo.length){
    return acervo;
  } else {
    return array;
  }
}

// Função que pega o valor do input e chama a função que busca os objetos
function buscarExpansao(event){
  event.preventDefault()

  const input = document.getElementById('buscador').value;
  const expansaoFiltro = buscarArrayPeloNome(todasAsExpansoes, input);
  const footer = document.getElementById('footer');
  const container = document.getElementsByClassName('container')[0];

  if(input === ''){
    alert('Digite um nome de uma expansão válida!');
    criarObjetosNoHtml(todasAsExpansoes);
    footer.classList.remove('footer-fixado');
    container.removeAttribute('id', 'container');
  } else {
    console.log(expansaoFiltro);
    criarObjetosNoHtml(expansaoFiltro);
    footer.classList.add('footer-fixado');
    container.setAttribute('id', 'container');
  }
  console.log(expansaoFiltro.includes(input)); 
  limpaInput()
}