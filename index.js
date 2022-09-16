var presidentes = [{

nome: "Lula",
partido: "PT",
esquerda: true,
tempopoder: 8,
projetos: [ "bolsa família", "fome zero", "primeiro emprego"],
},{
 nome: "FHC",
 partido: "PSDB",
 esquerda: false,
 tempopoder: 8,
 projetos: ["Programa Auxílio-Gás", "Programa Nacional de Renda Mínima vinculada à Saúde","Cadastramento Único do Governo Federal"]},
{
nome: "dilmãe",
partido: "pt",
esquerda: true,
tempopoder: 6,
projetos: ["Mais Médicos","PAC2" ,"Programa Nacional de Acesso ao Ensino Técnico e Emprego",]
}]


//Condicinal e tratamento dados

var presidentesESQ = []
var presidentesESQ = presidentes.filter((presidentes) =>{
   if (presidentes.esquerda === true){
     return presidentes
   } else {
      alert(`${presidentes.nome} não foi adicionado`)
   }
 })




//funções

function media(){
    var soma = (presidentes[0].tempopoder + presidentes[1].tempopoder + presidentes[2].tempopoder)/3
    return soma //automatizar com laço
}

function truet(){
   var teste = (presidentes[0].esquerda && presidentes[1].esquerda && presidentes[2].esquerda)
   return teste //automatizar com laço
}



//console

console.log(presidentes)
console.log(media(presidentes))
console.log(presidentesESQ)
console.log(truet(presidentes))
