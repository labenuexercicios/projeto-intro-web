objeto1 = {
    material: "Aço AISI 304",
    numeroClassificação: 304,
    disponibilidade: true,
    caracteristicas: ['resistência a corrosão', 'boa resistência mecânica', 'resistência a alta temperatura']
}

objeto2 = {
    material: "Aço 316",
    numeroClassificação: 316,
    disponibilidade: true,
    caracteristicas: ['resistência a corrosão', 'excelente desempenho em meio salino', 'propriedades não magnéticas']
}

objeto3 = {
    material: "Aço 1020",
    numeroClassificação: 316,
    disponibilidade: true,
    caracteristicas: ['baixa temperabilidade', 'boa forjabilidade', 'baixa resistência mecânica']
}

const dados = [];
dados.push(objeto1);
dados.push(objeto2);
dados.push(objeto3);

console.log(`Material: ${material1}
Classificação: ${class1}
Disponibilidade: ${disponibilidade1}
Características: ${caracteristicas1}`);

console.log(`Material: ${material2}
Classificação: ${class2}
Disponibilidade: ${disponibilidade2}
Características: ${caracteristicas2}`);

console.log(`Material: ${material3}
Classificação: ${class3}
Disponibilidade: ${disponibilidade3}
Características: ${caracteristicas3}`);

const media = (class1 + class2 + class3) / 3
console.log(media);

const disponibilidade = disponibilidade1 && disponibilidade2 && disponibilidade3;
console.log(disponibilidade);
