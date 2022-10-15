const pacote1 = {
  tipo: "bustos",
  valor: 120.0,
  estoque: true,
  pecas: ["Batman", "Walter", "CR7"],
};

const pacote2 = {
  tipo: "brinquedos",
  valor: 115.0,
  estoque: true,
  pecas: ["salamandra", "polvo", "cobra"],
};

const pacote3 = {
  tipo: "decorativo",
  valor: 180.0,
  estoque: false,
  pecas: ["porta retraro", "vaso", "cinzeiro"],
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

const pacotes = [];

pacote1.estoque
  ? pacotes.push(pacote1)
  : alert("Reserva de Bustos está vazia");
pacote2.estoque
  ? pacotes.push(pacote2)
  : alert("Reserva de Brinquedos está vazia");
pacote3.estoque
  ? pacotes.push(pacote3)
  : alert("Reserva de Decorativas está vazia");

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