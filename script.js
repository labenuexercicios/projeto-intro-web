// exercício 2 transformar itens em objetos

const naruto = {
  nome: "Naruto",
  idade: 32,
  aindaVivo: true,
  principaisJutsus: [
    "Sexy",
    "Multiplos Clones das Sombras",
    "Invocação",
    "Rasengan",
    "Rasen-Shuriken",
  ],
  localImg: "./midia/naruto.jpg",
  localSite: "https://naruto.fandom.com/pt-br/wiki/Naruto_Uzumaki",
};

const minato = {
  nome: "Minato",
  idade: 24,
  aindaVivo: false,
  principaisJutsus: [
    "Rasengan",
    "Invocação",
    "Clones das sombras",
    "Tecnica de Selamento",
    "Hiraishin",
  ],
  localImg: "./midia/minato.jpg",
  localSite: "https://naruto.fandom.com/pt-br/wiki/Minato_Namikaze",
};

const kakashi = {
  nome: "Kakashi",
  idade: 47,
  aindaVivo: true,
  principaisJutsus: [
    "Dedo secreto da aldeia da folha: Mil anos de morte",
    "multiplos clones das sombras",
    "Rasengan",
    "Chidori",
    "Raikiri",
    "Sharingan",
  ],
  localImg: "./midia/kakashi.jpg",
  localSite: "https://naruto.fandom.com/pt-br/wiki/Kakashi_Hatake",
};
const itachi = {
  nome: "Itachi",
  idade: 21,
  aindaVivo: false,
  principaisJutsus: [
    "Izanami",
    "Kotoamatsukami",
    "Tsukiyomi",
    "Susanoo",
    "Amaterasu",
  ],
  localImg: "./midia/itachi.jpg",
  localSite: "https://naruto.fandom.com/pt-br/wiki/Itachi_Uchiha",
};

// exercício 1, media de idade dos personagens e verificação booleana
const mediaIdade =
  (naruto.idade + minato.idade + kakashi.idade + itachi.idade) / 4;
console.log("A média das idades dos personagens é: ", mediaIdade);
const todosVivos =
  naruto.aindaVivo && minato.aindaVivo && kakashi.aindaVivo && itachi.aindaVivo;
console.log("Todos personagens ainda estão vivos? ", todosVivos);

// Exercício 3 adicionar os itens em um array vazio
// const arrayDosVivos = [];
// Exercício 4 fazer uma condição para adicionar os itens com valor booleano true
// let verificaVivo = (obj) => {
//   if (obj.aindaVivo) {
//     arrayDosVivos.push(obj);
//   } else {
//     alert(`O Objeto ${obj.nome} não foi adicionado ao array`);
//   }
// };

// verificaVivo(naruto);
// verificaVivo(kakashi);
// verificaVivo(minato);
// verificaVivo(itachi);

//exercício 5
// for (let i in arrayDosVivos) {
//   let str = ``;
//   for (j of arrayDosVivos[i].principaisJutsus) {
//     str += `${j},`;
//   }
//   console.log(
//     `Nome: ${arrayDosVivos[i].nome.toUpperCase()} \nIdade: ${
//       arrayDosVivos[i].idade
//     }\nAinda está vivo? ${
//       arrayDosVivos[i].aindaVivo
//     }\nPrincipais Jutsus: ${str}`
//   );
// }
//exercício 6.1
// const relatorio = (obj) => {
//   let str = `Nome: ${obj.nome.toUpperCase()}\nIdade: ${
//     obj.idade
//   }\nAinda está vivo? ${obj.aindaVivo}\nPrincipais Jutsus: ${
//     obj.principaisJutsus
//   }`;
//   console.log(str);
// };
// relatorio(naruto);
// relatorio(minato);
// relatorio(kakashi);
// relatorio(itachi);

// exercícios 6.2

// const funcaoFiltro = (array, string) => {
//   let novoArray = [];
//   for (i in array) {
//     for (j in array[i]) {
//       if (array[i][j] === string) {
//         novoArray.push(array[i]);
//         return array[i];
//       }
//     }
//   }
//   if (novoArray.length === 0) {
//     alert("Nenhum item foi encontrado!");
//   }
// };
// console.log(funcaoFiltro(arrayDosVivos, "Kakashi"));
// console.log(funcaoFiltro(arrayDosVivos, "Naruto"));
// console.log(funcaoFiltro(arrayDosVivos, "Itachi"));

const arrayDeTodos = [naruto,minato,kakashi,itachi]

// DOM

function criarLista(obj) {
  let div = document.getElementById("personagens");
  for (let i = 0; i < obj.length; i++) {
    let sessao = document.createElement("section");
    let ul = document.createElement("ul");
    let link = document.createElement("a");
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let imagem = document.createElement("img");
    sessao.classList.add("sessao" + (i + 1));
    ul.classList.add("lista");
    link.setAttribute("target", "_blank");
    link.setAttribute("href", obj[i].localSite);
    link.innerHTML = `${obj[i].nome.toUpperCase()}`;
    imagem.setAttribute("src", obj[i].localImg);
    li1.innerHTML = `Nome: `;
    li2.innerHTML = `Idade: ${obj[i].idade} anos`;
    li3.innerHTML = obj[i].aindaVivo ? `Ainda Vivo: Sim` : `Ainda Vivo: Não`;
    li4.innerHTML = `Principais Jutsus: ${obj[i].principaisJutsus}`;
    li1.appendChild(link);
    ul.appendChild(imagem);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    sessao.appendChild(ul);
    div.insertAdjacentElement("beforeend", sessao);
    sessao.insertAdjacentElement('afterbegin', imagem)
  }
}
criarLista(arrayDeTodos);

const funcaoFiltro = (obj, string) => {
    for (i in obj) {
      for (j in obj[i]) {
        if (obj[i][j] === string) {
            let main = document.getElementById('main')
            let div = document.createElement('div')
            let sessao = document.createElement("section");
            let ul = document.createElement("ul");
            let link = document.createElement("a");
            let li1 = document.createElement("li");
            let li2 = document.createElement("li");
            let li3 = document.createElement("li");
            let li4 = document.createElement("li");
            let imagem = document.createElement("img");
            sessao.classList.add("sessao1");
            ul.classList.add("lista");
            div.setAttribute('id', 'personagens')
            link.setAttribute("target", "_blank");
            link.setAttribute("href", obj[i].localSite);
            link.innerHTML = `${obj[i].nome.toUpperCase()}`;
            imagem.setAttribute("src", obj[i].localImg);
            li1.innerHTML = `Nome: `;
            li2.innerHTML = `Idade: ${obj[i].idade} anos`;
            li3.innerHTML = obj[i].aindaVivo ? `Ainda Vivo: Sim` : `Ainda Vivo: Não`;
            li4.innerHTML = `Principais Jutsus: ${obj[i].principaisJutsus}`;
            li1.appendChild(link);
            ul.appendChild(imagem);
            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
            sessao.appendChild(ul);
            div.appendChild(sessao);
            main.appendChild(div)
            sessao.insertAdjacentElement('afterbegin', imagem)
            main.insertAdjacentElement('beforeend', div)
        }
      }
    }
  };

function buscar(event){
    event.preventDefault()
    let input = document.getElementById('input').value;
    if(input === ""){
        alert('Digite alguma coisa para que a busca aconteça!')
    }else{
        document.getElementById('personagens').remove()
        funcaoFiltro(arrayDeTodos,input)
    }
}
