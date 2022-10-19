
//OBJETO + STRING + NUMBER + BOOLEAN + ARRAY

const praia1 = {
    praia: "Pitangueiras",
    anodeImplante: Number(2011),
    acessibilidade: true,
    diasdoAcontecimento: ["Quinta-feira", " sexta-feira", " sábado", "domingo"],
    foto:"pitangueirass.jpg",
   link:"https://www.deficienteciente.com.br/confira-a-acessibilidade-na-praia-pitangueiras-guaruja.html"

}

    

//Praia 2

const praia2 = {
    praia: "Boa Viagem",
    anodeImplante: 2013,
    acessibilidade: true,
    diasdoAcontecimento: ["Segunda a domingo"],
    foto:"boa.png",
    link: "https://poraqui.app.br/boa-viagem/precisamos-falar-sobre-acessibilidade-na-praia-de-boa-viagem-vvdcng/"
}


// Praia3
const praia3 = {
    praia: "Camburi",
    anodeImplante: 2017,
    acessibilidade: true,
    diasdoAcontecimento: ["Quinta-feira", " sexta-feira", " sábado", " domingo" ],
    foto: "camburi.jpg",
    link: "https://m.vitoria.es.gov.br/noticia/praia-acessivel-passa-a-funcionar-definitivamente-em-camburi-22023"
}







//CALCULAR MÉDIA
const mediaTodos = ( praia1.anodeImplante + praia2.anodeImplante + praia3.anodeImplante) / 3
console.log("Média =", mediaTodos) 





//Exercicio 1.6 - Alternando o nome, titulo em maiusculo
praia1.praia = praia1.praia.toLocaleUpperCase()
praia2.praia = praia2.praia.toLocaleUpperCase()
praia3.praia = praia3.praia.toLocaleUpperCase()

//Novo Array vazio para armazenar todos os objetos (praia1, praia2 e praia3) criados até aqui
const praias = []

//Condicional para incluir na nova lista somente as praias classificados como  (boolean) dos objetos

  
if (praia1.acessibilidade === true) {
    praias.push(praia1)
  
} else {
    alert("A praia Pitangueiras não foi adicionado")
  
}
if (praia2.acessibilidade === true) {
    praias.push(praia2)
   
} else {
    alert("A praia Boa Viagem não foi adicionado")
   
}
if (praia3.acessibilidade === true) {
    praias.push(praia3)
   
} else {
    alert("A praia Camburi não foi adicionado")
   
}
//SEMANA 3
//Exercicio 1 - Retaforação
   
const alterarArray= (array)=>{
    let novoarray= [...array]
    for(objeto in novoarray){
         novoarray[objeto] = {...novoarray[objeto] }
    
    }
    for(i=0; i<novoarray.length; i++){
        let string = novoarray[i].diasdoAcontecimento.toString();
        novoarray[i].diasdoAcontecimento=string
    }
     

return novoarray
 }
 console.log("item 1:", alterarArray(praias))


//Exercicio 2 - Novo relatório criado utilizando laço
console.log("item 2:")

     for(i of praias){
        for(prai in i){
            console.log( `${prai}: ${i[prai]}`)
        }
        console.log("----------------------");
   }
//Exercicio 3 - Função que receba como parametro um objeto e devolva a string
console.log("item 3:")
 const funcaoObjeto = (objeto) =>{
    for(i of praias){  
        for(objeto in i){
            console.log(`${objeto}: ${i[objeto]}`)
            // console.log("---------------------")
        }
 } 

  
}
funcaoObjeto(praias)
   
// //Exercicio 4 - Função para buscar uma praia de acordo com o nome que o usuário digitar

// function objetoString(array, string){
//     for(objeto of array){ 
//     if (objeto.praia ===string){
//         return objeto
//     } 
// }
//   return alert(`o ${objeto} não foi encontrado `)
// }

// const praia= objetoString(praias, prompt("Digite o nome de uma praia para conferir  àcessibilidade a PCDs").toUpperCase().trim())
// console.log( "item 4", praia)





const lista = document.querySelector(".main")
praias.filter(praiaa =>{
    function listarpraias(){
        lista.innerHTML += `<div class="mae">
        <div class="mae3">
        <a href="${praiaa.link} "target="_blank"><img src="./Imags/${praiaa.foto} "width="1200px"></a>
        <p class="a1"><strong><strong>Praia: </strong ><a  id="classeA"  href="${praiaa.link} "target="_blank">${praiaa.praia}</a></strong></p>
        <p><strong>Ano de implante: </strong>${praiaa.anodeImplante}</p>
        <p><strong>Acessibilidade: </strong>${praiaa.acessibilidade}</p>
        <p class="a"><strong>Dias: </strong>${praiaa.diasdoAcontecimento}</p>
        
      
        </div>
    </div>`
    }
    listarpraias()
})

function buscaDaPraia(event){
    event.preventDefault()
    let novaLista = document.getElementById('id-main')
    let nomePraia = document.getElementById('id-type').value.toLocaleUpperCase()
    for(let i=0;i<praias.length;i++){
    if(nomePraia === praias[i].praia){
        return (novaLista.innerHTML =`<div class="mae">
        <div class="mae3">
        <a href="${praias[i].link} "target="_blank"><img src="./Imags/${praias[i].foto} "width="1200px"></a>
        <p class="a1"><strong><strong>Praia: </strong ><a  id="classeA"  href="${praias[i].link} "target="_blank">${praias[i].praia}</a></strong></p>
        <p><strong>Ano de implante: </strong>${praias[i].anodeImplante}</p>
        <p><strong>Acessibilidade: </strong>${praias[i].acessibilidade}</p>
        <p class="a"><strong>Dias: </strong>${praias[i].diasdoAcontecimento}</p>
        
      
        </div>
    </div>`)
    
    
     }

    }

    alert("Nenhuma praia foi encontrada, digite novamente!");
    document.getElementById('id-type').value = "";
    return;
}


buscaDaPraia()
