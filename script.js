const material1 = "Aço 304";
const class1 = 304;
const disponibilidade1 = true;

const material2 = "Aço 316";
const class2 = 316;
const disponibilidade2 = false;

const material3 = "Aço 1020";
const class3 = 1020;
const disponibilidade3 = true;

const media = (class1 + class2 + class3)/3
console.log(media);

const disponibilidade = disponibilidade1 && disponibilidade2 && disponibilidade3;
console.log(disponibilidade);
