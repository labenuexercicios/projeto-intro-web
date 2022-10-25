//  SEMANA 1   
/*
const tipoRoupaAcademia1 = "calça-Leg"
const quantidade1 = 5 
const verificouMarca1 = false
const marca1 = ["adidas", "nike","sortidos"]

const tipoRoupaAcademia2 = "top"
const quantidade2 = 6 
const verificouMarca2 = true
const marca2 = ["adidas", "nike","sortidos"]   

const tipoRoupaAcademia3 = "short"
const quantidade3 = 3 
const verificouMarca3 = true
const marca3 = ["adidas", "nike","sortidos"]

const media = (quantidade1+quantidade2+quantidade3)/3  // Faça um cálculo de média, entre os valores numéricos respectivos de cada item. 
console.log("A média total de quantidade é:", media)   // Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;

const verificaMARCA = verificouMarca1 && verificouMarca2 && verificouMarca3   //imprima o resultado de uma operação lógica 
console.log("Verificou marca verdadeiro?", verificaMARCA)   //que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.


const copiaMarca1 = marca1.slice()       // criei os slices p mexer nos arrays de cópia, ñ nos originais
const copiaMarca2 = marca2.slice()       //neste caso eu mostro os arrays originais pq o projeto ñ pede,
const copiaMarca3 = marca3.slice()       //porém eu fiz a cópia p exibir os resultados pedidos.
//console.log("Copia do marca:", marca1)
//console.log("Copia do marca:", marca2)
//console.log("Copia do marca:", marca3)
console.log(tipoRoupaAcademia1.toUpperCase() + "\nQuantidade que deseja: "+quantidade1+" \nMarca desejada: "+verificouMarca1+" \nQual marca que pediu: "+copiaMarca1.splice(0,1)+" ") 
console.log("Marcas Existentes:", marca1)

console.log(tipoRoupaAcademia2.toUpperCase() + "\nQuantidade que deseja: "+quantidade2+" \nMarca desejada: "+verificouMarca2+" ") 
console.log("Marcas Existentes:", marca2)

console.log(tipoRoupaAcademia3.toUpperCase() + "\nQuantidade que deseja: "+quantidade3+" \nMarca desejada: "+verificouMarca3+" ") 
console.log("Marcas Existentes:", marca3)


/*  sobre a avariavel COPIA MARCA 1
tem que fazer uma copia para mostrar só um valor de marca, quando perguntar qual marcar escolheu
tem que mostrar só uma, ai chama a copia, pq vai excluir as outras com o slice
pq senão quando der um slice, ele modifica a variavel original e depois n mostra ela completa,
quando pedi p perguntar quais marcas existem
*/

// SEMANA 2


const tipoRoupaAcademia1 = {
    nome: "calça-Leg",
    quantidade: 5,
    verificouMarca: false,
    marca: ["adidas", "nike", "sortidos"]
}

const tipoRoupaAcademia2 = {
    nome: "top",
    quantidade: 6,
    verificouMarca: true,
    marca: ["adidas", "nike", "sortidos"]

}

const tipoRoupaAcademia3 = {
    nome: "short",
    quantidade: 3,
    verificouMarca: true,
    marca: ["adidas", "nike", "sortidos", "misunooooooooooo" ],

}


const guardarObjeto = []


if (tipoRoupaAcademia1.verificouMarca) {
    guardarObjeto.push(tipoRoupaAcademia1)
} else (alert("Marca não é confiável, por isso não pode ser adicionado"))

if (tipoRoupaAcademia2.verificouMarca) {
    guardarObjeto.push(tipoRoupaAcademia2)
} else //(alert("Marca não é confiável, por isso não pode ser adicionado"))

if (tipoRoupaAcademia3.verificouMarca) {
    guardarObjeto.push(tipoRoupaAcademia3)
} else //(alert("Marca não é confiável, por isso não pode ser adicionado"))

  console.log(guardarObjeto)

//SEMANA 3


for (i of guardarObjeto) {
    

    console.log(`
    ${i.nome.toUpperCase()} 
    Quantidade: ${i.quantidade} 
    Marcar desejada?: ${i.verificouMarca}
    Marcas disponíveis:${i.marca.join(",")} `)  //poderia usar tbm a função toString(), que faz a msm coisa que o join

}



for (i of guardarObjeto) {
    for (propriedade in i) {

console.log(`${propriedade}: ${i[propriedade]}`)

}

console.log("-------------")
}




const objetoString = (roupaFitness) => {
    const tipoLogo = "\n" + roupaFitness.nome.toUpperCase() + 
        "\n" + roupaFitness.quantidade +
        "\n" + roupaFitness.verificouMarca +
        "\n" + roupaFitness.marca + ""
    console.log("Devolvendo a string com os dados do objeto", tipoLogo)
}

objetoString(tipoRoupaAcademia1)



const objetoStringNome = (NomeRoupa, NomeMarca) => {
 //   const outroObjeto = NomeRoupa.filter((lista) => {
  //      return lista.nome === NomeMarca
  for (let i in NomeRoupa){
    if(NomeRoupa[i].nome===NomeMarca){
        return NomeRoupa[i]

    }
    }
   
    // return alert("Marca não encontrada")
    
 }
 console.log(objetoStringNome(guardarObjeto,"top"))



/* Da semana 5 abaixo*/

let searchTxt = document.getElementById("searchTxt")
let searchBtn = document.getElementById("searchBtn")
let section1 = document.getElementById("section1")
let section2 = document.getElementById("section2")
let section3 = document.getElementById("section3")
let section4 = document.getElementById("section4")

searchBtn.addEventListener("click", function(){
    const valorDigitado = searchTxt.value;
    if(valorDigitado === "leg" || valorDigitado === "LEG" ||valorDigitado === "Leg" ||valorDigitado === "calça" ||valorDigitado === "calca" ||valorDigitado === "CALÇA" ||valorDigitado === "CALCA" ||valorDigitado === "Calça" ||valorDigitado === "Calca" ||valorDigitado === "Legging" ||valorDigitado === "legging"){
    section2.style.display="none"    
    section3.style.display="none"    
    section4.style.display="none"   
    section1.style.display ="block"
    console.log(valorDigitado);
   
    section1.style.margin="0 auto"

    shortCarrinho1.style.display="none"
    shortCarrinho2.style.display="none"
    shortCarrinho3.style.display="none"
    shortCarrinho4.style.display="none"

    topCarrinho1.style.display="none"
    topCarrinho2.style.display="none"
    topCarrinho3.style.display="none"
    topCarrinho4.style.display="none"

    conjuntoCarrinho1.style.display="none"
    conjuntoCarrinho2.style.display="none"
    conjuntoCarrinho3.style.display="none"
    conjuntoCarrinho4.style.display="none"


    }
    
    if(valorDigitado === "short" || valorDigitado === "SHORT" ||valorDigitado === "Short"){
    section1.style.display="none"    
    section3.style.display="none"    
    section4.style.display="none"   
    section2.style.display ="block"

    section2.style.margin="0 auto"

    legCarrinho1.style.display="none"
    legCarrinho2.style.display="none"
    legCarrinho3.style.display="none"
    legCarrinho4.style.display="none"

    topCarrinho1.style.display="none"
    topCarrinho2.style.display="none"
    topCarrinho3.style.display="none"
    topCarrinho4.style.display="none"

    conjuntoCarrinho1.style.display="none"
    conjuntoCarrinho2.style.display="none"
    conjuntoCarrinho3.style.display="none"
    conjuntoCarrinho4.style.display="none"


    }
    if(valorDigitado === "top" || valorDigitado === "TOP" ||valorDigitado === "Top" ||valorDigitado === "cropped" ||valorDigitado === "CROPPED" ||valorDigitado === "Cropped" ){
    section1.style.display="none"    
    section2.style.display="none"    
    section4.style.display="none"   
    section3.style.display ="block"

    section3.style.margin="0 auto"

    
    legCarrinho1.style.display="none"
    legCarrinho2.style.display="none"
    legCarrinho3.style.display="none"
    legCarrinho4.style.display="none"

    shortCarrinho1.style.display="none"
    shortCarrinho2.style.display="none"
    shortCarrinho3.style.display="none"
    shortCarrinho4.style.display="none"

    conjuntoCarrinho1.style.display="none"
    conjuntoCarrinho2.style.display="none"
    conjuntoCarrinho3.style.display="none"
    conjuntoCarrinho4.style.display="none"


    }
    if(valorDigitado === "conjunto" || valorDigitado === "CONJUNTO" ||valorDigitado === "Conjunto"){
    section1.style.display="none"    
    section2.style.display="none"    
    section3.style.display="none"   
    section4.style.display ="block"

    section4.style.margin="0 auto"

    legCarrinho1.style.display="none"
    legCarrinho2.style.display="none"
    legCarrinho3.style.display="none"
    legCarrinho4.style.display="none"

    shortCarrinho1.style.display="none"
    shortCarrinho2.style.display="none"
    shortCarrinho3.style.display="none"
    shortCarrinho4.style.display="none"

    topCarrinho1.style.display="none"
    topCarrinho2.style.display="none"
    topCarrinho3.style.display="none"
    topCarrinho4.style.display="none"

    }
} )

 //área do carrinho

 let carrinho = document.querySelector(".carrinho")
 let notificacao = document.querySelector(".notificacao")
 
 let range = document.querySelector("#range")
 let valorNotificacao = document.querySelector("#valor")
 let coracao = document.querySelector("#coracao")
 let escolhas = document.querySelector(".escolhas")
 let comprar = document.querySelector(".comprando")
 let aumentarValor = document.querySelector("#aumentar")
 let diminuirValor = document.querySelector("#diminuir")
 let h2_preco = document.querySelector("#h2-preco")
 let quantidade = document.querySelector("#quantidade")
 
 
 
//  carrinho.addEventListener("click", function(){
//      escolhas.style.display = "block"
//      comprar.style.display = "block"
//  })
 
//  function adicionarCarrinho(){
//      notificacao.style.display = "block";
 
//  }
 
//  let arrayUmNum = [1,1]
//  aumentarValor.addEventListener("click", function(){
//      let dobrandoValor = input_valor.value;
//      let guardar = dobrandoValor * arrayUmNum.length
//      quantidade.innerHTML = guardar
//      valorNotificacao.innerHTML = arrayUmNum.length;
//      arrayUmNum.push(1)
//      let compararValor = 2;
//      if(arrayUmNum.length === compararValor){
//          diminuirValor.style.visibility = "visible"
//      }
//  })
//  diminuirValor.addEventListener("click", function(e){
//      let subtrair = -1;
//      arrayUmNum.pop(1)
//      let dobrandoValor = input_valor.value;
//      quantidade.innerHTML = dobrandoValor * arrayUmNum.length - input_valor.value;
//      valorNotificacao.innerHTML = arrayUmNum.length + subtrair;
//      let guardandoValorFinal = arrayUmNum.length + subtrair;
//      let compararValor = 1;
//      if(guardandoValorFinal < compararValor){
//          diminuirValor.style.visibility = "hidden"
//      }
//  })
 
 //chamando a função que adiciona os Legs
 let legCarrinho1= document.querySelector(".legCarrinho1")
 let legCarrinho2= document.querySelector(".legCarrinho2")
 let legCarrinho3= document.querySelector(".legCarrinho3")
 let legCarrinho4= document.querySelector(".legCarrinho4")
 
 function leg(){
     legCarrinho1.style.display="block"
     legCarrinho2.style.display="block"
     legCarrinho3.style.display="block"
     legCarrinho4.style.display="block"
     section1.style.display="none" 
     section2.style.display="none" 
     section3.style.display="none" 
     section4.style.display="none"  
 }
 //chamando a função que adiciona os shorts
 let shortCarrinho1= document.querySelector(".shortCarrinho1")
 let shortCarrinho2= document.querySelector(".shortCarrinho2")
 let shortCarrinho3= document.querySelector(".shortCarrinho3")
 let shortCarrinho4= document.querySelector(".shortCarrinho4")
 
 function short(){
     shortCarrinho1.style.display="block"
     shortCarrinho2.style.display="block"
     shortCarrinho3.style.display="block"
     shortCarrinho4.style.display="block"
     section1.style.display="none" 
     section2.style.display="none" 
     section3.style.display="none" 
     section4.style.display="none"  
 }
 //chamando a função que adiciona os tops
 let topCarrinho1= document.querySelector(".topCarrinho1")
 let topCarrinho2= document.querySelector(".topCarrinho2")
 let topCarrinho3= document.querySelector(".topCarrinho3")
 let topCarrinho4= document.querySelector(".topCarrinho4")
 
 function topCropped(){
     topCarrinho1.style.display="block"
     topCarrinho2.style.display="block"
     topCarrinho3.style.display="block"
     topCarrinho4.style.display="block"
     section1.style.display="none" 
     section2.style.display="none" 
     section3.style.display="none" 
     section4.style.display="none"  
 }
 //chamando a função que adiciona os conjuntos
 let conjuntoCarrinho1= document.querySelector(".conjuntoCarrinho1")
 let conjuntoCarrinho2= document.querySelector(".conjuntoCarrinho2")
 let conjuntoCarrinho3= document.querySelector(".conjuntoCarrinho3")
 let conjuntoCarrinho4= document.querySelector(".conjuntoCarrinho4")
 
 function conjunto(){
     conjuntoCarrinho1.style.display="block"
     conjuntoCarrinho2.style.display="block"
     conjuntoCarrinho3.style.display="block"
     conjuntoCarrinho4.style.display="block"
     section1.style.display="none" 
     section2.style.display="none" 
     section3.style.display="none" 
     section4.style.display="none"  
 }

 //Animação 10% de Desconto

 let textarea1 = document.querySelector("#pDoPreco")
 let header = document.querySelector("header")
 let input_valor = document.querySelector("#input-valor")
 let input_valor2 = document.querySelector("#input-valor2")
 

let count = [1];
setInterval(function(){
    nextColor()
}, 300)

function nextColor(){
    let mudarCor1=1
    let mudarCor2=2
    if(count.length === mudarCor1){
        textarea1.style.color=" #dc143c"
        textarea1.style.fontWeight="bold"
        textarea1.style.fontSize="20px"
        count.push(1)  //agora  o .lenght vai ser 2 então vai mudara cor 2 pq recebeu +1 e somou
    }else if(count.length === mudarCor2){
        textarea1.style.color="black"
        textarea1.style.fontSize="18px"
 
        count.pop(1)
    }
   
}

//carrinho
carrinho.addEventListener("click", function(){
    if(finalizandoCompra.style.display === "block"){
        header.style.height="20vh"
     finalizandoCompra.style.display="none"
     comprar.style.display = "none"
    }else{
            finalizandoCompra.style.display="block"
            header.style.height="50vh"
            comprar.style.display = "block"
    }
 })
 let segundoArrayComparar2 = [1]  //segundo array pq tem um array acima, para eu saber q tem outro array aqui em meu projeto a comparar
function chamando(){  
    let notificacao2 = document.querySelector(".notificacao2")
    notificacao2.style.display = "block";
    let compararSegundoArray2 = 2;
    if(segundoArrayComparar2.length === compararSegundoArray2){
        alert(`O carrinho já possue um item, finalize sua compra primeiro...
  CLICK no carrinho`)
    }else{
    notificacao2.style.display = "block";
    notificacao2.innerHTML = segundoArrayComparar2.length;
    segundoArrayComparar2.push(1)
    alert("Adicionado ao carrinho") 
    alert("Dê mais uma olhadinha nas novidades e Faça o seu cadastro ")
    }
}



/*TELA CADASTRO*/ 
function logar(){
    var login = document.getElementById("login").value;
    var senha= document.getElementById("senha").value;

    if(login ==="admin" || login ==="ADMIN" && senha ==="admin" || senha === "ADMIN"){
        alert("Cadastro realizado com sucesso")
        location.href= "login.html"
       
    }else{
        alert("Usuário ou senha incorreta")
    }
   }
/*TELA LOGIN*/ 
   function logar2(){
    var ID = document.getElementById("ID").value;
    var id= document.getElementById("id").value;

    if(ID ==="admin" || ID ==="ADMIN" && id ==="admin" || id === "ADMIN"){
        alert("Bem Vindo à Gym!")
        location.href= "../index.html"
       
    }else{
        alert("Usuário ou senha incorreta")
    }
   }


   