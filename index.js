//1. Transforme os itens que criamos nas últimas semanas em objetos.
const item1 = {
  nome1: "Macarrão",
  marca1: "Amália",
  precoCompra1: 2.89,
  vencido1: false,
};

const item2 = {
  nome2: "Arroz",
  marca2: "Tio João",
  precoCompra2: 26.99,
  vencido2: false,
};

const item3 = {
  nome3: "Feijão",
  marca3: "Supang",
  precoCompra3: 6.99,
  vencido3: true,
};

//2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;
let estoque = [];

//3. Adicione os objetos criados no item 1 ao array de objetos criado no item 2, utilizando o push()

//4. Altere o item “Adicione os novos objetos no array de objetos, utilizando o push()” (item 3), para criar uma verificação antes de dar o push. A caraterística booleana do objeto deve ser validada. Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;

//5. Crie uma condição else, que, em caso de valor false na condição acima, exiba um **ALERT** avisando para o usuário que o item não foi adicionado, e não faça o push

if (!item1.vencido1) {
  estoque.push(item1);
} else {
  alert(
    `O item ${item1.nome1.toLocaleUpperCase()} não pode ser adicionado ao estoque, pois está vencido!`
  );
}

if (!item2.vencido2) {
  estoque.push(item2);
} else {
  alert(
    `O item ${item2.nome2.toLocaleUpperCase()} não pode ser adicionado ao estoque, pois está vencido!`
  );
}

if (!item3.vencido3) {
  estoque.push(item3);
} else {
  alert(
    `O item ${item3.nome3.toLocaleUpperCase()} não pode ser adicionado ao estoque, pois está vencido!`
  );
}
