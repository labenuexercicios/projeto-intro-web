//Declaração da lista de criaturas domésticas e lista total de criaturas
let criaturasDomesticas = [];
let criaturas = [];
//Criação dos objetos correspondentes às criaturas existentes na base de dados
criatura1 = {
  nome: "Centauro",
  habitat: "Floresta Proibida",
  alturaMedia: 2.1,
  domesticavel: false,
  habilidades: ["Cura", "arco e flecha", "adivinhação", "velocidade", "força"],
};
criatura2 = {
  nome: "Hipogrifo",
  habitat: "Campos abertos (Europa)",
  alturaMedia: 2.5,
  domesticavel: true,
  habilidades: ["Vôo", "velocidade", "força"],
};
criatura3 = {
  nome: "Testrálio",
  habitat: "Florestas",
  alturaMedia: 2.4,
  domesticavel: true,
  habilidades: ["Vôo", "invisibilidade"],
};
criatura4 = {
  nome: "Agoureiro",
  habitat: "Arbustos de espinhos nas florestas",
  alturaMedia: 0.4,
  domesticavel: true,
  habilidades: ["Vôo", "previsão de chuvas"],
};
criatura5 = {
  nome: "Elfo doméstico",
  habitat: "Casas de antigas famílias de bruxos",
  alturaMedia: 0.9,
  domesticavel: true,
  habilidades: ["Conjurar feitiços sem uma varinha", "aparatar"],
};
criatura6 = {
  nome: "Fênix",
  habitat: "Picos de montanhas",
  alturaMedia: 1.0,
  domesticavel: true,
  habilidades: ["Lágrimas curativas", "renascer", "aparatar", "vôo"],
};
criatura7 = {
  nome: "Nundu",
  habitat: "Florestas da Tanzânia - África Oriental",
  alturaMedia: 3.0,
  domesticavel: false,
  habilidades: ["Respiração tóxica", "velocidade", "força"],
};
criatura8 = {
  nome: "Basilisco",
  habitat: "Desconhecido",
  alturaMedia: 6.0,
  domesticavel: false,
  habilidades: ["Veneno mortal", "petrificação", "força"],
};
//Função que insere um a criatura na lista de criaturas,
//além de transformar o array de habilidades em uma string (texto)
const insereList = (criatura) => {
  const habilidadesCopy = [...criatura.habilidades]
  criatura.habilidades = "";
  habilidadesCopy.forEach((habilidade, index) => {
    index !== habilidadesCopy.length - 1
      ? (criatura.habilidades += habilidade + ", ")
      : (criatura.habilidades += habilidade + ".");
  });
  criaturas.push(criatura);
};
//Função que recebe uma lista de criaturas e retorna um relatório com todas as criaturas da lista
const textConstruct = (criaturas) => {
  let texto = "";

  criaturas.forEach(function (criatura) {
    texto += `${criatura.nome.toUpperCase()}\nHabitat: ${
      criatura.habitat
    }.\nAltura Média: ${criatura.alturaMedia} m.\n`;

    criatura.domesticavel
      ? (texto += "Domesticável? Sim.\nHabilidades: ")
      : (texto += "Domesticável? Não.\nHabilidades: ");

    texto += criatura.habilidades + "\n\n";
  });

  return texto;
};

//Função que recebe uma lista de objetos e uma entrada de texto e retorna o objeto que tiver uma de suas propriedades igual ao texto enviado para a função
const search = (list, input) => {
  for (object of list){
    for (property in object){
      if(object[property] == input){
        return object
      }
    }
  }
  return 'Criatura não encontrada'
}

//Utiliza a função insereList para inserir cada criatura criada na lista de criaturas
insereList(criatura1);
insereList(criatura2);
insereList(criatura3);
insereList(criatura4);
insereList(criatura5);
insereList(criatura6);
insereList(criatura7);
insereList(criatura8);

//Cria uma lista apenas das criaturas domesticáveis a partir da lista total de criaturas
criaturasDomesticas = criaturas.filter(criatura => criatura.domesticavel)

// console.log(
//   "\n\nCriaturas Domesticáveis: \n\n" + textConstruct(criaturasDomesticas)
// );

// console.log("\n\nTotal de Criaturas: \n\n" + textConstruct(criaturas));

console.log (search(criaturas, 'Elfo doméstico'))