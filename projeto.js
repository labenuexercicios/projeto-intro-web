const personagem2 = {
    nome: "Pippin tûk",
    raca: "Hobbit",
    ator: "Billy Boyd",
    portador: false,
    img:"https://lord_ofthe_rings.webs.com/Pippin3.jpg",
    link: "https://en.wikipedia.org/wiki/Pippin_Took"
  }

const personagem3 = {
    nome: "Samwise Gangee",
    raca: "Hobbit",
    ator: "Sean Patrick Duke",
    portador: false,
    img: "https://vignette1.wikia.nocookie.net/lotr/images/9/9d/Samwise_the_Brave.jpg/revision/latest?cb=20090109192224",
    link: "https://en.wikipedia.org/wiki/Samwise_Gamgee"
  }

const personagem4 = {
    nome: "Merry Brandebuque",
    raca: "Hobbit",
    ator: "Dominic Monaghan",
    portador: false,
    img: "https://johnnyslair.pagesperso-orange.fr/pmerry.jpg",
    link: "https://www.valinor.com.br/6911"
  }

const personagem5 = {
    nome: "Gandalf, O Cinzento",
    raca: "Ishtar",
    ator: "Ian McKellen",
    portador: true,
    img: "http://s2.glbimg.com/zOSIqsIGo2jMq3R4R0R57WIGHsQ=/smart/e.glbimg.com/og/ed/f/original/2017/10/24/gandalf.jpg",
    link: "https://pt.wikipedia.org/wiki/Gandalf"
  }

const personagem6 = {
    nome: "Legolas",
    raca: "Elfo",
    ator: "Orlando Bloom",
    portador: false,
    img: "https://tse4.mm.bing.net/th?id=OIP.4TSMVGLl6jX-eS1GhFxCZwHaFp&pid=Api&P=0",
    link: "https://en.wikipedia.org/wiki/Legolas"
  }
const personagem7 = {
    nome: "Gimli",
    raca: "Anão",
    ator: "John Rhys Davies",
    portador: false,
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/926fb51a-1fd1-498b-b5c2-cec13103ead5/da6usmy-ecd89993-d20d-4c6c-8ad2-c29bd42647fc.png/v1/fill/w_968,h_826,q_70,strp/gimli__lotr__by_heartofthesunrise_da6usmy-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMDMxIiwicGF0aCI6IlwvZlwvOTI2ZmI1MWEtMWZkMS00OThiLWI1YzItY2VjMTMxMDNlYWQ1XC9kYTZ1c215LWVjZDg5OTkzLWQyMGQtNGM2Yy04YWQyLWMyOWJkNDI2NDdmYy5wbmciLCJ3aWR0aCI6Ijw9MTIwOCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.z64AT7avLNEP6Vh3r_e99yoSR6CAVTp2V_OIXf8SdY8",
    link: "https://pt.wikipedia.org/wiki/Gimli_(personagem)"
  }

const personagem8 = {
    nome: "Aragorn",
    raca: "Humano",
    ator: "Viggo Mortensen",
    portador: false,
    img: "https://tse4.mm.bing.net/th?id=OIP.sNUFsngKZ5TgIBqKvPMtpQHaE9&pid=Api&P=0",
    link: "https://pt.wikipedia.org/wiki/Aragorn"
  }

const personagem9 = {
    nome: "Boromir",
    raca: "Humano",
    ator: "Sean Bean",
    portador: false,
    img: "https://tse4.mm.bing.net/th?id=OIP.Hose0GWirq6Tc6m0GXJRbwHaGB&pid=Api&P=0",
    link: "https://pt.wikipedia.org/wiki/Boromir"
  }


const inserePersonagem = (objeto) => {
  const novaSection = document.getElementById("container-card");
  const criarSection = document.createElement("section");
  const adcionaSection = novaSection.appendChild(criarSection);
  criarSection.classList.add("card");

  const novaImagem = document.createElement("img");
  const imagem = adcionaSection.appendChild(novaImagem);
  imagem.setAttribute("src", objeto.img);

  const novoUl = document.createElement("ul");
  const ul = adcionaSection.appendChild(novoUl);

  const novaLi1 = document.createElement("li");
  const li1 = novoUl.appendChild(novaLi1);
  const criarNovaA = document.createElement("a");
  const a = novaLi1.appendChild(criarNovaA);
  criarNovaA.setAttribute("target", "_blank");
  criarNovaA.setAttribute("href", objeto.link);
  criarNovaA.innerHTML = objeto.nome;

  const novaLi2 = document.createElement("li");
  const li2 = novoUl.appendChild(novaLi2);
  li2.innerHTML = "Raça: " + objeto.raca;

  const novaLi3 = document.createElement("li");
  const li3 = novoUl.appendChild(novaLi3);
  li3.innerHTML = "Ator: " + objeto.ator;

  const novaLi4 = document.createElement("li");
  const li4 = novoUl.appendChild(novaLi4);
  li4.innerHTML = "Portador do Anel: " + objeto.portador;
};

inserePersonagem(personagem2);
inserePersonagem(personagem3);
inserePersonagem(personagem4);
inserePersonagem(personagem5);
inserePersonagem(personagem6);
inserePersonagem(personagem7);
inserePersonagem(personagem8);
inserePersonagem(personagem9);

const textoInput = document.getElementById("nome")
const parametroDeBusca = document.getElementsByTagName('a')
const cards = document.querySelectorAll('.card')
const array = []

for (i in parametroDeBusca) {
    array.push(parametroDeBusca[i].innerText)
}

let array2 = array.filter ((itens) => itens !== undefined)
array2 = array2.map((itens) => itens.toLowerCase())

const selecionar = () => {
    const valorDoInput = textoInput.value.toLowerCase()
    cards.forEach((itens) => itens.classList.add("esconde-objetos"))
    for (i in cards) {
        if (array2[i] === valorDoInput) {
            cards[i].classList.remove("esconde-objetos")
        }
    }

    const limparBusca = () => {
        if (valorDoInput === ""){
            cards.forEach((itens) => itens.classList.remove("esconde-objetos"))
            alert("Digite o nome de um personagem da Sociedade do Anel.")
        }
    }
    limparBusca()
}