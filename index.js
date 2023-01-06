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

const filamento3 = {
  tipo: "3d lab dual color azul/roxo",
  valor: 180.0,
  estoque: false,
  pecas: ["Dragao", "Salamandra", "Cobra"],
};
// if (filamento1.estoque === true) {
//   filamentos.push(filamento1);
// } else {
//   alert("comprar filamento 3d prime ht branco");
// }

// if (filamento2.estoque === true) {
//   filamentos.push(filamento2);
// } else {
//   alert("comprar filamento voolt preto padrão");
// }

// if (filamento3.estoque === true) {
//   filamentos.push(filamento3);
// } else {
//   alert("Comprar filamento dual color azul/roxo");
// }

const filamentos = [];

filamento1.estoque
  ? filamentos.push(filamento1)
  : alert("Comprar Filamentom 3D Prime HT Branco");
filamento2.estoque
  ? filamentos.push(filamento2)
  : alert("Comprar Filamento Voolt Preto");
filamento3.estoque
  ? filamentos.push(filamento3)
  : alert("Comprar Filamento 3D Lab Dual Color Azul e Roxo");

// console.log(filamentos);

// for (i = 0; i < filamentos.length; i += 1) {
//   console.log(filamentos[i].pecas.toString());
// }

// filamentos.map((item, index, array) => {
//   const { tipo, valor, estoque, pecas } = item;
//   return console.log({
//     tipo,
//     valor,
//     estoque,
//     pecas: pecas.join(", "),
//   });
// });

// console.log(`
//   tipo: ${filamento1.tipo}
//   valor: ${filamento1.valor}
//   estoque: ${filamento1.estoque}
//   pecas: ${filamento1.pecas.join(", ")}
// `);

// console.log(`
//   tipo: ${filamento2.tipo}
//   valor: ${filamento2.valor}
//   estoque: ${filamento2.estoque}
//   pecas: ${filamento2.pecas.join(", ")} 
// `);

// console.log(`
//   tipo: ${filamento3.tipo}
//   valor: ${filamento3.valor}
//   estoque: ${filamento3.estoque}
//   pecas: ${filamento3.pecas.join(", ")}
// `);

filamentos.push("filamentos")
function relatorio() {
  for (fill of filamentos) {
    console.log(fill)
  }
}

relatorio()