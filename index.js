//semana 1
//2)
const nome1 = "Banana";
const preco1 = 3.70;
const disponivelEmEstoque1 = true;

const nome2 = "melancia";
const preco2 = 4.00;
const disponivelEmEstoque2 = false;

const nome3 = "melão";
const preco3 = 6.00;
const disponivelEmEstoque3 = true;

//3)
const precoMedio = (preco1 + preco2 + preco3)/3;
console.log(`O preço médio é: ${precoMedio.toFixed(2)}`);

//4)
const temNoEstoque = disponivelEmEstoque1 && disponivelEmEstoque2 && disponivelEmEstoque3;
console.log(`A verificação é: ${temNoEstoque}`);

//semana 2
//1)
const arrayreceitas1 = ["sorvete", " bolo", " panqueca", " pudim"]

const arrayreceitas2 = ["mojito", " caipirinha", " batida", " margarita"]

const arrayreceitas3 = ["sopa", " sorvete", " smoothie", " picolé"]

//2)
console.log(`
    ${nome1.toUpperCase()}
    Preço em São Paulo: ${preco1} reais o kg
    É a mais consumida no Brasil? ${disponivelEmEstoque1}
    Possíveis receitas: ${arrayreceitas1}
`)

console.log(`
    ${nome2.toUpperCase()}
    Preço em São Paulo: ${preco2} reais o kg
    Está disponível em estoque? ${disponivelEmEstoque2}
    Possíveis receitas: ${arrayreceitas2}
`)

console.log(`
    ${nome3.toUpperCase()}
    Preço em São Paulo: ${preco3} reais o kg
    É a mais consumida no Brasil? ${disponivelEmEstoque3}
    Possíveis receitas: ${arrayreceitas3}
`)