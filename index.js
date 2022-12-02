//Comida

const cardapio = [];

const comida1 = {
  nome: "pizza",
  descricao: "Uma massa com 'recheio' em cima",
  ingredientes:
    "Farinha de trigo, Água, Sal, Açucar, Fermento biológico, +Recheio opicional",
  preço: 20,
  vegetariano: true,
  sabores: "frango, queijo, carne, outros",
};

const comida2 = {
  nome: "coxinha de frango",
  descricao: "Uma massa com 'recheio' dentro de frango",
  ingredientes:
    "Farinha de trigo, leite, Caldo de frango, Margarina, +Recheio de frango",
  preço: 5,
  vegetariano: false,
  sabores: "Apenas frango",
};

const comida3 = {
  nome: "pastel",
  descricao: "Uma massa com recheio dentro",
  ingredientes:
    "Farinha de trigo, Água, sal, Óleo, aguardente, +Recheio opicional",
  preço: 10,
  vegetariano: true,
  sabores: "frango, queijo, carne, outros",
};

cardapio.push(comida1, comida2, comida3);

const mediaDosPreços =
  (cardapio[0].preço + cardapio[1].preço + cardapio[2].preço) / 3;
console.log("media dos preços: ", mediaDosPreços.toFixed(2));

const vegetariano =
  cardapio[0].vegetariano && cardapio[1].vegetariano && cardapio[2].vegetariano;
console.log("Os três tem opção vegetariano?", vegetariano);

//Para adicionar novos valores:
const add = confirm(
  "você deseja adicionar uma nova comida no cardapio? (ok ou cancel)"
);
cardapio.push(adicionarNovaComida(add));

function adicionarNovaComida(add) {
  if (add) {
    const comida = new Object();
    comida.vegetariano = confirm("Essa comida tem opção vegetariana?");
    if (comida.vegetariano) {
      comida.nome = prompt("Nome da comida: ").trim();
      comida.descricao = prompt("Descreva essa comida: ").trim();
      comida.ingredientes = prompt(
        "Coloque todos os ingredientes e separe com virgulas"
      ).trim();
      comida.preço = Number(
        prompt("Insira a média de valor desse produto: ").trim()
      );
      comida.sabores = prompt(
        "Insira os possiveis sabores dessa comida e separa por virgula"
      ).trim();

      return comida;
    } else {
      alert(
        "Não foi possivel adicionar essa comida por não ter opção vegetariana"
      );
    }
  } else {
    return false;
  }
}

//retorna o array de objeto e uma string
const pesquisa = prompt("Qual item você deseja pesquisar?")
  .toLowerCase()
  .trim();

function retornoPesquisa(cardapio, nome) {
  if (nome == cardapio.nome) {
    alert(
      `A comida pesquisada é o: ${cardapio.nome[0].toUpperCase()}${cardapio.nome.substring(
        1
      )}`
    );
  }
}

//retorna os dois valores de um objeto
function retornarIngredientesSabores(cardapio1, cardapio2) {
  console.log("ingredientes :", cardapio1.ingredientes);
  console.log("sabores:", cardapio2.sabores);
}

//console.log dos valores
for (let indice = 0; indice <= cardapio.length - 1; indice++) {
  //cardapio geral
  console.log(`
  
  
  
  -------${cardapio[indice].nome}--------`);
  console.log(cardapio[indice]);

  //strigs com relatório do objeto
  retornarIngredientesSabores(cardapio[indice], cardapio[indice]);

  //chamada da função que retorna a pesquisa
  retornoPesquisa(cardapio[indice], pesquisa);
}
