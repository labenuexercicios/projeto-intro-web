const filamento1 = "3d prime ht branco";
const valor1 = 120.0;
const estoque1 = true;
const pecas1 = ["Munny", "Walter", "Caveira"];

const filamento2 = "voolt preto padrão";
const valor2 = 115.0;
const estoque2 = true;
const pecas2 = ["Alien", "Munny", "Batman"]

const filamento3 = "3d lab dual color azul/roxo";
const valor3 = 180.0;
const estoque3 = false;
const pecas3 = ["Dragao", "Salamandra", "Cobra"]

const valorMedio = (valor1 + valor2 + valor3) / 3;
console.log(valorMedio);

const estoqueFull = estoque1 && estoque2 && estoque3;

console.log(estoqueFull);

console.log("Filamento: " + filamento3.toUpperCase() + "\nValor: " + valor3 + "\nEstoque: " + estoque3 + "\nProjetos: " + pecas3) 