/* 
nome do prato "String"
Tempo de preparo Number
Porcoes Number
Ja fez? Boolean
Tipo String
Avaliação pessoal Number
Ingradientes Object
Modo de preparo Array

*/
const receitas = [];

receita1 = {
    nomeDoPrato: "Camarão na Moranga",
    tempoDePreparo: 90,
    porcoes: 6,
    tipo: "Frutos do mar",
    jaFez: true,
    avaliacaoPessoal: 4.5,
    ingradientes: [
        {
            nomeDoingrediente: "Camarão",
            quantidade: 1,
            medida: "Kg"
        },
        {
            nomeDoingrediente: "Azeite",
            quantidade: 4,
            medida: "Colheres de Sopa"
        },
        {
            nomeDoingrediente: "Alho",
            quantidade: 2,
            medida: "Dentes"
        },
        {
            nomeDoingrediente: "Cebola",
            quantidade: 1,
            medida: "Und."
        },
        {
            nomeDoingrediente: "Tomate sem sementes",
            quantidade: 5,
            medida: "Und."
        },
        {
            nomeDoingrediente: "Sal e Pimenta-do-reino",
            quantidade: "",
            medida: "A gosto"
        },
        {
            nomeDoingrediente: "Creme de leite s/ soro",
            quantidade: 1,
            medida: "Lata"
        },
        {
            nomeDoingrediente: "Requeijão cremoso",
            quantidade: 300,
            medida: "g"
        },
        {
            nomeDoingrediente: "Moranga",
            quantidade: 1,
            medida: "Und."
        },
        {
            nomeDoingrediente: "Cheiro-verde",
            quantidade: "",
            medida: "A gosto"
        },
        {
            nomeDoingrediente: "Ketchup",
            quantidade: "3",
            medida: "Colheres de sopa"
        },
    ],
    modoDePreparo: ["Retire a tampa e as sementes da moranga.",
        "Lave e enrole-a em papel alumínio e leve ao forno médio (180° C) por 45 minutos.",
        "Em uma panela, aqueça o azeite e refogue o alho e a cebola, junte o camarão e deixe cozinhar por 5 minutos.",
        "Adicione os tomates picados, a pimenta, o sal e o ketchup.",
        "Desligue o fogo e acrescente o creme de leite e o cheiro-verde.",
        "Misture bem e adicione por último o requeijão.",
        "Passe um pouco de requeijão no interior da moranga e despeje o creme de camarão."],
};


//********************************************************************** */

receita2 = {
    nomeDoPrato: "Molho branco para macarrão",
    tempoDePreparo: 30,
    porcoes: 8,
    tipo: "Molho",
    jaFez: false,
    avaliacaoPessoal: 0,
    ingradientes: [
        {
            nomeDoingrediente: "Cebola pequena",
            quantidade: 1,
            medida: "Und."
        },
        {
            nomeDoingrediente: "Margarina",
            quantidade: 1,
            medida: "Colheres de Sopa"
        },
        {
            nomeDoingrediente: "Creme de leite",
            quantidade: 1,
            medida: "Caixa"
        },
        {
            nomeDoingrediente: "Leite",
            quantidade: 0.5,
            medida: "Litros"
        },
        {
            nomeDoingrediente: "Amido de milho",
            quantidade: 1,
            medida: "Colher de sopa"
        },
        {
            nomeDoingrediente: "Queijo parmesão ralado",
            quantidade: 1,
            medida: "Xícara"
        },
        {
            nomeDoingrediente: "Pimenta-do-reino",
            quantidade: "",
            medida: "A gosto"
        },
        {
            nomeDoingrediente: "Sal",
            quantidade: 1,
            medida: "Colher de sobremesa"
        },
    ],

    modoDePreparo: ["Em uma panela, derreta a margarina e acrescente a cebola, o sal e a pimenta-do-reino.",
        "Quando a cebola estiver bem transparente, acrescente o creme de leite e misture.",
        "Dissolva o amido no leite e adicione ao molho.",
        "Quando o molho estiver com uma consistência firme, desligue o fogo e acrescente o queijo, mexendo bem, para ele não grudar.",
        "Sirva com macarrão ou arroz de forno."],
};


receita3 = {
    nomeDoPrato: "Musse de limão",
    tempoDePreparo: 10,
    porcoes: 10,
    tipo: "Doces",
    jaFez: true,
    avaliacaoPessoal: 0,
    ingradientes: [
        {
            nomeDoingrediente: "Leite condensado",
            quantidade: 1,
            medida: "Lata"
        },
        {
            nomeDoingrediente: "Creme de Leite",
            quantidade: 1,
            medida: "Lata"
        },
        {
            nomeDoingrediente: "Suco de limão",
            quantidade: 0.5,
            medida: "Xícara"
        },
    ],
    modoDePreparo: ["Coloque no liquidificador o creme de leite (com soro mesmo) e o leite condensado.",
        "Bata um pouco e depois vá acrescentando o suco do limão, aos poucos.",
        "Ele vai ficar bem consistente, leve à geladeira."],
};

if(receita1.jaFez){
    receitas.push(receita1)
}else {
    alert(receita1.nomeDoPrato + " não adcionado ao livro pessoal de receita")
}
if(receita2.jaFez){
    receitas.push(receita2)
}else {
    alert(receita2.nomeDoPrato + " não adcionado ao livro pessoal de receita")
}
if (receita3.jaFez) {
    receitas.push(receita3)
} else {
    alert(receita3.nomeDoPrato + " não adcionado ao livro pessoal de receita")
}

const tamanhoIngredientes = receitas[0].ingradientes.length;
const tamanhoModoDePreparo = receitas[0].modoDePreparo.length;
const quantidadeDeReceitas = receitas.length;

// console.log(tamanhoIngredientes)
// console.log(tamanhoModoDePreparo);
let i = 0;
let numeroDeReceitas = 0;

while (numeroDeReceitas < quantidadeDeReceitas) {
    console.log(`Nome do prato: ${receitas[numeroDeReceitas].nomeDoPrato.toUpperCase()}
Tempo de preparo: ${receitas[numeroDeReceitas].tempoDePreparo} min
Porções ${receitas[numeroDeReceitas].porcoes}
Tipo de prato: ${receitas[numeroDeReceitas].tipo}
Já experimentou a receita?: ${receitas[numeroDeReceitas].jaFez}`);
    while (i < tamanhoIngredientes) {

        console.log(receitas[0].ingradientes[i].quantidade + " " + receitas[0].ingradientes[i].medida + " de " + receitas[0].ingradientes[i].nomeDoingrediente)
        i++
    }
    console.log("\nMODO DE PREPARO")
    i = 0;
    while (i < tamanhoModoDePreparo) {

        console.log((i + 1) + "-" + receitas[0].modoDePreparo[i])
        i++
    }
    numeroDeReceitas++;
}




// const mediaAvaliacaoPessoal = (avaliacaoPessoal1 + avaliacaoPessoal2 + avaliacaoPessoal3)/3;
// console.log(mediaAvaliacaoPessoal);
// const verificacaoSeJaFez = jaFez1 && jaFez2 && jaFez3;

// console.log(verificacaoSeJaFez);

// console.log(`Nome do prato: ${nomeDoPrato1.toUpperCase()}
// Tempo de preparo: ${tempoDePreparo1} min
// Porções ${porcoes1}
// Tipo de prato: ${tipo1}
// Já experimentou a receita?: ${jaFez1}`);
// console.log(ingradientes1);
// console.log("Modo de preparo:",modoDePreparo1);

// console.log(`Nome do prato: ${nomeDoPrato2.toUpperCase()}
// Tempo de preparo: ${tempoDePreparo2} min
// Porções ${porcoes2}
// Tipo de prato: ${tipo2}
// Já experimentou a receita?: ${jaFez2}`);
// console.log(ingradientes2);
// console.log("Modo de preparo:",modoDePreparo2);

// console.log(`Nome do prato: ${nomeDoPrato3.toUpperCase()}
// Tempo de preparo: ${tempoDePreparo3} min
// Porções ${porcoes3}
// Tipo de prato: ${tipo3}
// Já experimentou a receita?: ${jaFez3}`);
// console.log(ingradientes3);
// console.log("Modo de preparo:",modoDePreparo3);





// // nomeDoPrato3
// // tempoDePreparo3
// // porcoes3
// // tipo3
// // jaFez3
// // avaliacaoPessoal3
// // ingradientes3
// // modoDePreparo3










