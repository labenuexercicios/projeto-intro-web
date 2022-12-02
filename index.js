//Comida

const cardapio = [];

const comida1 = {
  nome: "Pizza",
  descricao: "Uma massa com 'recheio' em cima",
  ingredientes:
    "Farinha de trigo, Água, Sal, Açucar, Fermento biológico, +Recheio opicional",
  preço: 20,
  vegetariano: true,
  sabores: "frango, queijo, carne, outros",
};

const comida2 = {
  nome: "Coxinha de frango",
  descricao: "Uma massa com 'recheio' dentro de frango",
  ingredientes:
    "Farinha de trigo, leite, Caldo de frango, Margarina, +Recheio de frango",
  preço: 5,
  vegetariano: false,
  sabores: "Apenas frango",
};

const comida3 = {
  nome: "Pastel",
  descricao: "Uma massa com recheio dentro",
  ingredientes:
    "Farinha de trigo, Água, sal, Óleo, aguardente, +Recheio opicional",
  preço: 10,
  vegetariano: true,
  sabores: "frango, queijo, carne, outros",
};

cardapio.push(comida1);
cardapio.push(comida2);
cardapio.push(comida3);

const mediaDosPreços =
  (cardapio[0].preço + cardapio[1].preço + cardapio[2].preço) / 3;
console.log("media dos preços: ", mediaDosPreços.toFixed(2));

const vegetariano =
  cardapio[0].vegetariano && cardapio[1].vegetariano && cardapio[2].vegetariano;
console.log("Os três tem opção vegetariano?", vegetariano);

//Para adicionar novos valores:

const add = confirm(
  "você deseja adicionar uma nova comida no cardapio? (sim ou não)"
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

function RetornarIngredientesSabores() {}

for (let indice of cardapio) {
  console.log(indice);
}
