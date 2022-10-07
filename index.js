//Transforme os itens que criamos nas últimas semanas em objetos.
const item1 = {
  nome: "Macarrão",
  marca: "Amália",
  preco: 2.89,
  quantidade: 2000,
  validade: new Date("12/09/2022"),
  tipo: ["Penne", "Grande"],
  img: "/Fotos/macarrao-amalia-penne.jpg",
  link: "https://pt.wikipedia.org/wiki/Macarr%C3%A3o",
};

const item2 = {
  nome: "Arroz",
  marca: "Tio João",
  preco: 26.99,
  quantidade: 300,
  validade: new Date("12/09/2022"),
  tipo: ["Branco", "Pequeno"],
  img: "/Fotos/arroz-tiojoao-branco.png",
  link: "https://pt.wikipedia.org/wiki/Arroz",
};

const item3 = {
  nome: "Feijão",
  marca: "Supang",
  preco: 6.99,
  quantidade: 5000,
  validade: new Date("01/09/2022"),
  tipo: ["Vermelho", "Grande"],
  img: "/Fotos/feijao-vermelho-supang.jpg",
  link: "https://pt.wikipedia.org/wiki/Feij%C3%A3o",
};

const item4 = {
  nome: "Farinha",
  marca: "Anchieta",
  preco: 5.99,
  quantidade: 2500,
  validade: new Date("05/09/2022"),
  tipo: ["Branca", "Mandioca"],
  img: "/Fotos/farinha-mandioca-yoki.png",
  link: "https://pt.wikipedia.org/wiki/Farinha",
};

//Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;
let estoque = [];
let descarte = [];

//FUNÇÕES NÃO UTILIZADAS MAIS

function imprimeRelatorio(array, string) {
  for (let obj in array) {
    for (let caraterística in array[obj]) {
      if (caraterística === "nome") {
        console.log(array[obj][caraterística].toLocaleUpperCase());
      } else if (caraterística === "tipo") {
        console.log(`${caraterística}: \"${array[obj][caraterística]}\"`);
      } else {
        console.log(`${caraterística}: ${array[obj][caraterística]}`);
      }
    }
  }
}
function devolveString(objArray) {
  let strings = "";
  for (let string of objArray) {
    strings += string + ", ";
  }
  return strings;
}

//FUNÇÕES EM USO

function agruparItensComValidadeBoaOuNaoEmArrays(objeto) {
  if (objeto.validade > new Date()) {
    estoque.push(objeto);
  } else {
    descarte.push(objeto);
  }
}

agruparItensComValidadeBoaOuNaoEmArrays(item1);
agruparItensComValidadeBoaOuNaoEmArrays(item2);
agruparItensComValidadeBoaOuNaoEmArrays(item3);
agruparItensComValidadeBoaOuNaoEmArrays(item4);

function procuraString(arrayDeObj, string) {
  let array = [];
  let j = 0;
  for (let i in arrayDeObj) {
    let obj = {};
    if (arrayDeObj[i].nome.toLocaleUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") ===
      string.toLocaleUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) {

      const arr = [...document.getElementsByClassName("conteiner-produtos")];
      const cont = arr.length;
      for (let itens=0; itens<cont; itens++) {
        arr[itens].remove();
      }

      obj = {...arrayDeObj[i],};
      array[j] = obj;
      j++;
    }
  }
  if (j === 0) {
    alert(
      `O item \"${string.toLocaleUpperCase()}\" buscado não foi encontrado!`
    );
  }
  return array;
}

let varImprimirRelatorioAuto = 0;
let variavel = 0;
function imprimirRelatorioAuto(array) {
  for (let item of array) {
    //criando a section
    document
      .getElementById("centro")
      .insertAdjacentElement("beforeend", document.createElement("section"))
      .setAttribute("id", `item ${varImprimirRelatorioAuto}`);
    document
      .getElementById(`item ${varImprimirRelatorioAuto}`)
      .setAttribute("class", "conteiner-produtos");

    //adicionando a img
    document
      .getElementById(`item ${varImprimirRelatorioAuto}`)
      .insertAdjacentElement("beforeend", document.createElement("img"))
      .setAttribute("id", `foto ${varImprimirRelatorioAuto}`);
    document
      .getElementById(`foto ${varImprimirRelatorioAuto}`)
      .setAttribute("src", `${item.img}`);
    document
      .getElementById(`foto ${varImprimirRelatorioAuto}`)
      .setAttribute("alt", `${item.nome}-${item.marca}`);
    document
      .getElementById(`foto ${varImprimirRelatorioAuto}`)
      .setAttribute("class", "imagens");

    //adicionando ul
    document
      .getElementById(`item ${varImprimirRelatorioAuto}`)
      .insertAdjacentElement("beforeend", document.createElement("ul"))
      .setAttribute("id", `ul ${varImprimirRelatorioAuto}`);
    document
      .getElementById(`ul ${varImprimirRelatorioAuto}`)
      .setAttribute("class", "texto");

    //adicionando li
    for (let caraterística in item) {
      if (caraterística === "link") {
      } else if (caraterística === "img") {
      } else if (caraterística === "validade"){
        document
          .getElementById(`ul ${varImprimirRelatorioAuto}`)
          .insertAdjacentElement("beforeend", document.createElement("li"))
          .setAttribute("id", `li ${variavel}`);

        document.getElementById(
          `li ${variavel}`
        ).innerHTML = `<strong>${caraterística.toLocaleUpperCase()}</strong>: ${item[caraterística].toLocaleDateString()}`;
        variavel++;
      }else if (caraterística === "nome") {
        document
          .getElementById(`ul ${varImprimirRelatorioAuto}`)
          .insertAdjacentElement("beforeend", document.createElement("li"))
          .setAttribute("id", `li ${variavel}`);

        document.getElementById(
          `li ${variavel}`
        ).innerHTML = `<strong><a href="${item.link}">${item[
          caraterística
        ].toLocaleUpperCase()}</a></strong> `;
        variavel++;
      } else {
        document
          .getElementById(`ul ${varImprimirRelatorioAuto}`)
          .insertAdjacentElement("beforeend", document.createElement("li"))
          .setAttribute("id", `li ${variavel}`);

        document.getElementById(
          `li ${variavel}`
        ).innerHTML = `<strong>${caraterística.toLocaleUpperCase()}</strong>: ${item[caraterística]}`;
        variavel++;
      }
    }
    varImprimirRelatorioAuto++;
  }
}

const imprimirEstoque = () => imprimirRelatorioAuto(estoque);
const imprimirDescarte = () => imprimirRelatorioAuto(descarte);

const procuraElementoEstoque = () => {
  imprimirRelatorioAuto(procuraString(estoque, document.getElementById("procura").value.trim()));
};

const limparPesquisaEstoque = () => {
  const arr = [...document.getElementsByClassName("conteiner-produtos")];
  const cont = arr.length;
  for (let s = 0; s<cont ; s++) {
    arr[s].remove();
  }

  imprimirRelatorioAuto(estoque)
}

const procuraElementoDescarte = () => {
  imprimirRelatorioAuto(procuraString(descarte, document.getElementById("procura").value.trim()));
};

const limparPesquisaDescarte = () => {
  const arr = [...document.getElementsByClassName("conteiner-produtos")];
  const cont = arr.length;
  for (let s = 0; s<cont ; s++) {
    arr[s].remove();
  }

  imprimirRelatorioAuto(descarte)
}

function cadastroItem(){
  let item = {};
  
  item.nome = (document.getElementById("nome").value)
  item.marca = (document.getElementById("marca").value)
  item.preco = Number(document.getElementById("preco").value)
  item.quantidade = Number(document.getElementById("quantidade").value)
  item.validade = new Date(document.getElementById("validade").value)
  item.tipo = String(document.getElementById("tipo").value)
  item.img = (document.getElementById("img").value)
  item.link = (document.getElementById("link").value)

  // console.log(item)
  agruparItensComValidadeBoaOuNaoEmArrays(item)
  // console.log(estoque)
  }

