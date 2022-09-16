/* 
nome do prato "String"
Tempo de preparo Number
Porcoes Number
Ja fez? Boolean
Tipo String
Avaliação pessoal Number
ingredientes Array de Object
Modo de preparo Array

*/
const todasAsReceitas = [];
const receitasProcuradas = [];

receita1 = {
    nomeDoPrato: "Camarão na Moranga",
    tempoDePreparo: 90,
    porcoes: 6,
    tipo: "Frutos do mar",
    jaFez: true,
    avaliacaoPessoal: 4.5,
    ingredientes: [
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
receita2 = {
    nomeDoPrato: "Molho branco",
    tempoDePreparo: 30,
    porcoes: 8,
    tipo: "Molho",
    jaFez: true,
    avaliacaoPessoal: 0,
    ingredientes: [
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
    ingredientes: [
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



if (receita1.jaFez) {
    todasAsReceitas.push(receita1)
} else {
    alert(receita1.nomeDoPrato + " não adcionado ao livro pessoal de receita")
}
if (receita2.jaFez) {
    todasAsReceitas.push(receita2)
} else {
    alert(receita2.nomeDoPrato + " não adcionado ao livro pessoal de receita")
}


if (receita3.jaFez) {
    todasAsReceitas.push(receita3)
} else {
    alert(receita3.nomeDoPrato + " não adcionado ao livro pessoal de receita")
}




console.log(todasAsReceitas );

//console.log(todasAsReceitas)
//************************************Print Objetos das receitas Procuradas***************** */
for (let a in todasAsReceitas){
    todasAsReceitas[a].nomeDoPrato = todasAsReceitas[a].nomeDoPrato.toUpperCase();
    console.log(`Nome do prato: ${todasAsReceitas[a].nomeDoPrato}
Tempo de preparo: ${todasAsReceitas[a].tempoDePreparo} min
Porções ${todasAsReceitas[a].porcoes}
Tipo de prato: ${todasAsReceitas[a].tipo}
Já experimentou a receita?: ${todasAsReceitas[a].jaFez}`);
    // for(let b in todasAsReceitas[a].ingredientes){
    //     console.log(todasAsReceitas[a].ingredientes[b].quantidade + " " + todasAsReceitas[a].ingredientes[b].medida + " de " + todasAsReceitas[a].ingredientes[b].nomeDoingrediente)
    // }
    console.log("\nMODO DE PREPARO")
    for(let i in todasAsReceitas[a].modoDePreparo){
        console.log((Number(i) + 1) + "-" + todasAsReceitas[a].modoDePreparo[i])
        todasAsReceitas[a].stringModoDePreparo = todasAsReceitas[a].modoDePreparo.join()
        console.log(todasAsReceitas[a].stringModoDePreparo);
    }   

}



function devolvendoString (objeto){
    let stringDoObjeto = ""
    const arrayObjeto = []
    for(let i in objeto){
        arrayObjeto.push(objeto[i])
    }
    stringDoObjeto = arrayObjeto.join() 
  //  console.log(stringDoObjeto )
    return stringDoObjeto;

}


devolvendoString (receita1)

function procuraDeReceita(receitaObjeto, qualreceita){
    console.log(receitaObjeto);
    for(let i in receitaObjeto){
        console.log(receitaObjeto[i].nomeDoPrato);
        console.log(i);
        console.log(qualreceita);
        if(receitaObjeto[i].nomeDoPrato === qualreceita)
        {
            return receitaObjeto[i]

        }
    }
    alert('Receita não encontrada')
    return "Receita não encontrada";
}

const receitaProcurada = prompt('Digite qual receita q vc quer').toUpperCase();

console.log(procuraDeReceita(todasAsReceitas, receitaProcurada));



// function parametrosDaReceita(objeto)
// {
//     for (let i in objeto){
//         console.log(objeto[i]);
//     }
// }

//  parametrosDaReceita(receita1)
 
// for(let i in todasAsReceitas){
//     console.log( todasAsReceitas[i].nomeDoPrato );
//     }

// function checkReceita (arrayObjetos , string, funcao){ 
//     const arrayReceita = []
//     let stringObjeto =""
//     for(let i in arrayObjetos){
//         for(let j in arrayObjetos[i] ){
//             //console.log("AAAA"+ arrayObjetos[i][j] );
//             stringObjeto += arrayObjetos[i][j]
//            // console.log( stringObjeto );
//             if(stringObjeto.includes(string)){
                
//                 arrayReceita.push(arrayObjetos[i])
                
//             }
//         }
//     }
//     if (arrayReceita.length === 0)
//     {
//         alert('receita não encontrada')
//     }
//     return arrayReceita

//     // const mapDosObjetos = arrayObjetos.map((valor) => valor.nomeDoPrato)
//     // const filtroObjeto = mapDosObjetos.filter((nome) => string === nome )   
    

//     // return filtroObjeto
// }

// const receitaProcurada = "Musse de limão"//prompt("Que receita voçê quer?")

// console.log(checkReceita(todasAsReceitas, receitaProcurada))








