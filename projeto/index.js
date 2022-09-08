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

const velocidadeMedia =(caça1.velocidade + caça2.velocidade + caça3.velocidade) / 3;
console.log(`A velocidade media dos caças é ${velocidadeMedia} km/h.`);

const furtivos = caça1.furtividade && caça2.furtividade && caça3.furtividade;
console.log(`Todos os caças são furtivos? ${furtivos}`);

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
