//SEMANA01
  //ITEM 01 
    //Crie um conjunto de variaveis com pelo menos uma string, um number e um boleano
  //ITEM 02
    //Crei tres conjuntos de variaveis utilizando as mesmas caracteristica do item 01
  //ITEM 05
    //Crie mais uma caracteristica e ela deve ser um array
//SEMANA02
  //ITEM 01
    //Transforme os itens que criamos nas últimas semanas em objetos
const caça1 = {
  nome: "Eurofighter Typhoon",
  velocidade: 2500,
  furtividade: false,
  operadores: ["Reino Unido", "Alemanha", "Arábia Saudita", "Itália", "Espanha"],
};

const caça2 = {
  nome: "JAS 39 Gripen",
  velocidade: 1400,
  furtividade: false,
  operadores: ["Brasil", "Africa de Sul", "Hungria", "Suécia", "Tailândia"],
};

const caça3 = {
  nome: "F-22 Raptor",
  velocidade: 2400,
  furtividade: true,
  operadores: ["Estados unidos", "Holanda", "Canadá", "Turquia", "Austrália"],
};

  //ITEM 03
    //Crie uma variavel com a media dos valores number dos seus conjuntos de variaveis
const velocidadeMedia =(caça1.velocidade + caça2.velocidade + caça3.velocidade) / 3;
console.log(`A velocidade media dos caças é ${velocidadeMedia} km/h.`);

  //ITEM 04
    //Crie uma variavel que verifique os valores booleanos dos seus conjuntos de variaveis
const furtivos = caça1.furtividade && caça2.furtividade && caça3.furtividade;
console.log(`Todos os caças são furtivos? ${furtivos}`);

  //ITEM 06
    //Imprima um relatorio mostrando todos os dados de cada um dos itens criados até aqui
console.log(
  `${caça1.nome.toUpperCase()}
Velocidade: ${caça1.velocidade} km/h.
É furtivo? ${caça1.furtividade}
Paises que possuem este caça: ${caça1.operadores}`
);
console.log(
  `${caça2.nome.toUpperCase()}
Velocidade: ${caça2.velocidade} km/h.
É furtivo? ${caça2.furtividade}
Paises que possuem este caça: ${caça2.operadores}`
);
console.log(
  `${caça3.nome.toUpperCase()}
Velocidade: ${caça3.velocidade} km/h.
É furtivo? ${caça3.furtividade}
Paises que possuem este caça: ${caça3.operadores}`
);

//SEMANA02
  //ITEM 02
    //Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto.
const avioesFurtivos = []

  //ITEM 03
    //Adicione os objetos criados no item 1 ao array de objetos criado no item 2
//avioesFurtivos.push(caça1, caça2, caça3)

  //ITEM 04
    //Altere o item 04 para criar uma verificação se a propriedade booleana é valida antes de adicionar
  //ITEM 05
    //Crie uma verificação se a propriedade booleana não é valida e exiba um alert avisando para o usuário que o item não foi adicionado
caça1.furtividade ? avioesFurtivos.push(caça1) : alert("caça 01 nao é futivo")
caça2.furtividade ? avioesFurtivos.push(caça2) : alert("caça 02 nao é futivo")
caça3.furtividade ? avioesFurtivos.push(caça3) : alert("caça 03 nao é futivo")
console.log(avioesFurtivos)




