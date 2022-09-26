const filamento1 = {
  tipo: "3d prime ht branco",
  valor: 120.0,
  estoque: true,
  pecas: ["Munny", "Walter", "Caveira"],
};

const filamento2 = {
  tipo: "voolt preto padrão",
  valor: 115.0,
  estoque: true,
  pecas: ["Alien", "Munny", "Batman"],
};

const filamento3 = {tipo: "3d lab dual color azul/roxo",
valor: 180.0,
estoque3: false,
pecas: ["Dragao", "Salamandra", "Cobra"],
}

const filamentos = []

if (filamento1.estoque === true) {
    filamentos.push(filamento1)
} else { 
    alert ("comprar filamento 3d prime ht branco")
}

if (filamento2.estoque === true) {
    filamentos.push(filamento2)
} else {
    alert ("comprar filamento voolt preto padrão")
}

if (filamento3.estoque3 === true) {
    filamentos.push(filamento3)
} else {
    alert ("Comprar filamento dual color azul/roxo")
}

console.log(filamentos)

// const valorMedio = (valor1 + valor2 + valor3) / 3;
// console.log(valorMedio);

// const estoqueFull = estoque1 && estoque2 && estoque3;

//console.log(estoqueFull);

// console.log(
//   "Filamento: " +
//     filamento3.toUpperCase() +
//     "\nValor: " +
//     valor3 +
//     "\nEstoque: " +
//     estoque3 +
//     "\nProjetos: " +
//     pecas3
// );
