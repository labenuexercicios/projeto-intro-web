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

//5)
const arrayreceitas1 = ["sorvete", " bolo", " panqueca", " pudim"]

const arrayreceitas2 = ["mojito", " caipirinha", " batida", " margarita"]

const arrayreceitas3 = ["sopa", " sorvete", " smoothie", " picolé"]

//6)
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

//semana 2
//1)
objeto1 = {
    nome: "banana",
    preço: 3.70,
    disponivelEmEstoque: true
}

objeto2 = {
    nome: "melancia",
    preço: 4.00,
    disponivelEmEstoque: false
}

objeto3 = {
    nome: "melão",
    preço: 6.00,
    disponivelEmEstoque: false
}

//2)
const arrayDeObjetos = []

//3)
arrayDeObjetos.push(objeto1, objeto2, objeto3)
console.log(arrayDeObjetos)

//4 e 5)
if(objeto1.disponivelEmEstoque === true){
    arrayDeObjetos.push(objeto1)
} else {
    alert("Item 1 não adicionado")
}

if(objeto2.disponivelEmEstoque === true){
    arrayDeObjetos.push(objeto2)
} else {
    alert("Item 2 não adicionado")
}

if(objeto3.disponivelEmEstoque === true){
    arrayDeObjetos.push(objeto3)
} else {
    alert("Item 3 não adicionado")
}

console.log(arrayDeObjetos)