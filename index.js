//1. Transforme os itens que criamos nas últimas semanas em objetos.
const item1 = {
  nome: "Macarrão",
  marca: "Amália",
  precoVenda: 2.89,
  quantidade: 2000,
  vencido: false,
  tipo: ["Penne", "Grande"],
};

const item2 = {
  nome: "Arroz",
  marca: "Tio João",
  precoVenda: 26.99,
  quantidade: 300,
  vencido: false,
  tipo: ["Branco", "Pequeno"],
};

const item3 = {
  nome: "Feijão",
  marca: "Supang",
  precoVenda: 6.99,
  quantidade: 5000,
  vencido: true,
  tipo: ["Vermelho", "Grande"],
};

//2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;
let estoque = [];
let descarte = [];

//3. Adicione os objetos criados no item 1 ao array de objetos criado no item 2, utilizando o push()

//4. Altere o item “Adicione os novos objetos no array de objetos, utilizando o push()” (item 3), para criar uma verificação antes de dar o push. A caraterística booleana do objeto deve ser validada. Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;

//5. Crie uma condição else, que, em caso de valor false na condição acima, exiba um **ALERT** avisando para o usuário que o item não foi adicionado, e não faça o push

function agruparItensComValidadeBoaOuNaoEmArrays(objeto) {
  if (!objeto.vencido) {
    estoque.push(objeto);
  } else {
    alert(
      `O item ${objeto.nome.toLocaleUpperCase()} não pode ser adicionado ao estoque, pois está vencido. O item foi adicionado na fila de descarte!`
    );
    descarte.push(objeto);
  }
}
function imprimeRelatorio(array, string) {
  console.log(`::::::::::     ${string.toLocaleUpperCase()}     ::::::::::`);
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
function devolveString(objeto) {
  return objeto.tipo;
}
function procuraString(arrayDeObj, string) {
  let obj = {};
  let j = 0;
  for (let i in arrayDeObj) {
    if (arrayDeObj[i].nome.toLocaleUpperCase() === string.toLocaleUpperCase()) {
      obj = {
        ...arrayDeObj[i],
      };
      j++;
    }
  }
  if (j === 0) {
    alert(`O item ${string} buscado não foi encontrado!`);
    return;
  }
  return obj;
}

agruparItensComValidadeBoaOuNaoEmArrays(item1);
agruparItensComValidadeBoaOuNaoEmArrays(item2);
agruparItensComValidadeBoaOuNaoEmArrays(item3);

imprimeRelatorio(estoque, "estoque");
imprimeRelatorio(descarte, "descarte");

console.log(`Tipo: ${devolveString(estoque[0])}`);

console.log(procuraString(estoque, "feijão"));
