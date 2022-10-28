//Proejto Intro Webb - semana 1
//1
const receitas = ["Strogonof", "Lasanha", "Vegetariano"]
const quantidadeIngredientes = [12, 7, 9]
const ehvegetariana = false

//2
let receita1 = "Strogonoff"
let quantitadeIngredientes1 = 12
let ehvegetariana1 = false

let receita2 = "Lasanha"
let quantitadeIngredientes2 = 7
let ehvegetariana2 = false

let receita3 = "Vegetariano"
let quantidadeIngredientes3 = 9
let ehvegetariana3 = true

//3
const soma1 = quantitadeIngredientes1 + quantitadeIngredientes2 + quantidadeIngredientes3
const media = soma1 / 3
console.log(media)

//4
const verificaEhvegetariana = ehvegetariana1 && ehvegetariana2 && ehvegetariana3
console.log(verificaEhvegetariana)

// 5
const arrayDeString = [`Projeto Intro Webb - Priemria Semana`]

//6
let nomeMaiusculo = receita1.toUpperCase()

console.log(`${nomeMaiusculo} \nQuantidade de ingredientes: ${quantitadeIngredientes1} \nÉ vegetariana? ${ehvegetariana1}\n${arrayDeString}`)

//Proejto Intro Webb - Semana 2


//1
receita1 = {
    nome: "Strogonof",
    ingredientes:6,
    vegetariano: false
}

receita2 = {
    nome: "Lasanha",
    ingredientes: 4,
    vegetariano: false
}

receita3 = {
    nome: "Vegetariano",
    ingredientes: 5,
    vegetariano: true
}

//2
const receita = []
/* console.log("receita", receita) */

//3
receitas.push(receita1, receita2, receita3)

//4
if(receita1 === receita2 === receita3){
    console.log(receita.push(receita1, receita2, receita3))
} else{
   /*  alert("O item nao foi adicionado") */
}


//1
for(i = 0; i < receitas.length; i++){
    console.log(receitas[i])
}

//2
for(nome in receita1){
    console.log(receita1.nome);
}

//3

function recebeObjeto(receitas){
    console.log(`${receitas}`)
    return receitas
}
recebeObjeto(receita2.nome)

//4



/* REFAZER SEMANA 4 */
/* let pesquisa = Number(0)
function recebeObjetosStrings(receita, stringFunction)
{
    pesquisa += 0
    for(i=0; i<receita.length; i++) 
    {    
        if(receita[i]. receita1 === stringFunction)
        {
            pesquisa = Number(1)
            console.log("o resultado da pesquisa foi: ", receita[i])

        }
    }
    if(pesquisa !== 1)
    {
    return alert("ALERT item não encontrado")
    } */


/* let frase = prompt("digite algo")
recebeObjetosStrings(receita, frase) */

//Proejto Intro Webb - Semana 4


let arrayDeReceitas = [

    {nome:"Strogonoff de Carne", ingredientes: "500 gramas de carne, 1 pitada de pimenta-do-reino, 3 colheres (sopa) de manteiga, meia cebola, 1 tablete de MAGGI Caldo Carne, 4 colheres (sopa) de água fervente, meia xícara (chá) de conhaque, 200 g de champignons em conserva fatiados, 3 colheres (sopa) de purê de tomate, 1 colher (sopa) de mostarda, 2 colheres (sopa) de ketchup, 1 lata Creme de Leite",
    
    },
    
    {nome:"Risoto vegetariano", ingredientes: "4 xícaras (chá) de água, 2 tabletes de Caldo Legumes, 3 colheres (sopa) de manteiga, 1 xícara (chá) de arroz integral tipo agulinha, 2 colheres (sopa) de semente de linhaça, 1 pitada de açafrão, 1 cenoura em cubos, 1 xícara (chá) de brócolis aferventados, 1 caixa de creme de leite"
    
    }
]
function userInput() {
    let digitado = document.getElementById('user-input').value;
  
    let container = document.getElementById('receitas');
  
    container.innerHTML = '';
    let receitasEscolhidas = receitas.filter(
      receita => receita.name.toLowerCase().includes(digitado.toLowerCase())
    );
  
    for (let receita of receitasEscolhidas) {
      container.innerHTML += `<div> ${receita.name} </div>`;
    }
  }