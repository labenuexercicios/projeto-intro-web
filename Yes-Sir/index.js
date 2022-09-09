//Yes, sir! Shoe store.

// ITEM: TÊNIS||SNEAKERS.

let tenis1 = {
    nome: "Air force 1",                //Adicionando Objetos
    cor : "Branco",
    marca: "Nike",
    tamanho: [38, 39, 40, 41, 42, 43, 44],
    temEstoque: true,
    preco: 950
};

let tenis2 = {
    nome : "Air Jordan 1 Chicago",   
    cor : ["Branco", "Vermelho", "Preto"],    
    marca : "Nike",
    tamanho : [38, 39, 40, 41, 42, 43, 44],
    temEstoque : true,
    preco : 1300
};

let tenis3 = {
    nome: "Dunk Low Retro",   
    cor: ["Branco", "Preto"],
    marca : "Nike",
    tamanho : [38, 39, 40, 41, 42, 43, 44],
    temEstoque : true,
    preco : 1000
};

let meusObjetos = [];               //Adicionando objetos ao array verificando booleanos

if(tenis1.temEstoque){
    meusObjetos.push(tenis1)
} else{
    alert(`O produto ${tenis1.nome} está em falta no estoque!`)
};

if(tenis2.temEstoque){
    meusObjetos.push(tenis2)
} else{
    alert(`O produto ${tenis2.nome} está em falta no estoque!`)
};

if(tenis3.temEstoque){
    meusObjetos.push(tenis3)
} else{
    alert(`O produto ${tenis3.nome} está em falta no estoque!`)
};

console.log(meusObjetos);

let mediaPreco = (tenis1.preco + tenis2.preco + tenis3.preco) / meusObjetos.length
console.log("A média de preço dos tênis é", mediaPreco);   //Atualizando Média de Preço do produto