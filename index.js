let criaturasDomesticas = [];
let totalCriaturas = [];

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

const insereListDomesticos = (criatura) => {
  criatura.domesticavel === true
    ? criaturasDomesticas.push(criatura)
    : alert(
        `Não domesticável, ${criatura.nome} não foi inserido na lista de criaturas domesticáveis!!`
      );
};

const insereListTotal = (criatura) => {
  totalCriaturas.push(criatura);
};

const textConstruct = (criaturas) => {
  let texto = "";

  criaturas.forEach(function (criatura) {
    texto += `${criatura.nome.toUpperCase()}\nHabitat: ${
      criatura.habitat
    }.\nAltura Média: ${criatura.alturaMedia} m.\n`;

    criatura.domesticavel
      ? (texto += "Domesticável? Sim.\nHabilidades: ")
      : (texto += "Domesticável? Não.\nHabilidades: ");

    criatura.habilidades.forEach(function (habilidade, index) {
      index !== criatura.habilidades.length - 1
        ? (texto += habilidade + ", ")
        : (texto += habilidade + ".");
    });

    texto += "\n\n";
  });

  return texto;
};

insereListDomesticos(criatura1);
insereListDomesticos(criatura2);
insereListDomesticos(criatura3);
insereListDomesticos(criatura4);
insereListDomesticos(criatura5);
insereListDomesticos(criatura6);
insereListDomesticos(criatura7);
insereListDomesticos(criatura8);

insereListTotal(criatura1);
insereListTotal(criatura2);
insereListTotal(criatura3);
insereListTotal(criatura4);
insereListTotal(criatura5);
insereListTotal(criatura6);
insereListTotal(criatura7);
insereListTotal(criatura8);

console.log(
  "\n\nCriaturas Domesticáveis: \n\n" + textConstruct(criaturasDomesticas)
);

console.log("\n\nTotal de Criaturas: \n\n" + textConstruct(totalCriaturas));
