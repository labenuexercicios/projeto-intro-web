//CARDÁPIO DE VERÃO CONSULADO CAFÉ

const nome1 = "Frozen Café Tradicional";
const preco1 = 16.00;
const gelado1 = true;
const tamanho1 = 350;
const sabor1 = "Tradicional";
const ingredientes1 = ["Frozem artesanal da casa", "expresso duplo", "leite cremoso"]

const nome2 = "Frozen Café Doce de Leite";
const preco2 = 17.00;
const gelado2 = true;
const tamanho2 = 350;
const sabor2 = "Doce de Leite";
const ingredientes2 = ["Frozem artesanal doce de leite", "expresso duplo", "leite cremoso"]

const nome3 = "Frozen Café Limão";
const preco3 = 18.00;
const gelado3 = true;
const tamanho3 = 350;
const sabor3 = "Limão";
const ingredientes3 = ["Frozem de limão siciliano", "capuccino tradicional"]

console.log("\n",nome1.toUpperCase());
console.log("Preço:", preco1,"R$");
console.log("É gelado?", gelado1);
console.log("Tamanho:", tamanho1,"ml");
console.log("Sabor:", sabor1);
console.log("Ingredientes:", ingredientes1);

console.log("\n",nome2.toUpperCase());
console.log("Preço:", preco2,"R$");
console.log("É gelado?", gelado2);
console.log("Tamanho:", tamanho2,"ml");
console.log("Sabor:", sabor2);
console.log("Ingredientes:", ingredientes2);

console.log("\n",nome3.toUpperCase());
console.log("Preço:", preco3,"R$");
console.log("É gelado?", gelado3);
console.log("Tamanho:", tamanho3,"ml");
console.log("Sabor:", sabor3);
console.log("Ingredientes:", ingredientes3);

const mediaPreco = (preco1 + preco2 + preco3) / 3;
console.log("\nMedia de Preço:", mediaPreco);

const saoGelados = gelado1 && gelado2 && gelado3;
console.log("Todos são gelados?", saoGelados);