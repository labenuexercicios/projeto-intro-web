//Yes, sir! Shoe store.

// ITEM: TÊNIS||SNEAKERS.

let nomeTenis = "Air force 1";   //Exercício 1 e 2
let cor = ["Branco"];
let marca = "Nike";
let tamanho = [38, 39, 40, 41, 42, 43, 44];
let temEstoque = true;
let preco = 950;

let nomeTenis2 = "Air Jordan 1 Chicago";   
let cor2 = ["Branco", "Vermelho", "Preto"];    //Exercício 5
let marca2 = "Nike";
let tamanho2 = [38, 39, 40, 41, 42, 43, 44];
let temEstoque2 = true;
let preco2 = 1300;

let nomeTenis3 = "Dunk Low Retro";   
let cor3 = ["Branco", "Preto"];
let marca3 = "Nike";
let tamanho3 = [38, 39, 40, 41, 42, 43, 44];
let temEstoque3 = true;
let preco3 = 1000;      

let mediaPreco = (preco + preco2 + preco3) / 3;     
console.log("A média do preço é: ", mediaPreco);    ////Exercício 3

console.log("Temos os 3 tênis em estoque ?", temEstoque && temEstoque2 && temEstoque3);  //Exercício 4

nomeUpper1 = nomeTenis.toUpperCase();
console.log(`${nomeUpper1} \nCor: ${cor} \nMarca: ${marca} \nTamanhos: ${tamanho} \nTem no estoque? ${temEstoque} \nPreço: ${preco}`);

nomeUpper2 = nomeTenis2.toUpperCase();
console.log(`${nomeUpper2} \nCor: ${cor2} \nMarca: ${marca2} \nTemanhos: ${tamanho2} \nTem no estoque? ${temEstoque2} \nPreço: ${preco2}`);

nomeUpper3 = nomeTenis3.toUpperCase();
console.log(`${nomeUpper3} \nCor: ${cor3} \nMarca: ${marca3} \nTamanhos: ${tamanho3} \nTem no estoque? ${temEstoque3} \nPreço: ${preco3}`);