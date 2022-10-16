// exercício 2 transformar itens em objetos

const naruto = {
  nome: "naruto",
  idade: 32,
  hokage: true,
  principaisJutsus: ["Sexy", " Multiplos Clones das Sombras", " Rasengan", " Rasen-Shuriken"],
  localImg: "./midia/naruto.jpg",
  localSite: "https://naruto.fandom.com/pt-br/wiki/Naruto_Uzumaki"
};

const minato = {
  nome: "minato",
  idade: 23,
  hokage: true,
  principaisJutsus: ["Rasengan", " Tecnica de Selamento", " Hiraishin"],
  localImg: "./midia/minato.jpg",
  localSite: "https://naruto.fandom.com/pt-br/wiki/Minato_Namikaze"
};

const kakashi = {
  nome: "kakashi",
  idade: 37,
  hokage: true,
  principaisJutsus: ["Multiplos clones das sombras", " Chidori", " Raikiri", " Sharingan"],
  localImg: "./midia/kakashi.jpg",
  localSite: "https://naruto.fandom.com/pt-br/wiki/Kakashi_Hatake"
};
const itachi = {
  nome: "itachi",
  idade: 21,
  hokage: false,
  principaisJutsus: ["Izanami", " Kotoamatsukami", " Tsukiyomi", " Susanoo", " Amaterasu"],
  localImg: "./midia/itachi.jpg",
  localSite: "https://naruto.fandom.com/pt-br/wiki/Itachi_Uchiha"
};

const jiraia = {
  nome: "jiraia",
  idade: 53,
  hokage: false,
  principaisJutsus: ["Goemon", " Hari Jizō", " Kebari Senbon", " Prisão da Boca do Sapo"],
  localImg: "./midia/jiraia.jpg",
  localSite: "https://naruto.fandom.com/pt-br/wiki/Jiraiya"
};

const sasuke = {
  nome: "sasuke",
  idade: 32,
  hokage: false,
  principaisJutsus: ["Chidori", " Amaterasu", " Ame-no-tejikara", " Susano`o"],
  localImg: "./midia/sasuke.jpg",
  localSite: "https://naruto.fandom.com/pt-br/wiki/Sasuke_Uchiha",
};

// DOM

const arrayDeTodos = [naruto, minato, kakashi, itachi, jiraia, sasuke];

function criarLista(obj) {  // Funcção para criar as listas dos itens no HTML com manipilação em DOM.
  let div = document.getElementById("personagens");
  for (let i = 0; i < obj.length; i++) {
    let sessao = document.createElement("section");
    let ul = document.createElement("ul");
    let link = document.createElement("a");
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let imagem = document.createElement("img");
    sessao.classList.add("sessao");
    ul.classList.add("lista");
    link.setAttribute("target", "_blank");
    link.setAttribute("href", obj[i].localSite);
    link.innerHTML = `${obj[i].nome.toUpperCase()}`;
    imagem.setAttribute("src", obj[i].localImg);
    li1.innerHTML = `Nome: `;
    li2.innerHTML = `Idade: ${obj[i].idade} anos`;
    li3.innerHTML = `Principais Jutsus: ${obj[i].principaisJutsus}`;
    li1.appendChild(link);
    ul.appendChild(imagem);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    sessao.appendChild(ul);
    div.insertAdjacentElement("beforeend", sessao);
    sessao.insertAdjacentElement("afterbegin", imagem);
  }
}
criarLista(arrayDeTodos);

const recriar = (obj, string) => {  // Função para criar apenas o item que por pedido pelo input.
  for (i in obj) {
    for (j in obj[i]) {
      if (obj[i][j] === string) {
        let main = document.getElementById("main");
        let div = document.createElement("div");
        let sessao = document.createElement("section");
        let ul = document.createElement("ul");
        let link = document.createElement("a");
        let li1 = document.createElement("li");
        let li2 = document.createElement("li");
        let li3 = document.createElement("li");
        let imagem = document.createElement("img");
        sessao.classList.add("sessao");
        ul.classList.add("lista");
        div.setAttribute("id", "personagens");
        link.setAttribute("target", "_blank");
        link.setAttribute("href", obj[i].localSite);
        link.innerHTML = `${obj[i].nome.toUpperCase()}`;
        imagem.setAttribute("src", obj[i].localImg);
        li1.innerHTML = `Nome: `;
        li2.innerHTML = `Idade: ${obj[i].idade} anos`;
        li3.innerHTML = `Principais Jutsus: ${obj[i].principaisJutsus}`;
        li1.appendChild(link);
        ul.appendChild(imagem);
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        sessao.appendChild(ul);
        div.appendChild(sessao);
        main.appendChild(div);
        sessao.insertAdjacentElement("afterbegin", imagem);
        main.insertAdjacentElement("beforeend", div);
      }
    }
  }
};

function buscar(event) { // função para o evento de click do botão.
  event.preventDefault();
  let input = document.getElementById("input").value.toLowerCase();
  if (input === "") {
    alert("Digite alguma coisa para que a busca aconteça!");
  } else {
    document.getElementById("personagens").remove();
    recriar(arrayDeTodos, input);
  }
}

// exercício 1, media de idade dos personagens e verificação booleana
console.log("------------ IMPRIMINDO MÉDIA DE IDADE -------------")

const mediaIdade = (naruto.idade + minato.idade + kakashi.idade + itachi.idade + jiraia.idade + sasuke.idade) / 6;

console.log("A média das idades dos personagens é: ", mediaIdade);
console.log("------------ IMPRIMINDO VERIFICAÇÃO DOS BOOLEANOS -------------")

const todosHokages = naruto.hokage && minato.hokage && kakashi.hokage && itachi.hokage && jiraia.hokage && sasuke.hokage;

console.log("Todos personagens são Hokages? ", todosHokages);

// Exercício 3 adicionar os itens em um array vazio

const arrayDosHokages = [];

// Exercício 3 fazer uma condição para adicionar os itens com valor booleano true

const verificaHokage = (obj) => {
  if (obj.hokage) {
    arrayDosHokages.push(obj);
  } else {
    alert(`O Objeto ${obj.nome} não foi adicionado ao array`);
  }
};

verificaHokage(naruto);
verificaHokage(kakashi);
verificaHokage(minato);
verificaHokage(itachi);
verificaHokage(jiraia);
verificaHokage(sasuke);

// exercício 5 imprimindo relatório dos itens com valor true
console.log("------------ IMPRIMINDO RELATÓRIO DOS ITENS COM VALOR TRUE -------------")

for (let i in arrayDosHokages) {
  let str = ``;
  for (j of arrayDosHokages[i].principaisJutsus) {
    str += `${j},`;
  }
  console.log(
    `Nome: ${arrayDosHokages[i].nome.toUpperCase()} \nIdade: ${
      arrayDosHokages[i].idade
    }\nAinda está Hokage? ${
      arrayDosHokages[i].hokage
    }\nPrincipais Jutsus: ${str}`
  );
}
// exercício 6.1 imprimindo relatório individual de cada item.
const relatorio = (obj) => {
  let str = `Nome: ${obj.nome.toUpperCase()}\nIdade: ${
    obj.idade
  }\nAinda está Hokage? ${obj.hokage}\nPrincipais Jutsus: ${
    obj.principaisJutsus
  }`;
  console.log(str);
};
console.log("------------ IMPRIMINDO RELATÓRIO INDIVIDUAL DE CADA ITEM -------------")

relatorio(naruto);
relatorio(minato);
relatorio(kakashi);
relatorio(itachi);
relatorio(jiraia);
relatorio(sasuke);

// exercícios 6.2 filtrando e imprimindo o objeto, conforme os parâmetros passados.

const funcaoFiltro = (array, string) => {
  let novoArray = [];
  for (let i in array) {
    for (let j in array[i]) {
      if (array[i][j] === string) {
        novoArray.push(array[i]);
        return array[i];
      }
    }
  }
  if (novoArray.length === 0) {
    alert("Nenhum item foi encontrado!");
  }
};
console.log("------------ IMPRIMINDO CONFORME PARÂMETRO PASSADO -------------")
console.log(funcaoFiltro(arrayDosHokages, "kakashi"));
console.log(funcaoFiltro(arrayDosHokages, "naruto"));
console.log(funcaoFiltro(arrayDosHokages, "itachi"));
console.log(funcaoFiltro(arrayDosHokages, "minato"));
console.log(funcaoFiltro(arrayDosHokages, "jiraia"));
console.log(funcaoFiltro(arrayDosHokages, "sasuke"));

