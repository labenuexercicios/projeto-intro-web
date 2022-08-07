//CARDÁPIO DE VERÃO CONSULADO CAFÉ

const objeto1 = {
    nome: "Frozen Café Tradicional",
    preco: 16.00,
    gelado: true,
    tamanho: 350,
    sabor:"Tradicional",
    ingredientes:["Frozem artesanal da casa", "expresso duplo", "leite cremoso"]
    }

const objeto2 = {
    nome: "Frozen Café Doce de Leite",
    preco: 17.00,
    gelado: true,
    tamanho: 350,
    sabor:"Doce de Leite",
    ingredientes:["Frozem artesanal doce de leite", "expresso duplo", "leite cremoso"]
    }

const objeto3 = {
    nome: "Frozen Café Limão",
    preco: 18.00,
    gelado: true,
    tamanho: 350,
    sabor:"Limão",
    ingredientes:["Frozem de limão siciliano", "capuccino tradicional"]
    }

const arrayDeObjetos = []
arrayDeObjetos.push(objeto1, objeto2, objeto3)
console.log(arrayDeObjetos);

// console.log("\n",nome1.toUpperCase());
// console.log("Preço:", preco1,"R$");
// console.log("É gelado?", gelado1);
// console.log("Tamanho:", tamanho1,"ml");
// console.log("Sabor:", sabor1);
// console.log("Ingredientes:", ingredientes1);

// console.log("\n",nome2.toUpperCase());
// console.log("Preço:", preco2,"R$");
// console.log("É gelado?", gelado2);
// console.log("Tamanho:", tamanho2,"ml");
// console.log("Sabor:", sabor2);
// console.log("Ingredientes:", ingredientes2);

// console.log("\n",nome3.toUpperCase());
// console.log("Preço:", preco3,"R$");
// console.log("É gelado?", gelado3);
// console.log("Tamanho:", tamanho3,"ml");
// console.log("Sabor:", sabor3);
// console.log("Ingredientes:", ingredientes3);

// const mediaPreco = (preco1 + preco2 + preco3) / 3;
// console.log("\nMedia de Preço:", mediaPreco);

// const saoGelados = gelado1 && gelado2 && gelado3;
// console.log("Todos são gelados?", saoGelados);