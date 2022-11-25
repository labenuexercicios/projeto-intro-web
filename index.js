//Comida

const nomeDaComida = "Pizza";
const descricao = "Uma massa com 'recheio' em cima";
const ingredientes = [
  "Farinha de trigo",
  "Água",
  "Sal",
  "Açucar",
  "Fermento biológico",
  "+Recheio opicional",
];
const preço = 20;
const vegetariano1 = true;
const sabores1 = ["frango", "queijo", "carne", "outros"];

const nomeDaComida2 = "Coxinha de frango";
const descricao2 = "Uma massa com 'recheio' dentro de frango";
const ingredientes2 = [
  "Farinha de trigo",
  "leite",
  "Caldo de frango",
  "Margarina",
  "+Recheio de frango",
];
const preço2 = 5;
const vegetariano2 = false;
const sabores2 = ["Apenas frango"];

const nomeDaComida3 = "Pastel";
const descricao3 = "Uma massa com recheio dentro";
const ingredientes3 = [
  "Farinha de trigo",
  "Água",
  "Sal",
  "Óleo",
  "aguardente",
  "+Recheio opicional",
];
const preço3 = 10;
const vegetariano3 = true;
const sabores3 = ["frango", "queijo", "carne", "outros"];

const mediaDosPreços = (preço + preço2 + preço3) / 3;
console.log("media dos preços: ", mediaDosPreços.toFixed(2));

const vegetariano = vegetariano1 && vegetariano2 && vegetariano3;
console.log("Os três são vegetariano?", vegetariano);

console.log(`Nome: ${nomeDaComida}
Descrição: ${descricao}
Ingredientes: ${ingredientes}
Preço: ${preço}
Tem opção vegetariana? ${vegetariano1}
Sabores: ${sabores1}

Nome: ${nomeDaComida2}
Descrição: ${descricao2}
Ingredientes: ${ingredientes2}
Preço: ${preço2}
Tem opção vegetariana? ${vegetariano2}
Sabores: ${sabores2}

Nome: ${nomeDaComida3}
Descrição: ${descricao3}
Ingredientes: ${ingredientes3}
Preço: ${preço3}
Tem opção vegetariana? ${vegetariano3}
Sabores: ${sabores3}`);
