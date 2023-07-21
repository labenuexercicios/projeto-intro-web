// //PROJETO LABENU WEB - SEMANA 1


// //CRIANDO VARIÁVEIS

// const id="001"; //STRING
// const name="Garrafa Térmica";//STRING
// const price=30.00;//NUMBER
// const descripition="conserva por até 10h quente ou frio."//STRING
// const image="https://example.image.png";//STRING
// const isNew=true;//BOOLEANO


// const id1="002";
// const name1="Taça de vinho";
// const price1=42.00;
// const descripition1="Cristal diamantino"
// const image1="https://example.taca.png";
// const isNew1=true;

// const id2="003";
// const name2="Tabua de mesa";
// const price2=8.00;
// const descr2ipition="Resistente e douradoura."
// const image2="https://example.tabua.png";
// const isNew2=true;


// console.log('projeto web labenu');
// console.log('======================================================================');


// const mdPrice= price1+price+price2 /3;//CONST QUE GUARDA O VALOR MEDIO DOS ITENS

// console.log(`O Valor médio dos itens vendidos é ${mdPrice.toFixed(2)}.` );//IMPRIME NO CONSOLE E FIXA AS CASAS DECIMAIS EM DUAS APÓS O PONTO

// let isTrue= isNew && isNew1 && isNew2//COMPARAÇÃO
// console.log(`O itens são todos novos?`,isTrue=true?'Sim' : 'Não');//IF TERNARIO PARA INFORMAR EM STRING O RESULTADO DA COMPARAÇÃO. 

// console.log('======================================================================');
// console.log('Projeto Labenu Semana 2');
// console.log('======================================================================');
// //implementando e manipulando array
// const id="001"; //STRING
// const name="Garrafa Térmica";//STRING
// const price=30.00;//NUMBER
// const descripition="Conserva por até 10h quente ou frio."//STRING
// const image="https://example.image.png";//STRING
// const isNew=true;//BOOLEANO
// const 
// =[2018,"MODEL-2505","PRETO"]//array contendo string e number


// const id1="002";
// const name1="Taça de vinho";
// const price1=42.00;
// const descripition1="Cristal diamantino"
// const image1="https://example.taca.png";
// const isNew1=true;
// const features1=[2016,"CLEAN","INCOLOR"]

// const id2="003";
// const name2="Tabua de mesa";
// const price2=8.00;
// const descreipition2="Resistente e douradoura."
// const image2="https://example.tabua.png";
// const isNew2=true;
// const features2=[ 2018 , " VINTAGE", " BRANCO"]


// console.log(`Id:${id}\nName: ${name.toUpperCase()}\nPrice: ${price}\nDescripition: ${descripition}\nImage:${image}\nIsNew?${isNew}\nFeatures: ${features}`);
// console.log(`Id:${id1}\nName: ${name1.toUpperCase()}\nPrice: ${price1}\nDescripition: ${descripition1}\nImage:${image1}\nIsNew?${isNew1}\nFeatures: ${features1}`);
// console.log(`Id:${id2}\nName: ${name2.toUpperCase()}\nPrice: ${price2}\nDescripition: ${descr2ipition2}\nImage:${image2}\nIsNew?${isNew2}\nFeatures: ${features2}`);


console.log('======================================================================');
console.log('Projeto Labenu Semana 3, 4 e 5');
console.log('======================================================================');

//criação de objetos e uso do push

prod1={//criação de objetos
    id:"001",
    name: "Garrafa Térmica",
    price: 30.00,
    description:"Conserva por até 10h quente ou frio.",
    image:"https://example.image.png",
    isNew:true,
    features:[2018,"MODEL-2505","PRETO"]

}

prod2={
    id:"002",
    name: "Taça de vinho",
    price: 42.00,
    description:"Cristal diamantino.",
    image:"https://example.taca.png",
    isNew:true,
    features:[2018 , " Clean", " incolor"]

}

prod3={
    id:"003",
    name: "Tabua de mesa",
    price: 8.00,
    description:"Resistente e douradoura.",
    image:"https://example.tabua.png",
    isNew:true,
    features:[2018," Vintage"," Branco"]

}

const products=[]//novo array vazio


// products.push(prod1,prod2,prod3)//objetos incluidos no array através do metodo push

if (prod1.isNew) {
    products.push(prod1);
  } else {
    alert(`${prod1.name}não foi adicionado ao carrinho`);
  }
  
  if (prod2.isNew) {
    products.push(prod2);
  } else {
    alert(`${prod2.name} não foi adicionado ao carrinho`);
  }
  
  if (prod3.isNew) {
    products.push(prod3);
  } else {
    alert(`${prod3.name}não foi adicionado ao carrinho`);
  }
  

  
  

console.log(products);//log de todos os objetos agora presentes em no array de produtos. 
// for of utilizado para interear array
for(item of products){//para cada item em propriedade...
  for (propriedade in item){//para cada propriedade em item...
      console.log(`${propriedade}: ${item[propriedade]}`)//imprima propriedade e valor do item. 
  }
console.log("----------------------");
}

console.log("----------------------");


function printObject(objeto) {//função que intera no objeto e o imprime em string
  
  for (let chave in objeto) {//a variavel criada (chave) vai percorrer o objeto(que sera o parametro passado na chamada da função) s
     {
       console.log(`${chave}: ${objeto[chave]}\n`); //log da impressão. 
    }
  }
  
}


printObject(prod1)


console.log("----------------------");


function printObjectArray(array,string){
  // /for of utilizado para interear array
  for(array of products){//para cada item em produtos...
    if(array.name===string)//verifica se a string passada como paramento está presente no objeto. 
    for (propriedade in array){//para cada propriedade em item...for in para interrar no objeto
        console.log(`${propriedade}: ${array[propriedade]}`)//imprima propriedade e valor do item. 
    }
  
  }

  console.log("----------------------");
}


printObjectArray(products,'Taça de vinho')

//conclusão da semana 6 do projeto.