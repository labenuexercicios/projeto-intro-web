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
    temEstoque : false,
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

let tenis4 = {
    nome: "Yeezy Boost 350",   
    cor: ["Branco"],
    marca : "Adidas",
    tamanho : [38, 39, 40, 41, 42, 43, 44],
    temEstoque : true,
    preco : 1350
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

if(tenis4.temEstoque){
    meusObjetos.push(tenis4)
} else{
    alert(`O produto ${tenis4.nome} está em falta no estoque!`)
};

//Retirando média de preço dos produtos para colocá-lo em função posteriores

function relatorioObjeto (arrayObjeto) {
    for(i in arrayObjeto) {
        console.log(`Produto ${Number(i)+1} :`, arrayObjeto[i]);
    }
}
console.log(`Você tem ${meusObjetos.length} produtos em estoque, são eles:`)
relatorioObjeto(meusObjetos);                      //Atualizando Relatório dos produtos


function buscarItens (arrayObj, string) {
    for(objeto of arrayObj){
        if(objeto.nome === string){
            return objeto
        }
    }
    return alert(`Seu produto ${string} não foi encontrado!`)
}
console.log("Você buscou por:", buscarItens(meusObjetos, "Yeezy Boost 350"));
console.log("Você buscou por:", buscarItens(meusObjetos, "Tenis daora"));    
//Buscando itens através de função.