//  Tela de listagem com título
 //Cabeçalho na página
 //Área principal com barra de pesquisa e botão
 //Espaço para lista dos itens
 //ao menos três itens listados
 //Itens listados utilizando manipulação do DOM
 //Rodapé na página com identificação
 //Barra de pesquisa com alerta se tentar pesquisar com campo em branco
 //Clique do botão executa busca entre os itens
 //Relatório impresso no console com as informações de cada item
 //Nome/título dos itens em letras maiúsculas
 //Média numérica calculada e impressa no console
 //Verificação de valores booleanos true impressa no console
// Utilização de Grid ou Flex para estilizar
// Atenção ao padrão de estilização enviado

//const nome = 

//const idade = 

//const Maioridade = 



/*
const nome1 = "joana"
const idade1 = 18
const Maioridade1 = true
const competencias1 = ["excel"]




const nome2 = "maria"
const idade2 = 17
const Maioridade2 = false
const competencias2 = ["programação"]



const nome3= "italo"
const idade3 = 19
const Maioridade3 = true
const competencias3 = ["ingles"]

const media = (idade1 + idade2 + idade3) / 3
console.log(media)

console.log(Maioridade1 && Maioridade2 && Maioridade3)
console.log(` nome:${nome1.toUpperCase()}\n idade:${idade1} \n MaiorDeIdade:${Maioridade1} \n Competencias:${competencias1}`)
console.log(` nome:${nome2.toUpperCase()}\n idade:${idade2} \n MaiorDeIdade:${Maioridade2} \n Competencias:${competencias2}`)
console.log(` nome:${nome3.toUpperCase()}\n idade:${idade3} \n MaiorDeIdade:${Maioridade3} \n Competencias:${competencias3}`) */

/*
objeto1 = {

nome1: "joana",
idade1: 18,
Maioridade1: true,
competencias1: ["excel"]
}

objeto2 = {
nome2: "maria",
idade2: 17,
Maioridade2: false,
competencias2: ["programação"]
}

objeto3 = {
nome3:"italo",
idade3:19,
Maioridade3:true,
competencias3: ["excel"]
    
}



const array = [] 
//array.push(objeto1,objeto2,objeto3)
//console.log(array)


if (objeto1.Maioridade1){ 
    array.push(objeto1)
}else alert('recusado')


if (objeto2.Maioridade2){
    array.push(objeto2)
}else alert('recusado')



if (objeto3.Maioridade3){
    array.push(objeto3)
}else alert('recusado')

console.log(array) 





  const objetos = [

 {

nome: "joana",
idade: 18,
Maioridade: true,
competencias: "excel"
},
{
nome: "maria",
idade: 17,
Maioridade: false,
competencias: "programação"
},
{
nome: "italo",
idade: 19,
Maioridade: true,
competencias: "excel"  
} 
  ]

*/


//Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.
/*const dadosObjeto = (objeto) => {
    let string = "";
    for (i in objeto) {
      string += ${i}:  ${objeto[i]}  ;
    } 
    return console.log(string);
  }; */

  objeto1 = {

    nome: "joana",
    idade: 18,
    Maioridade: true,
    competencias: ["excel"]
    }
    
    objeto2 = {
    nome: "maria",
    idade: 17,
    Maioridade: false,
    competencias: ["programação"]
    }
    
    objeto3 = {
    nome:"italo",
    idade:19,
    Maioridade:true,
    competencias: ["excel"]
        
    } 
    /*
const array = [] 
array.push(objeto1, objeto2, objeto3) 
console.log(array)
 
function recebeArray1 (array) {
let newArray = [...array]
for (obj in newArray){
    newArray[obj] = {...newArray[obj]}
}
for (i = 0; i< newArray.length;i++) {
let string = newArray[i].competencias.join()
newArray[i].competencias = string
}
return newArray
}

console.log(recebeArray1(array))



for(objeto of array){

    for (propriedade in objeto){

        console.log(`${propriedade}: ${objeto[propriedade]}`)

    }

console.log("----------------------");

} 
function devolveString() {


} 
const dadosObjeto = (obje) => {
    let string = "";
    for (i in obje) {
      string += `${i}:  ${obje[i]}  `   ;
    } 
    return console.log(string);
  }
  dadosObjeto(objeto1) 


  
function recebeArray(arrayDeObjetos, string) {
let novaArray = []
arrayDeObjetos.filter((titulo)=>{
if (titulo.nome === string){
    novaArray.push(titulo)
}
}
)


if (novaArray.length === 1){
    alert("um item foi encontrado")
}
else if (novaArray.length === 0) {
    alert("nenhum item foi encontrado")
}
return novaArray
}

console.log(recebeArray(array,""))  

*/

/*
const desempregados = [

    {
   
   nome: "joana",
   idade: 18,
   Maioridade: true,
   competencias: "excel"
   },
   {
   nome: "maria",
   idade: 17,
   Maioridade: false,
   competencias: "programação"
   },
   {
   nome: "italo",
   idade: 19,
   Maioridade: true,
   competencias: "excel"  
   } 
 ]
*/

objeto1 = {

  nome: "Joana",
  idade: 18,
  maioridade: true,
  competencias: ["excel"]
  }
  
  objeto2 = {
  nome: "Maria",
  idade: 17,
  maioridade: false,
 
  competencias: ["programação"]

  }
  
  objeto3 = {
  nome:"Italo",
  idade:19,
  maioridade:true,
 
  
  
  competencias: ["excel"]
      
  } 

 const inserePersonagem = (objeto) => {
  const novaSection = document.getElementById("container");
  const criarSection = document.createElement("section");
  const adcionaSection = novaSection.appendChild(criarSection);
  criarSection.classList.add("item");

  

  const novoUl = document.createElement("ul");
  const ul = adcionaSection.appendChild(novoUl);

  const novaLi1 = document.createElement("li");
  const li1 = novoUl.appendChild(novaLi1);
  const criarNovaA = document.createElement("a");
  const a = novaLi1.appendChild(criarNovaA);
  criarNovaA.setAttribute("target", "_blank");
  criarNovaA.setAttribute("href", objeto.link);
  criarNovaA.innerHTML = objeto.nome;

  const novaLi2 = document.createElement("li");
  const li2 = novoUl.appendChild(novaLi2);
  li2.innerHTML = "Idade: " + objeto.idade;

  const novaLi3 = document.createElement("li");
  const li3 = novoUl.appendChild(novaLi3);
  li3.innerHTML = "Maioridade: " + objeto.maioridade;

  const novaLi4 = document.createElement("li");
  const li4 = novoUl.appendChild(novaLi4);
  li4.innerHTML = "Competencias: " + objeto.competencias;
};

inserePersonagem(objeto1);
inserePersonagem(objeto2);
inserePersonagem(objeto3);


const textoInput = document.getElementById("nome")
const parametroDeBusca = document.getElementsByTagName('a')
const cards = document.querySelectorAll('.item')
const array = []

for (i in parametroDeBusca) {
    array.push(parametroDeBusca[i].innerText)
}

let array2 = array.filter ((itens) => itens !== undefined)
array2 = array2.map((itens) => itens.toLowerCase())

const busca = () => {
    const valorDoInput = textoInput.value.toLowerCase()
    cards.forEach((itens) => itens.classList.add("esconde-objetos"))
    for (i in cards) {
        if (array2[i] === valorDoInput) {
            cards[i].classList.remove("esconde-objetos")
        }
    }

    const limparBusca = () => {
        if (valorDoInput === ""){
            cards.forEach((itens) => itens.classList.remove("esconde-objetos"))
            alert("digite um nome")
        }
    }
    limparBusca()
}
