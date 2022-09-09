//                                          ((PROJETO-INTRO-SEMANA 2))

//1. Transforme os itens que criamos nas últimas semanas em objetos.

const cadastroCliente1 = {
  cliente: "Carlos",
  anoNascimento: 1988,
  preferencial: false,
  nacionalidade: "BR",
};

const cadastroCliente2 = {
  cliente: "José",
  anoNascimento: 1959,
  preferencial: true,
  nacionalidade: "FR",
};

const cadastroCliente3 = {
  cliente: "Maria",
  anoNascimento: 1960,
  preferencial: false,
  nacionalidade: "IT",
};

const cadastroCliente4 = {
  cliente: "Ana",
  anoNascimento: 1987,
  preferencial: false,
  nacionalidade: "US",
};
//2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;

let inclusaoCliente = [];

//3. Adicione os objetos criados no item 1 ao array de objetos criado no item 2, utilizando o push()
/* 
    inclusaoCliente.push(cadastroCliente1, cadastroCliente2, cadastroCliente3, cadastroCliente4)
        console.log( inclusaoCliente)
*/

// 4. Altere o item “Adicione os novos objetos no array de objetos, utilizando o push()” (item 3),
//para criar uma verificação antes de dar o push. A caraterística booleana do objeto deve ser validada.
//Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;

if (cadastroCliente1.preferencial === true) {
  inclusaoCliente.push(cadastroCliente1);
} else {
  alert(`O item: ${cadastroCliente1.cliente}, não foi adicionado.`);
}

if (cadastroCliente2.preferencial === true) {
  inclusaoCliente.push(cadastroCliente2);
} else {
  alert(`O item ${cadastroCliente2.cliente} não foi adicionado`);
}

if (cadastroCliente3.preferencial === true) {
  inclusaoCliente.push(cadastroCliente3);
} else {
  alert(`O item ${cadastroCliente3.cliente} não foi adicionado`);
}

if (cadastroCliente4.preferencial === true) {
  inclusaoCliente.push(cadastroCliente4);
} else {
  alert(`O item ${cadastroCliente4.cliente} não foi adicionado`);
}

/*
5. Crie uma condição else, que, em caso de valor false na condição acima,
 exiba um **ALERT** avisando para o usuário que o item não foi adicionado, e não faça o push
*/
