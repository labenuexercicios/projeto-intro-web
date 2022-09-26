var presidentes = [{

nome:"LULA",
partido: "PT",
esquerda: true,
tempopoder: 8,
projetos: ["bolsa família", "fome zero", "primeiro emprego"]
},{
 nome:"FHC",
 partido: "PSDB",
 esquerda: false,
 tempopoder: 8,
 projetos: ["Programa Auxílio-Gás", "Programa Nacional de Renda Mínima vinculada à Saúde", "Cadastramento Único do Governo Federal"]},
{
nome:"DILMA",
partido: "PT",
esquerda: true,
tempopoder: 6,
projetos: ["Mais Médicos","PAC2", "Programa Nacional de Acesso ao Ensino Técnico e Emprego"]
}]

//adicionar ao objeto

var presidentes1 = [{
   nome:"COLLOR",
   partido:"PTB",
   esquerda: false,
   tempopoder: 2,
}]

presidentes.push(presidentes1[0])


//transformar string

//precisa tirar o primeiro valor 

for ( let i in presidentes){
   let proje
   for (let x in presidentes[i].projetos){
      proje += presidentes[i].projetos[x] + `,`
   }
   presidentes[i].projetos = proje
}


//Condicinal e tratamento dados

var presidentesESQ = []
var presidentesESQ = presidentes.filter((presidentes) =>{
   if (presidentes.esquerda === true){
     return presidentes
   } else {
      alert(`${presidentes.nome} não foi adicionado aos presidentes de esquerda`)
      console.log(`${presidentes.nome} não foi adicionado aos presidentes de esquerda`)
   }
 })

var presidentesDIR = []
var presidentesDIR = presidentes.filter((presidentes) =>{
   if (presidentes.esquerda === false){
     return presidentes
   } else {
      alert(`${presidentes.nome} não foi adicionado aos presidentes de direita`)
      console.log(`${presidentes.nome} não foi adicionado aos presidentes de direita` )
   }
 })

//funções

function Nomecanditado(nome){
   for(let i in presidentes){
   if(nome == presidentes[i].nome){
      alert(`${nome} é um canditado válido`)
      return presidentes[i]
   } if (nome !== presidentes[i].nome){
      alert(`Não encontrado`)
   }}}//achar uma solução para resolver a questão da resposta.*/





function media(){
    var soma = (presidentes[0].tempopoder + presidentes[1].tempopoder + presidentes[2].tempopoder+presidentes[3].tempopoder)/4
    return soma //automatizar com laço
}

function truet(){
   var teste = (presidentes[0].esquerda && presidentes[1].esquerda && presidentes[2].esquerda && presidentes[3].esquerda)
   return teste //automatizar com laço
}

/*
function Nomecanditado(nome){
   const filtraPresidente = presidentes.filter((nome)=>{
   if (presidentes.nome === nome){
      alert(`${nome} foi presidente`)
   } else if  (presidentes.nome !== nome){
      alert(`${nome} não é válido`)
   }
})
}
*/   

//console
for (let i in presidentes){
   console.log(presidentes[i])
}

console.log(presidentes)
console.log(media(presidentes))
console.log(presidentesDIR)
console.log(presidentesESQ)
console.log(truet(presidentes))
var nome = prompt("qual o nome do canditado?").toLocaleUpperCase()
console.log(Nomecanditado(nome))



console.log(presidentes.length)